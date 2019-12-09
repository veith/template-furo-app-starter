{
  "_writeprotection": false,
  "theme": "WidgetBaseTheme",
  "class_name": "ExperimentExperimentCreateWidget",
  "component_name": "experiment-experiment-create-widget",
  "description": "experiment spec for testing",
  "summary": "summary",
  "import_members": [
    [
      " LitElement, html, css ",
      "lit-element"
    ],
    [
      "Theme",
      "@furo/framework/theme.js"
    ],
    [
      "FBP",
      "@furo/fbp"
    ],
    [
      "i18n",
      "@furo/framework/i18n.js",
      "eslint-disable-next-line no-unused-vars"
    ]
  ],
  "imports": [
    "@furo/data-input",
    "@furo/form"
  ],
  "path": "src/project-components/demo",
  "style": {
    "children": {
      ":host([hidden])": {
        "children": {},
        "attributes": {
          "display": "none"
        }
      },
      ":host": {
        "children": {},
        "attributes": {
          "display": "block"
        }
      }
    },
    "attributes": {}
  },
  "properties": {},
  "template": [
    {
      "component": "furo-form",
      "description": "Form",
      "attributes": {
        "header-text": "${i18n.t('this.label')}",
        "secondary-text": "width:300px;margin:100px auto; border-top:5px solid #FEA248;"
      },
      "children": [],
      "fields": [
        {
          "description": "field: furo_data_text_input",
          "component": "furo-data-text-input",
          "flags": [
            "condensed"
          ],
          "attributes": {
            "ƒ-bind-data": "--data(*.furo_data_text_input)"
          }
        },
        {
          "description": "field: furo_data_money_input",
          "component": "furo-data-money-input",
          "flags": [
            "condensed"
          ],
          "attributes": {
            "ƒ-bind-data": "--data(*.furo_data_money_input)"
          }
        }
      ]
    }
  ],
  "exposedWires": [
    {
      "name": "focus",
      "wire": "--focused",
      "description": "Setze den Fokus"
    }
  ],
  "keyboardShortcuts": [],
  "methods": {
    "bindData": {
      "description": "Use ƒ-bind-data to bind your data object\n und so",
      "args": "data",
      "code": "dGhpcy5fRkJQVHJpZ2dlcldpcmUoJy0tZGF0YScsIGRhdGEpOwogICAgdGhpcy5maWVsZCA9IGRhdGE7"
    }
  },
  "source": "specs/experiment/experiment.type.spec"
}