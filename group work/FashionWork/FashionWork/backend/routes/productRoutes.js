const express = require("express");
const router = express.Router();
const Product = require("../models/fashionModel");

// ----------------------
// CREATE (POST /products)
// ----------------------
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------------------
// READ ALL (GET /products)
// ----------------------
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------------------
// UPDATE by Product Name
// ----------------------
router.post("/update-by-name", async (req, res) => {
  try {
    const { productName, updateFields } = req.body;

    const updated = await Product.findOneAndUpdate(
      { "Product Name": productName },
      updateFields,                      
      { new: true }                      
    );

    if (!updated) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json(updated);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------------------
// DELETE by Product Name
// ----------------------
router.post("/delete-by-name", async (req, res) => {
  try {
    const { productName } = req.body;

    const deleted = await Product.findOneAndDelete({
      "Product Name": productName
    });

    if (!deleted) {
      return res.status(404).json({ error: "Product not found" });
    }

    res.json({ success: true, deleted });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Example analytics route
router.get("/top-sold", async (req, res) => {
  try {
    const products = await Product.find()
      .sort({ "Units Sold": -1 })
      .limit(10);

    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ----------------------
// NORMALIZE FIELD NAMES
// ----------------------
router.post("/normalize", async (req, res) => {
  try {
    const updated = await Product.updateMany(
      {},
      {
        $rename: {
          "Product Category": "ProductCategory",
          "Product Name": "ProductName",
          "Units Sold": "UnitsSold",
          "Customer Rating": "CustomerRating",
          "Stock Level": "StockLevel",
          "Trend Score": "TrendScore"
        }
      }
    );

    res.json({ message: "Fields normalized", updated });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

//2.5
router.get("/top10", async (req, res) => {
  try {
    const minUnits = Number(req.query.minUnits);

    const result = await Product.find({ "Units Sold": { $gt: minUnits } })
      .sort({ "Units Sold": -1 })
      .limit(10);

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// TASK 2.3 - Season Summary
router.get("/season-summary", async (req, res) => {
  try {
    const season = req.query.season;

    const result = await Product.aggregate([
      { $match: { Season: season } },
      {
        $group: {
          _id: null,
          totalUnitsSold: { $sum: "$Units Sold" },
          totalReturns: { $sum: "$Returns" },
          totalRevenue: { $sum: "$Revenue" }
        }
      }
    ]);

    res.json(result[0] || { totalUnitsSold: 0, totalReturns: 0, totalRevenue: 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// TASK 2.6 - Average Rating for a season meets condition
router.get("/season-average-rating", async (req, res) => {
  try {
    const season = req.query.season;
    const minRating = Number(req.query.minRating);

    // Step 1: Calculate average rating for the season
    const avg = await Product.aggregate([
      { $match: { Season: season } },
      {
        $group: {
          _id: null,
          averageRating: { $avg: "$Customer Rating" }
        }
      }
    ]);

    const averageRating = avg.length ? avg[0].averageRating : 0;

    // Step 2: Compare with condition
    if (averageRating < minRating) {
      return res.json({
        averageRating,
        products: []
      });
    }

    // Step 3: Return all products for the season
    const products = await Product.find({ Season: season });

    res.json({
      averageRating,
      products
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});