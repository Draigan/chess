
        //      WHAT TURN IS IT?

        var turn = 'white';
function changeTurn(){
    
    if (turn == 'white'){ turn = 'black'; alert('blacks turn')}
    else{ turn = 'white'; alert('whites turn')}
    mapImages();
}

        //    COORDINATE  OBJECTS

        var a8 = {
            'hasBlackPiece': false,
            'hasWhitePiece':false,
            'pieceType': 'wRook',
            'possible':false,
            'encounter':false,
            'pressed': false
        }

        var a7 = {
            'hasBlackPiece': false,
            'hasWhitePiece':false,
            'pieceType': 'wRook',
            'possible':false,
            'encounter':false,
            'pressed': false
        }
        
        var a6 = {
            'hasBlackPiece': false,
            'hasWhitePiece':false,
            'pieceType': 'bRook',
            'possible':false,
            'encounter':false,
            'pressed': false
        }

        var a5 = {
            'hasBlackPiece': false,
            'hasWhitePiece':false,
            'pieceType': '',
            'possible':false,
            'encounter':false,
            'pressed': false
        }
 //      WHAT TURN IS IT?

        var turn = 'white';
function changeTurn(){
    
    if (turn == 'white'){ turn = 'black'; }
    else{ turn = 'white';}
    mapImages();
    lastSquare = ''
    console.log(lastSquare);
}
       
//      Setting a variable to tell me when we are in a pressed state and the program is checking possibilities
        var pressed = false;

        //      Current Piece We Have Pressed
        currentPiece = ''

        //      Last square we were on
        lastSquare = ''


        //    COORDINATE  OBJECTS

        var a8 = {
            'hasBlackPiece': false,
            'hasWhitePiece':false,
            'pieceType': '',
            'possible':false,
            'encounter':false,
           
        }

        var a7 = {
            'hasBlackPiece': false,
            'hasWhitePiece':false,
            'pieceType': '',
            'possible':false,
            'encounter':false,
            
        }
        
        var a6 = {
            'hasBlackPiece': true,
            'hasWhitePiece':false,
            'pieceType': 'bRook',
            'possible':false,
            'encounter':false,
            
        }

        var a5 = {
            'hasBlackPiece': false,
            'hasWhitePiece':false,
            'pieceType': '',
            'possible':false,
            'encounter':false,
            
        }
        
        var a4 = {
            'hasBlackPiece': false,
            'hasWhitePiece':false,
            'pieceType': '',
            'possible':false,
            'encounter':false,
           
        }

        var a3 = {
            'hasBlackPiece': false,
            'hasWhitePiece':false,
            'pieceType': '',
            'possible':false,
            'encounter':false,
           
        }
        
        var a2 = {
            'hasBlackPiece': false,
            'hasWhitePiece':true,
            'pieceType': 'wRook',
            'possible':false,
            'encounter':false,
           
            
        }

        var a1 = {
            'hasBlackPiece': false,
            'hasWhitePiece':false,
            'pieceType': '',
            'possible':false,
            'encounter':false,
            
            
        }


        //      Making the squares display the image of the current piece its holding and showing empty squares
        function mapImages(){
        
        //      a2 Empty

        if(lastSquare == 'a2LastSquare') { document.getElementById('a2-id').innerHTML = ""; console.log('iflastsquareworked'); 
    console.log(a2)}
        //      White Rook
        if (a1['pieceType'] == 'wRook'){ document.getElementById('a1-id').innerHTML = '<img src="./assets/wR.png" alt="">'; }
        if (a2['pieceType'] == 'wRook'){ document.getElementById('a2-id').innerHTML = '<img src="./assets/wR.png" alt="">'; }
        if (a3['pieceType'] == 'wRook'){ document.getElementById("a3-id").innerHTML = '<img src="./assets/wR.png" alt="">'; }
        if (a4['pieceType'] == 'wRook'){ document.getElementById('a4-id').innerHTML = '<img src="./assets/wR.png" alt="">'; }
        if (a5['pieceType'] == 'wRook'){ document.getElementById('a5-id').innerHTML = '<img src="./assets/wR.png" alt="">'; }
        if (a6['pieceType'] == 'wRook'){ document.getElementById('a6-id').innerHTML = '<img src="./assets/wR.png" alt="">'; }
        if (a7['pieceType'] == 'wRook'){ document.getElementById('a7-id').innerHTML = '<img src="./assets/wR.png" alt="">'; }
        if (a8['pieceType'] == 'wRook'){ document.getElementById('a8-id').innerHTML = '<img src="./assets/wR.png" alt="">'; }
       
        //      Black Rook
        if (a1['pieceType'] == 'bRook'){ document.getElementById('a1-id').innerHTML = '<img src="./assets/bR.png" alt="">'; }
        if (a2['pieceType'] == 'bRook'){ document.getElementById('a2-id').innerHTML = '<img src="./assets/bR.png" alt="">'; }
        if (a3['pieceType'] == 'bRook'){ document.getElementById('a3-id').innerHTML = '<img src="./assets/bR.png" alt="">'; }
        if (a4['pieceType'] == 'bRook'){ document.getElementById('a4-id').innerHTML = '<img src="./assets/bR.png" alt="">'; }
        if (a5['pieceType'] == 'bRook'){ document.getElementById('a5-id').innerHTML = '<img src="./assets/bR.png" alt="">'; }
        if (a6['pieceType'] == 'bRook'){ document.getElementById('a6-id').innerHTML = '<img src="./assets/bR.png" alt="">'; }
        if (a7['pieceType'] == 'bRook'){ document.getElementById('a7-id').innerHTML = '<img src="./assets/bR.png" alt="">'; }
        if (a8['pieceType'] == 'bRook'){ document.getElementById('a8-id').innerHTML = '<img src="./assets/bR.png" alt="">'; }
    }
   mapImages();
    
         //      Query Selectors for coordinates
         let a1Div = document.querySelector('.a1-Square');
         let a2Div = document.querySelector('.a2-Square');
         let a3Div = document.querySelector('.a3-Square');
         let a4Div = document.querySelector('.a4-Square');
         let a5Div = document.querySelector('.a5-Square');
         let a6Div = document.querySelector('.a6-Square');
         let a7Div = document.querySelector('.a7-Square');
         let a8Div = document.querySelector('.a8-Square');


         //     Event Listeners for first click and second click
a2Div.addEventListener('click', a2FirstClick);
a3Div.addEventListener('click', a3SecondClick);


        


           //   First Step of Clicking a2 Square
        function a2FirstClick(){
                //      If its whites turn and the square has a white piece
            if ( turn == 'white' && a2['hasWhitePiece'] === true){

                //      Acknowledging that a button has been pressed
                pressed = true;

                //      Acknowledge that a2 was the last square touched
                lastSquare = 'a2LastSquare'
                
            
                //      Checking Piece type
            if ( a2['pieceType'] == 'wRook' && turn == 'white') {
                //      Running the possibility function
                a2RookPossible()

                //      Acknowledging that its a wRook to the second click input.
                currentPiece = a2['pieceType'];
                console.log(currentPiece)


            }
        }


                //    1st Step After Clicking Button -  Find The Possibilities For The Rook at a2 and set the Coordinate objects
        function a2RookPossible(){
            
               //       Possible Moves Up For White Rook
            let up = [a3,a4,a5,a6,a7,a8]


            //      Encountering a black piece and returining the function sorta. Return wasnt working fo rme but could have been
            //      another problem. Should try to use return again.
            for (let i = 0; i <= 5; i++){ 
                if (up[i]['hasBlackPiece'] == true ){
                        up[i]['encounter'] = true; 
                        console.log(up[i])
                       
                        i = 6
               
                    
                }
            //      Encountering an empty square
                else  if (up[i]['hasBlackPiece'] == false && up[i]['hasWhitePiece'] == false ){
                    up[i]['possible'] = true;
                    console.log(up[i])
                

                } 

            }

        }
            
        }

        //      

        //      Moving The Piece From a2 SECOND STEP
        function a3SecondClick(){
            if (pressed = true && a3['possible'] == true){
                a3['pieceType'] = currentPiece;
                a3['hasWhitePiece'] = true;
                a2['pieceType'] = '';
                a2['hasWhitePiece'] = false;
                console.log(a3);
               
                changeTurn();
            } 
        }

        //      Setting a variable to tell me when we are in a pressed state and the program is checking possibilities
        var pressed = false;

        //      Current Piece We Have Pressed
        currentPiece = ''
        





           //       Clicking Button
        function a2FirstClick(){
                //      If its whites turn and the square has a white piece
            if ( turn == 'white' && a2['hasWhitePiece'] === true){

                //      Acknowledging that a button has been pressed
                pressed = true;
                
            
                //      Checking Piece type
            if ( a2['pieceType'] == 'wRook' && turn == 'white') {
                //      Running the possibility function
                a2RookPossible()

                //      Acknowledging that its a wRook to the second click input.
                currentPiece = a2['pieceType'];
                console.log(currentPiece)

                 //      change the background of the clicked square
                document.getElementById('a2-id').style.background = 'rgb(34, 30, 71)'
            }
        }


                //    1st Step After Clicking Button -  Find The Possibilities For The Rook at a2 and set the Coordinate objects
        function a2RookPossible(){
            
               //       Possible Moves Up
            let up = [a3,a4,a5,a6,a7,a8]


            //      
            for (let i = 0; i <= 5; i++){ 
                if (up[i]['hasBlackPiece'] == true ){
                        up[i]['encounter'] = true; 
                        console.log(up[i])
                       
                        i = 6
               
                    
                }
                else  if (up[i]['hasBlackPiece'] == false && up[i]['hasWhitePiece'] == false ){
                    up[i]['possible'] = true;
                    console.log(up[i])
                

                } 

            }

        }
            
        }

        //      

        //      Moving The Piece From a2 SECOND STEP
        function a3SecondClick(){
            if (pressed = true && a3['possible'] == true){
                a3['pieceType'] = currentPiece;
                a3['hasWhitePiece'] = true;
                console.log(a3)
                mapImages();
            } 
        }

      
