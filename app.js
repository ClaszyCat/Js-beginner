// console.log("Hello World");
// alert('lagi belajar javascript');
// prompt('masukkan nama anda');
// alert(5999 + 1);
// console.error('terjadi kesalahan');
// console.warn('ini peringatan');

// console.log("sebelum if");
// if (1 + 1 === 3) {
//   console.log("benar");
// } else {
//   console.log("salah");
// }
// console.log("setelah if");

// let angka = Math.random();
// console.log(angka);

// if (angka <= 0.5) {
//   console.log("angka kurang dari 0.5");
// } else {
//   console.log("angka lebih dari 0.5");
// }
// if (angka >= 0.5) {
//   console.log("angka lebih dari 0.5");
// }

// const iniHari = prompt('hari apa sekarang?').toLowerCase;

// if (iniHari === 'senin') {
//   console.log('Hari ini hari sedih');
// } else if (iniHari === 'sabtu') {
//   console.log('Hari ini hari libur');
// } else  {
//   console.log('Semoga hari ini menyenangkan');
// }

// const password = prompt("masukkan password anda");
// if (password.length >= 6) {
//   if (password.indexOf(" ") === -1) {
//     console.log("password valid");
//   } else {
//     console.log("password tidak boleh spasi");
//   }
// } else {
//   console.log("password minimal 6 karakter");
// }

// const password = prompt("masukkan password anda");
// if (password.length >= 6 && password.indexOf(" ") === -1) {
//   console.log("password valid");
// } else {
//   console.log("password tidak valid");
// }

// const role = prompt("masukkan peran anda");
// if (role === "admin" || role === "spv") {
//   console.log("akses diterima");
// } else {
//   console.log("akses ditolak");
// }

const balonku = prompt("masukkan warna balonku").toLowerCase();
switch (balonku) {
  case "merah":
    console.log("balon ku");
    break;
  case "kuning":
    console.log("bukan balon ku");
    break;
  case "hijau":
    console.log("dooor");
    break;
  default:
    console.log("warna balon tidak diketahui");
}
