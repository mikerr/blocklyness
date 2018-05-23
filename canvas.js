Blockly.Blocks['show_text'] = {
  init: function() {
    this.appendDummyInput().appendField('show text: ');
    this.appendValueInput('VALUE')
        .setCheck('String')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Print the text to HTML canvas.');
  }
};
Blockly.JavaScript['show_text'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
      
  return 'showtext (' + argument0 + ');\n';
};

function showtext (text) {  
ctx.font = "30px Arial";
ctx.strokeText(text, x, y);
}

Blockly.Blocks['draw_circle'] = {
  init: function() {
    this.appendDummyInput().appendField('draw_circle: ');
    this.appendValueInput('VALUE')
        .setCheck('String')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Draw a circle on HTML canvas.');
  }
};
Blockly.JavaScript['draw_circle'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
      
  return 'draw_circle (' + argument0 + ');\n';
};

function draw_circle (text) {  
ctx.beginPath();
ctx.arc(x, y, 40, 0, 2 * Math.PI);
ctx.stroke();
}

Blockly.Blocks['draw_line'] = {
  init: function() {
    this.appendDummyInput().appendField('draw_line: ');
    this.appendValueInput('VALUE')
        .setCheck('String')
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(160);
    this.setTooltip('Draw a line on HTML canvas.');
  }
};
Blockly.JavaScript['draw_line'] = function(block) {
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
      
  return 'draw_line (' + argument0 + ');\n';
};


function draw_line (text) {  
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke();
}

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
  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
      
  return 'clear_screen (' + argument0 + ');\n';
};

function clear_screen (text) {  
c = document.getElementById("myCanvas");
ctx = c.getContext("2d");

if (typeof x === 'undefined') {
  x = c.width / 2;
  y = c.height / 2;
  }
ctx.clearRect(0, 0, c.width, c.height);
}

Blockly.Blocks['move_to'] = {
  init: function() {
    this.appendDummyInput().appendField('Move to:');
    this.appendValueInput('VALUEX')
    this.appendValueInput('VALUEY')
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
  return 'move_to (' + x + ',' + y + ');\n';
};

function move_to (posx,posy) { 
x = posx;
y = posy;
ctx.moveTo(posx, posy);
}
