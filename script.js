const sheetURL = "https://script.google.com/macros/s/AKfycbyBJbLvthlA34sli1pfuGmw_X5xRqzqLplHkstU9sbZdL80XTR90TkhjH5L7bHfsXPOjA/exec";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form");
  const tableBody = document.querySelector("#data-table tbody");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      tanggal: form.tanggal.value,
      jenis: form.jenis.value,
      keterangan: form.keterangan.value,
      jumlah: form.jumlah.value
    };

    try {
      const res = await fetch(sheetURL, {
        method: "POST",
        body: JSON.stringify(data)
      });
      if (res.ok) {
        alert("Data berhasil dikirim!");
        form.reset();
        fetchData(); // refresh table
      } else {
        alert("Gagal mengirim data.");
      }
    } catch (err) {
      alert("Terjadi kesalahan: " + err.message);
    }
  });

  async function fetchData() {
    try {
      const res = await fetch(sheetURL);
      const json = await res.json();
      const rows = json.slice(1); // remove header

      tableBody.innerHTML = "";
      rows.reverse().forEach(row => {
        const tr = document.createElement("tr");
        row.forEach(cell => {
          const td = document.createElement("td");
          td.textContent = cell;
          tr.appendChild(td);
        });
        tableBody.appendChild(tr);
      });
    } catch (err) {
      console.error("Gagal mengambil data:", err);
    }
  }

  fetchData();
});
