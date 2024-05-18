import { Routes, Route } from "react-router-dom";

import AppNav from "./common/AppNav/AppNav";
import NotFound from "./routes/NotFound/NotFound";
import Dashboard from "./routes/Dashboard/Dashboard";

function App() {
  return (
    <div id="app">
      <AppNav />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
