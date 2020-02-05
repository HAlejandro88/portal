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
                    background-color: rgba(97,187,247,0.2);
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
                    font-weight: 600px;
                    font-size: 20px;
                    color: #ffffff;
                    background-color: rgba(97,187,247,0.8);
                    border-radius: 6px;
                    border: 2px solid #0016b0;
                    width: 20%;
                    margin-left: 30px;
                  }
                  .btn:hover{
                    color: #1883ba;
                    background-color: #ffffff;
                    font-size: 20px;
                  }

                paper-input {
                    --primary-text-color: #000;
                    --paper-input-container-color: #000;
                    --paper-input-container-focus-color: #000;
                    --paper-input-container-invalid-color: red;
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

                table {  color: #333; font-family: Helvetica, Arial, sans-serif; width: 640px; border-collapse: collapse;}
                td, th { border: 1px solid transparent; height: 30px; }
                th { background: #D3D3D3; font-weight: bold; }
                td { background: #FAFAFA; text-align: center; }
                tr:nth-child(even) td { background: #F1F1F1; }  
                tr:nth-child(odd) td { background: #FEFEFE; } 
                tr td:hover { background: #666; color: #FFF; }
            </style>
                <div class="conteiner">
                    <h2>Cambio Dolar</h2>
                    <paper-input label="Litros de Carga" value="{{litrosCarga}}"></paper-input>
                    <paper-input label="precioAsa" value="{{precioAsa}}"></paper-input>
                    <paper-dropdown-menu label="DUGAEAM" value="{{DUGAEAM}}">
                        <paper-listbox slot="dropdown-content" selected="0">
                            <paper-item>126.63</paper-item>
                            <paper-item>180.92</paper-item>
                            <paper-item>271.37</paper-item>
                            <paper-item>5029.6</paper-item>
                            <paper-item>14591.23</paper-item>
                            <paper-item>21867.83</paper-item>
                        </paper-listbox>
                    </paper-dropdown-menu>
                    
                    <br>
                    <button class="btn" on-tap="calcularDolar"> Dolar</button>
                    <button class="btn" on-tap="calcularEuro"> Euro</button>
                    <button class="btn" on-tap="calcularPesos"> Pesos</button>
                    <paper-dialog id="precio" class="colored">
                        <h3>Total</h3>
                        <label>Total: {{total}}</label>
                    </paper-dialog>
                    <br>
                    <br>
                    <table style="width:100%;">
                        <tr>
                            <th>Id</th>
                            <th>Precio ASA</th>
                            <th>Tipo Cambio</th>
                            <th>Litros</th>
                            <th>DUGAEAM</th>
                            <th>Total</th>
                        </tr>
                        <tbody id="data">
                        </tbody>
                    </table>
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
                value: 17.62
            },
            DUGAEAM:{
                type: Number,
                value: 0
            },
            precioAsa: {
                type: Number,
                value: 11.45
            },
            id: {
                type: Number,
                value: 0
            },
            euro: {
                type: Number,
                value: 20.52    
            },
            peso: {
                type:Number,
                value: 1
            }
        }
    }

    calcularDolar() {
        let precioHidromex = parseFloat(this.precioAsa) + 1;
        let preciotc = precioHidromex / this.Dolar;
        let dugaeamtc = this.DUGAEAM / this.Dolar;
        if (this.litrosCarga <= 1499) {
            let comision = 200;
            let comisionTC = comision / this.Dolar;
            let combustible = this.litrosCarga * preciotc;
            let iva = combustible * 0.16;
            let subtotal = combustible + iva +comisionTC + dugaeamtc;
            let total = parseFloat(subtotal);
            this.total = total.toFixed(2);
            this.id++;
            this.shadowRoot.querySelector("#data").innerHTML +=`<td>${this.id}</td><td>${this.precioAsa}</td><td>${this.Dolar} dolares</td><td>${this.litrosCarga}</td><td>${this.DUGAEAM}</td><td>${this.total}</td>`;
        }
        else{
            let combustible = this.litrosCarga * preciotc;
            let iva = combustible * 0.16;
            let subtotal = combustible + iva  + dugaeamtc;
            let total = parseFloat(subtotal);
            this.total = total.toFixed(2);
            this.id++;
            this.shadowRoot.querySelector("#data").innerHTML += `<td>${this.id}</td><td>${this.precioAsa}</td><td>${this.Dolar} dolares</td><td>${this.litrosCarga}</td><td>${this.DUGAEAM}</td><td>${this.total}</td>`;
        }

        this.$.precio.open();
    }

    calcularEuro() {
        let precioHidromex = parseFloat(this.precioAsa) + 1;
        let preciotc = precioHidromex / this.euro;
        let dugaeamtc = this.DUGAEAM / this.euro;
        if (this.litrosCarga <= 1499) {
            let comision = 200;
            let comisionTC = comision / this.euro;
            let combustible = this.litrosCarga * preciotc;
            let iva = combustible * 0.16;
            let subtotal = combustible + iva +comisionTC + dugaeamtc;
            let total = parseFloat(subtotal);
            this.total = total.toFixed(2);
            this.id++;
            this.shadowRoot.querySelector("#data").innerHTML += `<td>${this.id}</td><td>${this.precioAsa}</td><td>${this.euro} euros</td><td>${this.litrosCarga}</td><td>${this.DUGAEAM}</td><td>${this.total}</td>`;
        }
        else {
            let combustible = this.litrosCarga * preciotc;
            let iva = combustible * 0.16;
            let subtotal = combustible + iva  + dugaeamtc;
            let total = parseFloat(subtotal);
            this.total = total.toFixed(2);
            this.id++;
            this.shadowRoot.querySelector("#data").innerHTML += `<td>${this.id}</td><td>${this.precioAsa}</td><td>${this.euro} euros</td><td>${this.litrosCarga}</td><td>${this.DUGAEAM}</td><td>${this.total}</td>`;
        }

        this.$.precio.open();
    }

    calcularPesos() {
        let precioHidromex = parseFloat(this.precioAsa) + 1;
        let preciotc = precioHidromex / this.peso;
        let dugaeamtc = this.DUGAEAM / this.peso;
        if (this.litrosCarga <= 1499) {
            let comision = 200;
            let comisionTC = comision / this.peso;
            let combustible = this.litrosCarga * preciotc;
            let iva = combustible * 0.16;
            let subtotal = combustible + iva +comisionTC + dugaeamtc;
            let total = parseFloat(subtotal);
            this.total = total.toFixed(2);
            this.id++;
            this.shadowRoot.querySelector("#data").innerHTML += `<td>${this.id}</td><td>${this.precioAsa}</td><td>${this.peso} pesos</td><td>${this.litrosCarga}</td><td>${this.DUGAEAM}</td><td>${this.total}</td>`;
        }
        else{
            let combustible = this.litrosCarga * preciotc;
            let iva = combustible * 0.16;
            let subtotal = combustible + iva  + dugaeamtc;
            let total = parseFloat(subtotal);
            this.total = total.toFixed(2);
            this.id++;
            this.shadowRoot.querySelector("#data").innerHTML += `<td>${this.id}</td><td>${this.precioAsa}</td><td>${this.peso} pesos</td><td>${this.litrosCarga}</td><td>${this.DUGAEAM}</td><td>${this.total}</td>`;
        }

        this.$.precio.open();
    }

    
    mostrar() {
        //document.getElementById("wraped").insertRow(-1).innerHTML=`<td>${this.id}</td><td>${this.precioAsa}</td><td>${this.litrosCarga}</td><td>${this.total}</td>`;
        this.$.historial.open();
  }
}



window.customElements.define('permiso-component',PermisoComponent);