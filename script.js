let praetor = document.getElementById("praetor");

let flag = true;

function pulse() {
  flag ?  praetor.style.fontSize = '10px' :  praetor.style.fontSize = '20px';
  flag = !flag
}

setInterval(pulse, 1000);

