import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard"
import Header from './components/Header';
import cards from "./cards.json"
import Wrapper from "./components/Wrapper"


class App extends Component {
  state = {
    cards,
    score: 0,
    message:"",
    clicked: []
  };

  clickCharacter = card => {
    let targetId = card.id
    console.log(targetId)
    this.setState({
      message: ""
    })
    this.state.cards.sort(() => Math.random() - 0.5)

    this.setState({ cards });

    // for(let i = 0; i < this.state.clicked.length; i++) {
    //   if(targetId === this.state.clicked[i]){
    //     this.setState({
    //       score: 0,
    //       clicked: []
    //     })
    //     alert("You lose!")
    //     return;
    //   } else {
    //     this.state.clicked.push(targetId);
    //     var newScore = this.state.score + 1;
    //     this.setState({
    //       score: newScore,
    //       clicked: this.state.clicked
    //     })
    //   }

    // }
  // for(let i = 0; i < this.state.clicked.length; i++) {
  //   if(this.state.clicked[i].id === targetId) {
  //     this.setState({
  //       score: 0,
  //       clicked: []
  //     })
  //     console.log(this.state.clicked)
  //     alert("You lose!")
  //   } else{
  //     let addScore = this.state.score + 1;
  //     this.state.clicked.push(targetId)
  //     this.setState({
  //       clicked: this.state.clicked,
  //       score: addScore
  //     })
  //     console.log(this.state.clicked)
  //   }
  // }
    if (this.state.clicked.includes(targetId) > 0) {
      this.setState({
        score: 0,
        clicked: []
      })
      console.log(this.state.clicked)
      let loseMessage = "You lose! No S.S. Butterscotch or Eggo's for you!"
      this.setState({
        message: loseMessage
      })
      // alert("You lose!")


    } else {
      let addScore = this.state.score + 1;
      this.state.clicked.push(targetId)
      this.setState({
        clicked: this.state.clicked,
        score: addScore
      })
      console.log(this.state.clicked)

    }
  }

  // shuffle = array => {
  //   var length = array.length;
  //   var randomIndex;

  //   if(array.length > 0) {

  //   }
  // }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} message={this.state.message} />
        <div className="row">
          {this.state.cards.map(card => (

            <CharacterCard
              clickCharacter={() => this.clickCharacter(card)}
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
