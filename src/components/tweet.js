import axios from 'axios';

let big = () => {
    axios.get ('/tweets')
    .then((response)=> {
        console.log("Here is your response ...", response);
    })
    .catch((err)=> {
        console.log("Error in retrieving tweets", err);
    });
}

let tweet = (data) => (
    <label style={{color: "black"}}> {data} Tweet here! </label>
)






export default big;