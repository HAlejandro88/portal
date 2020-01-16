import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/paper-toast/paper-toast.js';
//import '/@polymer/iron-icons/iron-icons.js';
/**
 * @customElement
 * @polymer
 */

 class LoginComponent extends PolymerElement {
     static get template() {
         return html `
         <style>
            .conteiner {
                width: 360px;
                background: linear-gradient(120deg,#3498db,#8e44ad,#3498db);;
                height: 580px;
                padding: 80px 40px;
                border-radius: 10px;
                position: absolute;
                left: 50%;
                top: 50%;
                transform: translate(-50%,-50%);
            }
            .conteiner h1 {
                text-align: center;
                margin-bottom: 60px;
                color: white;
            }

            paper-button.login {
                display: block;
                width: 100%;
                height: 50px;
                border: none;
                background: linear-gradient(120deg,#3498db,#8e44ad,#3498db);
                background-size: 200%;
                color: #fff;
                outline: none;
                cursor: pointer;
                transition: .5s;
            }

            paper-button.login: hover {
                background-position: right;
            }

            .image{
                width: 350px;
                border-radius: 10px;
                height: 100px;
            }

            paper-input.log {
                --primary-text-color: white;
                --paper-input-container-color: white;
                --paper-input-container-focus-color: white;
                --paper-input-container-invalid-color: black;
            }
         </style>
         <div class="conteiner">
            <h1>Bienvendido</h1>
            <img src="https://portalcentro.firebaseapp.com/assets/iniciodesesion-02%20(1).png" class="image">
            <paper-input class="log" label="Usuario" value="{{login.username}}" required auto-validate error-message="necesita poner tu usuario">
            </paper-input>
            <paper-input class="log" label="Contraseña" type="password" value="{{login.password}}" required auto-validate error-message="necesita poner tu contraseña">
            </paper-input>
            <br>
            <paper-button raised class="login" on-tap="entrar">entrar</paper-button>
            <paper-toast id="toast" text="Bienvenido {{login.username}}"></paper-toast>
            <paper-toast id="toast1" text="Usuario y/o contraseña incorrecto"></paper-toast>
         </div>
         `;
     }

     static get properties() {
         return {
             login: {
                 type: Object,
                 value() {
                     return {
                         username: '',
                         password: '',
                         img: '/iniciodesesion.png'
                     }
                 }
             }
         }
     }

     entrar() {
         if(this.login.username === 'alejandro' && this.login.password === '1234') {
             this.$.toast.open();
         }
         else {
             this.$.toast1.open();
         }

         this.dispatchEvent(new CustomEvent("login-user",{
             bubbles:false,
             composed:false,
             detail: this.login
         }))
     }
 }

 window.customElements.define('login-component',LoginComponent);