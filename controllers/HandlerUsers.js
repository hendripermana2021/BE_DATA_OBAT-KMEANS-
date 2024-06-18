import db from "../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const Users = db.tbl_users;

export const handleGetRoot = async (req, res) => {
  res.status(200).json({
    code: 200,
    status: "OK",
    msg: "Data Mining WEB Status Activated",
  });
};

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.sendStatus(401);
    }

    const users = await Users.findOne({
      where: {
        refreshtoken: refreshToken,
      },
    });

    if (!users) {
      return res.sendStatus(403);
    }

    jwt.verify(
      refreshToken,
      process.env.REFRESH_TOKEN_SECRET,
      (err, decoded) => {
        if (err) {
          return res.sendStatus(403);
        }

        const { role_id, name_user, email } = users;
        const accessToken = jwt.sign(
          { userId: role_id, name_user, email },
          process.env.ACCESS_TOKEN_SECRET,
          {
            expiresIn: "30s",
          }
        );

        res.json({ accessToken });
      }
    );
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};

export const whoAmI = async (req, res) => {
  try {
    const currentUser = req.user;
    res.status(200).json({
      code: 200,
      status: true,
      msg: "This data Users Login Now",
      data: currentUser,
    });
  } catch (error) {
    console.log(error);
  }
};

export const Login = async (req, res) => {
  try {
    const user = await Users.findOne({
      where: { email: req.body.email },
    });

    if (!user) {
      return res.status(404).json({
        code: 404,
        status: false,
        msg: "Email not found",
      });
    }

    const match = await bcrypt.compare(req.body.password, user.password);

    if (!match) {
      return res.status(400).json({
        code: 400,
        status: false,
        msg: "Incorrect password",
      });
    }

    const { id, name_user, sex, role_id, email } = user;

    const accessToken = jwt.sign(
      { id, name_user, sex, email, role_id },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    const refreshToken = jwt.sign(
      { id, name_user, sex, email, role_id },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );

    await Users.update(
      { refreshtoken: refreshToken, accesstoken: accessToken },
      { where: { id } } // Use id directly without indexing
    );

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      secure: true,
      sameSite: "Lax",
    });

    res.status(200).json({
      code: 200,
      msg: "Login successful",
      data: accessToken,
    });
  } catch (error) {
    console.error("System failure:", error);
    res.status(500).json({
      code: 500,
      status: false,
      msg: "System failure",
    });
  }
};

export const Logout = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
      return res.status(200).json({
        code: 200,
        status: false,
        msg: "User has been logged out",
      });
    }

    let user = await Users.findOne({ where: { refreshtoken: refreshToken } });

    if (!user) {
      return res.status(400).json({
        code: 400,
        status: false,
        msg: "User not found",
      });
    }

    const userId = user.id;

    await Users.update(
      { refreshtoken: null },
      {
        where: {
          id: userId,
        },
      }
    );

    res.clearCookie("refreshToken");

    return res.status(200).json({
      code: 200,
      status: true,
      msg: "You have been logged out",
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      code: 500,
      status: false,
      msg: "Internal Server Error",
    });
  }
};

export const getDataUsers = async (req, res) => {
  try {
    const user = await Users.findAll();

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
