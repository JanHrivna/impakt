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

}