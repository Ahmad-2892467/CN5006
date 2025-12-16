import { useState } from "react";
import api from "../api";

export default function DeleteProduct() {
  const [productName, setProductName] = useState("");

  async function handleDelete() {
    try {
      await api.post("/products/delete-by-name", {
        productName: productName
      });

      alert("Product deleted successfully!");
    } catch (err) {
      alert("Error: " + err.message);
    }
  }

  return (
    <div>
      <h2>Delete Product</h2>

      <input
        placeholder="Enter Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}