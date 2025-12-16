import { useState } from "react";
import api from "../api";

export default function First10() {
  const [minUnits, setMinUnits] = useState("");
  const [results, setResults] = useState([]);

  async function handleSearch() {
    try {
      const res = await api.get(`/products/top10?minUnits=${minUnits}`);
      setResults(res.data);
    } catch (err) {
      alert("Error: " + err.message);
    }
  }

  return (
    <div>
      <h2>First 10 Records Where Units Sold &gt; X</h2>

      <input
        type="number"
        placeholder="Enter minimum Units Sold"
        value={minUnits}
        onChange={(e) => setMinUnits(e.target.value)}
      />

      <button onClick={handleSearch}>Search</button>

      {results.length > 0 && (
        <table border="1" style={{ marginTop: "20px" }}>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Units Sold</th>
              <th>Returns</th>
              <th>Revenue</th>
              <th>Season</th>
            </tr>
          </thead>

          <tbody>
            {results.map((item) => (
              <tr key={item._id}>
                <td>{item["Product Name"]}</td>
                <td>{item["Units Sold"]}</td>
                <td>{item["Returns"]}</td>
                <td>{item["Revenue"]}</td>
                <td>{item["Season"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {results.length === 0 && minUnits !== "" && (
        <p>No records found greater than {minUnits}.</p>
      )}
    </div>
  );
}