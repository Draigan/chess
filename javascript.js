//v
//  My global variables
//
var currentTurnColor = 'black';
var possibilityState = false;
var currentObject;

var globalCol;
var globalRow;

//
//  Query Selectors for squares and an array for the divs
//   
const a1Div = document.querySelector('.a1-Square');
const a2Div = document.querySelector('.a2-Square');
const a3Div = document.querySelector('.a3-Square');
const a4Div = document.querySelector('.a4-Square');
const a5Div = document.querySelector('.a5-Square');
const a6Div = document.querySelector('.a6-Square');
const a7Div = document.querySelector('.a7-Square');
const a8Div = document.querySelector('.a8-Square');

const b1Div = document.querySelector('.b1-Square');
const b2Div = document.querySelector('.b2-Square');
const b3Div = document.querySelector('.b3-Square');
const b4Div = document.querySelector('.b4-Square');
const b5Div = document.querySelector('.b5-Square');
const b6Div = document.querySelector('.b6-Square');
const b7Div = document.querySelector('.b7-Square');
const b8Div = document.querySelector('.b8-Square');

const c1Div = document.querySelector('.c1-Square');
const c2Div = document.querySelector('.c2-Square');
const c3Div = document.querySelector('.c3-Square');
const c4Div = document.querySelector('.c4-Square');
const c5Div = document.querySelector('.c5-Square');
const c6Div = document.querySelector('.c6-Square');
const c7Div = document.querySelector('.c7-Square');
const c8Div = document.querySelector('.c8-Square');

const d1Div = document.querySelector('.d1-Square');
const d2Div = document.querySelector('.d2-Square');
const d3Div = document.querySelector('.d3-Square');
const d4Div = document.querySelector('.d4-Square');
const d5Div = document.querySelector('.d5-Square');
const d6Div = document.querySelector('.d6-Square');
const d7Div = document.querySelector('.d7-Square');
const d8Div = document.querySelector('.d8-Square');

const e1Div = document.querySelector('.e1-Square');
const e2Div = document.querySelector('.e2-Square');
const e3Div = document.querySelector('.e3-Square');
const e4Div = document.querySelector('.e4-Square');
const e5Div = document.querySelector('.e5-Square');
const e6Div = document.querySelector('.e6-Square');
const e7Div = document.querySelector('.e7-Square');
const e8Div = document.querySelector('.e8-Square');

const f1Div = document.querySelector('.f1-Square');
const f2Div = document.querySelector('.f2-Square');
const f3Div = document.querySelector('.f3-Square');
const f4Div = document.querySelector('.f4-Square');
const f5Div = document.querySelector('.f5-Square');
const f6Div = document.querySelector('.f6-Square');
const f7Div = document.querySelector('.f7-Square');
const f8Div = document.querySelector('.f8-Square');

const g1Div = document.querySelector('.g1-Square');
const g2Div = document.querySelector('.g2-Square');
const g3Div = document.querySelector('.g3-Square');
const g4Div = document.querySelector('.g4-Square');
const g5Div = document.querySelector('.g5-Square');
const g6Div = document.querySelector('.g6-Square');
const g7Div = document.querySelector('.g7-Square');
const g8Div = document.querySelector('.g8-Square');

const h1Div = document.querySelector('.h1-Square');
const h2Div = document.querySelector('.h2-Square');
const h3Div = document.querySelector('.h3-Square');
const h4Div = document.querySelector('.h4-Square');
const h5Div = document.querySelector('.h5-Square');
const h6Div = document.querySelector('.h6-Square');
const h7Div = document.querySelector('.h7-Square');
const h8Div = document.querySelector('.h8-Square');


const divArray = [a1Div,a2Div,a3Div,a4Div,a5Div,a6Div,a7Div,a8Div,b1Div,b2Div,
   b3Div,b4Div,b5Div,b6Div,b7Div,b8Div,c1Div,c2Div,c3Div,c4Div,c5Div,c6Div,c7Div,c8Div,
   d1Div, d2Div, d3Div,d4Div,d5Div,d6Div,d7Div,d8Div,e1Div,e2Div,e3Div,e4Div,e5Div,e6Div,
   e7Div,e8Div,f1Div,f2Div,f3Div,f4Div,f5Div,f6Div,f7Div,f8Div,g1Div,g2Div,g3Div,g4Div,
   g5Div,g6Div,g7Div,g8Div,h1Div,h2Div,h3Div,h4Div,h5Div,h6Div,h7Div,h8Div] 


//
//  Class for making Squares
//
class Square {

    constructor(_rowParam, _colParam, _typeParam, _colorParam){
        
        this.row = _rowParam;
        this.col = _colParam;
        this.possible = false; 
        this.encounter = false;
        this.blackCount = 0;
        this.whiteCount = 0;
        this.pieceType = _typeParam;
        this.pieceColor = _colorParam;

        squaresArray.push(this);
        

    }

    //
    //  Getters that I dont use for anything atm
    //
get 
getCol(){
        return this.col
        
    }
get getRow(){
        return this.row
        
    }


}

//f
//  Change Turn
//

function changeTurn(){
    
    if (currentTurnColor == 'white'){ currentTurnColor = 'black'; }
    else{ currentTurnColor = 'white';}
    resetPossibleAndEncounter();
    unvisualizePossibilities()
    console.log(currentTurnColor)
    mapImages();
    possibilityState = false;
    
}

//f
//  reset possibilities and encounter
//
function
resetPossibleAndEncounter() {
    for (let i = 0; i < squaresArray.length; i++) {
        squaresArray[i].possible = false;
        squaresArray[i].encounter = false;
    }
}


//
//  Making Squares
//
    squaresArray = [];
    

    a1Square = new Square(0,0,'','');
    a2Square = new Square(1,0,'','');
    a3Square = new Square(2,0,'','');
    a4Square = new Square(3,0,'','');
    a5Square = new Square(4,0,'','');
    a6Square = new Square(5,0,'','');
    a7Square = new Square(6,0,'','');
    a8Square = new Square(7,0,'','');

    b1Square = new Square(0,1,'','');
    b2Square = new Square(1,1,'','');
    b3Square = new Square(2,1,'','');
    b4Square = new Square(3,1,'','');
    b5Square = new Square(4,1,'pawn','black');
    b6Square = new Square(5,1,'','');
    b7Square = new Square(6,1,'','');
    b8Square = new Square(7,1,'','');

    c1Square = new Square(0,2,'bishop','white');
    c2Square = new Square(1,2,'bishop','black');
    c3Square = new Square(2,2,'bishop','black');
    c4Square = new Square(3,2,'bishop','black');
    c5Square = new Square(4,2,'bishop','black');
    c6Square = new Square(5,2,'bishop','black');
    c7Square = new Square(6,2,'bishop','black');
    c8Square = new Square(7,2,'bishop','black');


    d1Square = new Square(0,3,'','');
    d2Square = new Square(1,3,'','');
    d3Square = new Square(2,3,'','');
    d4Square = new Square(3,3,'','');
    d5Square = new Square(4,3,'','');
    d6Square = new Square(5,3,'','');
    d7Square = new Square(6,3,'','');
    d8Square = new Square(7,3,'','');


    e1Square = new Square(0,4,'bishop','white');
    e2Square = new Square(1,4,'','');
    e3Square = new Square(2,4,'','');
    e4Square = new Square(3,4,'','');
    e5Square = new Square(4,4,'','');
    e6Square = new Square(5,4,'','');
    e7Square = new Square(6,4,'','');
    e8Square = new Square(7,4,'','');

    f1Square = new Square(0,5,'','');
    f2Square = new Square(1,5,'','');
    f3Square = new Square(2,5,'','');
    f4Square = new Square(3,5,'rook','black');
    f5Square = new Square(4,5,'','');
    f6Square = new Square(5,5,'','');
    f7Square = new Square(6,5,'','');
    f8Square = new Square(7,5,'','');

    g1Square = new Square(0,6,'','');
    g2Square = new Square(1,6,'','');
    g3Square = new Square(2,6,'','');
    g4Square = new Square(3,6,'','');
    g5Square = new Square(4,6,'','');
    g6Square = new Square(5,6,'','');
    g7Square = new Square(6,6, '', '');
    g8Square = new Square(7,6,'','');


    h1Square = new Square(0,7,'','');
    h2Square = new Square(1,7,'','');
    h3Square = new Square(2,7,'','');
    h4Square = new Square(3,7,'','');
    h5Square = new Square(4,7,'','');
    h6Square = new Square(5,7,'','');
    h7Square = new Square(6,7,'','');
    h8Square = new Square(7,7,'','');

//f
//  simple loop to show possibilities as a dif color
//
function
visualizePossibilities(){
        for (let i = 0; i < 64; i ++)
        if (squaresArray[i].encounter == true) {divArray[i].style.backgroundImage = "url('./assets/index.png')";}
            else if (squaresArray[i].possible == true) {divArray[i].style.backgroundImage = "url('./assets/red2.jpg')";}  
       
        
    }
function
unvisualizePossibilities(){ 
    for (let i = 0; i < 64; i ++)
    if (squaresArray[i].encounter == false) {divArray[i].style.backgroundImage = "";}
        else if (squaresArray[i].possible == false) {divArray[i].style.backgroundImage = ''}  

}

function
mapImages(){

    for (let i = 0; i < 64; i ++)
    if (squaresArray[i].pieceType == ''){divArray[i].innerHTML =''
    }else
    if (squaresArray[i].pieceType == 'rook' && squaresArray[i].pieceColor == 'white'){
        divArray[i].innerHTML = '<img src="./assets/wR.png" alt="WhiteRook">'
    }else
    if (squaresArray[i].pieceType == 'knight' && squaresArray[i].pieceColor == 'white'){
        divArray[i].innerHTML = '<img src="./assets/wN.png" alt="WhiteKnight">'
    }else
    if (squaresArray[i].pieceType == 'bishop' && squaresArray[i].pieceColor == 'white'){
         divArray[i].innerHTML = '<img src="./assets/wB.png" alt="WhiteBishop">'
    }else
    if (squaresArray[i].pieceType == 'queen' && squaresArray[i].pieceColor == 'white'){
        elsedivArray[i].innerHTML = '<img src="./assets/wQ.png" alt="WhiteQueen">'
    }else
    if (squaresArray[i].pieceType == 'king' && squaresArray[i].pieceColor == 'white'){
        divArray[i].innerHTML = '<img src="./assets/wK.png" alt="WhiteKing">'
    }else
    if (squaresArray[i].pieceType == 'pawn' && squaresArray[i].pieceColor == 'white'){
        divArray[i].innerHTML = '<img src="./assets/wP.png" alt="WhitePawn">'
    }else


    if (squaresArray[i].pieceType == 'rook' && squaresArray[i].pieceColor == 'black'){
        divArray[i].innerHTML = '<img src="./assets/bR.png" alt="BlackRook">'
    }else
    if (squaresArray[i].pieceType == 'knight' && squaresArray[i].pieceColor == 'black'){
        divArray[i].innerHTML = '<img src="./assets/bN.png" alt="BlackKnight">'
    }else
    if (squaresArray[i].pieceType == 'bishop' && squaresArray[i].pieceColor == 'black'){
        divArray[i].innerHTML = '<img src="./assets/bB.png" alt="BlackBishop">'
    }else
    if (squaresArray[i].pieceType == 'queen' && squaresArray[i].pieceColor == 'black'){
        divArray[i].innerHTML = '<img src="./assets/bQ.png" alt="BlackQueen">'
    }else
    if (squaresArray[i].pieceType == 'king' && squaresArray[i].pieceColor == 'black'){
        divArray[i].innerHTML = '<img src="./assets/bK.png" alt="BlackKing">'
    }else
    if (squaresArray[i].pieceType == 'pawn' && squaresArray[i].pieceColor == 'black'){
        divArray[i].innerHTML = '<img src="./assets/bP.png" alt="BlackPawn">'
    }
    


}

mapImages()


//
//  Checking Piece Type
//
function
possibilityChecker(clickedSquare, row, col){
if ('rook' == clickedSquare.pieceType) { return rook(row,col)}
if ('knight' == clickedSquare.pieceType){ return knight(row,col)}
if ('bishop' == clickedSquare.pieceType){ return bishop(row,col)}
if ('queen' == clickedSquare.pieceType){  bishop(row,col); rook(row,col); return}
if ('king' == clickedSquare.pieceType){ return king(row,col)}
if ('pawn' == clickedSquare.pieceType){ return pawn(row,col)}
}



//f
//  Find the square with col and row coordinates and output that object
function
findSquare(rowinput, colinput){

for (let i = 0; i < squaresArray.length; i++){
    if (squaresArray[i].row == rowinput && squaresArray[i].col == colinput){
       
        return squaresArray[i]

    }
}


}









//f
//      Movement possibilties of the bishop.   I only have bishupright done for an exmaple
//
function
bishop(row,col){
 
    bishopUpRight(row+1, col+1)
    bishopUpLeft(row+1, col-1)
    bishopDownRight(row - 1, col + 1)
    bishopDownLeft(row - 1, col - 1)

//f
//      Movement of the bishop up right 
//
function
bishopUpRight(row, col){

 let currentSquare = findSquare(row,col) 
    

 if (currentSquare == undefined) {return}
    else if ( currentSquare.pieceColor == currentTurnColor ){
        console.log(currentSquare)
        return
    }
    
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        console.log(currentSquare)
        return
   
    }  else { 
       
       
    currentSquare.possible = true ;
    console.log(currentSquare);
    
    visualizePossibilities()
    return bishopUpRight(row + 1, col + 1)
   
}
}

//f
//      Movement of the bishop up left
//
function
bishopUpLeft(row, col){

 let currentSquare = findSquare(row,col) 
    

 if (currentSquare == undefined) {return}
   else if ( currentSquare.pieceColor == currentTurnColor || currentSquare == undefined){
        console.log(currentSquare)
      
        return
    }
    
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        console.log(currentSquare)
      
        return
   
    }  else { 
       
       
    currentSquare.possible = true ;
    console.log(currentSquare);
   
    visualizePossibilities()
    return  bishopUpLeft(row + 1, col -1)
   
}

}



//f
//      Movement of the bishop down right 
//
function
bishopDownRight(row, col){

 let currentSquare = findSquare(row,col) 
    

 if (currentSquare == undefined) {return}
    else if ( currentSquare.pieceColor == currentTurnColor ){
        console.log(currentSquare)
        return
    }
    
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        console.log(currentSquare)
        return
   
    }  else { 
       
       
    currentSquare.possible = true ;
    console.log(currentSquare);
    
    visualizePossibilities()
    return bishopDownRight(row - 1, col + 1)
   
}
}




//f
//      Movement of the bishop down left
//
function
bishopDownLeft(row, col){

 let currentSquare = findSquare(row,col) 
    

 if (currentSquare == undefined) {return}
    else if ( currentSquare.pieceColor == currentTurnColor ){
        console.log(currentSquare)
        return
    }
    
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        console.log(currentSquare)
        return
   
    }  else { 
       
       
    currentSquare.possible = true ;
    console.log(currentSquare);
    
    visualizePossibilities()
    return bishopDownLeft(row - 1, col - 1)
   
}
}


}




















//
//  Event Listener for d1 square
//
d1Div.addEventListener('click', () =>{

  if (true == possibilityState && false == d1Square.possible && false == d1Square.encounter){
    resetPossibleAndEncounter();
    unvisualizePossibilities();
    possibilityState = false;
    return
  } 
  if (true == d1Square.possible){
        d1Square.pieceType = currentObject.pieceType;
        d1Square.pieceColor = currentObject.pieceColor;
        currentObject.pieceType = ''; 
        currentObject.pieceColor = '';    
        console.log(d1Square)
        console.log(currentObject)
        changeTurn()
        return


    }
    if (true == d1Square.encounter){ 
        d1Square.pieceType = currentObject.pieceType;
        d1Square.pieceColor = currentObject.pieceColor;
         currentObject.pieceType = ''; 
         currentObject.pieceColor = '';
       
    console.log(d1Square); 
    console.log(currentObject)
    changeTurn()
     return}
   
    if (true == possibilityState){ 
        return

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //

    } else if ('white' == currentTurnColor && 'white' == d1Square.pieceColor) {
     currentObject = d1Square;
     possibilityChecker(d1Square,0,3);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == d1Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = d1Square;
        possibilityState = true;
        possibilityChecker(d1Square,0,3);
        console.log('blacksturn')
        return
   
        }
 
})







//
//  Event Listener for d2 square
//
d2Div.addEventListener('click', () =>{

   
    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return



    } else if ('white' == currentTurnColor && 'white' == d2Square.pieceColor) {
     currentObject = d2Square;
     possibilityChecker(d2Square,1,3);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == d2Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = d2Square;
        possibilityState = true;
        possibilityChecker(d2Square,1,3);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for d3 square
//
d3Div.addEventListener('click', () =>{

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == d3Square.pieceColor) {
     currentObject = d3Square;
     possibilityChecker(d3Square,2,3);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == d3Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = d3Square;
        possibilityState = true;
        possibilityChecker(d3Square,2,3);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for d4 square
//
d4Div.addEventListener('click', () =>{

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == d4Square.pieceColor) {
     currentObject = d4Square;
     possibilityChecker(d4Square,3,3);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == d4Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = d4Square;
        possibilityState = true;
        possibilityChecker(d4Square,3,3);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for d5 square
//
d5Div.addEventListener('click', () =>{

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == d5Square.pieceColor) {
     currentObject = d5Square;
     possibilityChecker(d5Square,4,3);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == d5Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = d5Square;
        possibilityState = true;
        possibilityChecker(d5Square,4,3);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for d6 square
//
d6Div.addEventListener('click', () =>{

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == d6Square.pieceColor) {
     currentObject = d6Square;
     possibilityChecker(d6Square,5,3);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == d6Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = d6Square;
        possibilityState = true;
        possibilityChecker(d6Square,5,3);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for d7 square
//
d7Div.addEventListener('click', () =>{

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == d7Square.pieceColor) {
     currentObject = d7Square;
     possibilityChecker(d7Square,6,3);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == d7Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = d7Square;
        possibilityState = true;
        possibilityChecker(d7Square,6,3);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for d8 square
//
d8Div.addEventListener('click', () =>{

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == d8Square.pieceColor) {
     currentObject = d8Square;
     possibilityChecker(d8Square,7,3);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == d8Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = d8Square;
        possibilityState = true;
        possibilityChecker(d8Square,7,3);
        console.log('blacksturn')
        return
   
        }
 
})


//
//  Event Listener for c1 square
//
c1Div.addEventListener('click', () =>{

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == c1Square.pieceColor) {
     currentObject = c1Square;
     possibilityChecker(c1Square,0,2);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == c1Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = c1Square;
        possibilityState = true;
        possibilityChecker(c1Square,0,2);
        console.log('blacksturn')
        return
   
        }
 
})







//
//  Event Listener for c2 square
//
c2Div.addEventListener('click', () =>{

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return 

    } else if ('white' == currentTurnColor && 'white' == c2Square.pieceColor) {
     currentObject = c2Square;
     possibilityChecker(c2Square,1,2);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == c2Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = c2Square;
        possibilityState = true;
        possibilityChecker(c2Square,1,2);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for c2 square
//
c2Div.addEventListener('click', () =>{

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == c2Square.pieceColor) {
     currentObject = c2Square;
     possibilityChecker(c2Square,1,2);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == c2Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = c2Square;
        possibilityState = true;
        possibilityChecker(c2Square,1,2);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for c3 square
//
c3Div.addEventListener('click', () =>{

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == c3Square.pieceColor) {
     currentObject = c3Square;
     possibilityChecker(c3Square,2,2);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == c3Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = c3Square;
        possibilityState = true;
        possibilityChecker(c3Square,2,2);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for c4 square
//
c4Div.addEventListener('click', () =>{

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == c4Square.pieceColor) {
     currentObject = c4Square;
     possibilityChecker(c4Square,3,2);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == c4Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = c4Square;
        possibilityState = true;
        possibilityChecker(c4Square,3,2);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for c5 square
//
c5Div.addEventListener('click', () =>{

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == c5Square.pieceColor) {
     currentObject = c5Square;
     possibilityChecker(c5Square,4,2);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == c5Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = c5Square;
        possibilityState = true;
        possibilityChecker(c5Square,4,2);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for c6 square
//
c6Div.addEventListener('click', () =>{

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == c6Square.pieceColor) {
     currentObject = c6Square;
     possibilityChecker(c6Square,5,2);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == c6Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = c6Square;
        possibilityState = true;
        possibilityChecker(c6Square,5,2);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for c7 square
//
c7Div.addEventListener('click', () =>{

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == c7Square.pieceColor) {
     currentObject = c7Square;
     possibilityChecker(c7Square,6,2);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == c7Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = c7Square;
        possibilityState = true;
        possibilityChecker(c7Square,6,2);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for c8 square
//
c8Div.addEventListener('click', () =>{

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == c8Square.pieceColor) {
     currentObject = c8Square;
     possibilityChecker(c8Square,7,2);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == c8Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = c8Square;
        possibilityState = true;
        possibilityChecker(c8Square,7,2);
        console.log('blacksturn')
        return
   
        }
 
})



//
//  Event listener for e4 square
//
e4Div.addEventListener('click', () =>{

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == e4Square.pieceColor) {
     currentObject = e4Square;
     possibilityChecker(e4Square,3,4);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == e4Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = e4Square;
        possibilityState = true;
        possibilityChecker(e4Square,3,4);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for e5 square
//
e5Div.addEventListener('click', () =>{

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == e5Square.pieceColor) {
     currentObject = e5Square;
     possibilityChecker(e5Square,4,4);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == e5Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = e5Square;
        possibilityState = true;
        possibilityChecker(e5Square,4,4);
        console.log('blacksturn')
        return
   
        }
 
})




//
//  Event Listener for f6 square
//
f6Div.addEventListener('click', () =>{

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == f6Square.pieceColor) {
     currentObject = f6Square;
     possibilityChecker(f6Square,5,5);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == f6Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = f6Square;
        possibilityState = true;
        possibilityChecker(f6Square,5,5);
        console.log('blacksturn')
        return
   
        }
 
})

