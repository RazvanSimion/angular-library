import {ModuleWithProviders, NgModule} from '@angular/core';
import {NgTrcLibComponent} from './ng-trc-lib.component';
import {TRC_CONFIG, TrcLibConfig} from './model/trc-lib-config';
import {NgTrcLibService} from './ng-trc-lib.service';

@NgModule({
  declarations: [NgTrcLibComponent],
  imports: [],
  exports: [NgTrcLibComponent]
})
export class NgTrcLibModule {
  static forRoot(config: TrcLibConfig): ModuleWithProviders {
    return {
      ngModule: NgTrcLibModule,
      providers: [
        NgTrcLibService,
        {
          provide: TRC_CONFIG, useValue: config
        }]
    };
  }
}
