var nes;
$(function() {
    nes = new JSNES({
        'ui': $('#emulator').JSNESUI({
            "Working": [
                ['Konami Contra 1988', 'assets/roms/Contra.nes'],
                ['Donkey Kong 1981', 'assets/roms/Donkey.nes'],
                ['Dr. Mario', 'assets/roms/DrMario.nes'],
                ['Golf', 'assets/roms/Golf.nes'],
                ['The Legend of Zelda', 'assets/roms/Zelda.nes'],
                ['Lemmings', 'assets/roms/Lemmings.nes'],
                ['Lifeforce', 'assets/roms/Lifeforce.nes'],  
                ['Mario Bros 1983', 'assets/roms/MarioBros.nes'],
                ['Mega Man', 'assets/roms/MegaMan.nes'],
                ['Pac-Man', 'assets/roms/Pac-Man.nes'],
                ['Super Mario Bros 1985', 'assets/roms/SuperMarioBros.nes'],
                ['Tennis', 'assets/roms/Tennis.nes'],
                ['Concentration Room', 'assets/roms/croom/croom.nes'],
                ['LJ65', 'assets/roms/lj65/lj65.nes'],
                ['Tetris 2 1987', 'assets/roms/Tetris2.nes'],
                ['Zelda II - The Adventure of Link', 'assets/roms/Zelda2.nes']
            ]

        })
    });
});

if (window.location.href == "/web/20161106234311/http://www.nescat.co/" || window.location.href == "/web/20161106234311/http://nescat.co/" || window.location.href == "/web/20161106234311/http://nescat.net/" ) {
          window.location.href = "/web/20161106234311/http://www.nescat.net";
}

if (window.location.href == "/web/20161106234311/https://nescat.net/") {
    window.location.href = "/web/20161106234311/https://www.nescat.net";
}
var zoombtn = document.getElementByClass("#zoombtn");
        // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal1 = document.getElementById('myModal1');

// Get the button that opens the modal
var btn1 = document.getElementById("myBtn1");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close1")[0];

// When the user clicks the button, open the modal
btn1.onclick = function() {
    modal1.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal1.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}

function reloadFunction() {
  window.location.reload(false); 
}

$('.nes-zoom').remove();