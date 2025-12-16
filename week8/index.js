const mongoose = require("mongoose");

const MONGO_URI = "mongodb://localhost:27017/Week8";

mongoose.connect(MONGO_URI);
const db = mongoose.connection;

db.on("error", (err) => console.log("Error occured during connection " + err));

db.once("connected", async () => {
  console.log(`Connected to ${MONGO_URI}`);

  const PersonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    age: Number,
    Gender: String,
    Salary: Number,
  });

  const person_doc = mongoose.model("modelname", PersonSchema, "personCollection");

  try {
    // Task 1: single document (save)
    const doc1 = new person_doc({ name: "Jacky", age: 36, Gender: "Male", Salary: 3456 });
    const saved = await doc1.save();
    console.log("New Article Has been Added Into Your DataBase.", saved);

    // Task 2: multiple documents (insertMany)
    const manypersons = [
      { name: "Simon", age: 42, Gender: "Male", Salary: 3456 },
      { name: "Neesha", age: 23, Gender: "Female", Salary: 1000 },
      { name: "Mary", age: 27, Gender: "Female", Salary: 5402 },
      { name: "Mike", age: 40, Gender: "Male", Salary: 4519 },
    ];

    await person_doc.insertMany(manypersons);
    console.log("Data inserted");

    // Task 3: find all, sort, select, limit
    const docs = await person_doc
      .find({})
      .sort({ Salary: 1 })
      .select("name Salary age Gender")
      .limit(5);

    console.log("showing multiple documents (max 5)");
    docs.forEach((d) => console.log(d.age, d.name, d.Gender, d.Salary));
  } catch (err) {
    console.error(err);
  } finally {
    await mongoose.connection.close();
  }
});
