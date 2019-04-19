import {InjectionToken} from '@angular/core';

export class TrcLibConfig {
  key: string;

  constructor(key: string) {
    this.key = key;
  }
}

export const TRC_CONFIG = new InjectionToken<TrcLibConfig>('TRC_CONFIG');
