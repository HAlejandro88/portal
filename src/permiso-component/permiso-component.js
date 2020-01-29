import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-toast/paper-toast.js';
import '@polymer/paper-dropdown-menu/paper-dropdown-menu.js';
import '@polymer/paper-item/paper-item.js';
import '@polymer/paper-listbox/paper-listbox.js';
import '@polymer/paper-dialog/paper-dialog.js';
import '../menu-element/menu-element.js';
import '../footer-element/footer-element.js';
import '../login-component/login-component.js';


class PermisoComponent extends PolymerElement {
    static get template() {
        return html `
            <style>
                .conteiner {
                    width: 80%;
                    height: 500px;
                    position: absolute;
                    border-radius: 8px;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%);
                    background-color: rgba(97,187,247,0.8);
                    webkit-box-shadow: 7px 2px 94px 25px rgba(0,0,0,0.67);
                    -moz-box-shadow: 7px 2px 94px 25px rgba(0,0,0,0.67);
                    box-shadow: 7px 2px 94px 25px rgba(0,0,0,0.67);
                }
                .conteiner h2 {
                    text-align: center;
                    color: white;
                }

                .btn{
                    left: 250px;
                    text-decoration: none;
                    padding: 10px;
                    font-weight: 600;
                    font-size: 20px;
                    color: #ffffff;
                    background-color: rgba(97,187,247,0.8);
                    border-radius: 6px;
                    border: 2px solid #0016b0;
                    width: 80%;
                    margin-left: 30px;
                  }
                  .btn:hover{
                    color: #1883ba;
                    background-color: #ffffff;
                    font-size: 20px;
                  }

                paper-input {
                    --primary-text-color: white;
                    --paper-input-container-color: white;
                    --paper-input-container-focus-color: white;
                    --paper-input-container-invalid-color: black;
                }
                paper-dialog.colored {
                    border: 2px solid;
                    border-color: #4caf50;
                    background-color: #f1f8e9;
                    color: #4caf50;
                  }
                #login {
                    display: none;
                }

                #pesos {
                    display: block;
                }
            </style>
                <menu-element title="Dolar" on-login-enter=""></menu-element>
                <div class="conteiner">
                    <h2>Cambio Dolar</h2>
                    <paper-input label="Litros de Carga" value="{{litrosCarga}}"></paper-input>
                    <paper-input label="precioAsa" value="{{precioAsa}}"></paper-input>
                    <paper-input label="DUGAEAM" value="{{DUGAEAM}}"></paper-input>
                    <br>
                    <button class="btn" on-tap="calcular">Calcular</button>
                    <paper-dialog id="precio" class="colored">
                        <h3>Total</h3>
                        <label>Total: {{total}}</label>
                    </paper-dialog>
                    <paper-button on-tap="mostrar">Historial</paper-button>
                    <paper-dialog id="historial">
                        <table>
                            <tr>
                                <th>Id</th>
                                <th>Fecha</th>
                                <th>Litros</th>
                                <th>Total</th>
                            </tr>
                            <tr>
                                <th>{{id}}</th>
                                <th>29-enero-2020</th>
                                <th>{{litrosCarga}}</th>
                                <th>{{total}}</th>
                            </tr>
                        </table>
                    </paper-dialog>
                </div>
                      
           
        `;
    }

    static get properties() {
        return {
            litrosCarga:{
                type: String,
                value: ''
            },
            total: {
                type: Number,
                value: 0
            },
            Dolar: {
                type: Number,
                value: 17.80
            },
            DUGAEAM:{
                type: Number,
                value: 0
            },
            precioAsa: {
                type: Number,
                value: 12.80
            },
            id: {
                type: Number,
                value: 0
            }
        }
    }

    calcular() {
        let ph = this.precioAsa + 1;
        if (this.litrosCarga < 1500) {
           let combustible = (ph * this.litrosCarga) + 200;
           let iva = combustible * 0.16;
           let total = (iva + combustible) + this.DUGAEAM;
           let tota = parseFloat(total);
           let sinD = tota.toFixed(2);
           this.total = sinD;
           this.id++;
        }
        else{
           let combustible = ph * this.litrosCarga;
           let iva = combustible * 0.16;
           let total = (iva + combustible) + this.DUGAEAM;
           this.total = total;
           this.id++;
        }

        this.$.precio.open();
    }

    muestraLogin() {
        const login = this.shadowRoot.querySelector('#login');
        signi.style.display = "block";
        const hiden = this.shadowRoot.querySelector('#pesos');
        hiden.style.display = "none";
    }

    mostrar() {
       this.$.historial.open(); 
    }
}


window.customElements.define('permiso-component',PermisoComponent);