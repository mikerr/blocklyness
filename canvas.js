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

Blockly.Python['show_text'] = function(block) {
  var text = Blockly.Python.valueToCode(block, 'TEXT',
      Blockly.Python.ORDER_FUNCTION_CALL) || '\'\'';
  var cmd = 'font = pygame.font.Font(\'freesansbold.ttf\',20)\n';
  cmd += 'text = font.render(' + text + ', True, colour, white)\n';
  cmd += 'textRect = text.get_rect() \n';
  cmd += 'textRect.center = (X,Y) \n';
  cmd += 'screen.blit(text, textRect) \n';
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
Blockly.Python['set_colour'] = function(block) {
  var colour = Blockly.Python.valueToCode(block, 'VALUE',
      Blockly.Python.ORDER_FUNCTION_CALL) || '\'\'';
  var cmd ='\ndef hex_to_rgb(value):\n';
  cmd += '    value = value.lstrip(\'#\')\n';
  cmd += '    lv = len(value)\n';
  cmd += '    return tuple(int(value[i:i + lv // 3], 16) for i in range(0, lv, lv // 3))\n\n';

  cmd += 'colour = hex_to_rgb(' + colour + ');\n';
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
  var cmd = '// Draw circle\n';
  cmd += 'ctx.beginPath();\n';
  cmd += 'ctx.arc(x, y, ' + radius + ', 0, 2 * Math.PI);\n';
  cmd += 'ctx.stroke();\n\n';
  return cmd;
};

Blockly.Python['draw_circle'] = function(block) {
  var radius = Blockly.Python.valueToCode(block, 'RADIUS',
      Blockly.Python.ORDER_FUNCTION_CALL) || '\'\'';
  var cmd = 'pygame.draw.circle(screen,colour,(X,Y),' + radius + ',2);\n';
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
Blockly.Python['draw_line'] = function(block) {
  var argument0 = Blockly.Python.valueToCode(block, 'VALUE1',
      Blockly.Python.ORDER_FUNCTION_CALL) || '\'\'';
  var argument1 = Blockly.Python.valueToCode(block, 'VALUE2',
      Blockly.Python.ORDER_FUNCTION_CALL) || '\'\'';   
  var cmd = 'pygame.draw.line(screen,colour,(X,Y),(' + argument0 + ',' + argument1 + '));\n';
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
Blockly.Python['clear_screen'] = function(block) {
  Blockly.Python.definitions_['import_pygame'] = 'import pygame';
  var cmd = 'X = Y = 200\n';
  cmd += 'white = (255,255,255)\n';
  cmd += 'black = (0,0,0)\n';
  cmd += 'colour = black\n';
  cmd += 'pygame.init()\n';
  cmd += 'screen = pygame.display.set_mode((400, 300))\n';
  cmd += 'screen.fill(white)\n\n';
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
  var cmd = 'x = ' + x + '; y = ' + y + ';\n';
  cmd += 'ctx.moveTo (x,y);\n';
  return cmd;
};

Blockly.Python['move_to'] = function(block) {
  var x = Blockly.Python.valueToCode(block, 'VALUEX',
      Blockly.Python.ORDER_FUNCTION_CALL) || '\'\'';
  var y = Blockly.Python.valueToCode(block, 'VALUEY',
      Blockly.Python.ORDER_FUNCTION_CALL) || '\'\'';  
  var cmd = 'x = ' + x + '; y = ' + y + ';\n';
  return cmd;
};
