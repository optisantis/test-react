import apple from "../images/apple.png";
import avocado from "../images/avocado.png";
import banana from "../images/banana.png";
import corn from "../images/corn.png";
import lemon from "../images/lemon.png";
import lettuce from "../images/lettuce.png";
import onion from "../images/onion.png";
import strawberry from "../images/strawberry.png";

const defaultTile = {
  state: 'idle'
}

export default {
  apple: Object.assign({ image: apple }, defaultTile),
  avocado: Object.assign({ image: avocado }, defaultTile),
  banana: Object.assign({ image: banana }, defaultTile),
  corn: Object.assign({ image: corn }, defaultTile),
  lemon: Object.assign({ image: lemon }, defaultTile),
  lettuce: Object.assign({ image: lettuce }, defaultTile),
  onion: Object.assign({ image: onion }, defaultTile),
  strawberry: Object.assign({ image: strawberry }, defaultTile)
};
