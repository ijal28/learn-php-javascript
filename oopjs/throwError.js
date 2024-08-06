//Fungsi error handling (penanganan kesalahan) dalam pemrograman adalah teknik yang digunakan untuk mengelola dan merespons kesalahan yang terjadi selama eksekusi program. Tujuan utama dari error handling adalah untuk menjaga keandalan dan kestabilan aplikasi, serta memberikan pesan yang informatif kepada pengguna atau pengembang tentang kesalahan yang terjadi 
 function cekValidate(input){
    if(!input){
        throw new Error('Input Tidak boleh kosong');
    }
    if(typeof input !== 'number'){
        throw new Error('Input harus berupa angka');
    }
    return input;
}

try {
    console.log(cekValidate(10)); 
    console.log(cekValidate()); 
} catch (error) {
    console.error('Terjadi kesalhan: ', error.message);
} finally {
    console.log('Pengecekan selesai.'); // Blok finally akan dieksekusi setelah try atau catch selesai
}