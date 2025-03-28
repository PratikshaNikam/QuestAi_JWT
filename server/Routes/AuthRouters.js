// import { createRequire } from 'module';
// const require = createRequire(import.meta.url);

const { register, login } = require("../Controllers/AuthControllers");
const router = require("express").Router();

router.post("/")
router.post("/register", register);
router.post("/login", login);

module.exports=router;
