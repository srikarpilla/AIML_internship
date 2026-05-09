// ============================================================
// Part 2: Blockly Custom Block — open_gate_with_speed
// File: open_gate_block.js
// ============================================================

// ----------------------------------------------------------
// SECTION 1: Block Definition (JSON style via Blockly.Blocks)
// ----------------------------------------------------------

Blockly.Blocks['open_gate_with_speed'] = {
  init: function () {
    this.jsonInit({
      type: 'open_gate_with_speed',
      message0: 'Open Gate at speed %1',
      args0: [
        {
          type: 'field_number',
          name: 'SPEED',
          value: 5,
          min: 1,
          max: 10,
          precision: 1,
        },
      ],
      colour: 160,
      tooltip: 'Opens the servo gate at the given speed (1 = slowest, 10 = fastest).',
      helpUrl: '',
      previousStatement: null,
      nextStatement: null,
    });
  },
};

// ----------------------------------------------------------
// SECTION 2: JavaScript Code Generator
// ----------------------------------------------------------

javascriptGenerator.forBlock['open_gate_with_speed'] = function (block) {
  const speed = block.getFieldValue('SPEED');

  // Map speed 1-10 to a servo delay (ms).
  // Speed 10 = 5ms delay (fast), Speed 1 = 50ms delay (slow).
  const delayMs = Math.round(55 - speed * 5);

  const code = `
// Open gate — speed level: ${speed}
for (let angle = 0; angle <= 90; angle += 1) {
  servo.write(angle);
  delay(${delayMs});
}
`;

  return code;
};

// ----------------------------------------------------------
// SECTION 3: Raw JSON Block Definition (for Blockly DevTools)
// ----------------------------------------------------------

/*
{
  "type": "open_gate_with_speed",
  "message0": "Open Gate at speed %1",
  "args0": [
    {
      "type": "field_number",
      "name": "SPEED",
      "value": 5,
      "min": 1,
      "max": 10,
      "precision": 1
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": 160,
  "tooltip": "Opens the servo gate. Speed 1 is slowest, 10 is fastest.",
  "helpUrl": ""
}
*/
