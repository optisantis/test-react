import Apple from "../images/apple.png";
import Avocado from "../images/avocado.png";
import Banana from "../images/banana.png";
import Corn from "../images/corn.png";
import Lemon from "../images/lemon.png";
import Lettuce from "../images/lettuce.png";
import Onion from "../images/onion.png";
import Strawberry from "../images/strawberry.png";


export const CARD_STATE = {
  IDLE: "idle",
  ACTIVE: "active",
  FOUND: "found",
};

export const MOCKUP_GRID = [
  { src: Lettuce, state: CARD_STATE.IDLE },
  { src: Onion, state: CARD_STATE.IDLE },
  { src: Avocado, state: CARD_STATE.IDLE },
  { src: Lemon, state: CARD_STATE.IDLE },
  { src: Lettuce, state: CARD_STATE.IDLE },
  { src: Onion, state: CARD_STATE.IDLE },
  { src: Apple, state: CARD_STATE.IDLE },
  { src: Lemon, state: CARD_STATE.IDLE },
  { src: Strawberry, state: CARD_STATE.IDLE },
  { src: Banana, state: CARD_STATE.IDLE },
  { src: Strawberry, state: CARD_STATE.IDLE },
  { src: Corn, state: CARD_STATE.IDLE },
  { src: Corn, state: CARD_STATE.IDLE },
  { src: Banana, state: CARD_STATE.IDLE },
  { src: Apple, state: CARD_STATE.IDLE },
  { src: Avocado, state: CARD_STATE.IDLE },
];

export const CASE_WIDTH = 155;
export const ROW_LENGHT = 4;
export const CASE_MARGIN = 10;
export const FULL_CASE_WIDTH = `${CASE_MARGIN + CASE_WIDTH}px`;

export const CHRONO_STATE = {
  RUNNING: "running",
  STOP: "stop",
  NOT_LAUNCHED: "not launched",
};