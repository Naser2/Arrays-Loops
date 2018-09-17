// Code goes here

// Code goes here

var number1 = -1.8369701987210297e-16;
var number2 = 1.555;
var number3 = 1.005;
var number4 = 1.3555;
var scale1 = 2;
var scale2 = 2;
var scale3 = 2;
var scale4 = 3;

function init() {
  document.getElementById("number1").value = number1;
  document.getElementById("number2").value = number2;
  document.getElementById("number3").value = number3;
  document.getElementById("number4").value = number4;
}

function round() {
  var roundedNumber1 = roundNumberV1(number1, scale1);
  var roundedNumber2 = roundNumberV1(number2, scale2);
  var roundedNumber3 = roundNumberV1(number3, scale3);
  var roundedNumber4 = roundNumberV1(number4, scale4);

  document.getElementById("roundedNumber1").value = roundedNumber1;
  document.getElementById("scale1").innerHTML = scale1;
  document.getElementById("roundedNumber2").value = roundedNumber2;
  document.getElementById("scale2").innerHTML = scale2;
  document.getElementById("roundedNumber3").value = roundedNumber3;
  document.getElementById("scale3").innerHTML = scale3;
  document.getElementById("roundedNumber4").value = roundedNumber4;
  document.getElementById("scale4").innerHTML = scale4;
}

function round2() {
  var number5 = parseFloat(document.getElementById("number5").value);
  var scale5 = parseFloat(document.getElementById("scale5").value);
  document.getElementById("roundedNumber5").value = roundNumberV1(number5, scale5);
}

function roundNumberV1(num, scale) {
  if(!("" + num).includes("e")) {
    return +(Math.round(num + "e+" + scale)  + "e-" + scale);
  } else {
    var arr = ("" + num).split("e");
    var sig = ""
    if(+arr[1] + scale > 0) {
      sig = "+";
    }
    var i = +arr[0] + "e" + sig + (+arr[1] + scale);
    var j = Math.round(i);
    var k = +(j + "e-" + scale);
    return k;
  }
}

function roundNumberV2(num, scale) {
  if (Math.round(num) != num) {
    if (Math.pow(0.1, scale) > num) {
      return 0;
    }
    var sign = Math.sign(num);
    var arr = ("" + Math.abs(num)).split(".");
    if (arr.length > 1) {
      if (arr[1].length > scale) {
        var integ = +arr[0] * Math.pow(10, scale);
        var dec = integ + (+arr[1].slice(0, scale) + Math.pow(10, scale));
        var proc = +arr[1].slice(scale, scale + 1)
        if (proc >= 5) {
          dec = dec + 1;
        }
        dec = sign * (dec - Math.pow(10, scale)) / Math.pow(10, scale);
        return dec;
      }
    }
  }
  return num;
}
