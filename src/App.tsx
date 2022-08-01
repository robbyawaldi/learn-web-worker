import "./App.css";
import { wrap } from "comlink";
import { WorkerType } from "./worker";
import { useState } from "react";

function App() {
  const worker = new Worker(new URL("./worker.ts", import.meta.url), {
    type: "module",
  });
  const { bigTask } = wrap<WorkerType>(worker);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setCount((c) => c + 1)}>Count</button>
      <button
        disabled={loading}
        onClick={async () => {
          setLoading(true);
          await bigTask();
          setLoading(false);
        }}
      >
        Big Task
      </button>
      <p>{count}</p>
    </div>
  );
}

export default App;
