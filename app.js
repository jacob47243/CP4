
const express = require("express");
const app = express();
app.use(express.urlencoded({extended: true})); 
app.use(express.json());
app.use(express.static("public"));

app.get("/breed/:type", async (req, res, next) => {
    res.type("json");
    let msg = "";
    if (req.params.type === "PWD") {
        msg = "The Portuguese Water Dog is a breed of water dog from the Algarve region of Portugal. These dogs were originally used by fishermen to herd fish into nets, retrieve lost tackle or broken nets, and act as couriers from ship to ship, or ship to shore.";
    } else if (req.params.type === "Doodle") {
        msg = "Doodles are a crossbreed between a Poodle and another dog breed. They are known for their intelligence, friendly nature, and hypoallergenic coats. Popular doodle breeds include the Labradoodle (Labrador Retriever and Poodle) and the Goldendoodle (Golden Retriever and Poodle).";
    } else {
        res.status(400);
        next(Error("Error: Dog breed must be PWD or Doodle"));
    }
    res.json({"text":msg});
});

app.get("/AShepherd", function (req, res) {
    res.type("text");
    let msg = "The Australian Shepherd, often known simply as the 'Aussie', is a breed of herding dog that was developed in the United States. Despite its name, the breed was not actually developed in Australia. They are known for their intelligence, agility, and strong work ethic.";
    res.send(msg)
});

/**
 * Handles errors
 * @param {Error} err Error object
 * @param {Object} req Express request object
 * @param {Object} res Express response object
 * @param {Function} next
 * @returns None
 */
function errorHandler(err, req, res, next) {
    res.type("text");
    res.send(err.message);
}

app.use(errorHandler);
const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}...`);
});
