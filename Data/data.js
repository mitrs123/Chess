import { renderHighlight } from "../Render/main.js";
import { globleState } from "../script.js";

function Greet(){
    alert("Hello Universe")
}
// for Each Square
function square(color,id,piece) {
    const highlight = function() {
        renderHighlight(this.id)
        this.highlighted = true;
        
    }
    return{color,id,piece,highlight};
}
function SquareRow(rowId){
    const squareRow = [];
    const abcd = ['a','b','c','d','e','f','g','h']
    if(rowId % 2 == 0){
        abcd.forEach((element,index) => {
            if(index%2 == 0){
                squareRow.push(square("white",element+rowId,null))
            }
            else{
                squareRow.push(square("black",element+rowId,null))
            }
        })
    }
    else{
        abcd.forEach((element,index) => {
            if(index%2 == 0){
                squareRow.push(square("black",element+rowId,null))
            }
            else{
                squareRow.push(square("white",element+rowId,null))
            }
        })
    }
    return squareRow;
}
function initGame(){
    return[
        SquareRow(8),
        SquareRow(7),
        SquareRow(6),
        SquareRow(5),
        SquareRow(4),
        SquareRow(3),
        SquareRow(2),
        SquareRow(1),
    ]
}   

export { initGame };