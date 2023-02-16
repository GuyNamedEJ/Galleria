import Paintings from "../../data.json";
import Tile from "../components/TileSet";
export default function Home() {
  const tileSet = Paintings.map((painting, index) => {
    return <Tile key={index} index={index} paintingData={painting} />;
  });


  return (
    <div className="columns-1 md:columns-2 lg:columns-3 desktop:columns-4 px-6">
      {tileSet}
    </div>
  );
}
