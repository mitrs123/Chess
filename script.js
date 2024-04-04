import { initGame } from "./Data/data.js";
import { globalEvent } from "./Events/global.js";
import { initGameRender } from "./Render/main.js";

const globleState = initGame();

initGameRender(globleState)
globalEvent()

export { globleState }