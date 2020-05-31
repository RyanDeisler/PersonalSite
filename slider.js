

$(document).ready(function(){

    
    $("#font-slider").slider({
        min: 0,
        max: 3,
        value: 0,
        slide: function(event, ui){
            if(ui.value==0){
                $("#font").text("Slide me!");
            }else if(ui.value==1){
                $("#font").html("<h3>Java</h3><p>The first language I learned at Adelphi.  I designed a dungeon crawler called 'Eternita' using the Java library - LibGDX.</p>");
            }else if(ui.value==2){
                $("#font").html("<h3>Python</h3><p>My second strongest language.  I have recreated Space Invaders using the pygame library.</p>");
            }else{
                $("#font").html("<h3>Web Based Languages</h3><p>I used HTML, CSS, Javascript, and the JQuery library to create this site!</p>");
            }
        }
    });
});