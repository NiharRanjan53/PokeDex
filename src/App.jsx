import { Route, Routes } from "react-router-dom";
import "./App.css";
import Pokedex from "./components/Pokedex/Pokedex";
import PokemonDetails from "./components/PokemonDetails/PokemonDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Pokedex />} />
      <Route path="/pokemon/:id" element={<PokemonDetails />} />

      <Route path="*" element={<div>Page Not Found</div>} />
    </Routes>
  );
}

export default App;
