import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FrontRouteRoutingModule } from './front-route/front-route-routing.module';
import { TooltipComponent } from './tooltip/tooltip.component';
import { FrontRouteModule } from './front-route/front-route.module';
import { TooltipPopupComponent } from './tooltip-popup/tooltip-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    TooltipComponent,
    TooltipPopupComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    FrontRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
