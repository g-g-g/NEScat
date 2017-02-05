var nes;
        $(function() {
            nes = new JSNES({
                'ui': $('#emulator').JSNESUI({
                    "Working": [
                        //['Bubble Bobble', 'jsnes/roms/Bubble Bobble (U).nes'],
                        ['Konami Contra 1988', 'https://s3.amazonaws.com/nescat/roms/Contra.nes'],
                        ['Donkey Kong 1981', 'https://s3.amazonaws.com/nescat/roms/Donkey.nes'],
                        ['Dr. Mario', 'https://s3.amazonaws.com/nescat/roms/DrMario.nes'],
                        ['Golf', 'https://s3.amazonaws.com/nescat/roms/Golf.nes'],
                        ['The Legend of Zelda', 'https://s3.amazonaws.com/nescat/roms/Zelda.nes'],
                        ['Lemmings', 'https://s3.amazonaws.com/nescat/roms/Lemmings.nes'],
                        ['Lifeforce', 'https://s3.amazonaws.com/nescat/roms/Lifeforce.nes'],                        
                        ['Mario Bros 1983', 'https://s3.amazonaws.com/nescat/roms/MarioBros.nes'],
                        ['Mega Man', 'https://s3.amazonaws.com/nescat/roms/MegaMan.nes'],
                        ['Pac-Man', 'https://s3.amazonaws.com/nescat/roms/Pac-Man.nes'],
                        ['Super Mario Bros 1985', 'https://s3.amazonaws.com/nescat/roms/SuperMarioBros.nes'],
                        ['Tennis', 'https://s3.amazonaws.com/nescat/roms/Tennis.nes'],
                        //['Tetris', 'jsnes/roms/Tetris (U) [!].nes'],
                        ['Concentration Room', 'https://s3.amazonaws.com/nescat/roms/croom/croom.nes'],
                        ['LJ65', 'https://s3.amazonaws.com/nescat/roms/lj65/lj65.nes'],
                        ['Tetris 2 1987', 'https://s3.amazonaws.com/nescat/roms/Tetris2.nes'],
                        ['Zelda II - The Adventure of Link', 'https://s3.amazonaws.com/nescat/roms/Zelda2.nes']
                    ]

                })
            });
        });

if (window.location.href == "http://www.nescat.co/" || window.location.href == "http://nescat.co/" || window.location.href == "http://nescat.net/" ) {
		  window.location.href = "http://www.nescat.net";
}

if (window.location.href == "https://nescat.net/") {
	window.location.href = "https://www.nescat.net";
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