//Draw text on canvas
Blockly.Blocks['show_text'] = {
  init: function() {
    this.appendDummyInput().appendField('Show text ');
    this.appendValueInput('TEXT')
        .setCheck('String');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Print the text to HTML canvas.');
  }
};
Blockly.JavaScript['show_text'] = function(block) {
  var text = Blockly.JavaScript.valueToCode(block, 'TEXT',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var cmd = 'ctx.strokeText(' + text + ',x, y);\n';
  return cmd;
};

// Set the drawing colour
Blockly.Blocks['set_colour'] = {
  init: function() {
    this.appendDummyInput().appendField('Set colour ');
    this.appendValueInput('VALUE');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Set drawing colour');
  }
};
Blockly.JavaScript['set_colour'] = function(block) {
  var colour = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var cmd ='ctx.strokeStyle = ' + colour + ';\n';
  return cmd;
};

//Draw a circle
Blockly.Blocks['draw_circle'] = {
  init: function() {
    this.appendDummyInput().appendField('Draw circle ');
    this.appendValueInput('RADIUS');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Draw a circle on HTML canvas.');
  }
};
Blockly.JavaScript['draw_circle'] = function(block) {
  var radius = Blockly.JavaScript.valueToCode(block, 'RADIUS',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var cmd = '// Draw circle\n'
  cmd+= 'ctx.beginPath();\n';
  cmd += 'ctx.arc(x, y, ' + radius + ', 0, 2 * Math.PI);\n';
  cmd += 'ctx.stroke();\n\n';
  return cmd;
};


//Draw a line
Blockly.Blocks['draw_line'] = {
  init: function() {
    this.appendDummyInput().appendField('Draw line ');
    this.appendValueInput('VALUE1');
    this.appendValueInput('VALUE2');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Draw a line on HTML canvas.');
  }
};
Blockly.JavaScript['draw_line'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE1',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var argument1 = Blockly.JavaScript.valueToCode(block, 'VALUE2',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';   
  var cmd = 'ctx.lineTo (' + argument0 + ',' + argument1 + ');\n';
  cmd += 'ctx.stroke();\n';
  return cmd;
};

//Clear the Canvas
Blockly.Blocks['clear_screen'] = {
  init: function() {
    this.appendDummyInput().appendField('Clear Screen');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Clear HTML canvas.');
  }
};
Blockly.JavaScript['clear_screen'] = function(block) {
  var cmd = 'var c = document.getElementById("myCanvas");\n';
  cmd += 'var ctx = c.getContext("2d");\n';
  cmd += 'ctx.font = "30px Arial";\n';
  cmd+='var x = c.width / 2 ;\n';
  cmd+='var y = c.height / 2 ;\n';
  cmd += 'ctx.clearRect(0, 0, c.width, c.height);\n\n';
  return cmd;
};
 


//Move the drawing position cursor
Blockly.Blocks['move_to'] = {
  init: function() {
    this.appendDummyInput().appendField('Move to ');
    this.appendValueInput('VALUEX');
    this.appendValueInput('VALUEY');
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Move cursor to x,y');
  }
};
Blockly.JavaScript['move_to'] = function(block) {
  var x = Blockly.JavaScript.valueToCode(block, 'VALUEX',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
  var y = Blockly.JavaScript.valueToCode(block, 'VALUEY',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';  
  var cmd = 'ctx.moveTo (' + x + ',' + y + ');\n';
  return cmd;
};

