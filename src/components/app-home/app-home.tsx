import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false,
})
export class AppHome {
  render() {
    return (
      [
      <ion-button color="primary">Primary</ion-button>,
      <ion-button color="secondary">Primary</ion-button>,
      <ion-button color="warning">Primary</ion-button>,
    ]
    );
  }
}
