// Fungsi untuk menghitung luas segitiga
function hitungLuas() {
// Mendapatkan nilai dari form input
const alas = document.getElementById('alas-luas').value;
const tinggi = document.getElementById('tinggi-luas').value;

// Validasi input: tidak boleh kurang dari atau sama dengan nol
if (alas <= 0 || tinggi <= 0) {
    alert('Masukkan nilai yang benar untuk alas dan tinggi!');
    return;
    }

// Menghitung luas segitiga
const luas = (0.5 * alas * tinggi).toFixed(2);

// Menampilkan hasil luas segitiga di pop-up alert
alert(`Luas Segitiga = ${luas}`);

// Menampilkan hasil luas segitiga di dalam elemen HTML (opsional)
document.getElementById('luas-output').innerText = `Luas Segitiga = ${luas}`;
}

// Fungsi untuk menghitung keliling segitiga
function hitungKeliling() {
// Mendapatkan nilai dari form input
const sisi1 = document.getElementById('sisi1').value;
const sisi2 = document.getElementById('sisi2').value;
const sisi3 = document.getElementById('sisi3').value;

// Validasi input: tidak boleh kurang dari atau sama dengan nol
if (sisi1 <= 0 || sisi2 <= 0 || sisi3 <= 0) {
    alert('Masukkan nilai yang benar untuk ketiga sisi!');
    return;
    }

// Menghitung keliling segitiga
const keliling = (parseFloat(sisi1) + parseFloat(sisi2) + parseFloat(sisi3)).toFixed(2);

// Menampilkan hasil keliling segitiga di pop-up alert
alert(`Keliling Segitiga = ${keliling}`);

// Menampilkan hasil keliling segitiga di dalam elemen HTML (opsional)
document.getElementById('keliling-output').innerText = `Keliling Segitiga = ${keliling}`;
}

// Fungsi untuk menampilkan section tertentu berdasarkan pilihan user
function showSection(section) {
// Jika section yang dipilih adalah 'segitiga', maka tampilkan section segitiga
if (section === 'segitiga') {
    document.getElementById('segitiga-section').style.display = 'block';
    }
}