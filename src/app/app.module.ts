import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainItemGridComponent } from './main-item-grid/main-item-grid.component'; 
import { MatGridListModule } from '@angular/material/grid-list';
import { MainTopToolbarComponent } from './main-top-toolbar/main-top-toolbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LeftMenuComponent } from './left-menu/left-menu.component';
import { MatButtonModule } from '@angular/material/button';
import { DemoMaterialModule } from './material-module';
import { CentralContainerComponent } from './central-container/central-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MainItemGridComponent,
    MainTopToolbarComponent,
    LeftMenuComponent,
    CentralContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSidenavModule,
    MatGridListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    DemoMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
