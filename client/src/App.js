import React from "react";
import axios from "axios";
import PlayerList from "./components/PlayerList";
import "./App.css";
import SignUpForm from "./components/SignUpForm"

class App extends React.Component {
  state = {
    players: []
  };
  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(res => {
        this.setState({
          players: res.data
        });
        console.log("this is response", res.data);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <SignUpForm />
        <PlayerList players={this.state.players} />
      </div>
    );
  }
}

export default App;
