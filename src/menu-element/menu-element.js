import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import '@polymer/paper-toolbar/paper-toolbar.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';

class MenuElement extends PolymerElement {
    static get template() {
        return html `
        <style>
        app-header {
            background-color: red;
            --app-header-background-rear-layer: {
              /* The header is blue when condensed */
              background-color: blue;
            };
            height: 500px;
            width:500px;
            --app-header-shadow: {
                box-shadow: inset 0px 5px 2px -3px rgba(0, 0, 0, 0.2);
              };
          }
        </style>
        <app-header  effects="parallax-background">
            <app-toolbar>
                <paper-menu-button>
                <paper-icon-button icon="menu" slot="dropdown-trigger"></paper-icon-button>
                <paper-listbox slot="dropdown-content">
                    <paper-item>Share</paper-item>
                    <paper-item>Settings</paper-item>
                    <paper-item>Help</paper-item>
                </paper-listbox>
                </paper-menu-button>
            </app-toolbar>
            <app-toolbar sticky> Sticky element </app-toolbar>
      </app-header>

        
        
        `;
    }

    static get properties() {
        return {
            title: {
                type:String,
                value: 'criterios'
            }
        }
    }
}

window.customElements.define('menu-element',MenuElement);