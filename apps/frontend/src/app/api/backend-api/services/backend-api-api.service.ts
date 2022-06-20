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

import { Analyzy } from '../models/analyzy';
import { ApiResponseDto } from '../models/api-response-dto';
import { MistoUlozeni } from '../models/misto-ulozeni';
import { TypyAnalyz } from '../models/typy-analyz';
import { VzorekDto } from '../models/vzorek-dto';

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
  }): Observable<StrictHttpResponse<Array<VzorekDto>>> {

    const rb = new RequestBuilder(this.rootUrl, BackendApiApiService.VzorekControllerGetVzorkyPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<VzorekDto>>;
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
  }): Observable<Array<VzorekDto>> {

    return this.vzorekControllerGetVzorky$Response(params).pipe(
      map((r: StrictHttpResponse<Array<VzorekDto>>) => r.body as Array<VzorekDto>)
    );
  }

  /**
   * Path part for operation vzorekControllerUpsertVzorek
   */
  static readonly VzorekControllerUpsertVzorekPath = '/api/vzorek';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `vzorekControllerUpsertVzorek()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  vzorekControllerUpsertVzorek$Response(params: {
    body: VzorekDto
  }): Observable<StrictHttpResponse<ApiResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, BackendApiApiService.VzorekControllerUpsertVzorekPath, 'post');
    if (params) {
      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `vzorekControllerUpsertVzorek$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  vzorekControllerUpsertVzorek(params: {
    body: VzorekDto
  }): Observable<ApiResponseDto> {

    return this.vzorekControllerUpsertVzorek$Response(params).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>) => r.body as ApiResponseDto)
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

  /**
   * Path part for operation analyzaControllerGetTypyAnalyz
   */
  static readonly AnalyzaControllerGetTypyAnalyzPath = '/api/analyza/typ';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `analyzaControllerGetTypyAnalyz()` instead.
   *
   * This method doesn't expect any request body.
   */
  analyzaControllerGetTypyAnalyz$Response(params?: {
  }): Observable<StrictHttpResponse<Array<TypyAnalyz>>> {

    const rb = new RequestBuilder(this.rootUrl, BackendApiApiService.AnalyzaControllerGetTypyAnalyzPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TypyAnalyz>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `analyzaControllerGetTypyAnalyz$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  analyzaControllerGetTypyAnalyz(params?: {
  }): Observable<Array<TypyAnalyz>> {

    return this.analyzaControllerGetTypyAnalyz$Response(params).pipe(
      map((r: StrictHttpResponse<Array<TypyAnalyz>>) => r.body as Array<TypyAnalyz>)
    );
  }

  /**
   * Path part for operation analyzaControllerGetAnalyzy
   */
  static readonly AnalyzaControllerGetAnalyzyPath = '/api/analyza/{idVzorek}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `analyzaControllerGetAnalyzy()` instead.
   *
   * This method doesn't expect any request body.
   */
  analyzaControllerGetAnalyzy$Response(params: {
    idVzorek: number;
  }): Observable<StrictHttpResponse<Array<Analyzy>>> {

    const rb = new RequestBuilder(this.rootUrl, BackendApiApiService.AnalyzaControllerGetAnalyzyPath, 'get');
    if (params) {
      rb.path('idVzorek', params.idVzorek, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Analyzy>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `analyzaControllerGetAnalyzy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  analyzaControllerGetAnalyzy(params: {
    idVzorek: number;
  }): Observable<Array<Analyzy>> {

    return this.analyzaControllerGetAnalyzy$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Analyzy>>) => r.body as Array<Analyzy>)
    );
  }

  /**
   * Path part for operation analyzaControllerUpsertAnalyzy
   */
  static readonly AnalyzaControllerUpsertAnalyzyPath = '/api/analyza/{idVzorek}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `analyzaControllerUpsertAnalyzy()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  analyzaControllerUpsertAnalyzy$Response(params: {
    idVzorek: number;
    body: Array<Analyzy>
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, BackendApiApiService.AnalyzaControllerUpsertAnalyzyPath, 'put');
    if (params) {
      rb.path('idVzorek', params.idVzorek, {});
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
   * To access the full response (for headers, for example), `analyzaControllerUpsertAnalyzy$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  analyzaControllerUpsertAnalyzy(params: {
    idVzorek: number;
    body: Array<Analyzy>
  }): Observable<void> {

    return this.analyzaControllerUpsertAnalyzy$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation analyzaControllerDeleteAnalyzy
   */
  static readonly AnalyzaControllerDeleteAnalyzyPath = '/api/analyza';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `analyzaControllerDeleteAnalyzy()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  analyzaControllerDeleteAnalyzy$Response(params: {
    body: Array<number>
  }): Observable<StrictHttpResponse<ApiResponseDto>> {

    const rb = new RequestBuilder(this.rootUrl, BackendApiApiService.AnalyzaControllerDeleteAnalyzyPath, 'delete');
    if (params) {
      rb.body(params.body, 'application/json');
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
   * To access the full response (for headers, for example), `analyzaControllerDeleteAnalyzy$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  analyzaControllerDeleteAnalyzy(params: {
    body: Array<number>
  }): Observable<ApiResponseDto> {

    return this.analyzaControllerDeleteAnalyzy$Response(params).pipe(
      map((r: StrictHttpResponse<ApiResponseDto>) => r.body as ApiResponseDto)
    );
  }

}
