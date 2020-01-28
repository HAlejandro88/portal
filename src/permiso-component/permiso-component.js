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
            </style>
            <menu-element title="Dolar"></menu-element>
            <div class="conteiner">
                <h2>Cambio Dolar</h2>
                <paper-input label="Litros de Carga" value="{{litrosCarga}}"></paper-input>
                <paper-input label="Compañía" value="{{compania}}"></paper-input>
                <paper-input label="RFC" value="{{rfc}}"></paper-input>
                <paper-input label="Nombre Piloto" value="{{nombrePiloto}}"></paper-input>
                <paper-input label="Numero de Carga" value="{{Ncarga}}"></paper-input>
                <br>
                <button class="btn" on-tap="calcular">Calcular</button>
                <paper-dialog id="precio" class="colored">
                    <h3>Total</h3>
                    <label>Nombre del Piloto: {{nombrePiloto}}</label>
                    <p>
                        <label>Razon Social</label>
                        <label>{{rfc}}</label>
                        <label>Compañia:{{compania}}</label>
                        <label>Numero de Carga:{{Ncarga}}</label>
                    </p>
                    <label>total: {{total}}</label>
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
                value: 18.25
            },
            compania:{
                type: String,
                value: ''
            },
            rfc: {
                type: String,
                value: ''
            },
            nombrePiloto: {
                type: String,
                value: ''
            },
            Ncarga: {
                type: String,
                value: ''
            }
        }
    }

    calcular() {
        let hidro = 0.99;
        let turbocina  = 12.50;
        let subtotalLMv = hidro + turbocina;
        let subTotalCMx = subtotalLMv * this.litrosCarga;
        let subTotalUsdC = subTotalCMx / this.Dolar;
        const servicios = 11;
        let subTotal = subTotalUsdC + servicios;
        const IVA = subTotal * 0.16;
        let total = subTotal + IVA;
        total.toFixed(2);
        console.log(total)
        this.set('total', total);
        console.log(this.total);
        this.$.precio.open();
    }
}


window.customElements.define('permiso-component',PermisoComponent);