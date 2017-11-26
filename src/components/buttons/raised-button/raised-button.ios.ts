import { RaisedButtonBase } from './raised-button.common';

declare var MDCRaisedButton: any;

export class RaisedButton extends RaisedButtonBase {
  public nativeView: any;

  constructor () {
    super();

    let button = new MDCRaisedButton();
    button.setTitleForState("test", UIControlState.Normal);
    button.sizeToFit();
    
    this.nativeView = button;
  }
}
