import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-toast/paper-toast.js';
import '../menu-element/menu-element.js';
import '../footer-element/footer-element.js';


class EuroComponent extends PolymerElement {
     static get template() {
        return html`
            <menu-element title="Euro"></menu-element>
            <div class="conteiner">
                <h2>Cambio Euro</h2>
                <paper-input label="Litros de Carga" value="{{litrosCarga}}"></paper-input>
                <paper-input label="Compañía" value="{{compania}}"></paper-input>
                <paper-input label="RFC" value="{{rfc}}"></paper-input>
                <paper-input label="Nombre Piloto" value="{{nombrePiloto}}"></paper-input>
                <paper-input label="Numero de Carga" value="{{Ncarga}}"></paper-input>
                <br>
                <button class="btn" on-tap="calcular">Calcular</button>
                <div>
                    <h3>total: {{total}}</h3>
                </div>
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
            Euro: {
                type: Number,
                value: 20.88
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
        let subTotalUsdC = subTotalCMx / this.Euro;
        const servicios = 11;
        let subTotal = subTotalUsdC + servicios;
        const IVA = subTotal * 0.16;
        let total = subTotal + IVA;
        this.set('total', total);
        console.log(this.total);
    }
}


window.customElements.define('euro-component',EuroComponent);