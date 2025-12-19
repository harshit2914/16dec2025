import { useState } from "react";

function App() {
  const [msg, setMsg] = useState("");

  const callBackend = async () => {
    // const res = await fetch("http://10.0.2.208:3000/task");
    const res = await fetch("http://34.205.144.174:3000/task");


    const data = await res.json();
    setMsg(data.message);
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <button onClick={callBackend}>Run Task</button>
      <h2>{msg}</h2>
    </div>
  );
}

export default App;
