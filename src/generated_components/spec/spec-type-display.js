// Code generated by @furo/ui-builder. DO NOT EDIT.
import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';

// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/i18n.js';

import '@furo/data-input';
import '@furo/form';
import './spec-typeproto-display.js';

/**
 * Defines a type in the furo spec
 *
 * @summary todo: write summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class SpecTypeDisplay extends FBP(LitElement) {
  /**
   * @private
   * @return {Object}
   */
  static get properties() {
    return {
      // Header text to label the form
      headerText: {
        type: String,
        attribute: 'header-text',
      },
      // Secondary text for a detailed description
      secondaryText: {
        type: String,
        attribute: 'secondary-text',
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
  }

  /**
   * Themable Styles
   * @private
   * @return {CSSResult}
   */
  static get styles() {
    // language=CSS
    return (
      Theme.getThemeForComponent('DisplayBaseTheme') ||
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
      <furo-form
        header-text="${this.headerText ? this.headerText : ''}"
        secondary-text="${this.secondaryText ? this.secondaryText : ''}"
      >
        <!-- It is a good practice to set a description -->
        <furo-form-layouter four>
          <!-- field: name -->
          <furo-data-display
            condensed
            double
            ƒ-bind-data="--data(*.name)"
            ƒ-focus="--focused"
          ></furo-data-display>

          <!-- field: type -->
          <furo-data-display condensed double ƒ-bind-data="--data(*.type)"></furo-data-display>

          <!-- field: description -->
          <furo-data-display full ƒ-bind-data="--data(*.description)"></furo-data-display>

          <!-- field: __proto -->
          <spec-typeproto-display
            condensed
            full
            header-text="${i18n.t('spec.typeproto.form.header.text')}"
            secondary-text="${i18n.t('spec.typeproto.form.secondary.text')}"
            ƒ-bind-data="--data(*.__proto)"
          ></spec-typeproto-display>

          <!-- field: fields -->
          <furo-data-display full ƒ-bind-data="--data(*.fields)"></furo-data-display>
        </furo-form-layouter>
      </furo-form>
    `;
  }
}

window.customElements.define('spec-type-display', SpecTypeDisplay);
