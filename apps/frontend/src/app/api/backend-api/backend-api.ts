/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { BackendApiApiService } from './services/backend-api-api.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    BackendApiApiService,
    ApiConfiguration
  ],
})
export class BackendApi {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<BackendApi> {
    return {
      ngModule: BackendApi,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: BackendApi,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('BackendApi is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
