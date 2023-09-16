const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.setHeader("X-timestamp", Date.now());
    let message = req.query.message;
    const lang = req.headers["x-lang"];

    if (message === "") {
        res.status(400);
        if (lang === "en") {
            message = "message is empty.";
        } else {
            message = "messageの値が。空です。";
        }
    }

    res.send({ message });
});

router.use(express.json());
router.post("/", (req, res) => {
    let message = req.query.message;
    const body = req.body;
    res.end({ message });
});

module.exports = router;
