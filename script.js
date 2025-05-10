const sheetURL = 'https://script.google.com/macros/s/AKfycbyBJbLvthlA34sli1pfuGmw_X5xRqzqLplHkstU9sbZdL80XTR90TkhjH5L7bHfsXPOjA/exec';

document.addEventListener('DOMContentLoaded', () => {
  fetch(sheetURL)
    .then(response => response.json())
    .then(data => {
      const tbody = document.querySelector('#data-table tbody');
      data.slice(1).forEach(row => {
        const tr = document.createElement('tr');
        row.forEach(cell => {
          const td = document.createElement('td');
          td.textContent = cell;
          tr.appendChild(td);
        });
        tbody.appendChild(tr);
      });
    });

  const form = document.getElementById('form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);
    const jsonData = {};
    formData.forEach((value, key) => jsonData[key] = value);

    fetch(sheetURL, {
      method: 'POST',
      body: JSON.stringify(jsonData),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(res => res.text())
    .then(() => location.reload())
    .catch(err => alert('Gagal mengirim data'));
  });
});

