import './History.css';
import image from './../../assets/images/about-history.jpg';

function History() {
    return (
        <section className="history">
            <img src={image} alt="" />
            <div className="right"> 
                <h2>Our History</h2>
                <p>Coffee King, sebuah warisan keluarga yang dimulai dari warung kopi kecil di sudut kota. Dengan resep rahasia yang turun-temurun, kami menyajikan kopi berkualitas tinggi yang menggugah selera. Seiring berjalannya waktu, Coffee King berkembang menjadi kedai kopi modern yang tetap mempertahankan cita rasa tradisional. Kami berkomitmen untuk memberikan pengalaman menikmati kopi yang tak terlupakan bagi setiap pelanggan.</p>
            </div>
        </section>
    )
}

export default History;