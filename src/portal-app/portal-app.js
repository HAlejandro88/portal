import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '../login-component/login-component.js';
import '../menu-element/menu-element.js';
import '../permiso-component/permiso-component.js';
import '@polymer/paper-toast/paper-toast.js';


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
      <iron-ajax id="inicio" url = "{{url}}" handle-as="json" method="post" 
                 on-response="_getUser" on-error="_errorResponse">
      </iron-ajax>
      <paper-toast id="toast"></paper-toast>
      <div hidden$="{{!permiso}}">
        <permiso-component></permiso-component>
      </div>

      <div hidden$="{{permiso}}">
        <login-component on-login-user="login"></login-component>
      </div>
        
    `;
  }
  static get properties() {
    return {
      permiso: {
        type: Boolean,
        value: false
      },
      url: {
        type: String,
        value: ''
      },
      token: {
        type: String,
        value: ''
      }
    };
  }

  login(event) {
    console.log(event);
    let logeado = event.detail;
    console.log(logeado);
    if (logeado.username === 'usuario1' && logeado.password === '12345678') {
      this.set('permiso',true);
    }
    else {
      this.$.toast.text = 'usuario y/o contraseña invalida';
      this.$.toast.open();
    }
  }


  _getUser(event) {
    let userObject = event.detail.response.user[0];
    localStorage.setItem("userId", userObject._id);
    location.reload();
  }

  _errorResponse() {
    const error = this.$.json.lastError;
    this.dispatchEvent(new CustomEvent('login-reques-error', {
      bubbles: false,
      composed: false,
      detail: {
        url: this.url
      }
    }))
  }

  async guardarToken(token) {
    this.token = token;
    await localStorage.setItem('token',token);
  }

  async cargarToken() {
    this.token = await localStorage.getItem('token') || null;
  }
}

window.customElements.define('portal-app', PortalApp);
