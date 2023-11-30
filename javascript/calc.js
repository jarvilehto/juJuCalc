//Checkboxes
const checkDeg = document.getElementById("checkDeg");
const checkYaw = document.getElementById("checkYaw");
const cYaw = document.getElementById("bcustomYaw");
const resultDiv = document.getElementById("results");
const checkCustomYaw = document.getElementById("customCheck");
const customYaw = document.getElementById("custom_yaw");

//Default state
checkDeg.checked = true;
checkYaw.checked = false;
checkCustomYaw.checked = false;

/* Show these depending on checkbox state
Either show cm/360 for calculating Yaw esitmate
Or show yaw settings for calculating cm/360 estimate */
const cm = document.getElementById("threesixty");
const yaw = document.getElementById("yaw");

/*For custom yaw */

const cbDegYaw = (obj) => {
  // Uncheck all checkboxes with class "cbDY"
  document.querySelectorAll(".cbDY").forEach((cb) => (cb.checked = false));
  // Check the clicked checkbox
  obj.checked = true;
  // Set display style based on checkDeg and checkYaw
  cm.style.display = checkDeg.checked ? "none" : "block";
  yaw.style.display = checkDeg.checked ? "block" : "none";
  cYaw.style.display = checkYaw.checked ? "none" : "block";
};

// Check if custom yaw is enabled.
const boxCustomYaw = () => {
  console.log("customYaw");
  customYaw.style.display = checkCustomYaw.checked ? "block" : "none";
};

const calcCmYaw = () => {
  //Get user inputs
  var dpi = parseFloat(document.getElementById("dpi").value);
  var cm = parseFloat(document.getElementById("Deg").value);
  var yaw = parseFloat(document.getElementById("yaw").value);
  var sens = parseFloat(document.getElementById("sens").value);
  var customYaw = parseFloat(document.getElementById("custom_yaw").value);
  var result = 0;

  if (checkDeg.checked == true) {
    if (checkCustomYaw.checked == true) {
      console.log("with custom yaw");
      result = (360 * 2.54) / (dpi * customYaw * sens);
    } else {
      result = (360 * 2.54) / (dpi * yaw * sens);
    }
    resultDiv.innerHTML = `${result.toFixed(3)} cm/360`;
  } else {
    result = (360 * 2.54) / (dpi * cm * sens);
    resultDiv.innerHTML = `${result.toFixed(3)} yaw`;
  }
};
