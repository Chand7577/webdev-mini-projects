
document.addEventListener("DOMContentLoaded",()=>{
  const grid=document.querySelector(".grid");
  const scoreDisp=document.querySelector("#score");
  const resultDisp=document.querySelector("#result");
  const width=4;
  let cells=[]
  let score=0;
  // generate a new Number
  const generate=()=>{
    const randomNum=Math.floor(Math.random()*cells.length);
   
    if(cells[randomNum].innerHTML==0){
      cells[randomNum].innerHTML=2;
       checkForGameOver();
    }
    else{
      generate()
    }
  }
  
  function moveRight(){
    for(let i=0;i<16;i++){
      if(i%4==0){
        let totalOne=cells[i].innerHTML;
        let totalTwo=cells[i+1].innerHTML;
        let totalThree=cells[i+2].innerHTML;
        let totalFour=cells[i+3].innerHTML;
        let row=[parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)];
      
        let filteredRow=row.filter(num=>num);
        let missing=4-filteredRow.length;
        let zeros=Array(missing).fill(0);
        let newRow=zeros.concat(filteredRow);
        
        cells[i].innerHTML=newRow[0];
        cells[i+1].innerHTML=newRow[1]
        cells[i+2].innerHTML=newRow[2]
        cells[i+3].innerHTML=newRow[3]
        
        
      }
    }
  }
  
  function checkForGameOver(){
  	let zeros=0;
  	for(let i=0;i<16;i++){
  	  
  	if(cells[i].innerHTML==="0"){
  		zeros++;	
  	}
	} 
	  if(zeros==0){
		resultDisp.innerHTML='you lose';
		document.removeEventListener('keydown',control);
		setTimeout(clearInterval,3000);
		setTimeout(restart,500);
	  }
  
  }
  
  function moveLeft(){
    for(let i=0;i<16;i++){
      if(i%4==0){
        let totalOne=cells[i].innerHTML;
        let totalTwo=cells[i+1].innerHTML;
        let totalThree=cells[i+2].innerHTML;
        let totalFour=cells[i+3].innerHTML;
        let row=[parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)];
      
        let filteredRow=row.filter(num=>num);
        let missing=4-filteredRow.length;
        let zeros=Array(missing).fill(0);
        let newRow=filteredRow.concat(zeros);
        
        cells[i].innerHTML=newRow[0];
        cells[i+1].innerHTML=newRow[1]
        cells[i+2].innerHTML=newRow[2]
        cells[i+3].innerHTML=newRow[3]
        
        
      }
    }
  }
  
  function moveUp(){
    for(let i=0;i<16;i++){
       if(i<4){
        
        let totalOne=cells[i].innerHTML;
        let totalTwo=cells[i+4].innerHTML;
        let totalThree=cells[i+8].innerHTML;
        let totalFour=cells[i+12].innerHTML;
        let col=[parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)];
      
        let filteredCol=col.filter(num=>num);
        let missing=4-filteredCol.length;
        let zeros=Array(missing).fill(0);
        let newCol=filteredCol.concat(zeros);
        
        cells[i].innerHTML=newCol[0];
        cells[i+4].innerHTML=newCol[1]
        cells[i+8].innerHTML=newCol[2]
        cells[i+12].innerHTML=newCol[3]
        
        
      }
    }
      
  }
  function moveDown(){
    for(let i=0;i<16;i++){
       if(i<4){
       
        let totalOne=cells[i].innerHTML;
        let totalTwo=cells[i+4].innerHTML;
        let totalThree=cells[i+8].innerHTML;
        let totalFour=cells[i+12].innerHTML;
        let col=[parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)];
      
        let filteredCol=col.filter(num=>num);
        let missing=4-filteredCol.length;
        let zeros=Array(missing).fill(0);
        let newCol=zeros.concat(filteredCol);
        cells[i].innerHTML=newCol[0];
        cells[i+4].innerHTML=newCol[1]
        cells[i+8].innerHTML=newCol[2]
        cells[i+12].innerHTML=newCol[3]
        
        
      }
    }
      
  }
  
   // check for wind
  
  function checkForWin(){
      cells.forEach((cell)=>{
        if(cell.innerHTML==="2048"){
          resultDisp.innerHTML="You Won the game";
          document.removeEventListener("keydown",control);
          setTimeout(clearInterval,3000);
          setTimeout(restart,500);
        }
      })
    }
  
  
  //combinerow()
  
  function combineRow(){
    for(let i=0;i<15;i++){
      if(cells[i].innerHTML===cells[i+1].innerHTML){
        let combinedTotal=parseInt(cells[i].innerHTML)+parseInt(cells[i+1].innerHTML);
        cells[i].innerHTML=combinedTotal;
        cells[i+1].innerHTML=0;
        score+=combinedTotal;
        scoreDisp.innerHTML=score;
        
        
      }
    }
    
  }
  // clear 
  
  function clear(){
    clearInterval(myTime);
  }
  // addColor
  
  const addColor=()=>{
    cells.forEach((cell)=>{
      if(cell.innerHTML==="0") cell.style.backgroundColor="white";
      else if(cell.innerHTML==="4") cell.style.backgroundColor="orange";
      else if(cell.innerHTML==="8") cell.style.backgroundColor="blue";
      else if(cell.innerHTML==="16") cell.style.backgroundColor="green";
      else if(cell.innerHTML==="32") cell.style.backgroundColor="red"; 
      else if(cell.innerHTML==="64") cell.style.backgroundColor="black";
      else if(cell.innerHTML==="128") cell.style.backgroundColor="purple"
      console.log("running")
      
    })
  }
  let myTime=setInterval(addColor,500);
  
  function combineCol(){
    for(let i=0;i<12;i++){
      if(cells[i].innerHTML===cells[i+4].innerHTML){
        
        let combinedTotal=parseInt(cells[i].innerHTML)+parseInt(cells[i+4].innerHTML);
        cells[i].innerHTML=combinedTotal;
        cells[i+4].innerHTML=0;
        score+=combinedTotal;
        scoreDisp.innerHTML=score;
        
        
      }
  }
  }
  
 // assign functions to keys
  const control=(e)=>{
    if(e.key==="ArrowLeft"){
     
      keyLeft();
    }
    else if(e.key=="ArrowRight"){
      keyRight();
    }
    else if(e.key=="ArrowUp"){
      keyUp()
    }
    else if(e.key==="ArrowDown"){
      keyDown();
    }
  }
  
  document.addEventListener('keydown',control);
  
  function keyLeft(){
    moveLeft();
    combineRow();
    moveLeft();
    generate();
  }
  
   
  function keyRight(){
    moveRight();
    combineRow();
    moveRight();
    generate();
  }
  function keyUp(){
    moveUp();
    combineCol();
    moveUp();
    generate();
  }
  function keyDown(){
    moveDown();
    combineCol();
    moveDown();
    generate();
  }
  
  
  function makeZero(){
    cells.forEach((cell)=>cell.style.visible="hidden");
  }
  
  // create the playing board
  function createBoard(){
    for(let i=0;i<width*width;i++){
      const cell=document.createElement('div');
      cell.innerText=0;
      grid.appendChild(cell);
      cells.push(cell);    
      
    }
    generate();
    generate();

  }
  
  
  // function to restart game
  function restart(){
    cells=[]
    score=0;
    makeZero();
    createBoard();
    let myTime=setInterval(addColor,500);
    
  }
  createBoard();
  
  
});
