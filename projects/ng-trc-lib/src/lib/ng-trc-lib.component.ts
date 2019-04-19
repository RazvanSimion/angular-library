import {Component, Inject, OnInit} from '@angular/core';
import {TRC_CONFIG} from './model/trc-lib-config';

@Component({
  selector: 'lib-ng-trc-lib',
  template: `
    <p>
      ng-trc-lib works! The key is {{key}}
    </p>
  `,
  styles: []
})
export class NgTrcLibComponent implements OnInit {
  public key: string;

  constructor(@Inject(TRC_CONFIG) private config) {
    this.key = config.key;
  }

  ngOnInit() {
  }

}
