import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BigCardComponent } from './components/big-card/big-card.component';
import { SmallCardComponent } from './components/small-card/small-card.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuBarLinksComponent } from './components/menu-bar/menu-bar-links/menu-bar-links.component';
import { MenuBarUserComponent } from './components/menu-bar/menu-bar-user/menu-bar-user.component';
import { gameStoreApi } from '../data/gameStoreApi';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    SideBarComponent,
    BigCardComponent,
    SmallCardComponent,
    HomeComponent,
    MenuBarLinksComponent,
    MenuBarUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
