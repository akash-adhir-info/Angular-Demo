import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { AdminComponent } from './components/admin/admin.component';
import { ControlFlowComponent } from './components/control-flow/control-flow.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { GetApiComponent } from './components/get-api/get-api.component';
import { VideosComponent } from './components/videos/videos.component';

export const routes: Routes = [
    {
        path:"user-page",
        component:UserComponent
    },
    {
        path:"admin",
        component:AdminComponent
    },
    {
        path:"dataBinding",
        component:DataBindingComponent
    },
    {
        path:"control-flow",
        component:ControlFlowComponent
    },
    {
        path:"get-Api",
        component:GetApiComponent
    },
    {
        path:"videos",
        component:VideosComponent
    }
];
