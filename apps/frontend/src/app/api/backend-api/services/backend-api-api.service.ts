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

import { ApiResponseDto } from '../models/api-response-dto';
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
   * Path part for operation vzorekControllerGetVzorky
   */
  static readonly VzorekControllerGetVzorkyPath = '/api/vzorek';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `vzorekControllerGetVzorky()` instead.
   *
   * This method doesn't expect any request body.
   */
  vzorekControllerGetVzorky$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Vzorky>>> {

    const rb = new RequestBuilder(this.rootUrl, BackendApiApiService.VzorekControllerGetVzorkyPath, 'get');
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
   * To access the full response (for headers, for example), `vzorekControllerGetVzorky$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  vzorekControllerGetVzorky(params?: {
  }): Observable<Array<Vzorky>> {

    return this.vzorekControllerGetVzorky$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Vzorky>>) => r.body as Array<Vzorky>)
    );
  }

  /**
   * Path part for operation vzorekControllerCreateVzorek
   */
  static readonly VzorekControllerCreateVzorekPath = '/api/vzorek';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `vzorekControllerCreateVzorek()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  vzorekControllerCreateVzorek$Response(params: {
    body: Vzorky
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BackendApiApiService.VzorekControllerCreateVzorekPath, 'post');
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
   * To access the full response (for headers, for example), `vzorekControllerCreateVzorek$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  vzorekControllerCreateVzorek(params: {
    body: Vzorky
  }): Observable<void> {

    return this.vzorekControllerCreateVzorek$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation vzorekControllerDeleteVzorek
   */
  static readonly VzorekControllerDeleteVzorekPath = '/api/vzorek/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `vzorekControllerDeleteVzorek()` instead.
   *
   * This method doesn't expect any request body.
   */
  vzorekControllerDeleteVzorek$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ApiResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, BackendApiApiService.VzorekControllerDeleteVzorekPath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ApiResponseDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `vzorekControllerDeleteVzorek$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  vzorekControllerDeleteVzorek(params: {
    id: number;
  }): Observable<ApiResponseDto> {

    return this.vzorekControllerDeleteVzorek$Response(params).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>) => r.body as ApiResponseDto)
    );
  }

  /**
   * Path part for operation lokaceControllerGetLokace
   */
  static readonly LokaceControllerGetLokacePath = '/api/lokace';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `lokaceControllerGetLokace()` instead.
   *
   * This method doesn't expect any request body.
   */
  lokaceControllerGetLokace$Response(params?: {
  }): Observable<StrictHttpResponse<Array<MistoUlozeni>>> {

    const rb = new RequestBuilder(this.rootUrl, BackendApiApiService.LokaceControllerGetLokacePath, 'get');
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
   * To access the full response (for headers, for example), `lokaceControllerGetLokace$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  lokaceControllerGetLokace(params?: {
  }): Observable<Array<MistoUlozeni>> {

    return this.lokaceControllerGetLokace$Response(params).pipe(
      map((r: StrictHttpResponse<Array<MistoUlozeni>>) => r.body as Array<MistoUlozeni>)
    );
  }

}
