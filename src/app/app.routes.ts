import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { UserlistComponent } from './components/userlist/userlist.component';
import { NewuserComponent } from './components/newuser/newuser.component';

export const routes: Routes = [
    {path:'',redirectTo:'login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'',component:LayoutComponent,
        children:[
            {path:'userlist',component:UserlistComponent},
            {path:'newuser',component:NewuserComponent}
        ]
    }
];
