import { useState } from "react";
import api from "../api";
import "../App.css";


export default function AddProduct() {
  const [form, setForm] = useState({
    productCategory: "",
    productName: "",
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
  try {
    const payload = {
      "Product Category": form.productCategory,
      "Product Name": form.productName,
      "Units Sold": Number(form.unitsSold),
      "Returns": Number(form.returns),
      "Revenue": Number(form.revenue),
      "Customer Rating": Number(form.customerRating),
      "Stock Level": Number(form.stockLevel),
      "Season": form.season,
      "Trend Score": Number(form.trendScore),
    };

    const res = await api.post("/products", payload);
    alert("Product added!");
  } catch (err) {
    alert("Error: " + err.message);
  }
}

  return (
    <div>
      <h2>Add Product</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(form).map((key) => (
          <div key={key}>
            <label>{key}: </label>
            <input name={key} value={form[key]} onChange={handleChange} />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}