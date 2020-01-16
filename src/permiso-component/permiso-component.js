import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';

class PermisoComponent extends PolymerElement {
    static get template() {
        return html `
            <style>
                .conteiner {
                    width: 80%;
                    height: 300px;
                    border: 2px solid black;
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                }
                .conteiner h2 {
                    text-align: center;
                }

                .btn {
                    
                }
            </style>
            <div class="conteiner">
                <h2>Criterios de buqueda</h2>
                <paper-input label="Numero de permiso de la Cree" value="{{permiso}}"></paper-input>
                <paper-input label="Razon social" value="{{razonSocial}}"></paper-input>
                <paper-dropdown-menu label="Clasificación">
                    <paper-listbox slot="dropdown-content">
                        <paper-item>Grupo de Estaciones especialisados</paper-item>
                        <paper-item>Estaciones de Servicio Individuales</paper-item>
                        <paper-item>Distribuidora A</paper-item>
                        <paper-item>PEMEX</paper-item>
                        <paper-item>ASA</paper-item>
                    </paper-listbox>
                </paper-dropdown-menu>
                <br>
                <button class="btn">Buscar</button>
            </div>
        `;
    }

    static get properties() {
        return {
            permiso:{
                type: String,
                value: ''
            },
            razonSocial: {
                type: String,
                value: ''
            },
            Clasificacion: {
                type: String
            }
        }
    }
}

window.customElements.define('permiso-component',PermisoComponent);