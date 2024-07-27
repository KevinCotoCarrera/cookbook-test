import React from "react";

import "./App.css";
import Menu from "./components/Menu";
import SideBar from "./components/Sidebar";
import Container from "./components/Container";
import Recipe from "./components/Recipe";

function App() {
  const [isOpen, setIsOpen] = React.useState(true)
  const [selectedRecipeId, setSelectedRecipeId] = React.useState<number | null>(null);

  // Method to handle recipe selection
  const handleRecipeSelect = (id: number) => {
    setSelectedRecipeId(id);
  };
  return (

    <React.Fragment>
      <Container>
     <SideBar>
        <Menu onRecipeSelect={handleRecipeSelect}/>
     </SideBar>
      <section>
        <Recipe id={selectedRecipeId}/>
      </section>
     </Container>
    </React.Fragment>
  );
}

export default App;
