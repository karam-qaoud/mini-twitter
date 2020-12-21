import React from "react";
import axios from "axios";
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
        <form onSubmit={this.handleSubmit}>
          <textarea id="tweetText" type="text" value={this.state.tweetText} onChange={this.handleChange} cols="30" rows="10"></textarea><br/>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

  export default CreateTweet;