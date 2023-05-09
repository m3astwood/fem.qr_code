import { css, html, LitElement } from "lit";

export class MxCard extends LitElement {
  static get properties() {
    return {
      imageSrc: { type: String },
    };
  }

  constructor() {
    super();
    this.imageSrc = "";
  }

  render() {
    return html`
      <div class="card">
        <img src="${this.imageSrc}">
        <slot name="title"></slot>
        <slot name="content"></slot>
      </div>
    `;
  }

  static get styles() {
    return css`
      :host {
        --background-color: white;
        --shadow-color: black;
        --border-radius: 1.5em;
        --content-color: grey;
        display: block;
        max-width: 350px;
        filter: drop-shadow(0px 5px 15px var(--shadow-color));
      }

      .card {
        display: grid;
        grid-auto-flow: row;
        background-color: var(--background-color);
        border-radius: var(--border-radius);
        padding: 1em;
        max-width: 100%;
        text-align: center;
      }

      slot[name="title"] {
        font-size: 1.125em;
      }

      slot[name="content"] {
        color: var(--content-color);
        font-size: 1.25em;
      }

      img {
        border-radius: calc(var(--border-radius) * 0.5);
        overflow: hidden;
        max-width: 100%;
        aspect-ratio: 1/1;
        object-fit: cover;
      }
    `;
  }
}

window.customElements.define("mx-card", MxCard);
