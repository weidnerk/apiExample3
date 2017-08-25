import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { MockBackend, MockConnection } from '@angular/http/testing';
import { fakeBackendProvider } from './_helpers/fake-backend';
import { BaseRequestOptions } from '@angular/http';


import { AppComponent }  from './app.component';
import { ProductListComponent }  from './product-list.component';

import { ProductService }  from './product.service';
import { FactoryComponent }  from './shared/factory.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, ProductListComponent, FactoryComponent ],
  providers: [ ProductService,
  
        // providers used to create fake backend
        // fakeBackendProvider,
        MockBackend,
        BaseRequestOptions ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
