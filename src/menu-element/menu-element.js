import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-icon-button/paper-icon-button.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-menu-button/paper-menu-button.js';
import '@polymer/paper-menu-button/paper-menu-button-animations.js';
import '@polymer/iron-icon/iron-icon.js';
import '@polymer/iron-icons/iron-icons.js';
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/app-layout/app-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js';
import '../euro-component/eruro-componet';
import '../permiso-component/permiso-component';
import '../pesos-componet/pesos-component.js';

class MenuElement extends PolymerElement {
    static get template() {
        return html `
        <style>
        app-header {
            background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,212,255,1) 0%, rgba(9,9,121,1) 100%);
            --app-header-background-rear-layer: {
              /* The header is blue when condensed */
              background-color: blue;
            };
            height: 58px;
            width:100%;
            --app-header-shadow: {
                box-shadow: inset 0px 5px 2px -3px rgba(0, 0, 0, 0.2);
              };
          }
        </style>
        <app-header effects="parallax-background">
            <app-toolbar>
                <paper-menu-button>
                <paper-icon-button icon="menu" slot="dropdown-trigger"></paper-icon-button>
                <paper-listbox slot="dropdown-content">
                    <paper-item>
                        Inicio 
                    </paper-item>
                    <paper-item>
                        Dolar 
                    </paper-item>
                    <paper-item>
                        Euro 
                    </paper-item>
                    <paper-item>
                        Pesos 
                    </paper-item>
                    <paper-item>
                        Precios
                    </paper-item>
                </paper-listbox>
                </paper-menu-button>
                <div main-title spacer>{{title}}</div>
                <div slot="end">{{date}}</div>
            </app-toolbar>
      </app-header>

        
        
        `;
    }

    static get properties() {
        return {
            title: {
                type:String
            },
            menu: {
                type: Object,
                value() {
                    return {
                        "duration":500,
                        "easing":
                        "cubic-bezier(0.4, 0, 0.2, 1)","fill":"both"
                    }
                }
            }
        }
    }
}

window.customElements.define('menu-element',MenuElement);