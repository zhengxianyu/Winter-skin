$(function() {
  console.log("==navigator.userAgent::")
  console.log(navigator)
  function numberRandom(max, min) {
    var num = ( Math.random() * ( max - min ) + min ).toFixed( 2 )
    return num;
  }

  let snows = document.getElementById("snows");
  for (let snowIndex = 0; snowIndex < 100; snowIndex++) {
    let snow = document.createElement('div');
    snow.className = 'snow';
    snow.style = 
      'left: ' +
        numberRandom(15, -1) +
      'vw; border: ' +
        numberRandom(4, 1) +
      'px solid #fff; animation: snowMove ' +
        numberRandom(10, 6) +
      's linear infinite; animation-delay:' +
        numberRandom(14, 1) +
      's';
    snows.appendChild(snow);
  }
})
