import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerilogComponent } from './verilog.component';

describe('VerilogComponent', () => {
  let component: VerilogComponent;
  let fixture: ComponentFixture<VerilogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerilogComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerilogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
