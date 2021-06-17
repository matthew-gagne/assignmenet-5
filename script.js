document.getElementById('button').addEventListener('click', calculate);

function calculate () {
  var d = document.getElementById('d').value;
  if (d > 0){
  var C;
  var A;
  var R = d/2;
  C = 2 * Math.PI * (d / 2);
  A = Math.PI * Math.pow(R,2);
  alert('the area is '+ A + ' and the circumference is ' + C);
  }else{
    alert('input must be greater than ZERO');
  }
}
