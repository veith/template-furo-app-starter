// Code generated by @furo/ui-builder. DO NOT EDIT.
import { LitElement, html, css } from 'lit-element';
import { Theme } from '@furo/framework/theme.js';
import { FBP } from '@furo/fbp';

// eslint-disable-next-line no-unused-vars
import { i18n } from '@furo/framework/i18n.js';

import '@furo/data-input';
import '@furo/form';

/**
 * Person message type
 *
 * @summary todo: write summary
 * @customElement
 * @polymer
 * @appliesMixin FBP
 */
export class PersonPersonDisplay extends FBP(LitElement) {
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
      Theme.getThemeForComponent(this.component_name) ||
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
      <furo-form-layouter four>
        <!-- field: id -->
        <furo-data-display
          condensed
          ƒ-bind-data="--data(*.id)"
          ƒ-focus="--focused"
        ></furo-data-display>

        <!-- field: display_name -->
        <furo-data-display condensed ƒ-bind-data="--data(*.display_name)"></furo-data-display>

        <!-- field: name -->
        <furo-data-display condensed ƒ-bind-data="--data(*.name)"></furo-data-display>

        <!-- field: first_name -->
        <furo-data-display condensed ƒ-bind-data="--data(*.first_name)"></furo-data-display>

        <!-- field: phone_nr -->
        <furo-data-display condensed ƒ-bind-data="--data(*.phone_nr)"></furo-data-display>

        <!-- field: skills -->
        <furo-data-repeat
          condensed
          repeated-component="furo-data-display"
          ƒ-bind-data="--data(*.skills)"
        ></furo-data-repeat>

        <!-- field: update_mask -->
        <furo-data-display condensed ƒ-bind-data="--data(*.update_mask)"></furo-data-display>
      </furo-form-layouter>
    `;
  }
}

window.customElements.define('person-person-display', PersonPersonDisplay);
