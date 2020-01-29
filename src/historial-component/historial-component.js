import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

class HistorialComponent extends PolymerElement {
    static get template() {
        return html `
        <table >

        <tr>
      
          <th scope="row">Id</th>
      
          <th>Litros</th>
      
          <th>Fecha</th>
      
          <th>total</th>
      
        </tr>
      
        <tr>
      
          <th>1</th>

          <th>1200</th>
      
          <td>29-ene-2020</td>
      
          <td>18</td>
          
        </tr>
      
      </table>
        `;
    }

    static get properties() {
        return {

        }
    }
}

window.customElements.define('historial-component',HistorialComponent);