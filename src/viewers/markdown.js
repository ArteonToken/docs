import { html, LitElement } from "lit";

export default customElements.define('markdown-viewer', class MarkdownViewer extends LitElement {
  constructor() {
    super()
  }

  connectedCallback() {
    super.connectedCallback()
  }

  async load(id) {

  }
  
  render() {
    return html`
    <style>
      :host {
        display: flex;
        width: 100%;
        height: 100%;
      }
    </style>
    `
  }
})