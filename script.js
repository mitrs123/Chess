import { initGame } from "./Data/data.js";
import { initGameRender } from "./Render/main.js";

const globleState = initGame();

initGameRender(globleState)