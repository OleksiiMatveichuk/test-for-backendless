import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Suspense } from "react";
import { Loader } from "../components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" />
            <Route path="1" />
            <Route path="2" />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </header>
    </div>
  );
}

export default App;
