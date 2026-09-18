import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import FilmDetail from "./pages/FilmDetail";

import "./App.css";

function App() {
  return (
    <>
      <Header />

      <Routes>
        {/* Ana səhifə */}
        <Route path="/" element={<Home />} />

        {/* Film detal səhifəsi */}
        <Route path="/film/:id" element={<FilmDetail />} />

        {/* 404 */}
        <Route
          path="*"
          element={
            <div className="not-found-page">
              <div className="not-found-content">
                <span>404</span>

                <h1>Səhifə tapılmadı</h1>

                <p>
                  Axtardığınız səhifə mövcud deyil.
                </p>

                <a href="/">
                  Ana səhifəyə qayıt
                </a>
              </div>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
