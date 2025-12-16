import { Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import DeleteProduct from "./components/DeleteProduct";
import GetSeasonStats from "./components/SeasonSummary";
import First10 from "./components/First10";
import AverageRatingSeason from "./components/AverageRatingSeason";

function App() {
  return (
    <div>
      {/* Menu */}
      <nav style={{ padding: 20, background: "#eee" }}>
        <Link to="/">Home</Link> |
        <Link to="/add"> Add Product</Link> |
        <Link to="/update"> Update Product</Link> |
        <Link to="/delete"> Delete Product</Link> |
        <Link to="/season-stats"> Season Stats</Link> |
        <Link to="/first10"> Top 10</Link> |
        <Link to="/avgRating"> Avg Rating</Link>

      </nav>

      {/* URL Function */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/update" element={<UpdateProduct />} />
        <Route path="/delete" element={<DeleteProduct />} />
        <Route path="/season-stats" element={<GetSeasonStats />} />
        <Route path="/first10" element={<First10 />} />
        <Route path="/avgRating" element={<AverageRatingSeason />} />
      </Routes>
    </div>
  );
}

export default App;