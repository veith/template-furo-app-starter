// Code generated by @furo/ui-builder. DO NOT EDIT.
import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';

// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/i18n.js';

import '@furo/data-input';
import '@furo/form';
import './google-protobuf-fieldmask-form.js';

/**
 * A field mask in update operations specifies which fields of the targeted resource are going to be updated. https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/field_mask.proto
 *
 * @summary todo: write summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class GoogleProtobufFieldmaskMapItem extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      // Key of the map item
      mapKey: {
        type: String,
        attribute: 'map-key',
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
  bindData(data) {
    this._FBPTriggerWire('--data', data);
    this.field = data;
    this.mapKey = data._name;
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('MapItemBaseTheme') ||
      css`
        :host {
          display: block;
        }

        :host[hidden] {
          display: none;
        }
      `
    );
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
      <furo-form header-text="${this.mapKey ? this.mapKey : ''}">
        <!-- the core of the map item is the form -->
        <google-protobuf-fieldmask-form
          ƒ-bind-data="--data"
          ƒ-focus="--focused"
        ></google-protobuf-fieldmask-form>
      </furo-form>
    `;
  }
}

window.customElements.define('google-protobuf-fieldmask-map-item', GoogleProtobufFieldmaskMapItem);
