const express = require('express');
const router = express.Router();

const { getAllUser, getOneUser, createUser, updateUser, deleteUser } = require('../controllers/user.controller');


router.get("/", getAllUser);
router.get("/:id", getOneUser);
router.post("/", createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;