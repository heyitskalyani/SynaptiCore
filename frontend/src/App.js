import React from "react";

function App() {
  return (
    <div style={{textAlign:"center", marginTop:"100px"}}>
      <h1>SynaptiCore 🧠</h1>
      <p>Your Personal AI Second Brain</p>

      <div style={{marginTop:"40px"}}>
        <input type="file" />
      </div>

      <div style={{marginTop:"40px"}}>
        <input
          type="text"
          placeholder="Ask something from your knowledge..."
          style={{width:"400px", padding:"10px"}}
        />
        <button style={{marginLeft:"10px", padding:"10px"}}>Ask</button>
      </div>
    </div>
  );
}

export default App;