import db from "../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Alternatif = db.tbl_alternatif;
const Kriteria = db.tbl_kriteria;
const Subkriteria = db.tbl_subkriteria;
const AlternatifValues = db.tbl_alternatif_value;

export const getDataAlternatif = async (req, res) => {
  try {
    const alternatif = await Alternatif.findAll({
      include: {
        model: AlternatifValues,
        as: "value_alternatif",
        include: [
          { model: Kriteria, as: "kriteria" },
          { model: Subkriteria, as: "subkriteria" },
        ],
      },
    });

    if (alternatif == "") {
      return res.status(400).json({
        code: 400,
        status: false,
        msg: "Data Doesn't Exist",
      });
    }
    res.status(200).json({
      code: 200,
      status: true,
      msg: "data you searched Found",
      data: alternatif,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getDataUsersById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await Users.findOne({
      where: { id },
    });

    if (user == "") {
      return res.status(400).json({
        code: 400,
        status: false,
        msg: "Data Doesn't Exist",
      });
    }
    res.status(200).json({
      code: 200,
      status: true,
      msg: "data you searched Found",
      data: user,
    });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUsers = async (req, res) => {
  try {
    const { id } = req.params;

    // Validasi ID untuk memastikan itu adalah angka
    if (!id || isNaN(id)) {
      return res.status(400).json({
        code: 400,
        status: false,
        msg: "ID tidak valid",
      });
    }

    // Cari data guru berdasarkan ID
    const user = await Users.findOne({ where: { id } });

    // Jika pengguna tidak ditemukan, kirimkan respons error
    if (!user) {
      return res.status(404).json({
        code: 404,
        status: false,
        msg: "Akun pengguna tidak ditemukan atau sudah dihapus!",
      });
    }

    // Cek apakah pengguna mencoba menghapus akun mereka sendiri
    if (req.user && req.user.userId == user.id) {
      return res.status(403).json({
        code: 403,
        status: false,
        msg: "Anda tidak dapat menghapus akun Anda sendiri!",
      });
    }

    // Hapus data guru berdasarkan ID
    await Users.destroy({ where: { id } });

    // Kembalikan respons sukses
    return res.status(200).json({
      code: 200,
      status: true,
      msg: "Penghapusan akun pengguna berhasil",
      data: guru,
    });
  } catch (error) {
    console.error("Kesalahan saat menghapus akun pengguna:", error);
    return res.status(500).json({
      code: 500,
      status: false,
      msg: "Terjadi kesalahan pada server",
    });
  }
};

export const RegisterUsers = async (req, res) => {
  const { name_user, sex, email, password } = req.body;

  try {
    // Cek apakah email sudah terdaftar
    const existingGuru = await Users.findOne({ where: { email } });
    if (existingGuru) {
      return res.status(409).json({
        code: 409,
        status: false,
        msg: "Email sudah terdaftar",
      });
    }

    // Generate salt untuk hashing password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password, salt);

    // Buat entitas baru
    const newUser = await Users.create({
      name_user,
      sex,
      email,
      password: hashPassword,
      real_password: password, // Simpan real password hanya jika dibutuhkan dan pastikan keamanan terjaga
      role_id: 2, // Hardcoded role_id, bisa diubah sesuai dengan kebutuhan
    });

    res.status(201).json({
      code: 201,
      status: true,
      msg: "Registrasi Guru berhasil",
      data: newUser,
    });
  } catch (error) {
    console.error("Error saat registrasi guru:", error);
    res.status(500).json({
      code: 500,
      status: false,
      msg: "Terjadi kesalahan pada server",
    });
  }
};

export const updateDataUsers = async (req, res) => {
  const { id } = req.params;
  const { name_user, sex, email, password } = req.body;

  try {
    // Cari data guru berdasarkan ID
    const data_before = await Users.findOne({ where: { id } });

    if (!data_before) {
      return res.status(404).json({
        code: 404,
        status: false,
        msg: "Guru tidak ditemukan atau telah dihapus",
      });
    }

    // Siapkan data yang akan diupdate
    const updateData = {
      name_user: name_user || data_before.name_guru,
      sex: sex || data_before.sex,
      email: email || data_before.email,
      email: password || data_before.password,
    };

    // Jika password disediakan, hash password baru
    if (password) {
      const salt = await bcrypt.genSalt(10);
      updateData.password = await bcrypt.hash(password, salt);
      updateData.real_password = password; // Pertimbangkan untuk tidak menyimpan password asli untuk alasan keamanan
    }

    // Update data guru
    await Users.update(updateData, { where: { id } });

    // Ambil data guru setelah diupdate
    const data_update = await Users.findOne({ where: { id } });

    return res.status(200).json({
      code: 200,
      status: true,
      msg: "Guru berhasil diperbarui",
      data: { data_before, data_update },
    });
  } catch (error) {
    console.error("Error saat memperbarui data guru:", error);
    return res.status(500).json({
      code: 500,
      status: false,
      msg: "Terjadi kesalahan pada server",
    });
  }
};
