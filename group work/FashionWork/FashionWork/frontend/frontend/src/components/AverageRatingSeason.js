import { useState } from "react";
import api from "../api";

export default function AverageRatingSeason() {
  const [season, setSeason] = useState("");
  const [minRating, setMinRating] = useState("");
  const [average, setAverage] = useState(null);
  const [products, setProducts] = useState([]);

  async function handleSearch() {
    try {
      const res = await api.get(
        `/products/season-average-rating?season=${season}&minRating=${minRating}`
      );

      setAverage(res.data.averageRating);
      setProducts(res.data.products);
    } catch (err) {
      alert("Error: " + err.message);
    }
  }

  return (
    <div>
      <h2>Season Average Rating Condition</h2>

      <input
        placeholder="Season"
        value={season}
        onChange={(e) => setSeason(e.target.value)}
      />

      <input
        placeholder="Min Rating"
        value={minRating}
        onChange={(e) => setMinRating(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {average !== null && (
        <p>Average Rating for {season}: {average.toFixed(2)}</p>
      )}

      <table border="1" style={{ marginTop: "20px" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rating</th>
            <th>Season</th>
          </tr>
        </thead>

        <tbody>
          {products.map(p => (
            <tr key={p._id}>
              <td>{p["Product Name"]}</td>
              <td>{p["Customer Rating"]}</td>
              <td>{p["Season"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}