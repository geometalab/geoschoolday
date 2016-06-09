function pageReady(){
    document.getElementById("level1").style.visibility = 'hidden';
    document.getElementById("level2").style.visibility = 'hidden';
    document.getElementById("level3").style.visibility = 'hidden';
    document.getElementById("level4").style.visibility = 'hidden';
    document.getElementById("level5").style.visibility = 'hidden';
    document.getElementById("level6").style.visibility = 'hidden';
}

function level1(){
    document.getElementById("level1").style.visibility = 'visible';
    var button = document.getElementById("button1");
    button.textContent = "Mission 1";
    button.disabled = true;
}

function level2(){
    document.getElementById("level2").style.visibility = 'visible';
    var button = document.getElementById("button2");
    button.textContent = "Mission 2";
    button.disabled = true;
}

function level3(){
    document.getElementById("level3").style.visibility = 'visible';
    var button = document.getElementById("button3");
    button.textContent = "Mission 3";
    button.disabled = true;
}

function level4(){
    document.getElementById("level4").style.visibility = 'visible';
    var button = document.getElementById("button4");
    button.textContent = "Mission 4";
    button.disabled = true;
}

function level5(){
    document.getElementById("level5").style.visibility = 'visible';
    var button = document.getElementById("button5");
    button.textContent = "Mission 5";
    button.disabled = true;
}

function level6(){
    document.getElementById("level6").style.visibility = 'visible';
    var button = document.getElementById("button6");
    button.textContent = "Mission 6";
    button.disabled = true;
}