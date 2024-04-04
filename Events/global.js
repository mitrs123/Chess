import { ROOT_DIV } from "../Helper/constant.js";
import { renderHighlight } from "../Render/main.js";
import { globleState } from "../script.js";
import {clearHighlight} from "../Render/main.js"

let highlight_state = false;

// function for white pawn move
function whitePawnClick({ piece }) {
  const current_pos = piece.current_position;

  if (current_pos[1] == "2") {
    // on initial position
    const highlightSquareIds = [
      `${current_pos[0]}${Number(current_pos[1]) + 1}`,
      `${current_pos[0]}${Number(current_pos[1]) + 2}`,
    ];

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
    if (event.target) {
      const clickId = event.target.parentNode.id;
      const flatArray = globleState.flat();
      const square = flatArray.find((el) => el.id == clickId);
      if (square.piece.piece_name) {
        whitePawnClick(square);
      }
    }
  });
}

export { globalEvent };