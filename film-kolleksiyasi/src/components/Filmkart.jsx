import { Link } from "react-router-dom";
import { Star, Play, Calendar } from "lucide-react";

function FilmKart({ film }) {
  return (
    <article className="film-card">

      {/* ŞƏKİL */}
      <Link
        to={`/film/${film.id}`}
        className="film-card-image"
      >
        <img
          src={film.image}
          alt={film.ad}
          loading="lazy"
        />

        {/* ŞƏKİLİN ÜSTÜNDƏ QARA OVERLAY */}
        <div className="film-card-overlay">
          <div className="play-circle">
            <Play
              size={22}
              fill="currentColor"
            />
          </div>
        </div>

        {/* REYTİNQ */}
        <div className="film-rating">
          <Star
            size={14}
            fill="currentColor"
          />

          <span>{film.reyting}</span>
        </div>

        {/* JANR */}
        <div className="film-genre">
          {film.janr}
        </div>
      </Link>

      {/* MƏLUMATLAR */}
      <div className="film-card-content">

        <Link
          to={`/film/${film.id}`}
          className="film-title"
        >
          {film.ad}
        </Link>

        <div className="film-card-meta">

          <span>
            <Calendar size={14} />
            {film.il}
          </span>

          <span className="meta-dot">•</span>

          <span>
            {film.muddet}
          </span>

        </div>

        {/* REJİSSOR */}
        <p className="film-director">
          {film.rejissor}
        </p>

        {/* DETALLAR */}
        <Link
          to={`/film/${film.id}`}
          className="film-detail-link"
        >
          Ətraflı bax
          <span>→</span>
        </Link>

      </div>

    </article>
  );
}

export default FilmKart;
