let data =["Nabila","Eric","Mochi"];
let listMhs = document.getElementById("liatMhs");

data.forEach(showMahasiswa);

function showMahasiswa(value, index)
{
    console.log(value);
    listMhs.innerHTML = "<li>"+ value + "</li>";
    // atau
    listMhs.innerHTML += '<li>${value}</li>';
}