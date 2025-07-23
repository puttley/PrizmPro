
//Blockly.Blocks.math_change.disabled = true; // disables this block in variables

var help_URL = 'https://www.pitsco.com'

Blockly.Blocks['program_end'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("program end");
    this.setPreviousStatement(true, null);
    this.setColour('#eea011');
 this.setTooltip("Terminates the execution of program code that is running.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['program_begin'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("program start");
    this.setNextStatement(true, null);
    this.setColour('#eea011');
 this.setTooltip("Initializes the SEEKER controller. Must be placed at the beginning of program code.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['button_start'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["start","start"], ["up","up"], ["down","down"], ["right","right"], ["left","left"]]), "button")
        .appendField("button is")
        .appendField(new Blockly.FieldDropdown([["pressed","true"], ["unpressed","false"]]), "state");
    this.setOutput(true, null);
    this.setColour('#eea011');
 this.setTooltip("Returns the logic state of the start button. Pressed is True or 1. Unpressed is False or 0");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['buttons_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["green","green"], ["black","black"]]), "button")
        .appendField("button pressed ?");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#eea011');
 this.setTooltip("Returns the logic state of the selected button. Pressed is True or 1. Unpressed is False or 0.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['motor_set_power'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"],]), "motor")
        .appendField("set power to");
    this.appendValueInput("power")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#587081');
 this.setTooltip("Set the selected DC motor power level. Range is 0 - 100%. A positive power results in a CW spin direction. A negative power results in a CCW spin direction.");
 this.setHelpUrl(help_URL);
  }
};


Blockly.Blocks['motor_set_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"],]), "motor")
        .appendField("set speed to");
    this.appendValueInput("speed")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("dps");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#587081');
 this.setTooltip("Set the selected DC motor constant speed in degrees per second (dps).Range is -720 to 720 dps. A positive speed results in a CW spin direction. A negative speed results in a CCW spin direction.");
 this.setHelpUrl(help_URL);
  }
};


Blockly.Blocks['motor_set_powers'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor | set powers to");
    this.appendValueInput("power_1")
        .setCheck("Number")
        .appendField("1");
    this.appendValueInput("power_2")
        .setCheck("Number")
        .appendField("2");
    this.appendValueInput("power_3")
        .setCheck("Number")
        .appendField("3");
    this.appendValueInput("power_4")
        .setCheck("Number")
        .appendField("4");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#587081');
 this.setTooltip("Set each DC motor power level. Range is 0 - 100%. A positive power results in a CW spin direction. A negative power results in a CCW spin direction.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['motor_set_speeds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor | set speeds to");
    this.appendValueInput("speed_1")
        .setCheck("Number")
        .appendField("1");
    this.appendValueInput("speed_2")
        .setCheck("Number")
        .appendField("2");
    this.appendValueInput("speed_3")
        .setCheck("Number")
        .appendField("3");
    this.appendValueInput("speed_4")
        .setCheck("Number")
        .appendField("4");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#587081');
 this.setTooltip("Set each DC motor to a constant speed in degrees per second (dps). Range is -720 to 720 dps. A positive speed results in a CW spin direction. A negative speed results in a CCW spin direction.");
 this.setHelpUrl(help_URL);
  }
};


Blockly.Blocks['motor_rotate_degree'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"],]), "motor")
        .appendField("rotate at");
    this.appendValueInput("speed")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("degrees per second to degree count");
    this.appendValueInput("degrees")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#587081');
 this.setTooltip("Rotate the selected DC motor, at a set constant speed, to a target degree count. The DC motor will hold it's position once the degree target has been reached. A positive degree number results in a CW rotation. A negative degree number results in a CCW rotation.");
 this.setHelpUrl(help_URL);
  }
};


Blockly.Blocks['motor_rotate_target'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"],]), "motor")
        .appendField("rotate at");
    this.appendValueInput("speed")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("degrees per second to encoder count");
    this.appendValueInput("count")
        .setCheck("Number");
    this.appendDummyInput();
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#587081');
 this.setTooltip("Rotate the selected DC motor at a constant speed in degrees per second (dps) to a target encoder count. The motor will hold it's position once the target count has been reached. One DC motor shaft rotation is equal to 1440 counts. CW rotation of the DC motor shaft increments the encoder count. CCW rotation of the DC motor shaft decrements the encoder count.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['motor_set_targets'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor | rotate to encoder targets");
    this.appendValueInput("s1")
        .setCheck("Number")
        .appendField("s1");
    this.appendValueInput("t1")
        .setCheck("Number")
        .appendField("t1");
    this.appendValueInput("s2")
        .setCheck("Number")
        .appendField("s2");
    this.appendValueInput("t2")
        .setCheck("Number")
        .appendField("t2");
    this.appendValueInput("s3")
        .setCheck("Number")
        .appendField("s3");
    this.appendValueInput("t3")
        .setCheck("Number")
        .appendField("t3");
    this.appendValueInput("s4")
        .setCheck("Number")
        .appendField("s4");
    this.appendValueInput("t4")
        .setCheck("Number")
        .appendField("t4");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#587081');
 this.setTooltip("Set all four motor channel targets and speeds at once. Values t1 - t4 are raw count encoder targets, s1 - s4 are speeds in degrees per second (dps).");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['motor_set_degrees'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor | rotate to degree targets");
    this.appendValueInput("s1")
        .setCheck("Number")
        .appendField("s1");
    this.appendValueInput("d1")
        .setCheck("Number")
        .appendField("d1");
    this.appendValueInput("s2")
        .setCheck("Number")
        .appendField("s2");
    this.appendValueInput("d2")
        .setCheck("Number")
        .appendField("d2");
    this.appendValueInput("s3")
        .setCheck("Number")
        .appendField("s3");
    this.appendValueInput("d3")
        .setCheck("Number")
        .appendField("d3");
    this.appendValueInput("s4")
        .setCheck("Number")
        .appendField("s4");
    this.appendValueInput("d4")
        .setCheck("Number")
        .appendField("d4");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#587081');
 this.setTooltip("Set all four motor channel targets and speeds at once. Values t1 - t4 are degree targets, s1 - s4 are speeds in degrees per second (dps).");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['motor_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["1234","1234"]]), "motor");
    this.appendDummyInput()
        .appendField("stop with")
        .appendField(new Blockly.FieldDropdown([["coast","coast"], ["brake","brake"]]), "brake");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#587081');
 this.setTooltip("Stop the selected DC motor using a 'brake' or 'coast' action.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['motor_busy'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "motor");
    this.appendDummyInput()
        .appendField("busy ?");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#587081');
 this.setTooltip("Returns True or 1 if the selected DC motor is in process of moving to a encoder count or degrees target. Returns False or 0 when the target is reached.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['set_motor_invert'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("motor")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "motor");
    this.appendDummyInput()
        .appendField("invert direction")
        .appendField(new Blockly.FieldDropdown([["True","True"], ["False","False"]]), "invert");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#587081');
 this.setTooltip("Inverts the direction of rotation for the selected DC motor. This harmonizes the control of left and right facing wheel drive motors on a mobile robot.");
 this.setHelpUrl(help_URL);
  }
};


Blockly.Blocks['servo_set_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("servo")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "servo")
        .appendField("set speed to");
    this.appendValueInput("speed")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#C75052");
 this.setTooltip("Set the rotation speed of the selected servo to 0 - 100%.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['servo_set_speeds'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("servo | set speeds to");
    this.appendValueInput("speed_1")
        .setCheck("Number")
        .appendField("1");
    this.appendValueInput("speed_2")
        .setCheck("Number")
        .appendField("2");
    this.appendValueInput("speed_3")
        .setCheck("Number")
        .appendField("3");
    this.appendValueInput("speed_4")
        .setCheck("Number")
        .appendField("4");
    this.appendValueInput("speed_5")
        .setCheck("Number")
        .appendField("5");
    this.appendValueInput("speed_6")
        .setCheck("Number")
        .appendField("6");
    this.appendDummyInput()
        .appendField("%");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#C75052");
 this.setTooltip("Set the rotation speed of each servo to 0 - 100%.");
 this.setHelpUrl(help_URL);
  }
};


Blockly.Blocks['servo_set_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("servo")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "servo")
        .appendField("set position to");
    this.appendValueInput("position")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#C75052");
 this.setTooltip("Rotate the selected servo to a set position between 0 - 180 degrees. 90 degrees is the servo center position.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['servo_set_positions'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("servo | set positions to");
    this.appendValueInput("position_1")
        .setCheck("Number")
        .appendField("1");
    this.appendValueInput("position_2")
        .setCheck("Number")
        .appendField("2");
    this.appendValueInput("position_3")
        .setCheck("Number")
        .appendField("3");
    this.appendValueInput("position_4")
        .setCheck("Number")
        .appendField("4");
    this.appendValueInput("position_5")
        .setCheck("Number")
        .appendField("5");
    this.appendValueInput("position_6")
        .setCheck("Number")
        .appendField("6");
    this.appendDummyInput()
        .appendField("degrees");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#C75052");
 this.setTooltip("Rotate each servo to a set position between 0 - 180 degrees. 90 degrees is the servo center position.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['get_servo_position'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("servo")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "servo")
        .appendField("get position");
    this.setOutput(true, null);
    this.setColour("#C75052");
 this.setTooltip("Returns the position of the selected servo. The position returned is 0 - 180 degrees.");
 this.setHelpUrl(help_URL);
  }
};


Blockly.Blocks['set_crservo_state'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("servo")
          .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "servo")
    this.appendDummyInput()
        .appendField("set continuous rotation (CR) spin")
        .appendField(new Blockly.FieldDropdown([["right","right"], ["left","left"], ["stop","stop"]]), "direction");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#C75052');
 this.setTooltip("Sets the spin rotation of a continuous rotation servo.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['enable_servos'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("enable servos");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["True","True"], ["False","False"]]), "enabled");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#C75052');
 this.setTooltip("Enables / Disables all servo channels.");
 this.setHelpUrl(help_URL);
  }
};



Blockly.Blocks['get_encoder'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("encoder")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "encoder")
        .appendField("get raw count");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Get the current count value of the selected DC motor encoder.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['get_encoder_degrees'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("encoder")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "encoder")
        .appendField("get degrees");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Get the current position in degrees of the selected DC motor encoder.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['get_lidar'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("port")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "port")
        .appendField("TOF sensor | get distance (mm)");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Returns the distance in millimeters to an object detected by the TOF sensor. Range is approximately 30 - 1000 millimeters.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['get_line'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("port")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "port")
        .appendField("line sensor | get value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Returns the output of the digital line sensor (0 or 1 / True or False).");
 this.setHelpUrl(help_URL);
  }
};


Blockly.Blocks['get_sonic'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("port")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "port")
        .appendField("ultrasonic sensor | get distance in")
        .appendField(new Blockly.FieldDropdown([["centimeters","centimeters"], ["inches","inches"]]), "units");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Returns the distance in centimeters or inches to an object detected by the Ultrasonic sensor. Range is approximately 2 - 350 centimeters.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['get_color_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("port")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"]]), "port")
        .appendField("color sensor |");
    this.appendDummyInput()
        .appendField("return True if")
        .appendField(new Blockly.FieldDropdown([["red","red"], ["green","green"], ["blue","blue"]]), "color");
    this.appendValueInput("threshold")
        .setCheck("Number")
        .appendField("| threshold =");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Returns True if selected color is detected. The threshold can be adjusted to increase or decrease sensitivity due to ambient lighting conditions. Recommended threshold range is 0.01 - 1.0.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['get_color_rgbc_byte'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("port")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "port")
        .appendField("color sensor | get")
        .appendField(new Blockly.FieldDropdown([["red level","red"], ["green level","green"], ["blue level","blue"], ["ambient level","ambient"], ["rgb value","rgb"], ["hex value","hex"]]), "data");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Returns the red, green, blue or ambient light level. Red, green and blue level ranges are 0 - 255. Ambient level range is 0 - 1000. The rgb and hex value of the detected color can also be returned.");
 this.setHelpUrl(help_URL);
  }
};


Blockly.Blocks['get_temperature_humidity'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("port")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "port")
        .appendField("TH sensor | get");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["temperature_F","tempf"], ["temperature_C","tempc"], ["humidity_%","humid"]]), "th");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Returns the selected measurement of temperature or humidity.");
 this.setHelpUrl("help_URL");
  }
};

Blockly.Blocks['get_rotary_sensor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("port")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "port")
        .appendField("rotary sensor | get value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Returns the value of the rotary angle sensor knob position. Min / Max = 0 - 100.");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['sensor_analog'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("port")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"]]), "port")
        .appendField("sensor port | get analog value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Get the analog sensor value (0-4095)");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['sensor_digital'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("port")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "port")
        .appendField("sensor port | get digital value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Get the digital sensor value (0 or 1 / True or False)");
 this.setHelpUrl("");
  }
};

Blockly.Blocks['set_sensor_digital'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("port")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"]]), "port")
        .appendField("sensor port | set pin")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"]]), "pin")
        .appendField("to")
        .appendField(new Blockly.FieldDropdown([["low","0"], ["high","1"]]), "level");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Sets the digital sensor port pin value to (0 or 1 / Low or High)");
 this.setHelpUrl("");
  }
};


Blockly.Blocks['reset_encoder'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("encoder")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"],]), "encoder")
        .appendField("reset");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Reset the selected DC motor encoder(s) to zero.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['reset_encoders'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("encoder reset (all)");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Reset all DC motor encoder(s) to zero.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['get_battery'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get battery voltage");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#ec5b13");
 this.setTooltip("Get the battery voltage.");
 this.setHelpUrl(help_URL);
  }
};


Blockly.Blocks['delay'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait for");
    this.appendValueInput("seconds")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#eea011');
 this.setTooltip("Pause program execution for amount of time in seconds.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['delay_ms'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wait for");
    this.appendValueInput("milliseconds")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("milliseconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour('#eea011');
 this.setTooltip("Pause program execution for amount of time in milliseconds.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['pixel_animate'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set pixel")
        .appendField(new Blockly.FieldDropdown([["rainbow","rainbow"], ["comet","comet"], ["chase","chase"], ["fade","fade"], ["sparkle","sparkle"], ["color cycle","colorcycle"], ["sparkle fade","sparkle_fade"], ["rainbow comet","rainbow_comet"], ["rainbow chase","rainbow_chase"], ["rainbow sparkle","rainbow_sparkle"]]), "animation")
        .appendField("pattern for");
    this.appendDummyInput()
        .appendField(new Blockly.FieldNumber(2, 0), "seconds")
        .appendField("seconds");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Show a pixel color pattern for number of seconds.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['pixel_blink'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("blink pixel")
        .appendField(new Blockly.FieldDropdown([["A","A"], ["B","B"], ["C","C"], ["D","D"], ["ABCD","ABCD"]]), "pixel")
        .appendField("with");
    this.appendValueInput("color")
        .setCheck("Colour");
    this.appendDummyInput()
        .appendField("color");
    this.appendValueInput("times")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("times");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Blink the pixel with a selected color for a number of times.");
 this.setHelpUrl(help_URL);
  }
};


Blockly.Blocks['pixel_color'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set pixel")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "pixel")
        .appendField("to");
    this.appendValueInput("color")
        .setCheck("Colour");
    this.appendDummyInput()
        .appendField("color at");
    this.appendValueInput("brightness")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("% brightness");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Set the pixel to a color and set the brightness. Brightness is 0 - 100%. A brightness will not be applied to the color if it is set to a -1.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['pixel_rgb_value'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set pixel")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"], ["4","4"], ["1234","1234"]]), "pixel")
        .appendField("to RGB value");
    this.appendValueInput("rgb")
        .setCheck("String");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['pixel_hex'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set pixel")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "pixel");
    this.appendValueInput("hex")
        .setCheck("String")
        .appendField("to HEX value");
    this.appendDummyInput()
        .appendField("at")
    this.appendValueInput("brightness")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("% brightness");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Set the color of the selected pixel to a hexadecimal (HEX) value. Range is #000000 - #ffffff. The HEX value must be a string. Brighntess level is 0 - 100%.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['pixel_rgb'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set pixel")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "pixel")
        .appendField("to RGB level:");
    this.appendValueInput("red")
        .setCheck("Number")
        .appendField("red");
    this.appendValueInput("green")
        .setCheck("Number")
        .appendField("green");
    this.appendValueInput("blue")
        .setCheck("Number")
        .appendField("blue");
    this.appendDummyInput()
        .appendField("at")
    this.appendValueInput("brightness")
        .setCheck("Number");
    this.appendDummyInput()
        .appendField("% brightness");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Set the color of the selected pixel to an RGB level. Red, green and blue range is 0 - 255. Brightness is 0 - 100 %.");
 this.setHelpUrl(help_URL);
  }
};


Blockly.Blocks['pixel_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set pixel")
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "pixel")
        .appendField("off");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Turn off a pixel.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['pixels_off'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set all pixels off");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Turn off all pixels.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['color_wheel'] = {
  init: function() {
    this.appendValueInput("value")
        .setCheck("Number")
        .appendField("get value");
    this.appendDummyInput()
        .appendField("from color wheel");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Returns a value from the color wheel. Colors are represented by values between 0 - 255.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['red_LED'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set pixel 1 to");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["red","True"], ["off","False"]]), "state");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Toggles pixel one RED or OFF.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['green_LED'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set pixel 2 to");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["green","True"], ["off","False"]]), "state");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Toggles pixel two GREEN or OFF.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['blue_LED'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set pixel 3 to");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["blue","True"], ["off","False"]]), "state");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#891813");
 this.setTooltip("Toggles pixel three BLUE or OFF.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['color_random'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("random color");
    this.setOutput(true, "Colour");
    this.setColour("#891813");
 this.setTooltip("Returns a random color.");
 this.setHelpUrl(help_URL);
  }
};



Blockly.Blocks['color_picker'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldColour("#ff0000"), "color");
    this.setOutput(true, "Colour");
    this.setColour("#891813");
 this.setTooltip("Returns the color chosen from the color picker pallette.");
 this.setHelpUrl(help_URL);
  }
};


Blockly.Blocks['sound_stop'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set sound off");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1b84e4");
 this.setTooltip("Stop any current sound being played.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['sound_note'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set musical note")
        .appendField(new Blockly.FieldDropdown([["B (0)","B0"], ["C (1)","C1"], ["C# (1)","CS1"], ["D (1)","D1"], ["D# (1)","DS1"], ["E (1)","E1"], ["F (1)","F1"], ["F# (1)","FS1"], ["G (1)","G1"], ["G# (1)","GS1"], ["A (1)","A1"], ["A# (1)","AS1"], ["B (1)","B1"], ["C (2)","C2"], ["C# (2)","CS2"], ["D (2)","D2"], ["D# (2)","DS2"], ["E (2)","E2"], ["F (2)","F2"], ["F# (2)","FS2"], ["G (2)","G2"], ["G# (2)","GS2"], ["A (2)","A2"], ["A# (2)","AS2"], ["B (2)","B2"], ["C (3)","C3"], ["C# (3)","CS3"], ["D (3)","D3"], ["D# (3)","DS3"], ["E (3)","E3"], ["F (3)","F3"], ["F# (3)","FS3"], ["G (3)","G3"], ["G# (3)","GS3"], ["A (3)","A3"], ["A# (3)","AS3"], ["B (3)","B3"], ["C (4)","C4"], ["C# (4)","CS4"], ["D (4)","D4"], ["D# (4)","DS4"], ["E (4)","E4"], ["F (4)","F4"], ["F# (4)","FS4"], ["G (4)","G4"], ["G# (4)","GS4"], ["A (4)","A4"], ["A# (4)","AS4"], ["B (4)","B4"], ["C (5)","C5"], ["C# (5)","CS5"], ["D (5)","D5"], ["D# (5)","DS5"], ["E (5)","E5"], ["F (5)","F5"], ["F# (5)","FS5"], ["G (5)","G5"], ["G# (5)","GS5"], ["A (5)","A5"], ["A# (5)","AS5"], ["B (5)","B5"], ["C (6)","C6"], ["C# (6)","CS6"], ["D (6)","D6"], ["D# (6)","DS6"], ["E (6)","E6"], ["F (6) ","F6"], ["F# (6)","FS6"], ["G (6)","G6"], ["G# (6)","GS6"], ["A (6)","A6"], ["A# (6)","AS6"], ["B (6)","B6"], ["C (7)","C7"], ["C# (7)","CS7"], ["D (7)","D7"], ["D# (7)","DS7"], ["E (7)","E7"], ["F (7)","F7"], ["F# (7)","FS7"], ["G (7)","G7"], ["G# (7)","GS7"], ["A (7)","A7"], ["A# (7)","AS7"], ["B (7)","B7"], ["C (8)","C8"], ["C# (8)","CS8"], ["D (8)","D8"], ["D# (8)","DS8"]]), "note");
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("for");
    this.appendDummyInput()
        .appendField("seconds, or");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "checked")
        .appendField("until stopped");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1b84e4");
 this.setTooltip("Play a musical note from the dropdown list.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['sound_tone'] = {
  init: function() {
    this.appendValueInput("tone")
        .setCheck("Number")
        .appendField("set tone at");
    this.appendValueInput("time")
        .setCheck("Number")
        .appendField("Hz")
        .appendField("  for");
    this.appendDummyInput()
        .appendField("seconds, or");
    this.appendDummyInput()
        .appendField(new Blockly.FieldCheckbox("FALSE"), "checked")
        .appendField("untl stopped");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1b84e4");
 this.setTooltip("Play a tone at a frequency in Hz. Range is approximately 30 - 20000.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['sound_effect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set sound effect")
        .appendField(new Blockly.FieldDropdown([["siren","siren"], ["whistle down","whistle_down"], ["whistle up","whistle_up"], ["correct","correct"], ["incorrect","incorrect"], ["phaser","phaser"], ["happy birthday","happy_birthday"], ["close encounters","close_encounters"], ["super mario","super_mario"], ["up and down","up_and_down"], ["random sounds","random_sounds"], ["red alert","red_alert"], ["whoops","whoops"], ["buzz buzz buzz","buzz_buzz_buzz"]]), "effect");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#1b84e4");
 this.setTooltip("Play a sound effect from the dropdown list.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['controls_loop_forever'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("forever");
    this.appendDummyInput()
        .appendField("do");
    this.appendStatementInput("do")
        .setCheck(null);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(120);
 this.setTooltip("Repeat statements in a forever loop.");
 this.setHelpUrl(help_URL);
  }
};


Blockly.Blocks['tele_connected'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("tele-op connected ?");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#33cc00');
 this.setTooltip("Returns the PS5's connection status. A True or 1 value is connected. A False or 0 value is disconnected.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['tele_reset'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("reset tele-op module");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#33cc00");
 this.setTooltip("Resets the tele-op module.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['tele_get'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("get tele-op data");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#33cc00");
 this.setTooltip("Get updated data from the ps5 controller. You must call this block in a continuous loop to refresh data values from the gamepad.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['tele_stick'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ps5");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left_stick_x-axis","LX"], ["left_stick_y-axis","LY"], ["right_stick_x-axis","RX"], ["right_stick_y-axis","RY"]]), "stick")
        .appendField("data value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#33cc00');
 this.setTooltip("Returns a joystick position data value.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['tele_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ps5");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["L1","L1"], ["L2","L2"], ["L3","L3"], ["R1","R1"], ["R2","R2"], ["R3","R3"], ["L2T","L2T"], ["R2T","R2T"], ["CROSS","CROSS"], ["CIRCLE","CIRCLE"], ["SQUARE","SQUARE"], ["TRIANGLE","TRIANGLE"], ["UP","UP"],
                                               ["DOWN","DOWN"], ["RIGHT","RIGHT"], ["LEFT","LEFT"], ["R3","R3"], ["L3","L3"], ["SHARE","SHARE"], ["OPTIONS","OPTIONS"], ["POWER","POWER"], ["TOUCH","TOUCH"]]), "button")
        .appendField("button pressed ?");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#33cc00');
 this.setTooltip("Returns the state of the selected button. Pressed is True or 1. Unpressed is False or 0.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['tele_button_group'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ps5 button group");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"]]), "button")
        .appendField("data value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#33cc00');
 this.setTooltip("Returns the value of the pressed / unpressed state of the button group.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['tele_touchpad'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ps5 touchpad");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["touch-X","TOUCHX"], ["touch-Y","TOUCHY"]]), "touch")
        .appendField("coordinate");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#33cc00');
 this.setTooltip("Returns the touchpad X or Y coordinate.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['tele_angle'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ps5");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["pitch","PITCH"], ["roll","ROLL"]]), "angle")
        .appendField("angle value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour('#33cc00');
 this.setTooltip("Returns the angle in degrees of the gamepad's pitch or roll axis position.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['tele_LED'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set LED color to");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["red","RED"], ["green","GREEN"], ["blue","BLUE"], ["yellow","YELLOW"]]), "color");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#33cc00");
 this.setTooltip("Set the color of the gamepad's LED light bar.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['tele_rumble'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set rumble motor to");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["slow","SLOW"], ["fast","FAST"], ["off","OFF"]]), "rumble");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#33cc00");
 this.setTooltip("Activates the gamepad's rumble motor.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['tele_deadzone'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("set");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left","LEFT"], ["right","RIGHT"]]), "stick");
    this.appendDummyInput()
        .appendField("joystick dead band to");
    this.appendValueInput("dead")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour("#33cc00");
 this.setTooltip("Sets the amount of dead band around the center position of a joystick. Dead band range is 0 - 100.");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['tele_motor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ps5");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left_stick_x-axis","LX"], ["left_stick_y-axis","LY"], ["right_stick_x-axis","RX"], ["right_stick_y-axis","RY"], ["left_trigger","L2T"], ["right_trigger","R2T"], ["pitch_angle_axis","PITCH"], ["roll_angle_axis","ROLL"]]), "map");
    this.appendDummyInput()
        .appendField("motor control range value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#33cc00");
 this.setTooltip("Maps a joystick, trigger button or gamepad angle axis to DC motor values (-100 to 100).");
 this.setHelpUrl(help_URL);
  }
};

Blockly.Blocks['tele_servo'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ps5");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["left_stick_x-axis","LX"], ["left_stick_y-axis","LY"], ["right_stick_x-axis","RX"], ["right_stick_y-axis","RY"], ["left_trigger","L2T"], ["right_trigger","R2T"], ["pitch_angle_axis","PITCH"], ["roll_angle_axis","ROLL"]]), "map");
    this.appendDummyInput()
        .appendField("servo control range value");
    this.setInputsInline(true);
    this.setOutput(true, null);
    this.setColour("#33cc00");
 this.setTooltip("Maps a joystick, trigger button or gamepad angle axis to servo motor positions (0 to 180).");
 this.setHelpUrl(help_URL);
  }
};
