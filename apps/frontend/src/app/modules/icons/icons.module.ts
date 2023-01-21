import { NgModule } from '@angular/core';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { Calendar, Funnel, FunnelFill, PencilFill, TrashFill } from 'ng-bootstrap-icons/icons';


const icons = {
  Calendar,
  TrashFill,
  PencilFill,
  Funnel,
  FunnelFill
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
