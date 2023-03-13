// Your code here
// Your code here
const dodger = document.querySelector("#dodger");
dodger.style.backgroundColor = "pink";
dodger.style.bottom = "150px";
dodger.style.left = "100px";

function moveDodgerLeft(){
    let leftNumber = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumber, 10);
    if(left > 0){
        dodger.style.left = `${left - 1}px`;
    }else{
        alert("You have reached the furthest left!");
    }    
   
}

function moveDodgerRight(){
    let leftNumber = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumber, 10);
    if(left >= 0 && left !== 360){
        dodger.style.left = `${left + 1}px`;
    }else{
        alert("You have reached the furthest right!");
    } 
    console.log(left); 
   
}

document.addEventListener("keydown", (event) => {
    switch (event.key) {
        case "ArrowLeft":
            moveDodgerLeft();
            break;
        
        case "ArrowRight":
            moveDodgerRight();
            break;
        
        default:
            break;
    }
});