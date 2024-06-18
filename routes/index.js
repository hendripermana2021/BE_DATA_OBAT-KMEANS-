import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import {
  Login,
  Logout,
  RegisterUsers,
  deleteUsers,
  getDataUsers,
  getDataUsersById,
  handleGetRoot,
  updateDataUsers,
  whoAmI,
} from "../controllers/HandlerUsers.js";
import { verifyToken } from "../middleware/verifyToken.js";
import { getDataAlternatif } from "../controllers/HandlerAlternatif.js";

export const router = express.Router();

export const prefix = "/v1/api/";

//FOR UPLOUD FILE

//ROUTE GENERAL
router.get(prefix, handleGetRoot);
router.get(prefix + "profile", verifyToken, whoAmI);
router.post(prefix + "login", Login);
router.delete(prefix + "logout", verifyToken, Logout);
// router.get(prefix + "dashboard", verifyToken, Dashboard);

//ROUTE DATA USERS
router.get(prefix + "users", verifyToken, getDataUsers);
router.get(prefix + "users/byid/:id", verifyToken, getDataUsersById);
router.delete(prefix + "users/delete/:id", verifyToken, deleteUsers);
router.put(prefix + "users/update/:id", verifyToken, updateDataUsers);
router.post(prefix + "users/add", verifyToken, RegisterUsers);

//ROUTE DATA ALTERNATIF
router.get(prefix + "alternatif", verifyToken, getDataAlternatif);

export default router;
