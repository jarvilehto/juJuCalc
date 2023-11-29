const checkBoxes = () => {
  var check = document.getElementById("checkDeg");
  var checkYaw = document.getElementById("checkYaw");
  var checkCustomYaw = document.getElementById("customCheck");

  var cm = document.getElementById("threesixty");
  var yaw = document.getElementById("yaw");
  var customYaw = document.getElementById("custom_yaw");

  if (check.checked == true) {
    cm.style.display = "none";
  } else {
    cm.style.display = "block";
  }

  if (checkYaw.checked == true) {
    yaw.style.display = "none";
  } else {
    yaw.style.display = "block";
  }

  if (checkCustomYaw.checked == true) {
    customYaw.style.display = "block";
  } else {
    customYaw.style.display = "none";
  }
};

const cm360 = () => {
  //Get user inputs
  var dpi = parseFloat(document.getElementById("dpi").value);
  var cm = parseFloat(document.getElementById("Deg").value);
  var yaw = parseFloat(document.getElementById("yaw").value);
  var sens = parseFloat(document.getElementById("sens").value);
  var custom_yaw = parseFloat(document.getElementById("custom_yaw").value);

  //calculate result
  // var result = (360 * 2, 54) / (dpi * yaw * sens);

  //Send result back
  //document.getElementById("calc_result").value = result.toFixed(4);

  console.log(dpi, yaw, sens, custom_yaw, cm);
};

const calcYaw = () => {};
