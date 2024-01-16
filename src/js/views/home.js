import React from "react";
import "../../styles/home.css";
import { Link } from "react-router-dom";
import CharacterCard from "../component/characterCards";
import PlanetCard from "../component/planetCard";
import StarshipCard from "../component/starshipCard";
export const Home = () => (
  <div className="container mt-5">
    <CharacterCard />
    <PlanetCard />
    <StarshipCard />
  </div>

);
