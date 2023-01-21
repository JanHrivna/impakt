import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { BackendApiApiService } from './api/backend-api/services';

@Component({
  selector: 'impakt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  filterUsed = false
  readonly searchCtrl = new FormControl()

  readonly druhy$: Observable<string[]> = this.be.vzorekControllerGetVzorky().pipe(
    map(
      (vzorky) => {
        const nonUniqueNames = vzorky.map(v => v.vzorek.druh)
        return Array.from(new Set(nonUniqueNames))
      }
    )
  )

  onSearch() {
    this.filterUsed = true
    this.searchCtrl.disable()
  }

  onClearFilter() {
    this.filterUsed = false
    this.searchCtrl.reset()
    this.searchCtrl.enable()
  }

  constructor(private be: BackendApiApiService) { }

}
