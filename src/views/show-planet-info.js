import { LitElement, html } from 'lit-element';
import {getPlanetInfo} from '../service/get-planet-info'

class ShowPlanetInfo extends LitElement {
  static get properties() {
    return {
      planetInfo: { type: Object },
    };
  }
  constructor() {
    super();
    this.getPlanetInfo();
  }
  async getPlanetInfo () {
    this.planetInfo =  await getPlanetInfo();
  }
  render() {
    if(!this.planetInfo) {
      return html``;
    }
    return html`
    <ul>
    <li>${this.planetInfo.date}</li>
    <li>${this.planetInfo.explanation}</li>
    <li>${this.planetInfo.media_type}</li>
    <li>${this.planetInfo.service_version}</li>
    <li>${this.planetInfo.title}</li>
    <li><img src="${this.planetInfo.url}" alt="Smiley face" height="50%" width="50%"></li>
    <li><img src="${this.planetInfo.hdurl}" alt="Smiley face" height="50%" width="50%"></li>
    </ul>
    `;
  }
}

customElements.define('show-planet-info', ShowPlanetInfo);