import React from 'react';
import '../assets/css/image.css';
import { Button } from 'react-bootstrap';


function ImageList() {
  const image_data = [
    { nama: "Asep Trisna Setiawan", tanggal: "2023-10-04", imageUrl: "https://dev-kawaldesa.pptik.id/data/kehadiran/image/satu.jpg" },
    { nama: "Bayu Setyo Nugroho", tanggal: "2023-10-05", imageUrl: "https://dev-kawaldesa.pptik.id/data/kehadiran/image/dua.jpg" },
    { nama: "Yogi Andi", tanggal: "2023-10-06", imageUrl: "https://dev-kawaldesa.pptik.id/data/kehadiran/image/tiga.jpg" },
    { nama: "Faiza Kailani K", tanggal: "2023-10-07", imageUrl: "https://dev-kawaldesa.pptik.id/data/kehadiran/image/empat.jpg" },
    { nama: "M Rizki Fahreza", tanggal: "2023-10-08", imageUrl: "https://dev-kawaldesa.pptik.id/data/kehadiran/image/lima.jpg" },
    { nama: "M Aji Perdana", tanggal: "2023-10-09", imageUrl: "https://dev-kawaldesa.pptik.id/data/kehadiran/image/enam.jpg" },
    { nama: "Ardi Hdayat", tanggal: "2023-10-10", imageUrl: "https://dev-kawaldesa.pptik.id/data/kehadiran/image/tujuh.jpg" },
    { nama: "Diko Prasojo", tanggal: "2023-10-11", imageUrl: "https://dev-kawaldesa.pptik.id/data/kehadiran/image/delapan.jpg" },
    { nama: "Afanin Ryandana", tanggal: "2023-10-12", imageUrl: "https://dev-kawaldesa.pptik.id/data/kehadiran/image/sembilan.jpg" },
    { nama: "Nawa K", tanggal: "2023-10-13", imageUrl: "https://dev-kawaldesa.pptik.id/data/kehadiran/image/sepuluh.jpg" },
    { nama: "Agung Yusuf Wibowo", tanggal: "2023-10-14", imageUrl: "https://dev-kawaldesa.pptik.id/data/kehadiran/image/sebelas.jpg" },
    { nama: "Adnan Darwanto", tanggal: "2023-10-15", imageUrl: "https://dev-kawaldesa.pptik.id/data/kehadiran/image/duabelas.jpg" },
    { nama: "M Fahmi", tanggal: "2023-10-16", imageUrl: "https://dev-kawaldesa.pptik.id/data/kehadiran/image/0f32c4ec-8146-43dd-937e-a9168d1e52b11692931489-PPTIK.jpg" },
    { nama: "Sintia Rahmawati", tanggal: "2023-10-17", imageUrl: "https://dev-kawaldesa.pptik.id/data/kehadiran/image/empatbelas.jpg" },
    { nama: "M Daffa", tanggal: "2023-10-18", imageUrl: "https://dev-kawaldesa.pptik.id/data/kehadiran/image/fe5e0b5a-1d4e-4cc0-b49a-e2d1931a3ac21692162411-PPTIK.jpg" },
  ];
  

  return (
    <div className="container">
    {/* <h1 className="my-4">Daftar Gambar Kamera</h1> */}
    <div className="row">
      {image_data.map((image, index) => (
        <div className="col-md-4" key={index}>
          <div className="card mb-4" border="warning">
          <img src={image.imageUrl} className="card-img-top" alt={image.nama} style={{ margin: 'auto', display: 'block',width: '400px', height: '300px',marginTop:'10px' }}/>
            <div className="card-body">
              <h5 className="card-title">{image.nama}</h5>
              <p className="card-text">Tanggal: {image.tanggal}</p>
            </div>
            
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default ImageList;
