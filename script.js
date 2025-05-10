// Data Dummy untuk Transparansi Dana
const financialData = [
    {tanggal: "2023-06-01", jenis: "Pemasukan", keterangan: "Penjualan Sampah Plastik", jumlah: 150000},
    {tanggal: "2023-06-02", jenis: "Pengeluaran", keterangan: "Pembelian Mesin RDF", jumlah: 200000},
    // Tambah data lainnya sesuai kebutuhan
];

// Menambahkan Data ke dalam Tabel
const tableBody = document.querySelector("#financial-table tbody");

financialData.forEach(item => {
    const row = document.createElement("tr");
    
    row.innerHTML = `
        <td>${item.tanggal}</td>
        <td>${item.jenis}</td>
        <td>${item.keterangan}</td>
        <td>Rp ${item.jumlah.toLocaleString()}</td>
    `;
    
    tableBody.appendChild(row);
});

