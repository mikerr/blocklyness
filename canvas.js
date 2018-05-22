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
    this.setHelpUrl('show_text.html');
  }
};
Blockly.JavaScript['show_text'] = function(block) {

  var argument0 = Blockly.JavaScript.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_FUNCTION_CALL) || '\'\'';
      
  return ['showtext (' + argument0 + ')', Blockly.JavaScript.ORDER_ATOMIC];
};

function showtext (text) {  
var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.font = "30px Arial";

ctx.clearRect(0, 0, c.width, c.height);
ctx.strokeText(text, 10, 100);
}
