const router = require("express").Router();

router.get("/products", (req, res) => {
    res.send("I am a router")
});

router.get("/products", (req, res) => {
    res.send("I am a router")
});

router.post("/products", (req, res) => {
    res.send("I am a router")
});

router.put("/products", (req, res) => {
    res.send("I am a router")
});

router.delete("/products", (req, res) => {
    res.send("I am a router")
});

module.exports = router;