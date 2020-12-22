import CreateTweet from "./components/CreateTweet"
import big from "./components/tweet"
function App() {
  return (
    <div className="App">
      <CreateTweet/>
      {big()}
    </div>
  );
}

export default App;
