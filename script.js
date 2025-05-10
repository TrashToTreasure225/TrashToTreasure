// Fungsi untuk mengambil data dari Google Sheets dan menampilkannya di tabel
function fetchData() {
  fetch('https://script.google.com/macros/s/AKfycbwN7UblWgxUw1m9H8A-YjvbI4pT6RcGRbfd-c_4-jAR/dev')
    .then(response => response.json())
    .then(data => {
      const tableBody = document.getElementById("fund-table").getElementsByTagName('tbody')[0];
      data.forEach(row => {
        const newRow = tableBody.insertRow();
        newRow.innerHTML = `<td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td>`;
      });
    });
}

// Memanggil fungsi fetchData untuk menampilkan data di tabel
fetchData();

// Fungsi untuk menampilkan grafik interaktif menggunakan Chart.js
function createChart() {
  const ctx = document.getElementById('chart').getContext('2d');
  const data = {
    labels: ['Sampah Plastik', 'Sampah Kertas', 'Sampah Organik'],
    datasets: [{
      label: 'Persentase Sampah',
      data: [45, 30, 25], // Ganti data ini dengan data dinamis jika diperlukan
      backgroundColor: ['#4caf50', '#2196f3', '#ff9800'],
      borderColor: ['#388e3c', '#1976d2', '#f57c00'],
      borderWidth: 1
    }]
  };

  new Chart(ctx, {
    type: 'pie',
    data: data,
  });
}

// Memanggil fungsi untuk membuat grafik saat halaman dimuat
createChart();

