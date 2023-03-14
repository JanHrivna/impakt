import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./components/layout/layout.component";
import { LoginComponent } from "./components/login/login.component";
import { OverviewComponent } from "./components/overview/overview.component";
import { AuthGuard } from "./services/auth.guard";

const routes: Routes = [
    {
        path: '', component: LoginComponent
    },
    {
        path: '',
        canActivate: [AuthGuard],
        component: LayoutComponent,
        children: [
            { path: 'overview', component: OverviewComponent, canActivate: [AuthGuard] },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
