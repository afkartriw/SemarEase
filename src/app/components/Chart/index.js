import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  
  // Daftarkan elemen yang diperlukan dari chart.js
  ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
  
  const BarChart = () => {
    const data = {
      labels: [
        'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
        'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
      ],
      datasets: [
        {
          label: 'Peminjam',
          data: [10, 20, 5, 15, 40, 70, 30, 10, 15, 20, 5, 0],
          backgroundColor: 'rgba(54, 162, 235, 0.6)', // Warna biru dengan transparansi
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        },
      ],
    };
  
    // Opsi chart untuk menyesuaikan tampilan
    const options = {
      responsive: true,
      maintainAspectRatio: false, // Membuat chart menyesuaikan ukuran kontainernya
      plugins: {
        legend: {
          position: 'top', // Posisi legenda di bagian atas chart
          labels: {
            font: {
              size: 14, // Ukuran font untuk label legenda
            },
          },
        },
        title: {
          display: true,
          text: 'Jumlah Peminjam Setiap Bulan', // Judul chart
          font: {
            size: 24, // Ukuran font untuk judul
            weight: 'bold',
          },
          padding: {
            top: 20,
            bottom: 30,
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true, // Mulai dari angka 0 di sumbu X
          ticks: {
            font: {
              size: 16, // Ukuran font untuk label sumbu X
            },
          },
        },
        y: {
          beginAtZero: true, // Mulai dari angka 0 di sumbu Y
          ticks: {
            font: {
              size: 16, // Ukuran font untuk label sumbu Y
            },
          },
          grid: {
            color: 'rgba(200, 200, 200, 0.2)', // Warna gridlines yang lebih terang
          },
        },
      },
    };
  
    return (
      <div style={{ width: '100%', height: '400px' }}> {/* Kontainer dengan tinggi tetap */}
        <Bar data={data} options={options} />
      </div>
    );
  };
  
  export default BarChart;
