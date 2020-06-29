import React, { Component } from "react";
import Navbar from "./components/NavBar";
import Header from "./components/Header";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
import Footer from "./components/Footer";
import friends from "./friends.json";

class App extends Component {
  state = {
    friends,
    count: 0
  };

  removeFriend = (id) => {
    const friends = this.state.friends.filter(friend => friend.id !== id)
    this.setState({ friends });
  };

  render() {
    return (
      <div>
      <Navbar />
      <Header />
      <Wrapper>
        {this.state.friends.map((friend) => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
      <Footer />
      </div>
    );
  }
}

export default App;
