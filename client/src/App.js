import { useState } from "react";
import "./App.css";
// import spatula from './assets/spatula.jpg';
import StripeContainer from "./components/StripeContainer";

function App() {
  const [showItem, setShowItem] = useState(false);
  return (
    <div className="App">
      <h1>The Spatula Store</h1>
      {showItem ? (
        <StripeContainer />
      ) : (
        <>
          <h3>$10.00</h3>
          <img
            src="data:image/jpeg;base64,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"
            alt="Spatula"
          />
          <button onClick={() => setShowItem(true)}>Purchase Spatula</button>
        </>
      )}
    </div>
  );
}

export default App;
