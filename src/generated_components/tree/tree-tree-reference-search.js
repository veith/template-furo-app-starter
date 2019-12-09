// Code generated by @furo/ui-builder. DO NOT EDIT.
import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';

// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/i18n.js';

/**
 * service specs for the tree api
 *
 * @summary todo: write summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class TreeTreeReferenceSearch extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      // The default style (md like) supports a condensed form. It is a little bit smaller then the default
      condensed: {
        type: Boolean,
      },
    };
  }

  // Fokus
  focus(d) {
    this._FBPTriggerWire('--focused', d);
  }

  /**
   * flow is ready lifecycle method
   */
  _FBPReady() {
    super._FBPReady();
    // this._FBPTraceWires()
  }

  /**
   *  Bind your furo-data-object event @-object-ready
   * @public
   * @param data
   */
  bindData(field) {
    this.field = field;
    this._FBPTriggerWire('--field-injected', field);

    this.field.addEventListener('field-value-changed', e => {
      if (e.detail._name === 'type') {
        this._FBPTriggerWire('--htsUpdated', this.field.link._value);
      }
    });
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return Theme.getThemeForComponent(this.component_name) || css``;
  }

  /**
   * @private
   * @returns {TemplateResult}
   * @private
   */
  render() {
    // language=HTML
    return html`
      <!-- It is a good practice to set a description -->
      <furo-data-reference-search
        ?condensed="$(this.condensed)"
        display-field="display_name"
        min-term-length="1"
        value-field="id"
        @-search="--term"
        ƒ-bind-data="----field-injected"
        ƒ-collection-in="--collection"
      ></furo-data-reference-search>

      <!-- It is a good practice to set a description -->
      <furo-collection-agent
        service="dfsdfsfdsdf"
        @-response="--collection"
        ƒ-hts-in="--field-injected(*.link._value), --htsUpdated"
        ƒ-search="--term"
      ></furo-collection-agent>
    `;
  }
}

window.customElements.define('tree-tree-reference-search', TreeTreeReferenceSearch);
