import Paintings from "../../data.json";
import Tile from "../components/TileSet";
export default function Home() {

  const tileSet = Paintings.map((painting, index) => {
    return <Tile key={index} index={index} paintingData={painting} />;
  });

  return <div className="grid grid-cols-1 gap-6 px-6">{tileSet}</div>;
}
