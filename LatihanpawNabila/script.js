let data = ["Alfredo","David","Felix"]
let listmhs = document.getElementById("listmhs")

data.forEach(showMahasiswa);

function showMahasiswa(velue, index){
    console.log(velue);
    listmhs.innerHTML += "<li>" + velue + "</li>";
}

let npm = document.getElementById("npm");
// tampilkan data localstorage ke dalam elemen<p id='npm'>
npm.innerHTML = localStorage.getItem("npm");

let nama = document.getElementById("nama");
nama.innerHTML = localStorage.getItem("nama");

// simpan data ke local storage
localStorage.setItem("email","ahmad@test.com");

// data array
let hobi =["baca", "game","code"];
localStorage.setItem("hobi",hobi);
localStorage.setItem("myhobi", JSON.stringify(hobi));

//data object
let mhs ={ npm: 2226240002, nama: "Andri"};
// cara akses
console.log(mhs.npm);
console.log(mhs.nama);

// kombinasi array dan object
let nilai = [
    {"kode_mk" : "SI0001", nama_mk : "pemrograman web"},
    {"kode_mk" : "SI0002", nama_mk : "PAB"},
];
// tampilkan nama_mk pemrograman web
console.log(nilai[0],nama_mk);
console.log(nilai[1],nama_mk);

// simpan nilai ke dalam localstorage
localStorage.setItem("nilai",JSON.stringify(nilai));

// tampilkan menggunakan for atau forEach
let lsNilai = localStorage.getItem("nilai"); 

for(const[index,data] of IsNilai.enteries()){
    console.log(data.kode_mk);
    console.log(data.nama_mk);

//tampilkan data  mk kedalam <ul id-"listmk">
document.getElementById("listMk").innerHTML +=
<li>${data.kode_mk}${data.nama_mk}</li>
;
}