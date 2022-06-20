
function
checkChecker(){


//l
//  If white piececolor is white and the piece is a king and the black count is not zero
//
    if ('white' == currentTurnColor){
    for 
        (let i = 0; i < squaresArray.length; i ++){
            if ('king' == squaresArray[i].pieceType && 'white' == squaresArray[i].pieceColor && 0 != squaresArray[i].blackCount ){ 
                divArray[i].style.backgroundImage = "url('./assets/red2.jpg')"
                squaresArray[i].check = true;
            wKingInCheck = true;
            



        }
    }
}


//l
//  If piececolor is black and the piece is a king and the white count is not zero
//
if ('black' == currentTurnColor){
    for 
        (let i = 0; i < squaresArray.length; i ++){
            if ('king' == squaresArray[i].pieceType && 'black' == squaresArray[i].pieceColor && 0 != squaresArray[i].blackCount ){ 
                divArray[i].style.backgroundImage = "url('./assets/red2.jpg')"
            bKingInCheck = true;
            squaresArray[i].check = true;


        }
    }
}
}





//v
//  My global variables
//
var currentTurnColor = 'white';
var possibilityState = false;
var currentObject;

var lastObject = [];    //this guy is for housing the game history.
var wKingMoved = false;
var bKingMoved = false;
var h1RookMoved = false;
var a1RookMoved = false;
var wKingInCheck = false;
var bKingInCheck = false;



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
        this.blackCount = 1;
        this.whiteCount = 0;
        this.pieceType = _typeParam;
        this.pieceColor = _colorParam;
        this.check = false;

        squaresArray.push(this);
        

    }

 


}

//f
//  Change Turn
//

function 
changeTurn(){
    
    if (currentTurnColor == 'white'){ currentTurnColor = 'black'; }
    else{ currentTurnColor = 'white';}
    resetPossibleAndEncounter();
    unvisualizePossibilities()
    lastObject.pop()
    lastObject.push(currentObject)
    console.log(currentObject)
    console.log(currentTurnColor)
    mapImages();
    possibilityState = false;
   
    checkChecker();
    
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
    

    a1Square = new Square(0,0,'rook','white');
    a2Square = new Square(1,0,'pawn','white');
    a3Square = new Square(2,0,'','');
    a4Square = new Square(3,0,'','');
    a5Square = new Square(4,0,'','');
    a6Square = new Square(5,0,'','');
    a7Square = new Square(6,0,'pawn','black');
    a8Square = new Square(7,0,'rook','black');

    b1Square = new Square(0,1,'knight','white');
    b2Square = new Square(1,1,'pawn','white');
    b3Square = new Square(2,1,'','');
    b4Square = new Square(3,1,'','');
    b5Square = new Square(4,1,'','');
    b6Square = new Square(5,1,'','');
    b7Square = new Square(6,1,'pawn','black');
    b8Square = new Square(7,1,'knight','black');

    c1Square = new Square(0,2,'bishop','white');
    c2Square = new Square(1,2,'pawn','white');
    c3Square = new Square(2,2,'','');
    c4Square = new Square(3,2,'','');
    c5Square = new Square(4,2,'','');
    c6Square = new Square(5,2,'','');
    c7Square = new Square(6,2,'pawn','black');
    c8Square = new Square(7,2,'bishop','black');


    d1Square = new Square(0,3,'queen','white');
    d2Square = new Square(1,3,'pawn','white');
    d3Square = new Square(2,3,'','');
    d4Square = new Square(3,3,'','');
    d5Square = new Square(4,3,'','');
    d6Square = new Square(5,3,'','');
    d7Square = new Square(6,3,'pawn','black');
    d8Square = new Square(7,3,'queen','black');


    e1Square = new Square(0,4,'king','white');
    e2Square = new Square(1,4,'pawn','white');
    e3Square = new Square(2,4,'','');
    e4Square = new Square(3,4,'','');
    e5Square = new Square(4,4,'','');
    e6Square = new Square(5,4,'','');
    e7Square = new Square(6,4,'pawn','black');
    e8Square = new Square(7,4,'king','black');

    f1Square = new Square(0,5,'bishop','white');
    f2Square = new Square(1,5,'pawn','white');
    f3Square = new Square(2,5,'','');
    f4Square = new Square(3,5,'','');
    f5Square = new Square(4,5,'','');
    f6Square = new Square(5,5,'','');
    f7Square = new Square(6,5,'pawn','black');
    f8Square = new Square(7,5,'bishop','black');

    g1Square = new Square(0,6,'knight','white');
    g2Square = new Square(1,6,'pawn','white');
    g3Square = new Square(2,6,'','');
    g4Square = new Square(3,6,'','');
    g5Square = new Square(4,6,'','');
    g6Square = new Square(5,6,'','');
    g7Square = new Square(6,6,'pawn','black');
    g8Square = new Square(7,6,'knight','black');


    h1Square = new Square(0,7,'rook','white');
    h2Square = new Square(1,7,'pawn','white');
    h3Square = new Square(2,7,'','');
    h4Square = new Square(3,7,'','');
    h5Square = new Square(4,7,'','');
    h6Square = new Square(5,7,'','');
    h7Square = new Square(6,7,'pawn','black');
    h8Square = new Square(7,7,'rook','black');

//f
//  simple loop to show possibilities as a dif color
//
function
visualizePossibilities(){
        for (let i = 0; i < 64; i ++){
        if (squaresArray[i].encounter == true) {divArray[i].style.backgroundImage = "url('./assets/red2.jpg')";}
            else if (squaresArray[i].possible == true) {divArray[i].style.backgroundImage = "url('./assets/index.png')";}  
        }
        
    }
function
unvisualizePossibilities(){ 
    for (let i = 0; i < 64; i ++){
    if (squaresArray[i].encounter == false) {divArray[i].style.backgroundImage = "";}
        else if (squaresArray[i].possible == false) {divArray[i].style.backgroundImage = ''}
        
        }

      
    }
    



//f
//  Map Images
//
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
        divArray[i].innerHTML = '<img src="./assets/wQ.png" alt="WhiteQueen">'
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
pieceChecker(clickedSquare, row, col){
if ('rook' == clickedSquare.pieceType) { return rook(row,col)}
if ('knight' == clickedSquare.pieceType){ return knight(row,col)}
if ('bishop' == clickedSquare.pieceType){ return bishop(row,col)}
if ('queen' == clickedSquare.pieceType){  bishop(row,col); rook(row,col); return}
if ('king' == clickedSquare.pieceType){ return king(row,col)}
if ('pawn' == clickedSquare.pieceType && 'white' == currentTurnColor){ return wPawn(row,col)}
if ('pawn' == clickedSquare.pieceType && 'black' == currentTurnColor){ return bPawn(row,col)}
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
//  movement of the king
//

function
king(row,col){
    kingUpRight(row+1, col+1)
    kingUpLeft(row+1, col-1)
    kingDownRight(row - 1, col + 1)
    kingDownLeft(row - 1, col - 1)

    kingRight(row, col+1)
    kingLeft(row, col-1)
    kingDown(row - 1, col)
    kingUp(row + 1, col )

//f
//      Movement of the king  right 
//
function
kingRight(row, col){

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
    return 
   
}
}

//f
//      Movement of the king left
//
function
kingLeft(row, col){

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
    return  
   
}

}



//f
//      Movement of the king down 
//
function
kingDown(row, col){

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
    return 
   
}
}




//f
//      Movement of the king up
//
function
kingUp(row, col){

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
    return 
   
}
}








    
//f
//      Movement of the king up right 
//
function
kingUpRight(row, col){

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
    return
   
}
}

//f
//      Movement of the king up left
//
function
kingUpLeft(row, col){

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
    return  
   
}

}



//f
//      Movement of the king down right 
//
function
kingDownRight(row, col){

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
    return 
   
}
}




//f
//      Movement of the king down left
//
function
kingDownLeft(row, col){

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
    return 
   
}
}
    

}






























//f
//      Movement possibilties of the bishop.  
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
        visualizePossibilities()
        return
   
    }  else { 
       
       
    currentSquare.possible = true ;
    console.log(currentSquare);
    
    visualizePossibilities()
    return bishopDownLeft(row - 1, col - 1)
   
}
}
}













//f
//      Movement possibilties of the rook.   
//
function
rook(row,col){
 
    rookRight(row, col+1)
    rookLeft(row, col-1)
    rookDown(row - 1, col)
    rookUp(row + 1, col )

//f
//      Movement of the rook up right 
//
function
rookRight(row, col){

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
    return rookRight(row , col + 1)
   
}
}

//f
//      Movement of the rook left
//
function
rookLeft(row, col){

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
    return  rookLeft(row, col-1)
   
}

}



//f
//      Movement of the rook down 
//
function
rookDown(row, col){

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
    return rookDown(row - 1, col)
   
}
}




//f
//      Movement of the rook down left
//
function
rookUp(row, col){

 let currentSquare = findSquare(row,col) 
    

 if (currentSquare == undefined) {return}
    else if ( currentSquare.pieceColor == currentTurnColor ){
        console.log(currentSquare)
        return
    }
    
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        console.log(currentSquare)
        visualizePossibilities()
        return
   
    }  else { 
       
       
    currentSquare.possible = true ;
    console.log(currentSquare);
    
    visualizePossibilities()
    return rookUp(row +1, col )
   
}
}


}






//f
//      Movement possibilties of the knight.  
//
function
knight(row,col){
 
    knightMove1(row + 2, col + 1)
    knightMove2(row + 1, col + 2)
    knightMove3(row - 1, col + 2)
    knightMove4(row - 2, col + 1)
    knightMove5(row - 2, col - 1)
    knightMove6(row - 1, col - 2)
    knightMove7(row + 1, col - 2)
    knightMove8(row + 2, col - 1)
//f
//      Movement possibility of knight
//
function
knightMove1(row, col){

 let currentSquare = findSquare(row,col) 
    

 if (currentSquare == undefined) {return}
    else if ( currentSquare.pieceColor == currentTurnColor ){
        console.log(currentSquare)
        return
    }
    
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        console.log(currentSquare)
        visualizePossibilities()
        return
   
    }  else { 
       
       
    currentSquare.possible = true ;
    console.log(currentSquare);
    
    visualizePossibilities()
   
   
}
}

//f
//      Movement of the knight up left
//
function
knightMove2(row, col){

 let currentSquare = findSquare(row,col) 
    

 if (currentSquare == undefined) {return}
   else if ( currentSquare.pieceColor == currentTurnColor || currentSquare == undefined){
        console.log(currentSquare)
      
        return
    }
    
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        visualizePossibilities()
        console.log(currentSquare)
      
        return
   
    }  else { 
       
       
    currentSquare.possible = true ;
    console.log(currentSquare);
   
    visualizePossibilities()
    return 
   
}

}



//f
//      Movement of the knight down right 
//
function
knightMove3(row, col){

 let currentSquare = findSquare(row,col) 
    

 if (currentSquare == undefined) {return}
    else if ( currentSquare.pieceColor == currentTurnColor ){
        console.log(currentSquare)
        return
    }
    
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        visualizePossibilities()
        console.log(currentSquare)
        return
   
    }  else { 
       
       
    currentSquare.possible = true ;
    console.log(currentSquare);
    
    visualizePossibilities()
    return 
   
}
}




//f
//      Movement of the knight down left
//
function
knightMove4(row, col){

 let currentSquare = findSquare(row,col) 
    

 if (currentSquare == undefined) {return}
    else if ( currentSquare.pieceColor == currentTurnColor ){
        console.log(currentSquare)
        return
    }
    
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        visualizePossibilities()
        console.log(currentSquare)
        return
   
    }  else { 
       
       
    currentSquare.possible = true ;
    console.log(currentSquare);
    
    visualizePossibilities()
    return 
   
}
}



//f
//      Movement possibility of knight
//
function
knightMove5(row, col){

 let currentSquare = findSquare(row,col) 
    

 if (currentSquare == undefined) {return}
    else if ( currentSquare.pieceColor == currentTurnColor ){
        console.log(currentSquare)
        return
    }
    
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        visualizePossibilities()
        console.log(currentSquare)
        return
   
    }  else { 
       
       
    currentSquare.possible = true ;
    console.log(currentSquare);
    
    visualizePossibilities()
   
   return
}
}

//f
//      Movement of the knight up left
//
function
knightMove6(row, col){

 let currentSquare = findSquare(row,col) 
    

 if (currentSquare == undefined) {return}
   else if ( currentSquare.pieceColor == currentTurnColor || currentSquare == undefined){
        console.log(currentSquare)
      
        return
    }
    
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        visualizePossibilities()
        console.log(currentSquare)
      
        return
   
    }  else { 
       
       
    currentSquare.possible = true ;
    console.log(currentSquare);
   
    visualizePossibilities()
    return 
   
}

}



//f
//      Movement of the knight down right 
//
function
knightMove7(row, col){

 let currentSquare = findSquare(row,col) 
    

 if (currentSquare == undefined) {return}
    else if ( currentSquare.pieceColor == currentTurnColor ){
        console.log(currentSquare)
        
        return
    }
    
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        console.log(currentSquare)
        visualizePossibilities()
        return
   
    }  else { 
       
       
    currentSquare.possible = true ;
    console.log(currentSquare);
    
    visualizePossibilities()
    return 
   
}
}




//f
//      Movement of the knight down left
//
function
knightMove8(row, col){

 let currentSquare = findSquare(row,col) 
    

 if (currentSquare == undefined) {return}
    else if ( currentSquare.pieceColor == currentTurnColor ){
        console.log(currentSquare)
        return
    }
    
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        console.log(currentSquare)
        visualizePossibilities()
        return
   
    }  else { 
       
       
    currentSquare.possible = true ;
    console.log(currentSquare);
    
    visualizePossibilities()
    return 
   
}
}






}



//f
//      Movement possibilties of the white pawn.  
//
function
wPawn(row,col){
     

    let currentSquare = findSquare(row,col) 
    let doubleJumpEncounterSquare = findSquare(row+1,col)

    let wPawnArray = [ a2Square,b2Square,c2Square,d2Square,e2Square,f2Square,g2Square,h2Square]

    for (let i = 0; i < wPawnArray.length; i++)

    if (  currentSquare == wPawnArray[i] && doubleJumpEncounterSquare.pieceColor == ''){
        wPawnUp(row+2,col)
    }

    wPawnUpRight(row+1, col+1)
    wPawnUpLeft(row+1, col-1)
    wPawnUp (row+1,col)


//f
//      Movement of the pawn up right 
//
function
wPawnUpRight(row, col){

 let currentSquare = findSquare(row,col) 
    

 if (currentSquare == undefined) {return}
    else if ( currentSquare.pieceColor == currentTurnColor ){
        console.log(currentSquare)
        return
    }
    
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        visualizePossibilities()
        console.log(currentSquare)
        return
   
    } 
}

//f
//      Movement of the wPawn up left
//
function
wPawnUpLeft(row, col){

 let currentSquare = findSquare(row,col) 
    

 if (currentSquare == undefined) {return}
   else if ( currentSquare.pieceColor == currentTurnColor || currentSquare == undefined){
        console.log(currentSquare)
      
        return
    }
    
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        visualizePossibilities()
        console.log(currentSquare)
      
        return
   
   
  
   
}
}


//f
//      Movement of the pawn down left
//
function
wPawnUp(row, col){

 let currentSquare = findSquare(row,col) 
    

 if (currentSquare == undefined) {return}
    else if ( currentSquare.pieceColor != '' ){
        console.log(currentSquare)
        return
    }
    
     else { 
       
       
    currentSquare.possible = true ;
    console.log(currentSquare);
    
    visualizePossibilities()
    return 
   
}
}

}










//f
//      Movement possibilties of the bPawn.  
//
function
bPawn(row,col){

    let doubleJumpEncounterSquare = findSquare(row-1,col)
    
    let currentSquare = findSquare(row,col) 
    let pawnArray = [ a7Square,b7Square,c7Square,d7Square,e7Square,f7Square,g7Square,h7Square]

    for (let i = 0; i < pawnArray.length; i++)

    if ( currentSquare == pawnArray[i] && doubleJumpEncounterSquare.pieceColor == ''){
        bPawnUp(row-2,col)
    }
 

    



    bPawnUpRight(row-1, col+1)
    bPawnUpLeft(row-1, col-1)
    bPawnUp (row-1,col)


//f
//      Movement of the bPawn up right 
//
function
bPawnUpRight(row, col){

 let currentSquare = findSquare(row,col) 
    

 if (currentSquare == undefined) {return}
    else if ( currentSquare.pieceColor == currentTurnColor ){
        console.log(currentSquare)
        return
    }
    
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        visualizePossibilities()
        console.log(currentSquare)
        return
   
    } 
}

//f
//      Movement of the bPawn up left
//
function
bPawnUpLeft(row, col){

 let currentSquare = findSquare(row,col) 
    

 if (currentSquare == undefined) {return}
   else if ( currentSquare.pieceColor == currentTurnColor || currentSquare == undefined){
        console.log(currentSquare)
      
        return
    }
    
    else if (currentSquare.pieceColor != '' && currentSquare.pieceColor != currentTurnColor){
        currentSquare.encounter = true
        visualizePossibilities()
        console.log(currentSquare)
      
        return
   
   
  
   
}
}


//f
//      Movement of the black pawn up
//
function
bPawnUp(row, col){

 let currentSquare = findSquare(row,col) 
    

 if (currentSquare == undefined) {return}
    else if ( currentSquare.pieceColor != '' ){
        console.log(currentSquare)
        return
    }
    
     else { 
       
       
    currentSquare.possible = true ;
    console.log(currentSquare);
    
    visualizePossibilities()
    return 
   
}
}

}
















































































//
//  Event Listener for a1 square
//
a1Div.addEventListener('click', () =>{


    if (true == possibilityState && false == a1Square.possible && false == a1Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == a1Square.possible){
            a1Square.pieceType = currentObject.pieceType;
            a1Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(a1Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == a1Square.encounter){ 
            a1Square.pieceType = currentObject.pieceType;
            a1Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(a1Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}


    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == a1Square.pieceColor) {
     currentObject = a1Square;
     pieceChecker(a1Square,0,0);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == a1Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = a1Square;
        possibilityState = true;
        pieceChecker(a1Square,0,0);
        console.log('blacksturn')
        return
   
        }
 
})





//
//  Event Listener for a2 square
//
a2Div.addEventListener('click', () =>{


    if (true == possibilityState && false == a2Square.possible && false == a2Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == a2Square.possible){
            a2Square.pieceType = currentObject.pieceType;
            a2Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(a2Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == a2Square.encounter){ 
            a2Square.pieceType = currentObject.pieceType;
            a2Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(a2Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == a2Square.pieceColor) {
     currentObject = a2Square;
     pieceChecker(a2Square,1,0);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == a2Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = a2Square;
        possibilityState = true;
        pieceChecker(a2Square,1,0);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for a3 square
//
a3Div.addEventListener('click', () =>{

    if (true == possibilityState && false == a3Square.possible && false == a3Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == a3Square.possible){
            a3Square.pieceType = currentObject.pieceType;
            a3Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(a3Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == a3Square.encounter){ 
            a3Square.pieceType = currentObject.pieceType;
            a3Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(a3Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == a3Square.pieceColor) {
     currentObject = a3Square;
     pieceChecker(a3Square,2,0);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == a3Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = a3Square;
        possibilityState = true;
        pieceChecker(a3Square,2,0);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for a4 square
//
a4Div.addEventListener('click', () =>{

    if (true == possibilityState && false == a4Square.possible && false == a4Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == a4Square.possible){
            a4Square.pieceType = currentObject.pieceType;
            a4Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(a4Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == a4Square.encounter){ 
            a4Square.pieceType = currentObject.pieceType;
            a4Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(a4Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}


    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == a4Square.pieceColor) {
     currentObject = a4Square;
     pieceChecker(a4Square,3,0);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == a4Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = a4Square;
        possibilityState = true;
        pieceChecker(a4Square,3,0);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for a5 square
//
a5Div.addEventListener('click', () =>{

    if (true == possibilityState && false == a5Square.possible && false == a5Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == a5Square.possible){
            a5Square.pieceType = currentObject.pieceType;
            a5Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(a5Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == a5Square.encounter){ 
            a5Square.pieceType = currentObject.pieceType;
            a5Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(a5Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == a5Square.pieceColor) {
     currentObject = a5Square;
     pieceChecker(a5Square,4,0);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == a5Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = a5Square;
        possibilityState = true;
        pieceChecker(a5Square,4,0);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for a6 square
//
a6Div.addEventListener('click', () =>{

    if (true == possibilityState && false == a6Square.possible && false == a6Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == a6Square.possible){
            a6Square.pieceType = currentObject.pieceType;
            a6Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(a6Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == a6Square.encounter){ 
            a6Square.pieceType = currentObject.pieceType;
            a6Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
          
        console.log(a6Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
       

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == a6Square.pieceColor) {
     currentObject = a6Square;
     pieceChecker(a6Square,5,0);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == a6Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = a6Square;
        possibilityState = true;
        pieceChecker(a6Square,5,0);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for a7 square
//
a7Div.addEventListener('click', () =>{

    if (true == possibilityState && false == a7Square.possible && false == a7Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == a7Square.possible){
            a7Square.pieceType = currentObject.pieceType;
            a7Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(a7Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == a7Square.encounter){ 
            a7Square.pieceType = currentObject.pieceType;
            a7Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(a7Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == a7Square.pieceColor) {
     currentObject = a7Square;
     pieceChecker(a7Square,6,0);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == a7Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = a7Square;
        possibilityState = true;
        pieceChecker(a7Square,6,0);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for a8 square
//
a8Div.addEventListener('click', () =>{

    if (true == possibilityState && false == a8Square.possible && false == a8Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == a8Square.possible){
            a8Square.pieceType = currentObject.pieceType;
            a8Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(a8Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == a8Square.encounter){ 
            a8Square.pieceType = currentObject.pieceType;
            a8Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(a8Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == a8Square.pieceColor) {
     currentObject = a8Square;
     pieceChecker(a8Square,7,0);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == a8Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = a8Square;
        possibilityState = true;
        pieceChecker(a8Square,7,0);
        console.log('blacksturn')
        return
   
        }
 
})





//
//  Event Listener for b1 square
//
b1Div.addEventListener('click', () =>{


    if (true == possibilityState && false == b1Square.possible && false == b1Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == b1Square.possible){
            b1Square.pieceType = currentObject.pieceType;
            b1Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(b1Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == b1Square.encounter){ 
            b1Square.pieceType = currentObject.pieceType;
            b1Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(b1Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}


    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == b1Square.pieceColor) {
     currentObject = b1Square;
     pieceChecker(b1Square,0,1);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == b1Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = b1Square;
        possibilityState = true;
        pieceChecker(b1Square,0,1);
        console.log('blacksturn')
        return
   
        }
 
})





//
//  Event Listener for b2 square
//
b2Div.addEventListener('click', () =>{


    if (true == possibilityState && false == b2Square.possible && false == b2Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == b2Square.possible){
            b2Square.pieceType = currentObject.pieceType;
            b2Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(b2Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == b2Square.encounter){ 
            b2Square.pieceType = currentObject.pieceType;
            b2Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(b2Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == b2Square.pieceColor) {
     currentObject = b2Square;
     pieceChecker(b2Square,1,1);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == b2Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = b2Square;
        possibilityState = true;
        pieceChecker(b2Square,1,1);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for b3 square
//
b3Div.addEventListener('click', () =>{

    if (true == possibilityState && false == b3Square.possible && false == b3Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == b3Square.possible){
            b3Square.pieceType = currentObject.pieceType;
            b3Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(b3Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == b3Square.encounter){ 
            b3Square.pieceType = currentObject.pieceType;
            b3Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(b3Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == b3Square.pieceColor) {
     currentObject = b3Square;
     pieceChecker(b3Square,2,1);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == b3Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = b3Square;
        possibilityState = true;
        pieceChecker(b3Square,2,1);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for b4 square
//
b4Div.addEventListener('click', () =>{

    if (true == possibilityState && false == b4Square.possible && false == b4Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == b4Square.possible){
            b4Square.pieceType = currentObject.pieceType;
            b4Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(b4Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == b4Square.encounter){ 
            b4Square.pieceType = currentObject.pieceType;
            b4Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(b4Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}


    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == b4Square.pieceColor) {
     currentObject = b4Square;
     pieceChecker(b4Square,3,1);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == b4Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = b4Square;
        possibilityState = true;
        pieceChecker(b4Square,3,1);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for b5 square
//
b5Div.addEventListener('click', () =>{

    if (true == possibilityState && false == b5Square.possible && false == b5Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == b5Square.possible){
            b5Square.pieceType = currentObject.pieceType;
            b5Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(b5Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == b5Square.encounter){ 
            b5Square.pieceType = currentObject.pieceType;
            b5Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(b5Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == b5Square.pieceColor) {
     currentObject = b5Square;
     pieceChecker(b5Square,4,1);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == b5Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = b5Square;
        possibilityState = true;
        pieceChecker(b5Square,4,1);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for b6 square
//
b6Div.addEventListener('click', () =>{

    if (true == possibilityState && false == b6Square.possible && false == b6Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == b6Square.possible){
            b6Square.pieceType = currentObject.pieceType;
            b6Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(b6Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == b6Square.encounter){ 
            b6Square.pieceType = currentObject.pieceType;
            b6Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(b6Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == b6Square.pieceColor) {
     currentObject = b6Square;
     pieceChecker(b6Square,5,1);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == b6Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = b6Square;
        possibilityState = true;
        pieceChecker(b6Square,5,1);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for b7 square
//
b7Div.addEventListener('click', () =>{

    if (true == possibilityState && false == b7Square.possible && false == b7Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == b7Square.possible){
            b7Square.pieceType = currentObject.pieceType;
            b7Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(b7Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == b7Square.encounter){ 
            b7Square.pieceType = currentObject.pieceType;
            b7Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(b7Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == b7Square.pieceColor) {
     currentObject = b7Square;
     pieceChecker(b7Square,6,1);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == b7Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = b7Square;
        possibilityState = true;
        pieceChecker(b7Square,6,1);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for b8 square
//
b8Div.addEventListener('click', () =>{

    if (true == possibilityState && false == b8Square.possible && false == b8Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == b8Square.possible){
            b8Square.pieceType = currentObject.pieceType;
            b8Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(b8Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == b8Square.encounter){ 
            b8Square.pieceType = currentObject.pieceType;
            b8Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(b8Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == b8Square.pieceColor) {
     currentObject = b8Square;
     pieceChecker(b8Square,7,1);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == b8Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = b8Square;
        possibilityState = true;
        pieceChecker(b8Square,7,1);
        console.log('blacksturn')
        return
   
        }
 
})






//
//  Event Listener for c1 square
//
c1Div.addEventListener('click', () =>{

    


    if (true == possibilityState && false == c1Square.possible && false == c1Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == c1Square.possible){
            c1Square.pieceType = currentObject.pieceType;
            c1Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(c1Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == c1Square.encounter){ 
            c1Square.pieceType = currentObject.pieceType;
            c1Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(c1Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}


    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == c1Square.pieceColor) {
     currentObject = c1Square;
     pieceChecker(c1Square,0,2);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == c1Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = c1Square;
        possibilityState = true;
        pieceChecker(c1Square,0,2);
        console.log('blacksturn')
        return
   
        }
 
})





//
//  Event Listener for c2 square
//
c2Div.addEventListener('click', () =>{


    if (true == possibilityState && false == c2Square.possible && false == c2Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == c2Square.possible){
            c2Square.pieceType = currentObject.pieceType;
            c2Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(c2Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == c2Square.encounter){ 
            c2Square.pieceType = currentObject.pieceType;
            c2Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(c2Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == c2Square.pieceColor) {
     currentObject = c2Square;
     pieceChecker(c2Square,1,2);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == c2Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = c2Square;
        possibilityState = true;
        pieceChecker(c2Square,1,2);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for c3 square
//
c3Div.addEventListener('click', () =>{

    if (true == possibilityState && false == c3Square.possible && false == c3Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == c3Square.possible){
            c3Square.pieceType = currentObject.pieceType;
            c3Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(c3Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == c3Square.encounter){ 
            c3Square.pieceType = currentObject.pieceType;
            c3Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(c3Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == c3Square.pieceColor) {
     currentObject = c3Square;
     pieceChecker(c3Square,2,2);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == c3Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = c3Square;
        possibilityState = true;
        pieceChecker(c3Square,2,2);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for c4 square
//
c4Div.addEventListener('click', () =>{

    if (true == possibilityState && false == c4Square.possible && false == c4Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == c4Square.possible){
            c4Square.pieceType = currentObject.pieceType;
            c4Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(c4Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == c4Square.encounter){ 
            c4Square.pieceType = currentObject.pieceType;
            c4Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(c4Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}


    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == c4Square.pieceColor) {
     currentObject = c4Square;
     pieceChecker(c4Square,3,2);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == c4Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = c4Square;
        possibilityState = true;
        pieceChecker(c4Square,3,2);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for c5 square
//
c5Div.addEventListener('click', () =>{

    if (true == possibilityState && false == c5Square.possible && false == c5Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == c5Square.possible){
            c5Square.pieceType = currentObject.pieceType;
            c5Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(c5Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == c5Square.encounter){ 
            c5Square.pieceType = currentObject.pieceType;
            c5Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(c5Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == c5Square.pieceColor) {
     currentObject = c5Square;
     pieceChecker(c5Square,4,2);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == c5Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = c5Square;
        possibilityState = true;
        pieceChecker(c5Square,4,2);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for c6 square
//
c6Div.addEventListener('click', () =>{

    if (true == possibilityState && false == c6Square.possible && false == c6Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == c6Square.possible){
            c6Square.pieceType = currentObject.pieceType;
            c6Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(c6Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == c6Square.encounter){ 
            c6Square.pieceType = currentObject.pieceType;
            c6Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(c6Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == c6Square.pieceColor) {
     currentObject = c6Square;
     pieceChecker(c6Square,5,2);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == c6Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = c6Square;
        possibilityState = true;
        pieceChecker(c6Square,5,2);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for c7 square
//
c7Div.addEventListener('click', () =>{

    if (true == possibilityState && false == c7Square.possible && false == c7Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == c7Square.possible){
            c7Square.pieceType = currentObject.pieceType;
            c7Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(c7Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == c7Square.encounter){ 
            c7Square.pieceType = currentObject.pieceType;
            c7Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(c7Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == c7Square.pieceColor) {
     currentObject = c7Square;
     pieceChecker(c7Square,6,2);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == c7Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = c7Square;
        possibilityState = true;
        pieceChecker(c7Square,6,2);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for c8 square
//
c8Div.addEventListener('click', () =>{

    if (true == possibilityState && false == c8Square.possible && false == c8Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == c8Square.possible){
            c8Square.pieceType = currentObject.pieceType;
            c8Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(c8Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == c8Square.encounter){ 
            c8Square.pieceType = currentObject.pieceType;
            c8Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(c8Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == c8Square.pieceColor) {
     currentObject = c8Square;
     pieceChecker(c8Square,7,2);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == c8Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = c8Square;
        possibilityState = true;
        pieceChecker(c8Square,7,2);
        console.log('blacksturn')
        return
   
        }
 
})


//
//  Event Listener for d1 square
//
d1Div.addEventListener('click', () =>{

  if (true == possibilityState && false == d1Square.possible && false == d1Square.encounter){
    resetPossibleAndEncounter();
    unvisualizePossibilities(); checkChecker();
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
        return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //

     else if ('white' == currentTurnColor && 'white' == d1Square.pieceColor) {
     currentObject = d1Square;
     pieceChecker(d1Square,0,3);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == d1Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = d1Square;
        possibilityState = true;
        pieceChecker(d1Square,0,3);
        console.log('blacksturn')
        return
   
        }
 
})







//
//  Event Listener for d2 square
//
d2Div.addEventListener('click', () =>{
    if (true == possibilityState && false == d2Square.possible && false == d2Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == d2Square.possible){
            d2Square.pieceType = currentObject.pieceType;
            d2Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(d2Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == d2Square.encounter){ 
            d2Square.pieceType = currentObject.pieceType;
            d2Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(d2Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    
   
    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return



    } else if ('white' == currentTurnColor && 'white' == d2Square.pieceColor) {
     currentObject = d2Square;
     pieceChecker(d2Square,1,3);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == d2Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = d2Square;
        possibilityState = true;
        pieceChecker(d2Square,1,3);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for d3 square
//
d3Div.addEventListener('click', () =>{


    if (true == possibilityState && false == d3Square.possible && false == d3Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == d3Square.possible){
            d3Square.pieceType = currentObject.pieceType;
            d3Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(d3Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == d3Square.encounter){ 
            d3Square.pieceType = currentObject.pieceType;
            d3Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(d3Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}


    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == d3Square.pieceColor) {
     currentObject = d3Square;
     pieceChecker(d3Square,2,3);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == d3Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = d3Square;
        possibilityState = true;
        pieceChecker(d3Square,2,3);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for d4 square
//
d4Div.addEventListener('click', () =>{
   
    if (true == possibilityState && false == d4Square.possible && false == d4Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == d4Square.possible){
            d4Square.pieceType = currentObject.pieceType;
            d4Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(d4Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == d4Square.encounter){ 
            d4Square.pieceType = currentObject.pieceType;
            d4Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(d4Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}
    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == d4Square.pieceColor) {
     currentObject = d4Square;
     pieceChecker(d4Square,3,3);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == d4Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = d4Square;
        possibilityState = true;
        pieceChecker(d4Square,3,3);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for d5 square
//
d5Div.addEventListener('click', () =>{
    if (true == possibilityState && false == d5Square.possible && false == d5Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == d5Square.possible){
            d5Square.pieceType = currentObject.pieceType;
            d5Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(d5Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == d5Square.encounter){ 
            d5Square.pieceType = currentObject.pieceType;
            d5Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(d5Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}
    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == d5Square.pieceColor) {
     currentObject = d5Square;
     pieceChecker(d5Square,4,3);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == d5Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = d5Square;
        possibilityState = true;
        pieceChecker(d5Square,4,3);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for d6 square
//
d6Div.addEventListener('click', () =>{

  

    if (true == possibilityState && false == d6Square.possible && false == d6Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == d6Square.possible){
            d6Square.pieceType = currentObject.pieceType;
            d6Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(d6Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == d6Square.encounter){ 
            d6Square.pieceType = currentObject.pieceType;
            d6Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(d6Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == d6Square.pieceColor) {
     currentObject = d6Square;
     pieceChecker(d6Square,5,3);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == d6Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = d6Square;
        possibilityState = true;
        pieceChecker(d6Square,5,3);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for d7 square
//
d7Div.addEventListener('click', () =>{

    if (true == possibilityState && false == d7Square.possible && false == d7Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == d7Square.possible){
            d7Square.pieceType = currentObject.pieceType;
            d7Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(d7Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == d7Square.encounter){ 
            d7Square.pieceType = currentObject.pieceType;
            d7Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(d7Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}

    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == d7Square.pieceColor) {
     currentObject = d7Square;
     pieceChecker(d7Square,6,3);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == d7Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = d7Square;
        possibilityState = true;
        pieceChecker(d7Square,6,3);
        console.log('blacksturn')
        return
   
        }
 
})

//
//  Event Listener for d8 square
//
d8Div.addEventListener('click', () =>{


    if (true == possibilityState && false == d8Square.possible && false == d8Square.encounter){
        resetPossibleAndEncounter();
        unvisualizePossibilities(); checkChecker();
        possibilityState = false;
        return
      } 
      if (true == d8Square.possible){
            d8Square.pieceType = currentObject.pieceType;
            d8Square.pieceColor = currentObject.pieceColor;
            currentObject.pieceType = ''; 
            currentObject.pieceColor = '';    
            console.log(d8Square)
            console.log(currentObject)
            changeTurn()
            return
    
    
        }
        if (true == d8Square.encounter){ 
            d8Square.pieceType = currentObject.pieceType;
            d8Square.pieceColor = currentObject.pieceColor;
             currentObject.pieceType = ''; 
             currentObject.pieceColor = '';
           
        console.log(d8Square); 
        console.log(currentObject)
        changeTurn()
         return}
       
        if (true == possibilityState){ 
            return}
    //l
    //  This checks to make sure piece color and turn color are the same before running possibilities
    //
    if (true == possibilityState){ 
        return

    } else if ('white' == currentTurnColor && 'white' == d8Square.pieceColor) {
     currentObject = d8Square;
     pieceChecker(d8Square,7,3);
     possibilityState = true;
      console.log('whitesturn')
     return

    } else if ('black' == d8Square.pieceColor && 'black' == currentTurnColor) {         
        currentObject = d8Square;
        possibilityState = true;
        pieceChecker(d8Square,7,3);
        console.log('blacksturn')
        return
   
        }
 
})



//
//  Event Listener for e1 square
//
e1Div.addEventListener('click', () =>{

    if (true == possibilityState && false == e1Square.possible && false == e1Square.encounter){
      resetPossibleAndEncounter();
      unvisualizePossibilities(); checkChecker();
      possibilityState = false;
      return
    } 
    if (true == e1Square.possible){
          e1Square.pieceType = currentObject.pieceType;
          e1Square.pieceColor = currentObject.pieceColor;
          currentObject.pieceType = ''; 
          currentObject.pieceColor = '';    
          console.log(e1Square)
          console.log(currentObject)
          changeTurn()
          return
  
  
      }
      if (true == e1Square.encounter){ 
          e1Square.pieceType = currentObject.pieceType;
          e1Square.pieceColor = currentObject.pieceColor;
           currentObject.pieceType = ''; 
           currentObject.pieceColor = '';
         
      console.log(e1Square); 
      console.log(currentObject)
      changeTurn()
       return}
     
      if (true == possibilityState){ 
          return}
  
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
  
       else if ('white' == currentTurnColor && 'white' == e1Square.pieceColor) {
       currentObject = e1Square;
       pieceChecker(e1Square,0,4);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == e1Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = e1Square;
          possibilityState = true;
          pieceChecker(e1Square,0,4);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  
  
  
  
  
  
  //
  //  Event Listener for e2 square
  //
  e2Div.addEventListener('click', () =>{
      if (true == possibilityState && false == e2Square.possible && false == e2Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == e2Square.possible){
              e2Square.pieceType = currentObject.pieceType;
              e2Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(e2Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == e2Square.encounter){ 
              e2Square.pieceType = currentObject.pieceType;
              e2Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(e2Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
  
      
     
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
  
  
      } else if ('white' == currentTurnColor && 'white' == e2Square.pieceColor) {
       currentObject = e2Square;
       pieceChecker(e2Square,1,4);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == e2Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = e2Square;
          possibilityState = true;
          pieceChecker(e2Square,1,4);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for e3 square
  //
  e3Div.addEventListener('click', () =>{
  
  
      if (true == possibilityState && false == e3Square.possible && false == e3Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == e3Square.possible){
              e3Square.pieceType = currentObject.pieceType;
              e3Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(e3Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == e3Square.encounter){ 
              e3Square.pieceType = currentObject.pieceType;
              e3Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(e3Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
  
  
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == e3Square.pieceColor) {
       currentObject = e3Square;
       pieceChecker(e3Square,2,4);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == e3Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = e3Square;
          possibilityState = true;
          pieceChecker(e3Square,2,4);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for e4 square
  //
  e4Div.addEventListener('click', () =>{
      if (true == possibilityState && false == e4Square.possible && false == e4Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == e4Square.possible){
              e4Square.pieceType = currentObject.pieceType;
              e4Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(e4Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == e4Square.encounter){ 
              e4Square.pieceType = currentObject.pieceType;
              e4Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(e4Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == e4Square.pieceColor) {
       currentObject = e4Square;
       pieceChecker(e4Square,3,4);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == e4Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = e4Square;
          possibilityState = true;
          pieceChecker(e4Square,3,4);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for e5 square
  //
  e5Div.addEventListener('click', () =>{
      if (true == possibilityState && false == e5Square.possible && false == e5Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == e5Square.possible){
              e5Square.pieceType = currentObject.pieceType;
              e5Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(e5Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == e5Square.encounter){ 
              e5Square.pieceType = currentObject.pieceType;
              e5Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(e5Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == e5Square.pieceColor) {
       currentObject = e5Square;
       pieceChecker(e5Square,4,4);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == e5Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = e5Square;
          possibilityState = true;
          pieceChecker(e5Square,4,4);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for e6 square
  //
  e6Div.addEventListener('click', () =>{
  
      if (true == possibilityState && false == e6Square.possible && false == e6Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == e6Square.possible){
              e6Square.pieceType = currentObject.pieceType;
              e6Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(e6Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == e6Square.encounter){ 
              e6Square.pieceType = currentObject.pieceType;
              e6Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(e6Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
  
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == e6Square.pieceColor) {
       currentObject = e6Square;
       pieceChecker(e6Square,5,4);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == e6Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = e6Square;
          possibilityState = true;
          pieceChecker(e6Square,5,4);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for e7 square
  //
  e7Div.addEventListener('click', () =>{
  
      if (true == possibilityState && false == e7Square.possible && false == e7Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == e7Square.possible){
              e7Square.pieceType = currentObject.pieceType;
              e7Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(e7Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == e7Square.encounter){ 
              e7Square.pieceType = currentObject.pieceType;
              e7Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(e7Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
  
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == e7Square.pieceColor) {
       currentObject = e7Square;
       pieceChecker(e7Square,6,4);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == e7Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = e7Square;
          possibilityState = true;
          pieceChecker(e7Square,6,4);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for e8 square
  //
  e8Div.addEventListener('click', () =>{
  
  
      if (true == possibilityState && false == e8Square.possible && false == e8Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == e8Square.possible){
              e8Square.pieceType = currentObject.pieceType;
              e8Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(e8Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == e8Square.encounter){ 
              e8Square.pieceType = currentObject.pieceType;
              e8Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(e8Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == e8Square.pieceColor) {
       currentObject = e8Square;
       pieceChecker(e8Square,7,4);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == e8Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = e8Square;
          possibilityState = true;
          pieceChecker(e8Square,7,4);
          console.log('blacksturn')
          return
     
          }
   
  })
  



//
//  Event Listener for f1 square
//
f1Div.addEventListener('click', () =>{

    if (true == possibilityState && false == f1Square.possible && false == f1Square.encounter){
      resetPossibleAndEncounter();
      unvisualizePossibilities(); checkChecker();
      possibilityState = false;
      return
    } 
    if (true == f1Square.possible){
          f1Square.pieceType = currentObject.pieceType;
          f1Square.pieceColor = currentObject.pieceColor;
          currentObject.pieceType = ''; 
          currentObject.pieceColor = '';    
          console.log(f1Square)
          console.log(currentObject)
          changeTurn()
          return
  
  
      }
      if (true == f1Square.encounter){ 
          f1Square.pieceType = currentObject.pieceType;
          f1Square.pieceColor = currentObject.pieceColor;
           currentObject.pieceType = ''; 
           currentObject.pieceColor = '';
         
      console.log(f1Square); 
      console.log(currentObject)
      changeTurn()
       return}
     
      if (true == possibilityState){ 
          return}
  
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
  
       else if ('white' == currentTurnColor && 'white' == f1Square.pieceColor) {
       currentObject = f1Square;
       pieceChecker(f1Square,0,5);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == f1Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = f1Square;
          possibilityState = true;
          pieceChecker(f1Square,0,5);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  
  
  
  
  
  
  //
  //  Event Listener for f2 square
  //
  f2Div.addEventListener('click', () =>{
      if (true == possibilityState && false == f2Square.possible && false == f2Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == f2Square.possible){
              f2Square.pieceType = currentObject.pieceType;
              f2Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(f2Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == f2Square.encounter){ 
              f2Square.pieceType = currentObject.pieceType;
              f2Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(f2Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
  
      
     
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
  
  
      } else if ('white' == currentTurnColor && 'white' == f2Square.pieceColor) {
       currentObject = f2Square;
       pieceChecker(f2Square,1,5);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == f2Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = f2Square;
          possibilityState = true;
          pieceChecker(f2Square,1,5);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for f3 square
  //
  f3Div.addEventListener('click', () =>{
  
  
      if (true == possibilityState && false == f3Square.possible && false == f3Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == f3Square.possible){
              f3Square.pieceType = currentObject.pieceType;
              f3Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(f3Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == f3Square.encounter){ 
              f3Square.pieceType = currentObject.pieceType;
              f3Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(f3Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
  
  
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == f3Square.pieceColor) {
       currentObject = f3Square;
       pieceChecker(f3Square,2,5);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == f3Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = f3Square;
          possibilityState = true;
          pieceChecker(f3Square,2,5);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for f4 square
  //
  f4Div.addEventListener('click', () =>{
      if (true == possibilityState && false == f4Square.possible && false == f4Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == f4Square.possible){
              f4Square.pieceType = currentObject.pieceType;
              f4Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(f4Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == f4Square.encounter){ 
              f4Square.pieceType = currentObject.pieceType;
              f4Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(f4Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == f4Square.pieceColor) {
       currentObject = f4Square;
       pieceChecker(f4Square,3,5);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == f4Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = f4Square;
          possibilityState = true;
          pieceChecker(f4Square,3,5);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for f5 square
  //
  f5Div.addEventListener('click', () =>{
      if (true == possibilityState && false == f5Square.possible && false == f5Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == f5Square.possible){
              f5Square.pieceType = currentObject.pieceType;
              f5Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(f5Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == f5Square.encounter){ 
              f5Square.pieceType = currentObject.pieceType;
              f5Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(f5Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == f5Square.pieceColor) {
       currentObject = f5Square;
       pieceChecker(f5Square,4,5);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == f5Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = f5Square;
          possibilityState = true;
          pieceChecker(f5Square,4,5);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for f6 square
  //
  f6Div.addEventListener('click', () =>{
  
      if (true == possibilityState && false == f6Square.possible && false == f6Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == f6Square.possible){
              f6Square.pieceType = currentObject.pieceType;
              f6Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(f6Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == f6Square.encounter){ 
              f6Square.pieceType = currentObject.pieceType;
              f6Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(f6Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
  
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == f6Square.pieceColor) {
       currentObject = f6Square;
       pieceChecker(f6Square,5,5);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == f6Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = f6Square;
          possibilityState = true;
          pieceChecker(f6Square,5,5);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for f7 square
  //
  f7Div.addEventListener('click', () =>{
  
      if (true == possibilityState && false == f7Square.possible && false == f7Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == f7Square.possible){
              f7Square.pieceType = currentObject.pieceType;
              f7Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(f7Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == f7Square.encounter){ 
              f7Square.pieceType = currentObject.pieceType;
              f7Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(f7Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
  
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == f7Square.pieceColor) {
       currentObject = f7Square;
       pieceChecker(f7Square,6,5);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == f7Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = f7Square;
          possibilityState = true;
          pieceChecker(f7Square,6,5);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for f8 square
  //
  f8Div.addEventListener('click', () =>{
  
  
      if (true == possibilityState && false == f8Square.possible && false == f8Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == f8Square.possible){
              f8Square.pieceType = currentObject.pieceType;
              f8Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(f8Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == f8Square.encounter){ 
              f8Square.pieceType = currentObject.pieceType;
              f8Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(f8Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == f8Square.pieceColor) {
       currentObject = f8Square;
       pieceChecker(f8Square,7,5);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == f8Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = f8Square;
          possibilityState = true;
          pieceChecker(f8Square,7,5);
          console.log('blacksturn')
          return
     
          }
   
  })
  



  
//
//  Event Listener for g1 square
//
g1Div.addEventListener('click', () =>{
    
    if (false == wKingMoved && false == h1RookMoved && f1Square.pieceType == '' && g1Square.pieceType == '' 
    && 0 == g1Square.blackCount && 0 == f1Square.blackCount ){
        e1Square.pieceType = '';
        h1Square.pieceType = '';
        e1Square.pieceColor = '';
        h1Square.pieceColor = '';

        f1Square.pieceType = 'rook';
        f1Square.pieceColor = 'white';
        g1Square.pieceType = 'king';
        g1Square.pieceColor = 'white'

changeTurn()

return
    }

    if (true == possibilityState && false == g1Square.possible && false == g1Square.encounter){
      resetPossibleAndEncounter();
      unvisualizePossibilities(); checkChecker();
      possibilityState = false;
      return
    } 
    if (true == g1Square.possible){
          g1Square.pieceType = currentObject.pieceType;
          g1Square.pieceColor = currentObject.pieceColor;
          currentObject.pieceType = ''; 
          currentObject.pieceColor = '';    
          console.log(g1Square)
          console.log(currentObject)
          changeTurn()
          return
  
  
      }
      if (true == g1Square.encounter){ 
          g1Square.pieceType = currentObject.pieceType;
          g1Square.pieceColor = currentObject.pieceColor;
           currentObject.pieceType = ''; 
           currentObject.pieceColor = '';
         
      console.log(g1Square); 
      console.log(currentObject)
      changeTurn()
       return}
     
      if (true == possibilityState){ 
          return}
  
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
  
       else if ('white' == currentTurnColor && 'white' == g1Square.pieceColor) {
       currentObject = g1Square;
       pieceChecker(g1Square,0,6);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == g1Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = g1Square;
          possibilityState = true;
          pieceChecker(g1Square,0,6);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  
  
  
  
  
  
  //
  //  Event Listener for g2 square
  //
  g2Div.addEventListener('click', () =>{
      if (true == possibilityState && false == g2Square.possible && false == g2Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == g2Square.possible){
              g2Square.pieceType = currentObject.pieceType;
              g2Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(g2Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == g2Square.encounter){ 
              g2Square.pieceType = currentObject.pieceType;
              g2Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(g2Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
  
      
     
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
  
  
      } else if ('white' == currentTurnColor && 'white' == g2Square.pieceColor) {
       currentObject = g2Square;
       pieceChecker(g2Square,1,6);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == g2Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = g2Square;
          possibilityState = true;
          pieceChecker(g2Square,1,6);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for g3 square
  //
  g3Div.addEventListener('click', () =>{
  
  
      if (true == possibilityState && false == g3Square.possible && false == g3Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == g3Square.possible){
              g3Square.pieceType = currentObject.pieceType;
              g3Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(g3Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == g3Square.encounter){ 
              g3Square.pieceType = currentObject.pieceType;
              g3Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(g3Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
         
  
  
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == g3Square.pieceColor) {
       currentObject = g3Square;
       pieceChecker(g3Square,2,6);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == g3Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = g3Square;
          possibilityState = true;
          pieceChecker(g3Square,2,6);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for g4 square
  //
  g4Div.addEventListener('click', () =>{
      if (true == possibilityState && false == g4Square.possible && false == g4Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == g4Square.possible){
              g4Square.pieceType = currentObject.pieceType;
              g4Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(g4Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == g4Square.encounter){ 
              g4Square.pieceType = currentObject.pieceType;
              g4Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(g4Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == g4Square.pieceColor) {
       currentObject = g4Square;
       pieceChecker(g4Square,3,6);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == g4Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = g4Square;
          possibilityState = true;
          pieceChecker(g4Square,3,6);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for g5 square
  //
  g5Div.addEventListener('click', () =>{
      if (true == possibilityState && false == g5Square.possible && false == g5Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == g5Square.possible){
              g5Square.pieceType = currentObject.pieceType;
              g5Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(g5Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == g5Square.encounter){ 
              g5Square.pieceType = currentObject.pieceType;
              g5Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(g5Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == g5Square.pieceColor) {
       currentObject = g5Square;
       pieceChecker(g5Square,4,6);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == g5Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = g5Square;
          possibilityState = true;
          pieceChecker(g5Square,4,6);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for g6 square
  //
  g6Div.addEventListener('click', () =>{
  
      if (true == possibilityState && false == g6Square.possible && false == g6Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == g6Square.possible){
              g6Square.pieceType = currentObject.pieceType;
              g6Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(g6Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == g6Square.encounter){ 
              g6Square.pieceType = currentObject.pieceType;
              g6Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(g6Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
        
  
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == g6Square.pieceColor) {
       currentObject = g6Square;
       pieceChecker(g6Square,5,6);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == g6Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = g6Square;
          possibilityState = true;
          pieceChecker(g6Square,5,6);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for g7 square
  //
  g7Div.addEventListener('click', () =>{
  
      if (true == possibilityState && false == g7Square.possible && false == g7Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == g7Square.possible){
              g7Square.pieceType = currentObject.pieceType;
              g7Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(g7Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == g7Square.encounter){ 
              g7Square.pieceType = currentObject.pieceType;
              g7Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(g7Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
         
  
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == g7Square.pieceColor) {
       currentObject = g7Square;
       pieceChecker(g7Square,6,6);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == g7Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = g7Square;
          possibilityState = true;
          pieceChecker(g7Square,6,6);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for g8 square
  //
  g8Div.addEventListener('click', () =>{
  
  
      if (true == possibilityState && false == g8Square.possible && false == g8Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == g8Square.possible){
              g8Square.pieceType = currentObject.pieceType;
              g8Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(g8Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == g8Square.encounter){ 
              g8Square.pieceType = currentObject.pieceType;
              g8Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(g8Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == g8Square.pieceColor) {
       currentObject = g8Square;
       pieceChecker(g8Square,7,6);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == g8Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = g8Square;
          possibilityState = true;
          pieceChecker(g8Square,7,6);
          console.log('blacksturn')
          return
     
          }
   
  })
  


//
//  Event Listener for h1 square
//
h1Div.addEventListener('click', () =>{

    if (true == possibilityState && false == h1Square.possible && false == h1Square.encounter){
      resetPossibleAndEncounter();
      unvisualizePossibilities(); checkChecker();
      possibilityState = false;
      return
    } 
    if (true == h1Square.possible){
          h1Square.pieceType = currentObject.pieceType;
          h1Square.pieceColor = currentObject.pieceColor;
          currentObject.pieceType = ''; 
          currentObject.pieceColor = '';    
          console.log(h1Square)
          console.log(currentObject)
          changeTurn()
          return
  
  
      }
      if (true == h1Square.encounter){ 
          h1Square.pieceType = currentObject.pieceType;
          h1Square.pieceColor = currentObject.pieceColor;
           currentObject.pieceType = ''; 
           currentObject.pieceColor = '';
         
      console.log(h1Square); 
      console.log(currentObject)
      changeTurn()
       return}
     
      if (true == possibilityState){ 
          return}
  
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
  
       else if ('white' == currentTurnColor && 'white' == h1Square.pieceColor) {
       currentObject = h1Square;
       pieceChecker(h1Square,0,7);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == h1Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = h1Square;
          possibilityState = true;
          pieceChecker(h1Square,0,7);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  
  
  
  
  
  
  //
  //  Event Listener for h2 square
  //
  h2Div.addEventListener('click', () =>{
      if (true == possibilityState && false == h2Square.possible && false == h2Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == h2Square.possible){
              h2Square.pieceType = currentObject.pieceType;
              h2Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(h2Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == h2Square.encounter){ 
              h2Square.pieceType = currentObject.pieceType;
              h2Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(h2Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
      
  
      
     
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
  
  
      } else if ('white' == currentTurnColor && 'white' == h2Square.pieceColor) {
       currentObject = h2Square;
       pieceChecker(h2Square,1,7);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == h2Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = h2Square;
          possibilityState = true;
          pieceChecker(h2Square,1,7);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for h3 square
  //
  h3Div.addEventListener('click', () =>{
  
  
      if (true == possibilityState && false == h3Square.possible && false == h3Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == h3Square.possible){
              h3Square.pieceType = currentObject.pieceType;
              h3Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(h3Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == h3Square.encounter){ 
              h3Square.pieceType = currentObject.pieceType;
              h3Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(h3Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
     
  
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == h3Square.pieceColor) {
       currentObject = h3Square;
       pieceChecker(h3Square,2,7);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == h3Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = h3Square;
          possibilityState = true;
          pieceChecker(h3Square,2,7);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for h4 square
  //
  h4Div.addEventListener('click', () =>{
      if (true == possibilityState && false == h4Square.possible && false == h4Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == h4Square.possible){
              h4Square.pieceType = currentObject.pieceType;
              h4Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(h4Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == h4Square.encounter){ 
              h4Square.pieceType = currentObject.pieceType;
              h4Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(h4Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == h4Square.pieceColor) {
       currentObject = h4Square;
       pieceChecker(h4Square,3,7);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == h4Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = h4Square;
          possibilityState = true;
          pieceChecker(h4Square,3,7);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for h5 square
  //
  h5Div.addEventListener('click', () =>{
      if (true == possibilityState && false == h5Square.possible && false == h5Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == h5Square.possible){
              h5Square.pieceType = currentObject.pieceType;
              h5Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(h5Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == h5Square.encounter){ 
              h5Square.pieceType = currentObject.pieceType;
              h5Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(h5Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == h5Square.pieceColor) {
       currentObject = h5Square;
       pieceChecker(h5Square,4,7);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == h5Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = h5Square;
          possibilityState = true;
          pieceChecker(h5Square,4,7);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for h6 square
  //
  h6Div.addEventListener('click', () =>{
  
      if (true == possibilityState && false == h6Square.possible && false == h6Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == h6Square.possible){
              h6Square.pieceType = currentObject.pieceType;
              h6Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(h6Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == h6Square.encounter){ 
              h6Square.pieceType = currentObject.pieceType;
              h6Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(h6Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
  
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == h6Square.pieceColor) {
       currentObject = h6Square;
       pieceChecker(h6Square,5,7);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == h6Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = h6Square;
          possibilityState = true;
          pieceChecker(h6Square,5,7);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for h7 square
  //
  h7Div.addEventListener('click', () =>{
  
      if (true == possibilityState && false == h7Square.possible && false == h7Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == h7Square.possible){
              h7Square.pieceType = currentObject.pieceType;
              h7Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(h7Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == h7Square.encounter){ 
              h7Square.pieceType = currentObject.pieceType;
              h7Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(h7Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
  
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == h7Square.pieceColor) {
       currentObject = h7Square;
       pieceChecker(h7Square,6,7);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == h7Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = h7Square;
          possibilityState = true;
          pieceChecker(h7Square,6,7);
          console.log('blacksturn')
          return
     
          }
   
  })
  
  //
  //  Event Listener for h8 square
  //
  h8Div.addEventListener('click', () =>{
  
  
      if (true == possibilityState && false == h8Square.possible && false == h8Square.encounter){
          resetPossibleAndEncounter();
          unvisualizePossibilities(); checkChecker();
          possibilityState = false;
          return
        } 
        if (true == h8Square.possible){
              h8Square.pieceType = currentObject.pieceType;
              h8Square.pieceColor = currentObject.pieceColor;
              currentObject.pieceType = ''; 
              currentObject.pieceColor = '';    
              console.log(h8Square)
              console.log(currentObject)
              changeTurn()
              return
      
      
          }
          if (true == h8Square.encounter){ 
              h8Square.pieceType = currentObject.pieceType;
              h8Square.pieceColor = currentObject.pieceColor;
               currentObject.pieceType = ''; 
               currentObject.pieceColor = '';
             
          console.log(h8Square); 
          console.log(currentObject)
          changeTurn()
           return}
         
          if (true == possibilityState){ 
              return}
      //l
      //  This checks to make sure piece color and turn color are the same before running possibilities
      //
      if (true == possibilityState){ 
          return
  
      } else if ('white' == currentTurnColor && 'white' == h8Square.pieceColor) {
       currentObject = h8Square;
       pieceChecker(h8Square,7,7);
       possibilityState = true;
        console.log('whitesturn')
       return
  
      } else if ('black' == h8Square.pieceColor && 'black' == currentTurnColor) {         
          currentObject = h8Square;
          possibilityState = true;
          pieceChecker(h8Square,7,7);
          console.log('blacksturn')
          return
     
          }
   
  })
  



