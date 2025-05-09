document.addEventListener("DOMContentLoaded", function () {
  const sheetURL = "https://script.google.com/macros/s/AKfycbzMzeh-8zLA699hqCVtKaVLWbp6R37335e5q7UhXsRTTZ_pMiOj6pgc0_4WULP5KL-G/exec";

  fetch(sheetURL)
    .then((response) => response.json())
    .then((data) => {
      const tableBody = document.getElementById("table-body");

      data.forEach((row) => {
        const tr = document.createElement("tr");

        tr.innerHTML = `
          <td>${row.tanggal}</td>
          <td>${row.jenis}</td>
          <td>${parseInt(row.jumlah).toLocaleString('id-ID')}</td>
          <td>${row.keterangan}</td>
        `;

        tableBody.appendChild(tr);
      });
    })
    .catch((error) => {
      console.error("Gagal mengambil data:", error);
    });
});
