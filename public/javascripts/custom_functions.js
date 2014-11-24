var activeMole = $("#mole-hole-1");

function randomInt(min,max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}

function selectMole() {
  var selection = activeMole;
  while(selection.attr('id') == activeMole.attr('id')) {
    selection = $("#mole-hole-" + randomInt(1,9));
  }
  activeMole.hide("slide", { direction: 'down' });
  activeMole = selection;
  setTimeout(function() {
    activeMole.show("slide", { direction: 'down' });
  }, randomInt(1,1500));
}

(function loop() {
  var rand = randomInt(600,2000);
  setTimeout(function() {
    selectMole();
    loop();  
  }, rand);
}());