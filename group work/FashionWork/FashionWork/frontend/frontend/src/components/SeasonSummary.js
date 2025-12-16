import { useState } from "react";
import api from "../api";

export default function SeasonSummary() {
  const [season, setSeason] = useState("");
  const [summary, setSummary] = useState(null);

  async function handleSearch() {
    try {
      const res = await api.get(`/products/season-summary?season=${season}`);
      setSummary(res.data);
    } catch (err) {
      alert("Error: " + err.message);
    }
  }

  return (
    <div>
      <h2>Season Summary</h2>

      <input
        placeholder="Season"
        value={season}
        onChange={(e) => setSeason(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {summary && (
        <div style={{ marginTop: "20px" }}>
          <p>Total Units Sold: {summary.totalUnitsSold}</p>
          <p>Total Returns: {summary.totalReturns}</p>
          <p>Total Revenue: {summary.totalRevenue}</p>
        </div>
      )}
    </div>
  );
}