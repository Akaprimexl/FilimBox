import { useSearchParams } from "react-router-dom";
import FilmKart from "../components/FilmKart";
import filmler from "../data/Filmler";

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();

  const secilmisJanr = searchParams.get("janr");
  const sort = searchParams.get("sort");
  const axtaris = searchParams.get("q") || "";

  const janrlar = [
    "hamisi",
    "drama",
    "komediya",
    "fantastika",
    "triller",
  ];

  // JANR SEÇİMİ
  function janrSec(janr) {
    const yeniParams = new URLSearchParams(searchParams);

    if (janr === "hamisi") {
      yeniParams.delete("janr");
    } else {
      yeniParams.set("janr", janr);
    }

    setSearchParams(yeniParams);
  }

  // REYTİNQƏ GÖRƏ SIRALAMA
  function reytinqSirala() {
    const yeniParams = new URLSearchParams(searchParams);

    if (sort === "reyting") {
      yeniParams.delete("sort");
    } else {
      yeniParams.set("sort", "reyting");
    }

    setSearchParams(yeniParams);
  }

  // AXTARIŞ
  function axtarisEt(event) {
    const yeniParams = new URLSearchParams(searchParams);
    const value = event.target.value;

    if (value.trim() === "") {
      yeniParams.delete("q");
    } else {
      yeniParams.set("q", value);
    }

    setSearchParams(yeniParams);
  }

  // FİLMLƏRİ FİLTRLƏ
  let gosterilecekFilmler = filmler.filter((film) => {
    // Janr filtri
    const janraUygundur =
      !secilmisJanr || film.janr === secilmisJanr;

    // Axtarış filtri
    const adaUygundur = film.ad
      .toLowerCase()
      .includes(axtaris.toLowerCase());

    return janraUygundur && adaUygundur;
  });

  // Reytinqə görə sıralama
  if (sort === "reyting") {
    gosterilecekFilmler.sort(
      (a, b) => b.reyting - a.reyting
    );
  }

  return (
    <main>

      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-background"></div>

        <div className="container hero-content">

          <div className="hero-label">
            <span></span>
            SƏNİN FİLM DÜNYAN
          </div>

          <h1>
            Növbəti sevdiyin
            <br />
            filmi <span>kəşf et.</span>
          </h1>

          <p>
            Ən yaxşı filmləri kəşf et, janrına görə
            süz və film haqqında ətraflı məlumat əldə et.
          </p>

          <div className="hero-buttons">

            <a
              href="#filmler"
              className="hero-primary"
            >
              Filmləri kəşf et
              <span>→</span>
            </a>

            <a
              href="#janrlar"
              className="hero-secondary"
            >
              Janrlara bax
            </a>

          </div>

        </div>
      </section>


      {/* ================= AXTARIŞ ================= */}
      <section className="search-section">
        <div className="container">

          <div className="search-box">

            <span className="search-icon">
              🔍
            </span>

            <input
              type="text"
              placeholder="Film axtar..."
              value={axtaris}
              onChange={axtarisEt}
            />

            {axtaris && (
              <button
                className="clear-search"
                onClick={() => {
                  const yeniParams =
                    new URLSearchParams(searchParams);

                  yeniParams.delete("q");

                  setSearchParams(yeniParams);
                }}
              >
                ×
              </button>
            )}

          </div>

        </div>
      </section>


      {/* ================= JANRLAR ================= */}
      <section
        className="genres-section"
        id="janrlar"
      >
        <div className="container">

          <div className="section-heading">

            <div>
              <span className="small-title">
                KATEQORİYALAR
              </span>

              <h2>Janrlar</h2>
            </div>

            <span className="selected-genre">
              Seçilmiş:
              <strong>
                {secilmisJanr || "Hamısı"}
              </strong>
            </span>

          </div>


          <div className="genre-buttons">

            {janrlar.map((janr) => {

              const aktiv =
                (janr === "hamisi" && !secilmisJanr) ||
                janr === secilmisJanr;

              return (
                <button
                  key={janr}
                  onClick={() => janrSec(janr)}
                  className={
                    aktiv
                      ? "genre-button active"
                      : "genre-button"
                  }
                >
                  {janr === "hamisi"
                    ? "Hamısı"
                    : janr.charAt(0).toUpperCase() +
                      janr.slice(1)}
                </button>
              );

            })}

          </div>

        </div>
      </section>


      {/* ================= FİLMLƏR ================= */}
      <section
        className="films-section"
        id="filmler"
      >
        <div className="container">

          <div className="films-heading">

            <div>

              <span className="small-title">
                KOLLEKSİYA
              </span>

              <h2>
                {axtaris
                  ? `"${axtaris}" nəticələri`
                  : secilmisJanr
                  ? `${secilmisJanr} filmləri`
                  : "Populyar filmlər"}
              </h2>

            </div>


            <div className="heading-actions">

              <span className="film-count">
                {gosterilecekFilmler.length} film
              </span>

              <button
                onClick={reytinqSirala}
                className={
                  sort === "reyting"
                    ? "sort-button active"
                    : "sort-button"
                }
              >
                ⭐{" "}
                {sort === "reyting"
                  ? "Sıralama aktiv"
                  : "Reytinqə görə"}
              </button>

            </div>

          </div>


          {/* FILM YOXDUR */}
          {gosterilecekFilmler.length === 0 ? (

            <div className="empty-state">

              <div>🎬</div>

              <h2>
                Film tapılmadı
              </h2>

              <p>
                Başqa film adı və ya janr
                axtarmağı yoxla.
              </p>

              <button
                onClick={() => setSearchParams({})}
                className="empty-reset-button"
              >
                Filmləri göstər
              </button>

            </div>

          ) : (

            /* FILM KARTLARI */
            <div className="films-grid">

              {gosterilecekFilmler.map((film) => (
                <FilmKart
                  key={film.id}
                  film={film}
                />
              ))}

            </div>

          )}

        </div>
      </section>


      {/* ================= FOOTER ================= */}
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

export default Home;
