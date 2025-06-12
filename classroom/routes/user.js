const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.send("GET FOR USERS");
});
router.get("/:id", (req,res) => {
    res.send("GET FOR SHOW USERS");
});
router.post("/", (req,res) => {
    res.send("POST FOR USERS");
});
router.delete("/:id", (req,res) => {
    res.send("DELETE FOR USERS");
});

module.exports = router;