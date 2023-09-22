import { useState } from "react";
import "./App.css";

import FilmList from "./components/FilmList";
import Input from "./components/Input";

function App() {
  const [value, setValue] = useState("man");
  return (
    <>
      <h1>Movies</h1>
      <Input setValue={setValue} />

      <FilmList value={value} setValue={setValue} />
    </>
  );
}

export default App;
