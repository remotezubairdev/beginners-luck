import { Route, Routes } from "react-router-dom";
import Navbar from "./components/main/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <main>
      <Navbar />
      <div className="p-32">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
}

export default App
