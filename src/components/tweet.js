import React from "react";
import axios from "axios";


class Tweet extends React.Component {

    componentDidMount() {
        axios.get('/tweet')
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  render() {
    return (
        <h1>This is  a tweet! </h1>
    );
  }
}

export default Tweet;