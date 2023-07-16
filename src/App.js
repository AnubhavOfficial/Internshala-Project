import AddSales from "./Components/AddSales";
import Login from "./Components/Login";
import Register from "./Components/Register";
import TodayTotalRevenue from "./Components/TodayTotalRevenue";
import ToolBar from "./Components/ToolBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Top5Sales from "./Components/Top5Sales";
function App() {
  return (
    <div>
      <Router>
        <ToolBar />
        <Routes>
          <Route path="/AddSales" element={<AddSales />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/TodayTotalRevenue" element={<TodayTotalRevenue />} />
          <Route path="/Top5Sales" element={<Top5Sales />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
