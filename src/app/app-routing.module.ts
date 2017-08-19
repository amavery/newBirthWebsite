import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {MainComponent} from "./views/main/main.component";
import {WhatToExpectComponent} from "./views/what-to-expect/what-to-expect.component";
import {GetInvolvedComponent} from "./views/get-involved/get-involved.component";
import {MediaComponent} from "./views/media/media.component";
import {AboutUsComponent} from "./views/about-us/about-us.component";
import {PageNotFoundComponent} from "./views/page-not-found/page-not-found.component";

const appRoutes: Routes = [
  { path: 'home', component: MainComponent },
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
  { path: 'what-to-expect', component: WhatToExpectComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'get-involved', component: GetInvolvedComponent },
  { path: 'media', component: MediaComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
