import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class FooterElement extends PolymerElement {
    static get template() {
        return html `
            <style>
                footer {
                    background-color: blue;
                }
            </style>
            <footer>
                <h5>hola</h5>
            </footer>
        `;
    }

    static get properties() {
        return {

        }
    }
 }

 window.customElements.define('footer-element',FooterElement);