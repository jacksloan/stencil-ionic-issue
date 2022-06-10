import { Component, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  render() {
    return [
    <ion-button>No Color</ion-button>,
    <ion-button color="primary">Primary</ion-button>,
    <ion-button color="secondary">Primary</ion-button>,
    <ion-button color="warning">Primary</ion-button>,
  ];
  }
}
