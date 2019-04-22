# Create and publish Angular library

This is the repository for the story https://medium.com/@simionrazvan/create-and-publish-an-angular-library-dd07a24c06c 

# Init angular-cli project

ng new ng-trc

Routing 	-> N
CSS 		-> SASS

# Generate angular library

cd ng-trc
ng generate library ng-trc-lib


# Build Library

ng build ng-trc-lib

# Add config model to library

ng generate class model/TrcLibConfig --project=ng-trc-lib

## Add export config model to public-api
export * from './lib/model/trc-lib-config';

# Add configuration variable to library

## Update the configuration model, file:[project path]/projects/ng-trc-lib/model/trc-lib-config.ts

import {InjectionToken} from '@angular/core';

export class TrcLibConfig {
  key: string;

  constructor(key: string) {
    this.key = key;
  }
}

export const TRC_CONFIG = new InjectionToken<TrcLibConfig>('TRC_CONFIG');

## Update the library module to use the configuration, file:[project path]/projects/ng-trc-lib/trc-lib.module.ts

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

## Use the config variable in the library, for example in the component, file:[project path]/projects/ng-trc-lib/ng-trc-lib.component.ts

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


# Publish Library 

## To npmjs.com
ng build ng-trc-lib
npm login
cd .\dist\ng-trc-lib\
npm publish

## To private nexus repo
If you have a project that you want to publish to your Nexus, put this in package.json from the library - [project path]/ng-trc/projects/ng-trc-lib/package.json, for example
{
  ...

  "publishConfig": {
    "registry": "http://repository.trencadis.ro:8081/repository/npm-hosted/"
  }
}
From terminal, for example:

npm login --registry http://repository.trencadis.ro:8081/repository/npm-hosted/

ng build ng-trc-lib
cd dist/ng-trc-lib
npm publish


# Use library

## Use private Nexus
create a .npmrc file: [external project path]/.npmrc, for example:

registry=http://repository.trencadis.ro:8081/repository/npm-group/?_auth=[credentials base64]



Note: The _auth param is the base64 hash for the credentials (demo:demo) - echo -n 'myuser:mypassword' | openssl base64


## Install library

npm i ng-trc-lib --save

## Configure library dependency in app.module 

  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
  import {NgTrcLibModule, TrcLibConfig} from 'ng-trc-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgTrcLibModule.forRoot(new TrcLibConfig('This is the key'))
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

## Use the library component in external project, update file [project path]/src/app/app.component.html
<lib-ng-trc-lib></lib-ng-trc-lib>

## Test the usage of the libray

ng serve



