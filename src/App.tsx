import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";

interface SaludoPromps {
  nombre: String;
}
export function Saludo({ nombre }: SaludoPromps) {
  return (
    <header className="saludo">
      <h1>Hola, {nombre}</h1>
      <p>Bienvenido a React</p>
    </header>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Saludo nombre="Edgar Acevedo" />
    </>
  );
}

export default App;
