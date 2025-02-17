

function dark(){
    document.getElementById("con1").classList.add("dark");
}

function ligth(){
    document.getElementById("con1").classList.remove("dark");
}

function changetheme(){
    document.getElementById("con1").classList.toggle("dark");
    const mode=document.getElementById("theme");
    if(mode.innerText==="dark theme"){
        mode.innerText="ligth theme";
    }
    else{
        mode.innerText="Dark Theme";
    }
}

function red(){
    document.getElementById("rd").style.backgroundColor("red");
}

function change