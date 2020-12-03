import apple from "../images/apple.png";
import avocado from "../images/avocado.png";
import banana from "../images/banana.png";
import corn from "../images/corn.png";
import lemon from "../images/lemon.png";
import lettuce from "../images/lettuce.png";
import onion from "../images/onion.png";
import strawberry from "../images/strawberry.png";

const defaultTile = {
  state: 'idle',
  index: "0"
}

export default {
  apple: Object.assign({ id: 'apple', image: apple }, defaultTile),
  avocado: Object.assign({ id: 'avocado', image: avocado }, defaultTile),
  banana: Object.assign({ id: 'banana', image: banana }, defaultTile),
  corn: Object.assign({ id: 'corn', image: corn }, defaultTile),
  lemon: Object.assign({ id: 'lemon', image: lemon }, defaultTile),
  lettuce: Object.assign({ id: 'lettuce', image: lettuce }, defaultTile),
  onion: Object.assign({ id: 'onion', image: onion }, defaultTile),
  strawberry: Object.assign({ id: 'strawberry', image: strawberry }, defaultTile),
};
