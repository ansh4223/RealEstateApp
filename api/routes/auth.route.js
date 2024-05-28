import express from "express"

const router = express.Router()

router.post("/register", (req,res) => {
    console.log("route works");
});

router.post("/login", (req,res) => {
    console.log("route works");
});

router.post("/logout", (req,res) => {
    console.log("route works");
});

export default router;