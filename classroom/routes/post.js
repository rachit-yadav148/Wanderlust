const express = require("express");
const router = express.Router();

router.get("/", (req,res) => {
    res.send("GET FOR POST");
});
router.get("/:id", (req,res) => {
    res.send("GET FOR SHOW POST");
});
router.post("/", (req,res) => {
    res.send("POST FOR POST");
});
router.delete("/:id", (req,res) => {
    res.send("DELETE FOR POST");
});

module.exports = router;