import { Route, Routes } from "react-router";

import Home from "./pages/Home";
import Create from "./pages/Create";
import NoteDetailPage from "./pages/Details";

const App = () => {
  return (
    <div className="relative h-full w-full">
      <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/note/:id" element={<NoteDetailPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
