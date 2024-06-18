'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcrypt");
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "tbl_alternatifs",
      [ {
        name_obat: "Alco Plus ",
        harga_barang: 72000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk",
        detail_efek: "Pilek, bersin, hidung tersumbat",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Allerinn Expektoran",
        harga_barang: 13000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk, pusing, mulut kering, kejang epiileptiform (dosis tinggi)",
        detail_efek: "Batuk berdahak, pilek, bersin, hidung tersumbat, sakit tenggorokan",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Anakonidin Sirup",
        harga_barang: 15000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Muntah, sakit kepala mengantuk, vertigo, mulut kering",
        detail_efek: "Pilek, hidung tersumbat, bersin, batuk",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Antangin",
        harga_barang: 3500,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk",
        detail_efek: "Masuk angin, meriang, rasa mual, perut kembung, capek",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Antasida Doen Suspensi",
        harga_barang: 6000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Konstipasi, diare, mual, muntah",
        detail_efek: "Mual nyeri lambung, nyeri ulu hati ",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Antihenoroid ",
        harga_barang: 23000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Iritasi lokal, gejala keracunan sistemik",
        detail_efek: "Wasir, peradangan pada rektum, luka terbuka pada dubur, gatal-gatal",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Apetic Forte",
        harga_barang: 43000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Kerusakan hati",
        detail_efek: "Demam, sakit kepala, sakit gigi",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Artrodar Tablet",
        harga_barang: 16000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mual, muntah, diare, nyeri epigastrik",
        detail_efek: "Osteoartritis",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Bejo",
        harga_barang: 3500,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk",
        detail_efek: "Masuk angin, perut kembung, pegal-pegal, sakit kepala, mual ",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Biolysin Tablet",
        harga_barang: 23000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk",
        detail_efek: "Kekurangan vitamin, kekurangan gizi, tidak nafsu makan",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Bodrexin",
        harga_barang: 13000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mual, muntah, sakit perut, mata bewarna kuning, pusing",
        detail_efek: "Demam, nyeri",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Bodrex Flu and Batuk",
        harga_barang: 3000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Gangguan pencernaan, insomnia, mulut kering, gelisah, tremor",
        detail_efek: "Flu, demam, sakit kepala, batuk-batuk",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Bodrexin Pilek Alergi PE Sirup",
        harga_barang: 13000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Gangguan GI, gangguan psikomotorik, takikardi, aritmia, mulut kering",
        detail_efek: "Flu, demam, sakit kepala, hidung tersimbat, batuk berdahak pada anak",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Bromika Bromhexine HCL",
        harga_barang: 19000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mual, diare, gangguan pencernaan, sakit kepala, vertigo",
        detail_efek: "Batuk berdahak, flu ",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Bufect Ibuprofen",
        harga_barang: 7000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Gangguan saluran pemcernaan, ruam kulit, penurunan ketajaman penglihatan",
        detail_efek: "Demam, sakit kepala, sakit gigi, sakit telinga, nyeri haid",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Callusol",
        harga_barang: 33000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Iritasi pada kulit",
        detail_efek: "Mata ikan, kulit mengeras, kutil, kapalan",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Caviplex Tablet",
        harga_barang: 20000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mual, reaksi alergi",
        detail_efek: "Kekurangan vitamin, kekurangan mineral",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Cod Liver Oil",
        harga_barang: 18000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Reaksi alergi, hipervitaminosis",
        detail_efek: "Kekurangan vitamin",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Combatrin",
        harga_barang: 18000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Nafsu makan hilang, mual, muntah, diare, sakit kepala",
        detail_efek: "Infeksi cacing",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Copurcetin",
        harga_barang: 7000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk, alergi, gangguan jantung",
        detail_efek: "Flu, demam, sakit kepala, sakit hidung, batuk",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Counterpain",
        harga_barang: 24000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Iritasi kulit ringan, gatal-gatal",
        detail_efek: "Nyeri sendi, keseleo, nyeri encok",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Cupanol Sirup",
        harga_barang: 10000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Kerusakan hati, gangguan pencernaan, pendarahan lambung",
        detail_efek: "Sakit kepala, sakit gigi, demam",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Curcuma Plus Emulsion",
        harga_barang: 30000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Reaksi alergi, hipervitaminosis",
        detail_efek: "Kekurangan vitamin, imun turun, tidak nafsu makan",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Decadry",
        harga_barang: 20000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mengantuk, mulut kering, gangguan pencernaan, pusing, alergi pada kulit",
        detail_efek: "Batuk berdahak, alergi",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Decolgen",
        harga_barang: 3000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mengantuk, gangguan pencernaan, mulut kering, palpitasi, psikomotor",
        detail_efek: "Sakit kepala, demam, bersin, hidung tersumbat",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Diaforma",
        harga_barang: 10000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Konstipasi",
        detail_efek: "Diare",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Dios FC Tablet",
        harga_barang: 21000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Gangguan pencernaan, mual, muntah, diare, sakit kepala",
        detail_efek: "Ambeien",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Dumin Paracetamol",
        harga_barang: 25000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Reaksi hipersensitivitas, gangguan hematologi, pankreatitis akut",
        detail_efek: "Sakit kepala, sakit gigi, demam",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Enervon C",
        harga_barang: 6000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk",
        detail_efek: "Imun turun, kekurangan vitamin",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Ever E 250",
        harga_barang: 22000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Reaksi alergi",
        detail_efek: "Kulit kusam, kekurangan vitamin",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Farsifen Forte",
        harga_barang: 12000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Sakit perut, mual, muntah, diare, sambelit, mengantuk",
        detail_efek: "Rematik tulang, trauma otot, nyeri, sakit kepala",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Fatigon Kaplet",
        harga_barang: 9000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk",
        detail_efek: "Kekurangan vitamin, imun turun ",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Feminax",
        harga_barang: 35000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mual, muntah, diare, kerusakan hati",
        detail_efek: "Nyeri haid, kejang perut",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Habbatussauda Cap Kurma",
        harga_barang: 45000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mual, muntah",
        detail_efek: "Imun turun ",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Haemogal Tablet",
        harga_barang: 12000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Gangguan gastro intestinal ringan",
        detail_efek: "Ambeien ",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Hemaviton Cardio",
        harga_barang: 23000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk",
        detail_efek: "Imun turun",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Herba Kof",
        harga_barang: 15000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk",
        detail_efek: "Batuk, sakit tenggorokan",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Hi-Bone Kids",
        harga_barang: 33000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mengantuk, mual, muntah",
        detail_efek: "Kerusakan tulang, imun anak turun",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Holidryl Expectorant Syrup",
        harga_barang: 9000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk",
        detail_efek: "Batuk, alergi",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Hufagrip Flu dan Batuk Sirup",
        harga_barang: 21000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk",
        detail_efek: "Flu, batuk berdahak, bersin, demam, sakit kepala",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Hufagrip TMP Sirup",
        harga_barang: 16000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Reaksi alergi",
        detail_efek: "Demam, sakit kepala, sakit gigi, sakit telinga, nyeri ringan ",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Hufamag Plus",
        harga_barang: 8000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Diare, konstipasi, mual, muntah",
        detail_efek: "Gastritis, perut kembung, maag, tukak lambung, dispepsia",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Imboost Force Tablet",
        harga_barang: 70000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Gangguan perut ringan, reaksi alergi",
        detail_efek: "Imun turun, lemah, lesu",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Inzana Tablet",
        harga_barang: 3000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Iritsi lambung, pendarahan lambung, mual, muntah, sesak nafas",
        detail_efek: "Demam, nyeri, hidung tersumbat, bersin-bersin",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Itrabat Sirup",
        harga_barang: 16000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mengantuk, diare, pusing, sakit perut, muntah",
        detail_efek: "Batuk",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Kahina Kaolin",
        harga_barang: 7000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Konstipasi",
        detail_efek: "Diare",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Ketoprofen ",
        harga_barang: 15000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Alergi, kesulitan bernafas, pembengkakan wajah, maag, kejang",
        detail_efek: "Migran, nyeri haid, sakit gigi, demam",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Ketoprofen Hexpharm",
        harga_barang: 15000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mual, muntah, sakit kepala, pusing, kelelahan",
        detail_efek: "Nyeri",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Komix Kid",
        harga_barang: 2000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mengantuk gangguan pencernaan, sakiy kepala, insomnia, gelisah",
        detail_efek: "Batuk berdahak, pilek",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Konvermex",
        harga_barang: 16000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Nafsu makan hilang, diare, sakit kepala, ruam kulit, mengantuk",
        detail_efek: "Infeksi cacing",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Kopulax",
        harga_barang: 15000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Ruam kulit, pruritus, kram usus, kehilangan cairan tubuh, diare",
        detail_efek: "Sembelit, peradangan hemoroid",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Kuldon",
        harga_barang: 3500,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mual, muntah",
        detail_efek: "Panas dalam, sariawan, bau mulut, tenggorokan kering, susah BAB",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Laserin Syrup",
        harga_barang: 23000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk",
        detail_efek: "Batuk, masuk angin, sakit perut",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Laxadine",
        harga_barang: 70000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Ruam kulit, prurifus, rasa panas terbakar, diare, muntah",
        detail_efek: "Susah BAB",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Magasida",
        harga_barang: 15000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Diare, konstipasi, mual, muntah",
        detail_efek: "Maag, perut kembung, tukak usus, tukak lambung, gangguan pencernaan",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Mezinex Expectorant",
        harga_barang: 13000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk",
        detail_efek: "Batuk, pilek",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Mixagrip",
        harga_barang: 3000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mengantuk, bibir kering, mual, muntah, penglihatan kabur",
        detail_efek: "Demam, sakit kepala, hidung tersumbat, batuk, bersin",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Mylanta Sirup",
        harga_barang: 18000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Sembelit, diare, mual, muntah, ruam",
        detail_efek: "Asam lambung, nyeri ulu hati, mual, tukak usus 12 jari, tukak lambung",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Napacin",
        harga_barang: 4000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Sakit kepala, pusing, mual, muntah, diare ",
        detail_efek: "Asma",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Naspro",
        harga_barang: 3000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Gangguan GI, peningkatan waktu pendarahan, reaksi hipersensitivitas",
        detail_efek: "Demam, nyeri, sakit kepala, sakit gigi",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Nature E",
        harga_barang: 22000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk",
        detail_efek: "Kulit kusam",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Nellco Special OBH",
        harga_barang: 22000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mengantuk, mual, muntah, hipertensi",
        detail_efek: "Demam, sakit kepala, hidung tersumbat, batuk, bersin",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Neo Rheumacyl",
        harga_barang: 18000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mual, muntah, sembelit, reaksi alergi, sakit kepala",
        detail_efek: "Nyeri otot, nyeri sendi, pegal linu, nyeri haid",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Neozep Forte ",
        harga_barang: 3500,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mengantuk, mual, muntah",
        detail_efek: "Flu, batuk, hidung tersumbat, gatal-gatal, bersin",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Nipe Drop",
        harga_barang: 18000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Gugup, insomnia, sakit kepala, mual, iritasi lambung",
        detail_efek: "Sakit kepala, sakit otot, sakit pinggang, pilek, demam",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Nosirax Tablet",
        harga_barang: 14000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mengantuk, mual, muntah",
        detail_efek: "Nyeri, kejang, endema pada keadaan varises",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Novagesic ",
        harga_barang: 10000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Kulit memerah, sesak nafas, fitur wajah membengkak",
        detail_efek: "Demam, nyeri, sakit gigi, sakit kepala",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "OB Herbal Junior",
        harga_barang: 13000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk",
        detail_efek: "Batuk, tenggorokan sakit",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "OBH Combi Dewasa",
        harga_barang: 16000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mengantuk, gangguan pencernaan, insomnia, gelisah, eksitas",
        detail_efek: "Demam, sakit kepala, hidung tersumbat, bersin",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Omegdiar Kaolin Pectin",
        harga_barang: 8000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mengantuk, mual, muntah",
        detail_efek: "Diare non spesifik",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Oskadon",
        harga_barang: 3000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mual, muntah, nyeri lambung, diare, pendarahan lambung",
        detail_efek: "Demam, nyeri, sakit gigi, sakit kepala",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Panadol Paracetamol",
        harga_barang: 12000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Kemerahan, kulit terkelupas, gangguan pernafasan, pembengkakan bibir, sariawan",
        detail_efek: "Sakit kepala, sakit gigi, sakit pada otot, demam",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Paramex Flu and Batuk",
        harga_barang: 3000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Kerusakan hati, reaksi alergi",
        detail_efek: "Demam, sakit kepala, hidung tersumbat, batuk tidak berdahak",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Paramex nyeri otot",
        harga_barang: 3000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Kerusakan hati",
        detail_efek: "Nyeri otot, nyeri sendi, sakit kepala, sakit gigi, demam",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Pasaba Cough and Flu Sirup",
        harga_barang: 9000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk",
        detail_efek: "Batuk, flu, demam, sakit tenggorokan",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Pectorin Syrup",
        harga_barang: 16000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk",
        detail_efek: "Batuk, flu",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Pilkita",
        harga_barang: 4000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Reaksi alergi",
        detail_efek: "Tidak nafsu makan, pegal linu, encok, sakit pinggang",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Polysilane sirup",
        harga_barang: 23000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Sembelit, diare, mual, muntah",
        detail_efek: "Asam lambung, tukak lambung, tukak usus 12 jari",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Phenerica Bromhexine HCL",
        harga_barang: 25000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk",
        detail_efek: "Batuk",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Procold Flu and Batuk ",
        harga_barang: 4000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mengantuk, pusing, sakit kepala, gemetar, insomnia",
        detail_efek: "Demam, sakit kepala, hidung tersumbat, bersin",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Proma Tablet",
        harga_barang: 8000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Sembelit, daire, mual, muntah",
        detail_efek: "Asam lambung, gastritis, tukak lambung, tukak usus 12 jari",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Remco Cough",
        harga_barang: 9000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Kerusakan hati, alergi, kelainan darah",
        detail_efek: "Batuk, pilek, gejala alergi, demam",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Salonpas Koyo Merah",
        harga_barang: 8000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Reaksi alergi",
        detail_efek: "Nyeri otot, nyeri sendi, terkilir, memar, punggung pegal",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Sanaflu",
        harga_barang: 3000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Gangguan GI, gangguan psikomotor, takikardi, kerusakan hati",
        detail_efek: "Demam, hidung tersumbat, sakit kepala, bersin",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Sanaflu and Batuk",
        harga_barang: 3000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Gangguan GI, gangguan psikomotor, takikardi, kerusakan hati",
        detail_efek: "Flu, demam, pilek",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Sangobion",
        harga_barang: 18000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Gangguan gastro intestimal, tinja bewarna gelap",
        detail_efek: "Kekurangan zat besi, kekurangan mineral",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Sanmol Paracetamol Syrup",
        harga_barang: 20000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Hematologi, reaksi alergi, kerusakan hati, reaksi kulit",
        detail_efek: "Sakit kepala, skait gigi, demam, nyeri",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Saridon",
        harga_barang: 4500,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Kemerahan pada kulit, reaksi alergi, sesak nafas",
        detail_efek: "Sakit kepala, demam, sakit gigi, neuralgia",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Skintex",
        harga_barang: 12000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Kemerahan kulit",
        detail_efek: "Gatal-gatal, bau pada kaki akibat jamur",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Stromag Tablet",
        harga_barang: 10000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mual, muntah, diare, konstipasi",
        detail_efek: "Maag, tukak lambung, kembung, tukak usus 12 jari, dispepsia neurogenik",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Sumagesic",
        harga_barang: 3000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Kerusakan fungsu hati, diare",
        detail_efek: "Sakit kepala, sakit gigi, demam",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Tempra Paracetamol",
        harga_barang: 50000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Kerusakan fungsi hati, kemerahan, gatal pada kulit",
        detail_efek: "Demam, rasa sakit, nyeri ringan, sakit gigi",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Termorex",
        harga_barang: 16000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mengantuk, gangguan saluran pencernaan, diare",
        detail_efek: "Demam, sakit kepala, hidung tersumbat, bersin, batuk",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Termorex Sirup",
        harga_barang: 15000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Reaksi alergi, kerusakan fungsi hati",
        detail_efek: "Sakit kepala, demam, sakit gigi",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Tremenza Tablet",
        harga_barang: 20000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Tenggorokan kering, mengantuk, tremor, gangguan koordinasi",
        detail_efek: "Flu",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Trianta",
        harga_barang: 10000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Sembelit, diare, mual, muntah",
        detail_efek: "Gastritis, tukak lambung, perut kembung, maag, tukak usus 12 jari",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Tropical Plus Sirup",
        harga_barang: 16000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Mengantuk, insomnia, gelisah, tremor, mulut kering",
        detail_efek: "Batuk, demam, sakit kepala, hidung tersumbat, bersin",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Vitamin C ",
        harga_barang: 2000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Alergi",
        detail_efek: "Kekurangan vitamin",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Woods Att Sirup",
        harga_barang: 21000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Muntah, pusing, mengantuk, sulit BAB",
        detail_efek: "Batuk tidak berdahak, alergi",
        createdAt: new Date(),
        updatedAt: new Date()
       },
       {
        name_obat: "Zingoserin Kids",
        harga_barang: 9000,
        cluster: 0,
        qty_barang: 20,
        detail_penyembuhan: "Menyebabkan kantuk",
        detail_efek: "Batuk, sakit tenggorokan",
        createdAt: new Date(),
        updatedAt: new Date()
       }],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("tbl_alternatifs", null, {});
  },
};
