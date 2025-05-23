// Install EJS, Express, and MongoDB in Terminal

const express = require("express");
 const mongoose = require("mongoose");

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});


app.set("view engine", "ejs");

app.use(express.json());

const countrySchema = new mongoose.Schema({
  country: { type: String, required: true },
  flagURL: { type: String, required: true },
  population: { type: Number, required: true },
  officialLanguage: { type: String, required: true},
  hasNuclearWeapons: { type: Boolean, required: true }
});

const Country = mongoose.model("Country", countrySchema, "Countries");

// Create a POST route for "/add/country" that adds a country using the request body (3 points)
// Use postman to add at least THREE different countries

app.post("/add/country", async (req, res) => {
  const countryOne = await new Country({
    country: req.body.country,
    flagURL: req.body.flagURL,
    population: req.body.population,
    officialLanguage: req.body.officialLanguage,
    hasNuclearWeapons: req.body.hasNuclearWeapons
    }) .save()
    res.json(countryOne)
});


// Create a GET route for "/" that renders countries.ejs with every country from the Countries collection (1 point)

app.get("/", async (req, res) => {
  const all = await all.find({ countries })
  res.render("countries.ejs", {all})
})


// Go to countries.ejs and follow the tasks there (2 points)


// Create a dynamic PATCH route handler for "/update/{name}" that modifies the population of the country specified in the path (3 points)
// Test this route on post man

app.patch ("/update/Russia/update-population/:population", async (req, res) =>{
  const update = await update.findOneAndUpdate({ 

  country: req.params.population
  },
{
  population: 10
})
})

// Create a DELETE route handler for "/delete/country" that deletes a country of your choice (3 points)
// Test this route on post man

app.delete("/delete/country", async (req, res) =>{
  const go = await go.findOneAndDelete({})
})


async function startServer() {
  
    // add your SRV string with a database called countries
  await mongoose.connect("mongodb+srv://CSH:CSH2025@cluster0.6uo1d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

  app.listen(3000, () => {
    console.log("Server is running");
  });
}

startServer();
