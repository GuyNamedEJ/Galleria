import Paintings from "../../data.json";
import Tile from "../components/TileSet";
export default function Home() {
  const tileSet = Paintings.map((painting, index) => {
    return <Tile key={index} index={index} paintingData={painting} />;
  });

  return (
    <div className="px-6 flex flex-col gap-6 md:grid md:grid-cols-2 md:items-center lg:columns-4">
      {tileSet}
    </div>
  );
}
