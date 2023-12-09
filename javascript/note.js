let box1=document.getElementById('box1');
let box2=document.getElementById('box2');
let butbox=document.getElementById('box3');
let bx=document.getElementById('xx');
let down=false;

function notification()
{
    if (down){
        box2.style.height='0px';
        box2.style.opacity=0;
        box1.style.height='100%';
        box1.style.opacity=1;
        down=false;
        bx.style.opacity='1';
        bx.style.backgroundColor='transparent';
        bx.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#676d6d";});
        bx.addEventListener("mouseout", function() {
            this.style.backgroundColor = "transparent";});
    }
    else{
        box2.style.height= '100%';
        box2.style.opacity=1;
        butbox.style.position='fixed';
        box1.style.height='0px';
        box1.style.opacity=0;
        down=true;
        bx.style.opacity=0.8;
        bx.style.backgroundColor='#676d6d';
        bx.addEventListener("mouseout", function() {
            this.style.backgroundColor = '#676d6d';});

    }
}

function back(){
    box1.style.height='100%';
    // butbox.style.position='relative';
    box1.style.opacity=1;
    box2.style.height=0;
    box2.style.opacity=0;
    bx.style.opacity=1;
    bx.style.opacity='1';
    bx.style.backgroundColor='transparent';
    bx.addEventListener("mouseover", function() {
            this.style.backgroundColor = "#676d6d";});
    bx.addEventListener("mouseout", function() {
            this.style.backgroundColor = "transparent";});
}