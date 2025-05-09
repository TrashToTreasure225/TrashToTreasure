// Ganti dengan URL API Google Sheets yang kamu dapatkan
const spreadsheetUrl = 'https://script.google.com/macros/s/AKfycbzMzeh-8zLA699hqCVtKaVLWbp6R37335e5q7UhXsRTTZ_pMiOj6pgc0_4WULP5KL-G/exec';

fetch(spreadsheetUrl)
  .then(response => response.json())
  .then(data => {
    const dataTable = document.getElementById('data-table');
    
    // Menambahkan baris tabel dari data Google Sheets
    let htmlContent = '<table border="1"><tr><th>Pemasukan</th><th>Pengeluaran</th></tr>';

    data.forEach(row => {
      htmlContent += `<tr><td>${row.pemasukan}</td><td>${row.pengeluaran}</td></tr>`;
    });

    htmlContent += '</table>';
    dataTable.innerHTML = htmlContent;
  })
  .catch(error => console.error('Error fetching data:', error));

