import { html, LitElement } from "lit";

export default customElements.define('doc-toolbar', class DocToolbar extends LitElement {
  constructor() {
    super()
  }

  connectedCallback() {
    super.connectedCallback()
  }

  
  render() {
    return html`
    <style>
      :host {
        display: flex;
        width: 100%;
        height: 58px;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
      }
    </style>
    `
  }
})