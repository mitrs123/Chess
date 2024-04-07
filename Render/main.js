import * as piece from "../Data/pieces.js"
import { ROOT_DIV } from "../Helper/constant.js";
import { globleState } from "../script.js";



// logic for move elemenet one square to another square
function moveElement(piece, id){
    const flatData = globleState.flat();
    flatData.forEach((el) => {
        if(el.id == piece.current_position){
           delete el.piece;
        }
        if(el.id==id){
            el.piece=piece;
        }
    });
    clearHighlight();
    const previousPiece = document.getElementById(piece.current_position);
    previousPiece.classList.remove("highlightYellow")
    const currentPiece = document.getElementById(id)

    currentPiece.innerHTML = previousPiece.innerHTML;
    previousPiece.innerHTML = "";
    piece.current_position = id;
}

// clear previous self hiighlight
function clearPreviousSelfHighlight(piece){
    if(piece){
        document.getElementById(piece.current_position).classList.remove("highlightYellow")
    }
}

// self hghlighted function
function selfHighlight(piece){    
const highlightedPiece = document.getElementById(piece.current_position)
highlightedPiece.classList.add("highlightYellow")
}


// use when you need all piece in board
function pieceRender(data){
data.forEach((row) => {
    row.forEach((square) => {
        if(square.piece){
            const squareEl = document.getElementById(square.id)
            const piece = document.createElement("img")
            piece.src = square.piece.img
            squareEl.appendChild(piece)
            piece.classList.add("piece")
        }
    });
});
}

// this function call when game start(only for one time)
function renderHighlight(squareId){
 const highlightSpan  = document.createElement("span")
 highlightSpan.classList.add("highlight")
 document.getElementById(squareId).appendChild(highlightSpan)
 
}
function initGameRender(data){
data.forEach((element) => {
    const rowEl = document.createElement("div")
    element.forEach((square) => {
        const squareDiv  = document.createElement("div")
        squareDiv.id=square.id;
        squareDiv.classList.add(square.color,"square")
        rowEl.appendChild(squareDiv)

        // render all black pieces
        if(square.id[1] == 7){
            square.piece=piece.blackPawn(square.id)
        }
        if(square.id=="a8"||square.id=="h8"){
            square.piece=piece.blackRook(square.id)  
        }
        if(square.id=="b8"||square.id=="g8"){
            square.piece=piece.blackKnight(square.id)  
        }
        if(square.id=="c8"||square.id=="f8"){
            square.piece=piece.blackBishop(square.id)  
        }
        if(square.id=="d8"){
            square.piece=piece.blackQueen(square.id)  
        }
        if(square.id=="e8"){
            square.piece=piece.blackKing(square.id)  
        }

        // render all black pieces
        if(square.id[1] == 2){
            square.piece=piece.whitePawn(square.id)
        }
        if(square.id=="a1"||square.id=="h1"){
            square.piece=piece.whiteRook(square.id)  
        }
        if(square.id=="b1"||square.id=="g1"){
            square.piece=piece.whiteKnight(square.id)  
        }
        if(square.id=="c1"||square.id=="f1"){
            square.piece=piece.whiteBishop(square.id)  
        }
        if(square.id=="d1"){
            square.piece=piece.whiteQueen(square.id)  
        }
        if(square.id=="e1"){
            square.piece=piece.whiteKing(square.id)  
        }

    });
    rowEl.classList.add("squareRow")
        ROOT_DIV.appendChild(rowEl)
    });
    pieceRender(data)
}

// clear all highlight from the board
function clearHighlight(){

const flatData = globleState.flat();
flatData.forEach((el) => {
    if(el.highlighted){
        document.getElementById(el.id).innerHTML=""
        el.highlighted = false;
    }
    });
}

export {initGameRender, renderHighlight, clearHighlight, selfHighlight, clearPreviousSelfHighlight,moveElement}