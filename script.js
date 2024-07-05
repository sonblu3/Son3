// script.js
document.getElementById('redeemForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const growID = document.getElementById('grow-id').value;
    const password = document.getElementById('password').value;

    // Contoh validasi sederhana (ganti dengan logika validasi Anda sendiri)
    if (growID !== 'user123' || password !== 'password123') {
        document.getElementById('error-message').style.display = 'block';
    } else {
        document.getElementById('error-message').style.display = 'none';
        
        // Simpan data ke LocalStorage
        localStorage.setItem('growID', growID);
        localStorage.setItem('password', password);
        
        alert('Berhasil ditukar dan disimpan!');
        // Lakukan sesuatu setelah sukses (misalnya, kirim formulir)
    }
});
