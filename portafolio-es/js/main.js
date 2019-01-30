$('document').ready(function(){

    const profesion = baffle(".profesion");
    profesion.set({
        characters: '█▓▓ ░░>██ ▓█▓>▓ ▓<█ ░<▒░▓ █░<█ █▒> ▓░▓< ▒▓░░',
        speed: 120
    });
    profesion.start();
    profesion.reveal(2000);
});