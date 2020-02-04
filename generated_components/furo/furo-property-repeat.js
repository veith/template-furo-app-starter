// Code generated by @furo/ui-builder. DO NOT EDIT.
import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';

// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/i18n.js';

import '@furo/data-input';
import '@furo/form';
import './furo-property-form.js';

/**
 * Type to define property values with type information
 *
 * @summary todo: write summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class FuroPropertyRepeat extends FBP(LitElement) {
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
      Theme.getThemeForComponent('RepeatBaseTheme') ||
      css`
        :host {
          display: block;
        }

        :host[hidden] {
          display: none;
        }

        furo-button {
          margin: 12px 0 0 6px;
        }

        furo-horizontal-flex {
          margin-bottom: 6px;
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
      <hr></hr> 

      <!-- the core of the repeat item is the form -->
      <furo-data-repeat delete-icon="delete" repeated-component="furo-property-form" ƒ-add="--adderTriggered" ƒ-bind-data="--data"></furo-data-repeat> 

      <!-- It is a good practice to set a description -->
      <furo-horizontal-flex>

        <!-- It is a good practice to set a description -->
        <span flex></span> 

        <!-- It is a good practice to set a description -->
        <furo-button outline label="Add Property" @-click="--adderTriggered"></furo-button> 
      </furo-horizontal-flex> 
    `;
  }
}

window.customElements.define('furo-property-repeat', FuroPropertyRepeat);
