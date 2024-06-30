import express from "express";
const routerDetails = express.Router();

import { getUser } from "../controllers/player.js";

routerDetails.get('/men/:id/:slug', getUser)
routerDetails.get('/women/:id/:slug', getUser)

export default routerDetails;