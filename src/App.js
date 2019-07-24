import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard"
import Header from './components/Header';
import cards from "./cards.json"
import Wrapper from "./components/Wrapper"


class App extends Component {
  state = {
    cards,
    score: 0,
    clicked: []
  };

  // clickCharacter = id => {
  //   if
  // }

  // shuffle = array => {
  //   var length = array.length;
  //   var randomIndex;

  //   if(array.length > 0) {

  //   }
  // }

  render() {
    return (
      <Wrapper>
        <Header>Clicky Game</Header>
        <div className="row">
        {this.state.cards.map(card => (
      
            <CharacterCard
              id={card.id}
              key={card.id}
              name={card.name}
              image={card.image}
            />
        ))}
        </div>

      </Wrapper>
    )
  }
}

// function App() {
//   return (
//     <div className="App">
//      <Header />
//     </div>
//   );
// } 

export default App;
