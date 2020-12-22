import React from "react";
import axios from "axios";
import "./createTweet.css";
class CreateTweet extends React.Component {
      state = {tweetText: ''};
  
      handleChange = this.handleChange.bind(this);
      handleSubmit = this.handleSubmit.bind(this);
  
    handleChange(event) {
      this.setState({tweetText: event.target.value});
    }
  
    handleSubmit(event) {
      axios({
        method: 'post',
        url: '/makeTweet',
        data: {
          Tweet:this.state.tweetText
        }
      }).then(() => {
        console.log("Tweeted!")
        this.setState({tweetText: ''});
      }).catch((err)=> {
        console.log(err)
      })
      event.preventDefault();
    }
  
    render() {
      return (
        <form id="createTweet" style={{marginLeft: "3cm", display: "flex", flexDirection: "column", alignItems: "center"}} onSubmit={this.handleSubmit}>
          <h3>Enter your Tweet:</h3>
          <textarea id="tweetText" type="text" value={this.state.tweetText} onChange={this.handleChange} cols="30" rows="10"></textarea><br/>
          <input id="submit" type="submit" value="Tweet" />
        </form>
      );
    }
  }

  export default CreateTweet;