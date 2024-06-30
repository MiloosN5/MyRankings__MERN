import express from "express";
const router = express.Router();

import { createUser, getUser, getUsers, deleteUser, updateUser } from "../controllers/players.js";

router.get('/men', getUsers);
router.get('/women', getUsers);

router.post('/men', createUser)
router.post('/women', createUser)

router.get('/men/:id/:slug', getUser)
router.get('/women/:id/:slug', getUser)

router.delete('/men/:id', deleteUser)
router.delete('/women/:id', deleteUser)

router.put('/men/:id', updateUser) 
router.put('/women/:id', updateUser) 

export default router;