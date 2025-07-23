Blockly.Python['program_begin'] = function(block) {
  Blockly.Python.definitions_['import'] = 'from prizm_pro import PrizmPro' + '\n' + 'from tele_op import PS5' + '\n' + 'import time' + '\n' + 'prizm = PrizmPro()' + '\n' + 'ps5 = PS5(PS5)' + '\n' + 'prizm.Begin()' +'\n'; // forces statement to top of code generator
  var code = '\n';
  return code;
};


Blockly.Python['program_end'] = function(block) {
  var code = 'prizm.End()' + '\n';
  return code;
};

Blockly.Python['buttons_status'] = function(block) {
  var dropdown_button = block.getFieldValue('button');
  var code = 'prizm.getButton(' + "'" + dropdown_button + "'" + ')';
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['motor_set_power'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  var value_power = Blockly.Python.valueToCode(block, 'power', Blockly.Python.ORDER_ATOMIC);
  var code = 'prizm.setMotorPower(' + dropdown_motor + ',' + value_power + ')' + '\n';
  return code;
};


Blockly.Python['motor_set_speed'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = 'prizm.setMotorSpeed(' + dropdown_motor + ',' + value_speed + ')' + '\n';
  return code;
};


Blockly.Python['motor_set_powers'] = function(block) {
  var value_power_1 = Blockly.Python.valueToCode(block, 'power_1', Blockly.Python.ORDER_ATOMIC);
  var value_power_2 = Blockly.Python.valueToCode(block, 'power_2', Blockly.Python.ORDER_ATOMIC);
  var value_power_3 = Blockly.Python.valueToCode(block, 'power_3', Blockly.Python.ORDER_ATOMIC);
  var value_power_4 = Blockly.Python.valueToCode(block, 'power_4', Blockly.Python.ORDER_ATOMIC);
  var code = 'prizm.setMotorPowers(' + value_power_1 + ',' + value_power_2 + ',' + value_power_3 + ',' + value_power_4 + ')' + '\n';
  return code;
};


Blockly.Python['motor_set_speeds'] = function(block) {
  var value_speed_1 = Blockly.Python.valueToCode(block, 'speed_1', Blockly.Python.ORDER_ATOMIC);
  var value_speed_2 = Blockly.Python.valueToCode(block, 'speed_2', Blockly.Python.ORDER_ATOMIC);
  var value_speed_3 = Blockly.Python.valueToCode(block, 'speed_3', Blockly.Python.ORDER_ATOMIC);
  var value_speed_4 = Blockly.Python.valueToCode(block, 'speed_4', Blockly.Python.ORDER_ATOMIC);
  var code = 'prizm.setMotorSpeeds(' + value_speed_1 + ',' + value_speed_2 + ',' + value_speed_3 + ',' + value_speed_4 + ')' + '\n';
  return code;
};

Blockly.Python['motor_rotate_degree'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  var value_degrees = Blockly.Python.valueToCode(block, 'degrees', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = 'prizm.setMotorDegree(' + dropdown_motor + ',' + value_speed + ',' + value_degrees + ')' + '\n';
  return code;
};

Blockly.Python['motor_rotate_target'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  var value_count = Blockly.Python.valueToCode(block, 'count', Blockly.Python.ORDER_ATOMIC);
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = 'prizm.setMotorTarget(' + dropdown_motor + ',' + value_speed + ',' + value_count + ')' + '\n';
  return code;
};

Blockly.Python['motor_set_targets'] = function(block) {
  var value_t1 = Blockly.Python.valueToCode(block, 't1', Blockly.Python.ORDER_ATOMIC);
  var value_s1 = Blockly.Python.valueToCode(block, 's1', Blockly.Python.ORDER_ATOMIC);
  var value_t2 = Blockly.Python.valueToCode(block, 't2', Blockly.Python.ORDER_ATOMIC);
  var value_s2 = Blockly.Python.valueToCode(block, 's2', Blockly.Python.ORDER_ATOMIC);
  var value_t3 = Blockly.Python.valueToCode(block, 't3', Blockly.Python.ORDER_ATOMIC);
  var value_s3 = Blockly.Python.valueToCode(block, 's3', Blockly.Python.ORDER_ATOMIC);
  var value_t4 = Blockly.Python.valueToCode(block, 't4', Blockly.Python.ORDER_ATOMIC);
  var value_s4 = Blockly.Python.valueToCode(block, 's4', Blockly.Python.ORDER_ATOMIC);
  var code = 'prizm.setMotorTargets(' + value_s1 + ',' + value_t1 + ',' + value_s2 + ',' + value_t2 + ',' + value_s3 + ',' + value_t3 + ',' + value_s4 + ',' + value_t4 + ')' + '\n';
  return code;
};

Blockly.Python['motor_set_degrees'] = function(block) {
  var value_d1 = Blockly.Python.valueToCode(block, 'd1', Blockly.Python.ORDER_ATOMIC);
  var value_s1 = Blockly.Python.valueToCode(block, 's1', Blockly.Python.ORDER_ATOMIC);
  var value_d2 = Blockly.Python.valueToCode(block, 'd2', Blockly.Python.ORDER_ATOMIC);
  var value_s2 = Blockly.Python.valueToCode(block, 's2', Blockly.Python.ORDER_ATOMIC);
  var value_d3 = Blockly.Python.valueToCode(block, 'd3', Blockly.Python.ORDER_ATOMIC);
  var value_s3 = Blockly.Python.valueToCode(block, 's3', Blockly.Python.ORDER_ATOMIC);
  var value_d4 = Blockly.Python.valueToCode(block, 'd4', Blockly.Python.ORDER_ATOMIC);
  var value_s4 = Blockly.Python.valueToCode(block, 's4', Blockly.Python.ORDER_ATOMIC);
  var code = 'prizm.setMotorDegrees(' + value_s1 + ',' + value_d1 + ',' + value_s2 + ',' + value_d2 + ',' + value_s3 + ',' + value_d3 + ',' + value_s4 + ',' + value_d4 + ')' + '\n';
  return code;
};

Blockly.Python['motor_stop'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  var dropdown_brake = block.getFieldValue('brake');
  if (dropdown_brake === "brake"){
    var code = 'skr.setMotorStop(' + dropdown_motor + ',' + "125" + ')' + '\n';
    return code;
  }else{
    var code = 'skr.setMotorStop(' + dropdown_motor + ',' + "0" + ')' + '\n';
    return code;
  }
};

Blockly.Python['motor_busy'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  var code = 'prizm.getMotorBusy(' + dropdown_motor + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['set_motor_invert'] = function(block) {
  var dropdown_motor = block.getFieldValue('motor');
  var dropdown_invert = block.getFieldValue('invert');
  if (dropdown_invert === "True"){
    var code = 'prizm.setMotorInvert(' + dropdown_motor + ',' + "True" + ')' + '\n';
    return code;
  }else{
    var code = 'prizm.setMotorInvert(' + dropdown_motor + ',' + "False" + ')' + '\n';
    return code;
  }
};

Blockly.Python['servo_set_speed'] = function(block) {
  var dropdown_servo = block.getFieldValue('servo');
  var value_speed = Blockly.Python.valueToCode(block, 'speed', Blockly.Python.ORDER_ATOMIC);
  var code = 'prizm.setServoSpeed(' + dropdown_servo + ',' + value_speed + ')' + '\n';
  return code;
};

Blockly.Python['servo_set_speeds'] = function(block) {
  var value_speed_1 = Blockly.Python.valueToCode(block, 'speed_1', Blockly.Python.ORDER_ATOMIC);
  var value_speed_2 = Blockly.Python.valueToCode(block, 'speed_2', Blockly.Python.ORDER_ATOMIC);
  var value_speed_3 = Blockly.Python.valueToCode(block, 'speed_3', Blockly.Python.ORDER_ATOMIC);
  var value_speed_4 = Blockly.Python.valueToCode(block, 'speed_4', Blockly.Python.ORDER_ATOMIC);
  var value_speed_5 = Blockly.Python.valueToCode(block, 'speed_5', Blockly.Python.ORDER_ATOMIC);
  var value_speed_6 = Blockly.Python.valueToCode(block, 'speed_6', Blockly.Python.ORDER_ATOMIC);
  var code = 'prizm.setServoSpeeds(' + value_speed_1 + ',' + value_speed_2 + ',' + value_speed_3 + ',' + value_speed_4 + ',' + value_speed_5 + ',' + value_speed_6 + ')' + '\n';
  return code;
};


Blockly.Python['servo_set_position'] = function(block) {
  var dropdown_servo = block.getFieldValue('servo');
  var value_position = Blockly.Python.valueToCode(block, 'position', Blockly.Python.ORDER_ATOMIC);
  var code = 'prizm.setServoPosition(' + dropdown_servo + ',' + value_position + ')' + '\n';
  return code;
};


Blockly.Python['servo_set_positions'] = function(block) {
  var value_position_1 = Blockly.Python.valueToCode(block, 'position_1', Blockly.Python.ORDER_ATOMIC);
  var value_position_2 = Blockly.Python.valueToCode(block, 'position_2', Blockly.Python.ORDER_ATOMIC);
  var value_position_3 = Blockly.Python.valueToCode(block, 'position_3', Blockly.Python.ORDER_ATOMIC);
  var value_position_4 = Blockly.Python.valueToCode(block, 'position_4', Blockly.Python.ORDER_ATOMIC);
  var value_position_5 = Blockly.Python.valueToCode(block, 'position_5', Blockly.Python.ORDER_ATOMIC);
  var value_position_6 = Blockly.Python.valueToCode(block, 'position_6', Blockly.Python.ORDER_ATOMIC);
  var code = 'prizm.setServoPositions(' + value_position_1 + ',' + value_position_2 + ',' + value_position_3 + ',' + value_position_4 + ',' + value_position_5 + ',' + value_position_6 + ')' + '\n';
  return code;
};

Blockly.Python['get_servo_position'] = function(block) {
  var dropdown_servo = block.getFieldValue('servo');
  var code = 'prizm.getServoPosition(' + dropdown_servo + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['set_crservo_state'] = function(block) {
  var dropdown_servo = block.getFieldValue('servo');
  var dropdown_direction = block.getFieldValue('direction');
  if (dropdown_direction === "right"){
    var code = 'prizm.CRServoState(' + dropdown_servo + ',' + "100" + ')' + '\n';
    return code;
  }
  if (dropdown_direction === "left"){
    var code = 'prizm.CRServoState(' + dropdown_servo + ',' + "-100" + ')' + '\n';
    return code;
  }
  if (dropdown_direction === "stop"){
    var code = 'prizm.CRServoState(' + dropdown_servo + ',' + "0" + ')' + '\n';
    return code;
  }
};

Blockly.Python['enable_servos'] = function(block) {
  var dropdown_enabled = block.getFieldValue('enabled');
  if (dropdown_enabled === "True"){
    var code = 'prizm.enableServos(' + dropdown_enabled + ')' + '\n';
    return code;
  }else{
    var code = 'prizm.enableServos(' + dropdown_enabled + ')' + '\n';
    return code;
  }
};


Blockly.Python['delay'] = function(block) {
  var value_seconds = Blockly.Python.valueToCode(block, 'seconds', Blockly.Python.ORDER_ATOMIC);
  var code = 'time.sleep(' + value_seconds + ')\n';
  return code;
};

Blockly.Python['delay_ms'] = function(block) {
  var value_milliseconds = Blockly.Python.valueToCode(block, 'milliseconds', Blockly.Python.ORDER_ATOMIC);
  var code = 'time.sleep_ms(' + value_milliseconds + ')\n';
  return code;
};

Blockly.Python['get_encoder'] = function(block) {
  var dropdown_encoder = block.getFieldValue('encoder');
  var code = 'prizm.getEncoderCount(' + dropdown_encoder + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_encoder_degrees'] = function(block) {
  var dropdown_encoder = block.getFieldValue('encoder');
  var code = 'prizm.getEncoderDegrees(' + dropdown_encoder + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_lidar'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  var code = 'prizm.getTOFSensor(' + dropdown_port + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_line'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  var code = 'prizm.getLineSensor(' + dropdown_port + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_sonic'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  var dropdown_units = block.getFieldValue('units');
  if (dropdown_units === 'centimeters') {
    var code = 'prizm.getSonicSensor(' + dropdown_port + ',' + "'cm'" + ')';
  }else{
    var code = 'prizm.getSonicSensor(' + dropdown_port + ',' + "'in'" + ')';
  }
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_color_color'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  var dropdown_color = block.getFieldValue('color');
  var value_threshold = Blockly.Python.valueToCode(block, 'threshold', Blockly.Python.ORDER_ATOMIC);
  if (dropdown_color === 'red') {
    var code = 'skr.getColorSensorIsColor(' + dropdown_port + ',' + "'red'" + ',' + value_threshold + ')';
  }
  if (dropdown_color === 'green') {
    var code = 'skr.getColorSensorIsColor(' + dropdown_port + ',' + "'green'" + ',' + value_threshold + ')';
  }
  if (dropdown_color === 'blue') {
    var code = 'skr.getColorSensorIsColor(' + dropdown_port + ',' + "'blue'" + ',' + value_threshold + ')';
  }
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_color_rgbc_byte'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  var dropdown_data = block.getFieldValue('data');
  if (dropdown_data === 'red') {
    var code = 'prizm.getColorSensor(' + dropdown_port + ',' + "'red'" + ')';
  }
  if (dropdown_data === 'green') {
    var code = 'prizm.getColorSensor(' + dropdown_port + ',' + "'green'" + ')';
  }
  if (dropdown_data === 'blue') {
    var code = 'skr.getColorSensor(' + dropdown_port + ',' + "'blue'" + ')';
  }
  if (dropdown_data === 'ambient') {
    var code = 'prizm.getColorSensor(' + dropdown_port + ',' + "'ambient'" + ')';
  }
  if (dropdown_data === 'rgb') {
    var code = 'prizm.getColorSensor(' + dropdown_port + ',' + "'rgb'" +')';
  }
  if (dropdown_data === 'hex') {
    var code = 'prizm.getColorSensor(' + dropdown_port + ',' + "'hex'" +')';
  }
  return [code, Blockly.Python.ORDER_NONE];
};


Blockly.Python['get_temperature_humidity'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  var dropdown_th = block.getFieldValue('th');
  if (dropdown_th === 'tempf') {
    var code = 'prizm.getTHSensor(' + dropdown_port + ',' + "'temp'" + ',' + "'f'" + ')';
  }
  if (dropdown_th === 'tempc') {
    var code = 'prizm.getTHSensor(' + dropdown_port + ',' + "'temp'" + ',' + "'c'" + ')';
  }
  if (dropdown_th === 'humid') {
    var code = 'prizm.getTHSensor(' + dropdown_port + ',' + "'humid'" + ')';
  }
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['get_rotary_sensor'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  var code = 'prizm.getRotarySensor(' + dropdown_port + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensor_analog'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  var code = 'prizm.getSensorAnalog(' + dropdown_port + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['sensor_digital'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  var code = 'prizm.getSensorDigital(' + dropdown_port + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['set_sensor_digital'] = function(block) {
  var dropdown_port = block.getFieldValue('port');
  var dropdown_pin = block.getFieldValue('pin');
  var dropdown_level = block.getFieldValue('level');
  var code = 'prizm.setSensorDigital(' + dropdown_port + ',' + dropdown_pin + ',' + dropdown_level +')\n';
  return code;
};

Blockly.Python['get_battery'] = function(block) {
  var code = 'prizm.getBatteryVoltage()';
  return [code, Blockly.Python.ORDER_NONE];
};



Blockly.Python['reset_encoder'] = function(block) {
  var dropdown_encoder = block.getFieldValue('encoder');
  var code = 'prizm.resetEncoder(' + dropdown_encoder + ')\n';
  return code;
};

Blockly.Python['reset_encoders'] = function(block) {
  var code = 'prizm.resetEncoders()\n';
  return code;
};


Blockly.Python['pixel_animate'] = function(block) {
  var dropdown_animation = block.getFieldValue('animation');
  var number_seconds = block.getFieldValue('seconds');
  var code = 'prizm.setPixelPattern(' + "'" + dropdown_animation + "'" + ','  + number_seconds + ')\n';
  return code;
};

Blockly.Python['pixel_blink'] = function(block) {
  var dropdown_pixel = block.getFieldValue('pixel');
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var value_times = Blockly.Python.valueToCode(block, 'times', Blockly.Python.ORDER_ATOMIC);
  var color1 = value_color;
  var re = /[0-9A-Fa-f]{6}/g;
  var inputString = color1;
  if(re.test(inputString)) {  // check to see if it's hex format color
      var code = 'skr.setPixelBlink(' + "'" + dropdown_pixel + "'" + ','  +  value_color + ',' + value_times + ')\n';
  } else {                    // non hex format (random color picker)
      var code = 'skr.setPixelBlink(' + "'" + dropdown_pixel + "'" + ','  +  value_color + ',' + value_times + ')\n';
  }
  re.lastIndex = 0; // be sure to reset the index after using .text()
  return code;
};

Blockly.Python['pixel_hex'] = function(block) {
  var dropdown_pixel = block.getFieldValue('pixel');
  var value_hex = Blockly.Python.valueToCode(block, 'hex', Blockly.Python.ORDER_ATOMIC);
  var value_brightness = Blockly.Python.valueToCode(block, 'brightness', Blockly.Python.ORDER_ATOMIC);
  value_brightness = value_brightness.replace(/\(|\)/g, '');    // strips parenthesis out of negative string
  var code = 'prizm.setPixelHex(' + dropdown_pixel + ','  + value_hex + ',' + value_brightness +  ')\n';
  return code;
};

Blockly.Python['pixel_rgb'] = function(block) {
  var dropdown_pixel = block.getFieldValue('pixel');
  var value_red = Blockly.Python.valueToCode(block, 'red', Blockly.Python.ORDER_ATOMIC);
  var value_green = Blockly.Python.valueToCode(block, 'green', Blockly.Python.ORDER_ATOMIC);
  var value_blue = Blockly.Python.valueToCode(block, 'blue', Blockly.Python.ORDER_ATOMIC);
  var value_brightness = Blockly.Python.valueToCode(block, 'brightness', Blockly.Python.ORDER_ATOMIC);
  value_brightness = value_brightness.replace(/\(|\)/g, '');    // strips parenthesis out of negative string
  var code = 'prizm.setPixelRGB(' + dropdown_pixel + ','  +  value_red + ',' + value_green + ',' + value_blue + ',' + value_brightness +  ')\n';
  return code;
};


Blockly.Python['pixel_rgb_value'] = function(block) {
  var dropdown_pixel = block.getFieldValue('pixel');
  var value_rgb = Blockly.Python.valueToCode(block, 'rgb', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble python into code variable.
  var code = '...\n';
  return code;
};


Blockly.Python['pixel_color'] = function(block) {
  var dropdown_pixel = block.getFieldValue('pixel');
  var value_color = Blockly.Python.valueToCode(block, 'color', Blockly.Python.ORDER_ATOMIC);
  var value_brightness = Blockly.Python.valueToCode(block, 'brightness', Blockly.Python.ORDER_ATOMIC);
  value_brightness = value_brightness.replace(/\(|\)/g, '');    // strips parenthesis out of negative string
//  value_brightness = parseInt(value_brightness);
//  value_brightness = Math.abs(value_brightness);
  var color1 = value_color;
  var re = /[0-9A-Fa-f]{6}/g;
  var inputString = color1;
  if(re.test(inputString)) {  // check to see if it's hex format color
      var code = 'prizm.setPixelColor(' + dropdown_pixel + ','  +  value_color + ',' + value_brightness + ')\n';
  } else {                    // non hex format (random color picker)
      var code = 'prizm.setPixelColor(' + "'" + dropdown_pixel + "'" + ','  + value_color + ',' + value_brightness + ')\n';
  }
  re.lastIndex = 0; // be sure to reset the index after using .text()
  return code;
};

Blockly.Python['pixel_off'] = function(block) {
  var dropdown_pixel = block.getFieldValue('pixel');
  var code = 'prizm.clearPixel(' + dropdown_pixel + ')\n';
  return code;
};

Blockly.Python['pixels_off'] = function(block) {
  var code = 'prizm.clearPixels()' + '\n';
  return code;
};


Blockly.Python['red_LED'] = function(block) {
  var dropdown_state = block.getFieldValue('state');
  var code = 'prizm.setRedLED(' + dropdown_state + ',' + 50 + ')\n';
  return code;
};

Blockly.Python['green_LED'] = function(block) {
  var dropdown_state = block.getFieldValue('state');
  var code = 'prizm.setGreenLED(' + dropdown_state + ',' + 50 + ')\n';
  return code;
};

Blockly.Python['blue_LED'] = function(block) {
  var dropdown_state = block.getFieldValue('state');
  var code = 'prizm.setBlueLED(' + dropdown_state + ',' + 50 + ')\n';
  return code;
};

Blockly.Python['color_random'] = function(block) {
  var code = "'#%06x' % prizm.random.randint(0, 2**24 - 1)";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['color_picker'] = function(block) {
  var colour_color = block.getFieldValue('color');
  var code = "'" + colour_color + "'";
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['color_wheel'] = function(block) {
  var value_wheel = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);
  var code = 'prizm.getWheelColor(' + value_wheel + ')\n';
  return code;
};


Blockly.Python['sound_tone'] = function(block) {
  var value_tone = Blockly.Python.valueToCode(block, 'tone', Blockly.Python.ORDER_ATOMIC);
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var checkbox_checked = block.getFieldValue('checked') === 'TRUE';
  if(checkbox_checked){value_time = 0;} //if checked, play continuosly
  var code = 'prizm.setSoundTone(' + value_tone + ','  +  value_time + ')\n';
  return code;
};

Blockly.Python['sound_stop'] = function(block) {
  var code = 'prizm.setSoundOff()\n';
  return code;
};

Blockly.Python['sound_note'] = function(block) {
  var dropdown_note = block.getFieldValue('note');
  var value_time = Blockly.Python.valueToCode(block, 'time', Blockly.Python.ORDER_ATOMIC);
  var checkbox_checked = block.getFieldValue('checked') === 'TRUE';
  if(checkbox_checked){value_time = 0;} //if checked, play continuosly
  var code = 'prizm.setSoundNote(' + "'" + dropdown_note + "'" + ','  +  value_time + ')\n';
  return code;
};

Blockly.Python['sound_effect'] = function(block) {
  var dropdown_effect = block.getFieldValue('effect');
  var code = 'prizm.setSoundEffect(' + "'" + dropdown_effect + "'" + ')\n';
  return code;
};

Blockly.Python['controls_loop_forever'] = function(block) {
  var statements_do = Blockly.Python.statementToCode(block, 'do');
  let branch = Blockly.Python.statementToCode(block, 'do');
  branch = Blockly.Python.addLoopTrap(branch, block) || Blockly.Python.PASS;
  var code = 'while True:\n' + branch;
  return code;
};

Blockly.Python['tele_get'] = function(block) {
  var code = 'ps5.get()' + '\n';
  return code;
};

Blockly.Python['tele_connected'] = function(block) {
  var code = 'ps5.Connected';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tele_reset'] = function(block) {
  var code = 'ps5.resetTeleOp()' + '\n';
  return code;
};

Blockly.Python['tele_button'] = function(block) {
  var dropdown_button = block.getFieldValue('button');
  var code = 'ps5.Button(' + "'" + dropdown_button + "'" + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tele_stick'] = function(block) {
  var dropdown_stick = block.getFieldValue('stick');
  var code = 'ps5.Stick(' + "'" + dropdown_stick + "'" + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tele_button_group'] = function(block) {
  var dropdown_button = block.getFieldValue('button');
  var code = 'ps5.buttons_'+ dropdown_button;
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tele_touchpad'] = function(block) {
  var dropdown_touch = block.getFieldValue('touch');
  var code = 'ps5.Touchpad(' + "'" + dropdown_touch + "'" + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tele_angle'] = function(block) {
  var dropdown_angle = block.getFieldValue('angle');
  var code = 'ps5.Angle(' + "'" + dropdown_angle + "'" + ')';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['tele_LED'] = function(block) {
  var dropdown_color = block.getFieldValue('color');
  var code = 'ps5.setLED(' + "'" + dropdown_color + "'" + ')';
  return code;
};

Blockly.Python['tele_rumble'] = function(block) {
  var dropdown_rumble = block.getFieldValue('rumble');
  var code = 'ps5.setRumble(' + "'" + dropdown_rumble + "'" + ')';
  return code;
};

Blockly.Python['tele_deadzone'] = function(block) {
  var dropdown_stick = block.getFieldValue('stick');
  var value_dead = Blockly.Python.valueToCode(block, 'dead', Blockly.Python.ORDER_ATOMIC);
  var code = 'ps5.setDeadZone(' + "'" + dropdown_stick + "'" + ',' + value_dead + ')';
  return code;
};

Blockly.Python['tele_motor'] = function(block) {
  var dropdown_map = block.getFieldValue('map');
  var code = 'ps5.Motor(' + "'" + dropdown_map + "'" + ')';
  return code;
};

Blockly.Python['tele_servo'] = function(block) {
  var dropdown_map = block.getFieldValue('map');
  var code = 'ps5.Servo(' + "'" + dropdown_map + "'" + ')';
  return code;
};
