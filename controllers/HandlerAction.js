import db from "../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { Op } from "sequelize";

const Users = db.tbl_users;

// export const readWhenClickedModul = async (req, res) => {
//   try {
//     const { id } = req.params;
//     const siswaId = req.siswa.id_class;

//     // Check if the record already exists
//     const existingRecord = await Readviews.findOne({
//       where: { id_modul: id, id_siswa: siswaId },
//     });

//     if (existingRecord) {
//       return res.status(200).json({
//         code: 200,
//         status: true,
//         msg: "Duplicate Read",
//         data: existingRecord,
//       });
//     }

//     // Create a new read view record
//     const readModul = await Readviews.create({
//       id_modul: id,
//       id_siswa: siswaId,
//       status: "read",
//     });

//     // Send response with the newly created record
//     return res.status(200).json({
//       code: 200,
//       status: true,
//       msg: "You have read the module",
//       data: readModul,
//     });
//   } catch (error) {
//     // Catch and log errors
//     console.error("Kesalahan Membaca:", error);
//     return res.status(500).json({
//       code: 500,
//       status: false,
//       msg: "Terjadi kesalahan pada server",
//     });
//   }
// };

// export const Dashboard = async (req, res) => {
//   try {
//     const userId = req.user?.userId || req.siswa?.userId;
//     if (!userId) {
//       return res.status(400).json({
//         code: 400,
//         status: false,
//         msg: "Invalid user credentials",
//       });
//     }

//     let user = await Guru.findOne({ where: { id: userId } });
//     let userType = "Guru";

//     if (!user) {
//       user = await Siswa.findOne({ where: { id: userId } });
//       userType = "Siswa";
//     }

//     if (!user) {
//       return res.status(404).json({
//         code: 404,
//         status: false,
//         msg: "User not found",
//       });
//     }

//     let modulCount = 0;
//     let kelasCount = 0;

//     if (userType === "Guru") {
//       modulCount = await Modul.count({ where: { id_guru: user.id } });
//       kelasCount = await Class.count({ where: { id_walkes: user.id } });
//     } else if (userType === "Siswa") {
//       modulCount = await Modul.count({
//         where: { id_class: req.siswa.id_class },
//       });
//     }

//     const guruCount = await Guru.count();
//     const siswaCount = await Siswa.count();

//     return res.status(200).json({
//       code: 200,
//       status: true,
//       msg: "Dashboard data retrieved successfully",
//       data: {
//         userType,
//         modulCount,
//         kelasCount,
//         guruCount,
//         siswaCount,
//       },
//     });
//   } catch (error) {
//     console.error("Error retrieving dashboard data:", error);
//     return res.status(500).json({
//       code: 500,
//       status: false,
//       msg: "Internal server error",
//     });
//   }
// };
