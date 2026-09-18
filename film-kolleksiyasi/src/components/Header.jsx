import { Link, useSearchParams } from "react-router-dom";
import { Heart, Search, Film } from "lucide-react";
import { useState } from "react";

function Header() {
  const [searchParams, setSearchParams] = useSearchParams();

  const [dil, setDil] = useState("AZ");

  const axtaris = searchParams.get("q") || "";

  function axtar(event) {
    const value = event.target.value;

    const yeniParams = new URLSearchParams(searchParams);

    if (value.trim() === "") {
      yeniParams.delete("q");
    } else {
      yeniParams.set("q", value);
    }

    setSearchParams(yeniParams);
  }

  function dilDeyis() {
    setDil((kohneDil) =>
      kohneDil === "AZ" ? "EN" : "AZ"
    );
  }

  const metnler =
    dil === "AZ"
      ? {
          ana: "Ana səhifə",
          filmler: "Filmlər",
          janrlar: "Janrlar",
          axtar: "Film axtar...",
        }
      : {
          ana: "Home",
          filmler: "Movies",
          janrlar: "Genres",
          axtar: "Search movie...",
        };

  return (
    <header className="header">
      <div className="container header-inner">

        {/* LOGO */}
        <Link to="/" className="logo">
          <span className="logo-icon">
            <Film size={20} />
          </span>

          <span>
            Film<span>Box</span>
          </span>
        </Link>

        {/* NAVIGATION */}
        <nav className="nav">

          <Link
            to="/"
            className="nav-link"
          >
            {metnler.ana}
          </Link>

          <a
            href="/#filmler"
            className="nav-link"
          >
            {metnler.filmler}
          </a>

          <a
            href="/#janrlar"
            className="nav-link"
          >
            {metnler.janrlar}
          </a>

        </nav>

        {/* ACTIONS */}
        <div className="header-actions">

          {/* SEARCH */}
          <div className="search-box">

            <Search size={17} />

            <input
              type="text"
              value={axtaris}
              onChange={axtar}
              placeholder={metnler.axtar}
            />

          </div>

          {/* LANGUAGE */}
          <button
            type="button"
            className="language-button"
            onClick={dilDeyis}
            title={
              dil === "AZ"
                ? "Switch to English"
                : "Azərbaycan dilinə keç"
            }
          >
            {dil}
          </button>

          {/* FAVORITES */}
          <button
            type="button"
            className="icon-button"
            title="Sevimlilər"
          >
            <Heart size={18} />
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;