import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../login-component/login-component.js';
import '../menu-element/menu-element.js';
import '../permiso-component/permiso-component.js';


/**
 * @customElement
 * @polymer
 */
class PortalApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <menu-element></menu-element>
      <permiso-component></permiso-component> 
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'portal-app'
      }
    };
  }
}

window.customElements.define('portal-app', PortalApp);
