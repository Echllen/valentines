



var poem = ["Kapoor and Kadesperate as he watches, <br> He is a drifter out to sea <br><br> [...] <br><br> And when the Indian Ocean calms, <br> One speck of white remains, <br> In waters cold and Kelly-green <br><br><br>From Ryan Howard to Kelly Kapoor <br>in <i>Angry Andy</i>, The Office"
           , "Ett lyckligt hjärta kräver att man förälskar <br>sig många gånger, <br>och varje gång i samma person. <br><br>Mignon McLaughlin"
           , "To you, I'll give the world. <br><br><i>Songbird, </i>Fleetwood Mac"
           , "At last, my love has come along <br>My lonely days are over <br>And life is like a song. <br><br><i>At Last, </i>Etta James"
           , "Tonight I can write the saddest lines.<br>To think that I do not have her. To feel that I have lost her.<br><br>To hear the immense night, still more immense without her.<br>And the verse falls to the soul like dew to the pasture.<br><br><br><i>Tonight I can write the saddest lines,</i><br>Pablo Neruda"
           , "I love you without knowing how, or when, or from where.<br>I love you straightforwardly, without complexities or pride;<br>so I love you because I know no other way<br><br>than this: where I does not exist, nor you,<br>so close that your hand on my chest is my hand,<br>so close that your eyes close as I fall asleep.<br><br><br><i>I do not love you</i><br>Pablo Neruda"];


document.getElementById("buttonPoem").onclick = function() {

for(i=0; i <poem.length; i++) {
    var newPoem = poem[Math.floor(Math.random() * poem.length)];
}

  document.getElementById("terminal").innerHTML = newPoem;
}


var ragg = ["I ought to complain to Spotify for you <br> not being named this week's hottest single."
           , "Tror du på kärlek vid första ögonkastet, <br>eller ska jag gå förbi igen?"
           , "Jag har glömt bort mitt mobilnummer,<br>kan jag få ditt?"
           , "Are you a parking ticket? <br>Cause you got 'fine' written all over you."
           , "I'd like to take you to the movies, <br>but they don't let you bring in your own snacks."
           , "Hey, my name's Microsoft. Can I crash at your place tonight?"
           , "If you were a Transformer, <br>you'd be 'Optimus <i>Fine</i>'."];



document.getElementById("buttonRagg").onclick = function() {

for(i=0; i <ragg.length; i++) {
    var newRagg = ragg[Math.floor(Math.random() * ragg.length)];
}

  document.getElementById("terminal").innerHTML = newRagg;
}