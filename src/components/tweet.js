import React from "react";
import axios from "axios";

class Tweet extends React.Component {
  state = { tweets: [] };
  componentDidMount() {
    axios
      .get("/tweet")
      .then((response) => {
        this.setState({ tweets: response.data });
        console.log(this.state.tweets);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  // componentDidUpdate(prevProps, prevState) {
  //   axios
  //   .get("/tweet")
  //   .then((response) => {
  //     if(prevState.tweets.length !== response.length){
  //       this.forceUpdate();
  //     }
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
    
  // }

  render() {
    return (
      <div>
        <h1> Tweets Feed: </h1>
        {this.state.tweets.map((tweet) => {
          return <h4>{tweet}</h4>;
        })}
      </div>
    );
  }
}

export default Tweet;
