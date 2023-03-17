import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, EMPTY, map, Observable, take, tap } from 'rxjs';
import { BackendApiApiService } from '../../api/backend-api/services';
import { AuthService } from '../../services/auth.service';
import * as fromVzorky from '../../store/vzorky';

@Component({
  selector: 'frontend-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent {
  filterUsed = false
  readonly searchCtrl = new FormControl()
  readonly username = AuthService.getUser()

  readonly druhy$: Observable<string[]> = this.be.vzorekControllerGetVzorky().pipe(
    map(
      (vzorky) => {
        const nonUniqueNames = vzorky.map(v => v.vzorek.druh)
        return Array.from(new Set(nonUniqueNames))
      }
    )
  )

  constructor(
    private be: BackendApiApiService,
    private store: Store,
    private router: Router) { }

  onSearch() {
    this.store.dispatch(fromVzorky.setFilterValues({ druh: this.searchCtrl.value }))
    this.filterUsed = true
    this.searchCtrl.disable()
  }

  onClearFilter() {
    this.filterUsed = false
    this.searchCtrl.reset()
    this.searchCtrl.enable()
    this.store.dispatch(fromVzorky.setFilterValues({ druh: this.searchCtrl.value }))
  }

  onLogout() {
    this.be.authControllerLogout().pipe(
      take(1),
      tap(
        () => this.logoutUser()
      ),
      catchError(
        () => {
          this.logoutUser()
          return EMPTY
        }
      )
    ).subscribe()
  }

  private logoutUser() {
    AuthService.logoutUser()
    this.router.navigate([''])
  }

}
