import { useState } from "react";
import api from "../api";

export default function UpdateProduct() {
  const [productName, setProductName] = useState("");

  const [form, setForm] = useState({
    productCategory: "",
    unitsSold: "",
    returns: "",
    revenue: "",
    customerRating: "",
    stockLevel: "",
    season: "",
    trendScore: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // 转换为后端需要的字段（带空格、大写）
    const payload = {
      productName: productName,
      updateFields: {
        "Product Category": form.productCategory,
        "Units Sold": Number(form.unitsSold),
        "Returns": Number(form.returns),
        "Revenue": Number(form.revenue),
        "Customer Rating": Number(form.customerRating),
        "Stock Level": Number(form.stockLevel),
        "Season": form.season,
        "Trend Score": Number(form.trendScore)
      }
    };

    try {
      await api.post("/products/update-by-name", payload);
      alert("Product updated successfully!");
    } catch (err) {
      alert("Error: " + err.message);
    }
  }

  return (
    <div>
      <h2>Update Product</h2>

      <label>Product Name to Update: </label>
      <input
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((key) => (
          <div key={key}>
            <label>{key}: </label>
            <input
              name={key}
              value={form[key]}
              onChange={handleChange}
            />
          </div>
        ))}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}