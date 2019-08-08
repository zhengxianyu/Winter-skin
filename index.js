$(function() {
  function numberRandom(max, min) {
    var num = ( Math.random() * ( max - min ) + min ).toFixed( 2 )
    return num;
  }

  let snows = document.getElementById("snows");
  for (let snowIndex = 0; snowIndex < 200; snowIndex++) {
    let snow = document.createElement('div');
    snow.className = 'snow';
    snow.style = 
      'left: ' +
      numberRandom(100, 0) +
      'vw; border: ' +
      numberRandom(6, 3) +
      'px solid #fff; animation: snowMove ' +
      numberRandom(5, 3) +
      's linear infinite;';
    snows.appendChild(snow);
  }
})
