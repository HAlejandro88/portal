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
      <template is="dom-if" if="{{!permiso}}">
        <login-component></login-component>
      </template>
      

      <div hidden$="[[!permiso]]">
        <permiso-component></permiso-component>
      </div>
    `;
  }
  static get properties() {
    return {
      permiso: {
        type: Boolean,
        value: 'false'
      }
    };
  }
}

window.customElements.define('portal-app', PortalApp);
