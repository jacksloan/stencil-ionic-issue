import { Component, Element, h, Host } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  @Element() el: HTMLElement;

  constructor() {
    // required for ionic styles to apply to nested shadow roots,
    const l = document.createElement('link');
    l.setAttribute('rel', 'stylesheet');
    l.setAttribute('href', 'https://cdn.jsdelivr.net/npm/@ionic/core/css/core.css');
    this.el.shadowRoot.prepend(l);
  }

  render() {
    return (
      <Host>
        <ion-button color="primary">Primary</ion-button>
        <ion-button color="secondary">Secondary</ion-button>
        <ion-button color="tertiary">Tertiary</ion-button>
        <ion-button color="success">Success</ion-button>
        <ion-button color="warning">Warning</ion-button>
        <ion-button color="danger">Danger</ion-button>
        <ion-button color="light">Light</ion-button>
        <ion-button color="medium">Medium</ion-button>
        <ion-button color="dark">Dark</ion-button>
      </Host>
    );
  }
}
