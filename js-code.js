

const mainConteiner = document.getElementById("main-conteiner");
const smallButton = document.getElementById("small-button");
const mediumButton = document.getElementById("medium-button");
const bigButton = document.getElementById("big-button");
const clearButton = document.getElementById("clear-button");




let n = 16;

function drawGrid(){

    var gridArray = [];
    for(let i = 0 ; i<n ; i++){

        gridArray[i]= document.createElement("div");
        mainConteiner.appendChild(gridArray[i]);

        for(let j = 0 ; j<n ; j++){
            let div = document.createElement("div");
            div.className = "grid";
            div.style.minWidth = 500/n + "px";
            div.style.minHeight= 500/n + "px";
            gridArray[i].appendChild(div);
            
            div.addEventListener('mouseover',function(){
                div.style.backgroundColor = "black";});
            
        }
    }
    
}  








// Selectores de tamaño del grid

smallButton.addEventListener('click',function(){
    mainConteiner.textContent = "";
    n = 16;
    drawGrid();
});

mediumButton.addEventListener('click',function(){
    mainConteiner.textContent = "";
    n = 32;
    drawGrid(); 
});

bigButton.addEventListener('click',function(){
    mainConteiner.textContent = "";
    n = 64; 
    drawGrid(64);
});


clearButton.addEventListener('click',function(){
    mainConteiner.textContent = "";
    drawGrid();
});

