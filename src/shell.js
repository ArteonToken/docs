import { html, LitElement } from "lit";

import './elements/toolbar.js'
import 'custom-pages'

export default customElements.define('doc-shell', class DocShell extends LitElement {
  constructor() {
    super()
  }

  connectedCallback() {
    super.connectedCallback()
    onhashchange = this.#onhashchange.bind(this)
  }

  deBang(hash) {
    const parts = hash.split('#!/')
    return parts.length > 0 ? parts[1] : parts[0]
  }

  hashBang(hash) {
    return `#!/${hash}`
  }

  #onhashchange() {
    const hash = this.deBang(location.hash)
    const parts = hash.split('?')
    const routeParts = parts[0].split('/')
    const params = parts[1]

    if (params) params = params.split('&')
    const object = {}
    params.foreach(param => {
      const [name, value] = param.split('=')
      object[name] = value
    })

    this.#pages.select(object.type)
    const selected = this.shadowRoot.querySelector(`[data-route="${object.type}"]`)
    selected.load(routeParts[0])
  }

  get #pages() {
    return this.shadowRoot.querySelector('.pages')
  }

  get #tree() {
    return this.shadowRoot.querySelector('.tree')
  }

  render() {
    return html`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%;
        height: 100%;
      }

      .tree {
        display: flex;
        flex-direction: column;
        width: 256px;
        height: 100%;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
      }

      .pages {
        height: 100%;
        width: calc(100% - 256px);
      }
      main {
        display: flex;
        position: relative;
        width: 100%;
        height: 100%;
      }
    </style>
    <doc-toolbar></doc-toolbar>
    <aside class="tree">
      <a href="${this.hashBang('home')}">home</a>
    </aside>
    <custom-pages class="pages" attr-for-selected="data-route">
      <doc-viewer data-route="doc"></doc-viewer>
      <markdown-viewer data-route="markdown"></markdown-viewer>
    </custom-pages>
    `
  }
})