import {ContentView} from 'ui/content-view';
import {Color} from "color";
import * as uiUtils from 'ui/utils';
import {PropertyMetadata} from 'ui/core/proxy';
import {Property, PropertyMetadataSettings} from 'ui/core/dependency-observable';

export class Button extends ContentView {
  private _ios: any;

  constructor() {
    super();
    this._ios = null;
  }

  get ios() {
    return this._ios;
  }
}