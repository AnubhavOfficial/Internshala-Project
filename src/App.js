import AddSales from "./Components/AddSales";
import Login from "./Components/Login";
import Register from "./Components/Register";
import TodayTotalRevenue from "./Components/TodayTotalRevenue";
import ToolBar from "./Components/ToolBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Top5Sales from "./Components/Top5Sales";
import MainPage from "./Components/MainPage";
import MobileToolBar from "./Components/MobileToolBar";
import { useEffect, useState } from "react";
import WindowHeightWidth from "./Components/Common/WindowHeightWidth";
function App() {
  const { width } = WindowHeightWidth();
  const [show, setShow] = useState(true);
  useEffect(() => {
    width < 500 ? setShow(false) : setShow(true);
  }, [width]);
  return (
    <div>
      <Router>
        {show ? <ToolBar /> : <MobileToolBar />}
        <Routes>
          <Route path="/" element={<MainPage />} />
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
