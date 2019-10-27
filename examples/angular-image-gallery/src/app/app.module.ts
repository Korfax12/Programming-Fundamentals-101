import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GalleryComponentComponent} from './gallery-component/gallery-component.component';
import {ListingComponentComponent} from './listing-component/listing-component.component';
import {SingleImageViewComponentComponent} from './single-image-view-component/single-image-view-component.component';
import {RandomFactsComponent} from './random-facts/random-facts.component';

@NgModule({
    declarations: [
        AppComponent,
        GalleryComponentComponent,
        ListingComponentComponent,
        SingleImageViewComponentComponent,
        RandomFactsComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
