import NavBar from "./components/navbar/NavBar";
import Home from "./pages/Home";

import "./App.css";

function App() {
  return (
    <div className="app">
      <NavBar />
      <main className="main-content">
        <Home />
      </main>
    </div>
  );
}

export default App;
