// Data mahasiswa dalam format JSON
var dataMahasiswa = [
    {
      "nama": "Mahasiswa 1",
      "nim": "NIM1",
      "jurusan": "Jurusan A",
      "semester": 3
    },
    {
      "nama": "Mahasiswa 2",
      "nim": "NIM2",
      "jurusan": "Jurusan B",
      "semester": 2
    },
    {
      "nama": "Mahasiswa 3",
      "nim": "NIM3",
      "jurusan": "Jurusan A",
      "semester": 4
    },
    {
      "nama": "Mahasiswa 4",
      "nim": "NIM4",
      "jurusan": "Jurusan C",
      "semester": 2
    },
    {
      "nama": "Mahasiswa 5",
      "nim": "NIM5",
      "jurusan": "Jurusan B",
      "semester": 3
    },
    {
      "nama": "Mahasiswa 6",
      "nim": "NIM6",
      "jurusan": "Jurusan A",
      "semester": 5
    },
    {
      "nama": "Mahasiswa 7",
      "nim": "NIM7",
      "jurusan": "Jurusan C",
      "semester": 3
    },
    {
      "nama": "Mahasiswa 8",
      "nim": "NIM8",
      "jurusan": "Jurusan A",
      "semester": 6
    },
    {
      "nama": "Mahasiswa 9",
      "nim": "NIM9",
      "jurusan": "Jurusan B",
      "semester": 4
    },
    {
      "nama": "Mahasiswa 10",
      "nim": "NIM10",
      "jurusan": "Jurusan C",
      "semester": 5
    }
  ];
  
  // Mengkonversi data JSON menjadi string
  var jsonData = JSON.stringify(dataMahasiswa);
  
  // Menampilkan data JSON
  console.log(jsonData);
  