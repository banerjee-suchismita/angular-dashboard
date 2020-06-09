import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { LinksService } from './links-data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SafePipeModule } from 'safe-pipe';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    SafePipeModule
  ],
  providers: [LinksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
