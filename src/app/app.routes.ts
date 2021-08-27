import { Routes } from "@angular/router";
import { UserprofileComponent } from "./userprofile/userprofile.component";
import { SignupComponent } from "./signup/signup.component";

const ROUTES: Routes = [
    {
        path: 'sign-up',
        component: SignupComponent
    },
    {
        path:'**',
        component: UserprofileComponent
    },
];

export { ROUTES };
