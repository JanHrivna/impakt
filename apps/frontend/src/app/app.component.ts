import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BackendApiApiService } from './api/backend-api/services';

@Component({
  selector: 'impakt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  readonly druhy$: Observable<string[]> = this.be.vzorekControllerGetVzorky().pipe(
    map(
      (vzorky) => {
        const nonUniqueNames = vzorky.map(v => v.vzorek.druh)
        return Array.from(new Set(nonUniqueNames))
      }
    )
  )

  constructor(private be: BackendApiApiService) { }

}
