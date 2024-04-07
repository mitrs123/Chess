import { ROOT_DIV } from "../Helper/constant.js";
import { renderHighlight } from "../Render/main.js";
import { globleState } from "../script.js";
import {clearHighlight} from "../Render/main.js"
import { selfHighlight } from "../Render/main.js";
import { clearPreviousSelfHighlight } from "../Render/main.js";
import { moveElement } from "../Render/main.js";

// highlighted square round state
let highlight_state = false;

// current self-highlighted state
let selfHighlightedState = null;

// add piece as a move state
let moveState = null;


// function for white pawn move
function whitePawnClick({ piece }) {
  
  // where clicke on self highlight so remove self highlighting
  if(piece == selfHighlightedState){
    clearPreviousSelfHighlight(selfHighlightedState);
    selfHighlightedState = null;
    clearHighlight();
    return;
  }
  // highlight current elemeent
  clearPreviousSelfHighlight(selfHighlightedState)
  selfHighlight(piece)
  selfHighlightedState = piece;
  
// add piece as a move State
moveState = piece;

  const current_pos = piece.current_position;
  if (current_pos[1] == "2") {
    // on initial position
    const highlightSquareIds = [
      `${current_pos[0]}${Number(current_pos[1]) + 1}`,
      `${current_pos[0]}${Number(current_pos[1]) + 2}`,
    ];

    // clear board for previous highlighted square
    clearHighlight()
    
    highlightSquareIds.forEach((highlight) => {
        globleState.forEach((row) => {
            row.forEach(element => {
                if(element.id == highlight){
                    element.highlight(true)   
                }
            });
        });

    });
  }
}

function globalEvent() {
  ROOT_DIV.addEventListener("click", (event) => {
    if (event.target.localName === "img") {
      const clickId = event.target.parentNode.id;
      const flatArray = globleState.flat();
      const square = flatArray.find((el) => el.id == clickId);
      if (square.piece.piece_name == "WHITE_PAWN") {
        whitePawnClick(square);
      }
    } else {
      const childElementOfClickedEl = Array.from(event.target.childNodes)
      if(childElementOfClickedEl.length == 1 || event.target.localName=="span"){
        if(event.target.localName == "span"){
          const id = event.target.parentNode.id;
          moveElement(moveState,id)
          moveState = null;
        } else {
          const id = event.target.id;
          moveElement(moveState,id)
          moveState=null;
        }
      }
      else{
        clearHighlight();
        clearPreviousSelfHighlight(selfHighlightedState)
      }
    }
  });
}

export { globalEvent };
