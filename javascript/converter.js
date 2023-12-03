//Dpi and sensitivity inputs
const dpi = document.getElementById("dpi");
const sens = document.getElementById("sens");

//outputs converted cm/360 and converted sensitivity
const cDeg = document.getElementById("convertedDegResult");
const cSens = document.getElementById("convertedSensResult");

const convertSens = () => {
  /* First we convert to a cm360 using the yaw sens and dpi
    for game1 and after that we calculate the new sensitivity 
    with the yaw of the new game  */

  //Game1 and Game2 values
  var gameOne = parseFloat(document.getElementById("gameOne").value);
  var gameTwo = parseFloat(document.getElementById("gameTwo").value);

  //Dpi and sensitivity inputs
  var dpi = parseFloat(document.getElementById("dpi").value);
  var sens = parseFloat(document.getElementById("sens").value);

  var turnRadiusDeg = 0;
  var convertedSensitivity = 0;

  //calculate cm360
  turnRadiusDeg = (360 * 2.54) / (dpi * gameOne * sens);
  //Convert to new game
  convertedSensitivity = (360 * 2.54) / (dpi * turnRadiusDeg * gameTwo);

  console.log(turnRadiusDeg.toFixed(3));
  console.log(convertedSensitivity.toFixed(2));

  cDeg.innerHTML = turnRadiusDeg.toFixed(3);
  cSens.innerHTML = convertedSensitivity.toFixed(3);
};
