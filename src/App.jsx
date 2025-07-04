import React from "react"
import './App.css'
import {Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes"
import ManageRecipes from "./pages/ManageRecipes"
import RecipeList from "./components/RecipeList"

function App() {
  

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/recipes" element={<Recipes />} >
        <Route index element={<RecipeList />} />
      </Route >
      <Route path="/manageRecipes" element={<ManageRecipes />} />

    </Routes> 
  )
}

export default App
