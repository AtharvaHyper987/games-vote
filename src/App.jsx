import { useState } from "react";
import "./App.css";
import Games from "/components/Games";

function App() {
  const [games, setGames] = useState([
    "The Legend of Zelda: Breath of the Wild",
    "Red Dead Redemption 2",
    "The Witcher 3: Wild Hunt",
    "Grand Theft Auto V",
    "Minecraft",
    "Cyberpunk 2077",
    "Elden Ring",
    "God of War",
    "The Last of Us Part II",
    "Super Mario Odyssey",
    "Fortnite",
    "Call of Duty: Modern Warfare II",
    "League of Legends",
    "Overwatch 2",
    "Apex Legends",
    "Animal Crossing: New Horizons",
    "Hades",
    "Sekiro: Shadows Die Twice",
    "Dark Souls III",
    "Resident Evil Village",
    "Assassin's Creed Valhalla",
    "Fallout 4",
    "Skyrim",
    "Final Fantasy VII Remake",
    "Metal Gear Solid V: The Phantom Pain",
    "Doom Eternal",
    "Halo Infinite",
    "Mass Effect Legendary Edition",
    "Stardew Valley",
    "Portal 2",
    "BioShock Infinite",
    "Uncharted 4: A Thief's End",
    "Death Stranding",
    "Ghost of Tsushima",
    "Spider-Man",
    "Control",
    "Divinity: Original Sin 2",
    "Borderlands 3",
    "Subnautica",
    "Outer Wilds",
    "Disco Elysium",
    "Monster Hunter World",
    "Persona 5 Royal",
    "It Takes Two",
    "Celeste",
    "Hollow Knight",
    "Among Us",
    "Rocket League",
    "Terraria",
    "Cuphead",
  ]);

  return (
    <div style={{ display: "block" }}>
      <h1 style={{ textAlign: "center" }}>Vote for the most fun game</h1>
      {games.map(function (element) {
        return <Games gameName={element} />;
      })}
    </div>
  );
}

export default App;
