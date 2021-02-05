import React from "react"
import './App.css';
import Game from './components/game/Game';
import Jackalopes from "./assets/images/jackalopes.png"
import RubberDucks from "./assets/images/rubberDucks.png"
import Everblades from "./assets/images/everblades.png"
import SwampRabbits from "./assets/images/swampRabbits.png"


function App(props) {
  const raccoons = {
    name: 'Odessa Jackalopes',
    logoSrc: Jackalopes,
  }

  const squirrels = {
    name: 'Akron Rubber Ducks',
    logoSrc: RubberDucks
  }

  const bunnies = {
    name: 'Florida Everblades',
    logoSrc: Everblades
  }

  const hounds = {
    name: 'Greenville Swamp Rabbits',
    logoSrc: SwampRabbits
  }

  return (
    <div className="App">
      <Game
        venue="Union 525 Gem"
        homeTeam={squirrels}
        visitingTeam={raccoons}
      />
      <Game
        venue="Sheridan Arena"
        homeTeam={bunnies}
        visitingTeam={hounds}
      />
    </div>
  )
}
export default App;