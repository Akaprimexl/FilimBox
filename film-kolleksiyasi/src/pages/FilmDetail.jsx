import { Link, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft,
  Play,
  Star,
  Calendar,
  Clock,
  User,
  Tag,
  Film,
} from "lucide-react";

import filmler from "../data/Filmler";

function FilmDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // URL-dən gələn id ilə filmi tapırıq
  const film = filmler.find((film) => film.id === Number(id));

  // Film tapılmadıqda
  if (!film) {
    return (
      <main className="detail-page">
        <div className="detail-not-found">
          <div className="not-found-icon">🎬</div>

          <h1>Film tapılmadı</h1>

          <p>
            Axtardığınız film mövcud deyil və ya silinib.
          </p>

          <Link to="/" className="back-home-button">
            <ArrowLeft size={18} />
            Bütün filmlərə qayıt
          </Link>
        </div>
      </main>
    );
  }

  // YouTube linkini embed linkinə çeviririk
  function getTrailerUrl(url) {
    if (!url) return null;

    const match = url.match(
      /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/
    );

    if (!match) return null;

    return `https://www.youtube.com/embed/${match[1]}`;
  }

  const trailerUrl = getTrailerUrl(film.trailer);

  return (
    <main className="detail-page">

      {/* BACKDROP */}
      <section
        className="detail-hero"
        style={{
          backgroundImage: `
            linear-gradient(
              to right,
              rgba(5, 7, 12, 0.98) 0%,
              rgba(5, 7, 12, 0.88) 40%,
              rgba(5, 7, 12, 0.55) 75%,
              rgba(5, 7, 12, 0.9) 100%
            ),
            linear-gradient(
              to top,
              #05070c 0%,
              transparent 50%
            ),
            url(${film.backdrop})
          `,
        }}
      >
        <div className="container detail-hero-content">

          {/* BACK BUTTON */}
          <button
            className="detail-back-button"
            onClick={() => navigate(-1)}
          >
            <ArrowLeft size={19} />
            Geri
          </button>

          <div className="detail-main">

            {/* POSTER */}
            <div className="detail-poster-wrapper">
              <img
                src={film.image}
                alt={film.ad}
                className="detail-poster"
              />

              <div className="poster-rating">
                <Star size={16} fill="currentColor" />
                {film.reyting}
              </div>
            </div>

            {/* INFORMATION */}
            <div className="detail-info">

              <div className="detail-label">
                <Film size={15} />
                FİLM DETALLARI
              </div>

              <h1>{film.ad}</h1>

              <div className="detail-meta">

                <span>
                  <Calendar size={17} />
                  {film.il}
                </span>

                <span>
                  <Clock size={17} />
                  {film.muddet}
                </span>

                <span>
                  <Star size={17} fill="currentColor" />
                  {film.reyting}
                </span>

                <span className="detail-genre">
                  <Tag size={16} />
                  {film.janr}
                </span>

              </div>

              <p className="detail-description">
                {film.tesvir}
              </p>

              {/* DIRECTOR */}
              <div className="director-info">
                <div className="director-icon">
                  <User size={20} />
                </div>

                <div>
                  <span>Rejissor</span>
                  <strong>{film.rejissor}</strong>
                </div>
              </div>

              {/* BUTTONS */}
              <div className="detail-actions">

                {film.trailer && (
                  <a
                    href={film.trailer}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="watch-trailer-button"
                  >
                    <Play size={18} fill="currentColor" />
                    Treylerə bax
                  </a>
                )}

                <Link
                  to="/"
                  className="all-films-button"
                >
                  Bütün filmlər
                </Link>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* TRAILER */}
      {trailerUrl && (
        <section className="trailer-section">
          <div className="container">

            <div className="section-heading">
              <div>
                <span className="small-title">
                  VİDEO
                </span>

                <h2>
                  {film.ad} — Treyler
                </h2>
              </div>
            </div>

            <div className="trailer-wrapper">
              <iframe
                src={trailerUrl}
                title={`${film.ad} treyler`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

          </div>
        </section>
      )}

      {/* SIMILAR MOVIES */}
      <section className="similar-section">
        <div className="container">

          <div className="section-heading">
            <div>
              <span className="small-title">
                SƏNƏ MARAQLI OLA BİLƏR
              </span>

              <h2>
                Oxşar filmlər
              </h2>
            </div>
          </div>

          <div className="similar-movies">

            {filmler
              .filter(
                (item) =>
                  item.janr === film.janr &&
                  item.id !== film.id
              )
              .slice(0, 4)
              .map((item) => (
                <Link
                  to={`/film/${item.id}`}
                  className="similar-card"
                  key={item.id}
                >
                  <div className="similar-image">
                    <img
                      src={item.image}
                      alt={item.ad}
                    />

                    <div className="similar-rating">
                      <Star
                        size={14}
                        fill="currentColor"
                      />
                      {item.reyting}
                    </div>
                  </div>

                  <div className="similar-content">
                    <h3>{item.ad}</h3>

                    <p>
                      {item.il} • {item.janr}
                    </p>
                  </div>
                </Link>
              ))}

          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-inner">

          <div className="footer-logo">
            🎬 Film<span>Box</span>
          </div>

          <p>
            © 2026 FilmBox — Film kolleksiyanı kəşf et.
          </p>

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
          >
            Yuxarı ↑
          </button>

        </div>
      </footer>

    </main>
  );
}

export default FilmDetail;
