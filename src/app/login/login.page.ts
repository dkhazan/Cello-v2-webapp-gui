import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from "@angular/router";
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { HttpResponse } from '@angular/common/http';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public form: FormGroup;

    constructor(
        public api: ApiService,
        private router: Router,
        private formBuilder: FormBuilder,
    ) {
        this.form = this.formBuilder.group({
            username: new FormControl(null, Validators.compose([
                Validators.required,
                Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
            ])),
            password: new FormControl(null, Validators.required)
        });
    }

    ngOnInit() {
    }

    login() {
        this.api.login(this.form.value).subscribe((result: HttpResponse<any>) => {
            const token = result.headers.get('Authorization');
            this.api.setLoginInfo(token);
            this.router.navigateByUrl("projects");
        }, (error) => {
        });
    }

}
