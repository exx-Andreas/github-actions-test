import React, {useState} from 'react';
import './App.css';

function App() {

    const [more, setMore] = useState(false);

  return (
    <div className="App">
     <label>TEST LABEL</label>
      <button onClick={() => setMore(!more)}>TEST BUTTON</button>
        {more && <div style={{display: "flex", justifyContent: "center", alignItems: "center", backgroundColor: "red", width: "100%", height: "100vh", color: "green"}}>
            <label>!!! JETZT WIRDS WILD  !!!</label>
            <label>!!! Version 1.1  !!!</label>
        </div>}
    </div>
  );
}

export default App;
