import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
// import 'zone.js/dist/zone';

// import { NgZone } from '@angular/core';
import { Router } from '@angular/router';

import  { singleSpaAngular,getSingleSpaExtraProviders } from 'single-spa-angular';

const ngLifecycles = singleSpaAngular({
  bootstrapFunction: () => {
    return platformBrowserDynamic(getSingleSpaExtraProviders()).bootstrapModule(AppModule,{ngZone: 'noop' });
  },
  template: '<app-root />',
  Router,
  NgZone: 'noop',
});

export const bootstrap = [ngLifecycles.bootstrap];

export const mount = [ngLifecycles.mount];

export const unmount = [ngLifecycles.unmount];