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

if (window.location.href == "http://nescat.gcubed.co/") {
          window.location.href = "https://nescat.gcubed.co/";
}
$("#javascript").remove(); 