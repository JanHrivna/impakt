/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { MistoUlozeni } from '../models/misto-ulozeni';
import { Vzorky } from '../models/vzorky';

@Injectable({
  providedIn: 'root',
})
export class BackendApiApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation datasourceControllerGetVzorky
   */
  static readonly DatasourceControllerGetVzorkyPath = '/api/vzorky';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `datasourceControllerGetVzorky()` instead.
   *
   * This method doesn't expect any request body.
   */
  datasourceControllerGetVzorky$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Vzorky>>> {

    const rb = new RequestBuilder(this.rootUrl, BackendApiApiService.DatasourceControllerGetVzorkyPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Vzorky>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `datasourceControllerGetVzorky$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  datasourceControllerGetVzorky(params?: {
  }): Observable<Array<Vzorky>> {

    return this.datasourceControllerGetVzorky$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Vzorky>>) => r.body as Array<Vzorky>)
    );
  }

  /**
   * Path part for operation datasourceControllerGetMistoUlozeni
   */
  static readonly DatasourceControllerGetMistoUlozeniPath = '/api/misto-ulozeni';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `datasourceControllerGetMistoUlozeni()` instead.
   *
   * This method doesn't expect any request body.
   */
  datasourceControllerGetMistoUlozeni$Response(params?: {
  }): Observable<StrictHttpResponse<Array<MistoUlozeni>>> {

    const rb = new RequestBuilder(this.rootUrl, BackendApiApiService.DatasourceControllerGetMistoUlozeniPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<MistoUlozeni>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `datasourceControllerGetMistoUlozeni$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  datasourceControllerGetMistoUlozeni(params?: {
  }): Observable<Array<MistoUlozeni>> {

    return this.datasourceControllerGetMistoUlozeni$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MistoUlozeni>>) => r.body as Array<MistoUlozeni>)
    );
  }

  /**
   * Path part for operation datasourceControllerCreateVzorek
   */
  static readonly DatasourceControllerCreateVzorekPath = '/api/vzorek';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `datasourceControllerCreateVzorek()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  datasourceControllerCreateVzorek$Response(params: {
    body: Vzorky
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BackendApiApiService.DatasourceControllerCreateVzorekPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `datasourceControllerCreateVzorek$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  datasourceControllerCreateVzorek(params: {
    body: Vzorky
  }): Observable<void> {

    return this.datasourceControllerCreateVzorek$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
