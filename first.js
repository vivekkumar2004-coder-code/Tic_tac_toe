let boxes = document.querySelectorAll(".box");
let resetbutton= document.querySelector(".custom-btn");
let newgamebtn = document.querySelector(".newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".winner");

let turnO = true;

const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turnO=true;
    enableBoxes();
    msgContainer.classList.add("hide");

}


boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled =true;

        checkWinner();
    });
});
const enableBoxes = ()=>{
    for(box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const disableBoxes = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner)=>{
     msg.innerText=`Congratulations! the winner is ${winner}`;
     msgContainer.classList.remove("hide");
     disableBoxes();

    };

const checkWinner=()=>{
    for(pattern of winpatterns){
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
         let pos3val = boxes[pattern[2]].innerText;

         if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                console.log("winner",pos1val);
                showWinner(pos1val);
                 
            }
         }

    }
};
newgamebtn.addEventListener("click",resetGame);
resetbutton.addEventListener("click",resetGame);



