document.getElementById("welcome").innerHTML = "selamat datang";
document.getElementById("nama").innerHTML = "<b>Nabila/<b>";
document.getElementById("email").innerHTML = "nabila@test.com";

console.log("hanya bisa dilihat di console")

// variabel
let nama = "";
let email = "";
let data = []; // array / larik

// function
function tampil(){
    console.log("Button ditekan");
    // simpan value txtNama ke dalam variabel "nama"
    nama = document.getElementById("txtNama").value;
    email = document.getElementById("txtEmail").value;
    console.log(nama);
    // ubah konten <p id="nama">
    document.getElementById("nama").innerHTML = nama ;
    document.getElementById("email").innerHTML = email;
    // simpan  ke dalam array data

    data.push(nama);
    console.log(data);
}