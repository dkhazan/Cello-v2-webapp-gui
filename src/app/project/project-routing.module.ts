import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectPage } from './project.page';
import { ResultsGuard } from '../results.guard';

const routes: Routes = [
    {
        path: '',
        component: ProjectPage,
        children: [
            {
                path: 'library',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../library/library.module').then(m => m.LibraryPageModule)
                    }
                ]
            },
            {
                path: 'design',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../design/design.module').then(m => m.DesignPageModule)
                    }
                ]
            },
            {
                path: 'settings',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../settings/settings.module').then(m => m.SettingsPageModule)
                    }
                ]
            },
            {
                path: 'results',
                children: [
                    {
                        path: '',
                        loadChildren: () =>
                            import('../results/results.module').then(m => m.ResultsPageModule),
                        canActivate: [ResultsGuard]
                    }
                ]
            },
            {
                path: '',
                redirectTo: '/project/library',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/project/library',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectPageRoutingModule { }
