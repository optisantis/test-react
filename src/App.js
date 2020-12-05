import Header from "./components/Header";
import GridMemory from "./components/GridMemory";
import React from "react";
import Button from "./components/Button";

export default function Memory() {
  return (
    <main>
      <Header />
      <p>Cliquez sur une carte pour commencer</p>
      <GridMemory />
      <Button title="Réinitialisé" />
    </main>
  );
}
