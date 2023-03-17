import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from "./components/layout/layout.component";
import { LoginComponent } from "./components/login/login.component";
import { OverviewComponent } from "./components/overview/overview.component";
import { AuthGuard } from "./services/auth.guard";
import { LoginGuard } from "./services/login.guard";

export enum RoutingPathName {
    OVERVIEW = "overview"
}

const routes: Routes = [
    {
        path: '', component: LoginComponent, canActivate: [LoginGuard],
    },
    {
        path: '',
        canActivate: [AuthGuard],
        component: LayoutComponent,
        children: [
            { path: RoutingPathName.OVERVIEW, component: OverviewComponent, canActivate: [AuthGuard] },
        ]
    },
    { path: '**', redirectTo: RoutingPathName.OVERVIEW, pathMatch: 'full' },
]

@NgModule({
    imports: [RouterModule.forRoot(routes, {
    })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
