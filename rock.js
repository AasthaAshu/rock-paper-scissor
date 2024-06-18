
let choices= document.querySelectorAll(".choice");
let player1= document.querySelector("#p1-score");
let player2= document.querySelector("#p2-score");
let but1= document.querySelector(".but1");
let but2= document.querySelector(".but2");


let p1="";
let p2="";

let c1=0;
let c2=0;


// choices.forEach( (choice)=> {
//    choice.disable=true;
// }
// );

// for (let choice of choices){
//     choice.disable=true;
// }

const comp = () => {
    const choice=["rock" , "paper" , "scissor"];
    const i=Math.floor(Math.random()*3);
    const cc=choice[i];
    return cc;
}


 choices.forEach ( (choice)=> {
     choice.addEventListener("click" , () => {
       p1=choice.getAttribute("id");
       p2= comp();
        check();
        update();

     });
 }
 );

 const check = () =>{  
   if(p1 === "rock" && p2 === "scissor"){
       c1++;
    }

    else if(p1 === "rock" && p2 === "paper"){
        c2++;
    }

    else if(p1 === "paper" && p2 === "scissor"){
        c2++;
    }

    else if (p1 === "paper" && p2 === "rock"){
        c1++;
    }

    else if(p1 === "scissor" && p2 === "rock"){
        c2++;
    }

    else if(p1 === "scissor" && p2 === "paper"){
        c1++;
    }
 }



 const update = () =>{
    player1.innerText=c1;
    player2.innerText=c2;
    p1="";
    p2="";
 }


 const re = () => {
    c1=0;
    c2=0;
    update();
 }

 const start = () =>{
    choices.forEach( (choice)=> {
        choice.disabled=false;
     }
     );
    but2.classList.remove("bb");
    but1.classList.add("bb");
 }

 but1.addEventListener("click" , start);
 but2.addEventListener("click" , re);

