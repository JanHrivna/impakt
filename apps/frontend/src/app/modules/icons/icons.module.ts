import { NgModule } from '@angular/core';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { Calendar, TrashFill } from 'ng-bootstrap-icons/icons';


const icons = {
  Calendar,
  TrashFill
};

@NgModule({
  declarations: [],
  imports: [
    BootstrapIconsModule.pick(icons)
  ],
  exports: [
    BootstrapIconsModule
  ]
})
export class IconsModule { }
