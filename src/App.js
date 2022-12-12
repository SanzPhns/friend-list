import "./App.css";
import FriendList from "./components/FriendList/FriendList";
import { ContextProvider } from "./Context";

function App() {
  return (
    <ContextProvider>
      <div className="App">
        <FriendList />
      </div>
    </ContextProvider>
  );
}

export default App;
