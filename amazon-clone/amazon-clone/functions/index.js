const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")
("sk_test_51JanljSBO6BcO7ZWV7auIqRbcQpkqh2LFNJkC7h1ANL81oneydkV7vOh4TOejTXXThnqXsq0eFnAaTbP1pxjO9xD00ACV36g1b");

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin:true }));
app.use(express.json());

// API routes
app.get("/", (request,response) => response.status(200).send
("hello world"))

app.post("/payments/create", async (request,response) => {
    const total = request.query.total;
    console.log("Payment Request Received for this amount >>>",total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "inr",

    })
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
}) 


// Listen command

exports.api = functions.https.onRequest(app)

// Example endpoint

// http://localhost:5001/clone-7dee2/us-central1/api
