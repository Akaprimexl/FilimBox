const filmler = [
  {
    id: 1,
    ad: "Dune: Part Two",
    il: 2024,
    janr: "fantastika",
    reyting: 8.7,
    muddet: "2s 46dəq",
    rejissor: "Denis Villeneuve",
    tesvir:
      "Paul Atreides ailəsini məhv edənlərə qarşı mübarizəyə qoşulur və Chani ilə birlikdə böyük bir taleyin içinə addım atır.",
    image:
      "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",
    trailer:
      "https://www.youtube.com/watch?v=Way9Dexny3w"
  },

  {
    id: 2,
    ad: "Interstellar",
    il: 2014,
    janr: "fantastika",
    reyting: 8.9,
    muddet: "2s 49dəq",
    rejissor: "Christopher Nolan",
    tesvir:
      "İnsanlığın gələcəyini xilas etmək üçün astronavtlar zaman və məkanın sərhədlərini aşan səyahətə çıxırlar.",
    image:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/xJHokMbljvjADYdit5fK5VQsXEG.jpg",
    trailer:
      "https://www.youtube.com/watch?v=zSWdZVtXT7E"
  },

  {
    id: 3,
    ad: "Inception",
    il: 2010,
    janr: "triller",
    reyting: 8.8,
    muddet: "2s 28dəq",
    rejissor: "Christopher Nolan",
    tesvir:
      "Yuxuların içində fikir oğurlayan mütəxəssis bu dəfə mümkün olmayan bir ideyanı insan zehninə yerləşdirməyə çalışır.",
    image:
      "https://image.tmdb.org/t/p/w500/oYuLEt3zVCKq57qu2F8dT7NIa6f.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/8ZTVqvKDQ8emSGUEMjsS4yHAwrp.jpg",
    trailer:
      "https://www.youtube.com/watch?v=YoHD9XEInc0"
  },

  {
    id: 4,
    ad: "The Batman",
    il: 2022,
    janr: "triller",
    reyting: 7.8,
    muddet: "2s 56dəq",
    rejissor: "Matt Reeves",
    tesvir:
      "Gotham şəhərində ardıcıl cinayətləri araşdıran Batman korrupsiyanın dərin izlərinə rast gəlir.",
    image:
      "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/b0PlSFdDwbyK0cf5mV1KcM9eWjQ.jpg",
    trailer:
      "https://www.youtube.com/watch?v=mqqft2x_Aa4"
  },

  {
    id: 5,
    ad: "Oppenheimer",
    il: 2023,
    janr: "drama",
    reyting: 8.6,
    muddet: "3s",
    rejissor: "Christopher Nolan",
    tesvir:
      "J. Robert Oppenheimer və Manhattan Layihəsinin atom bombasının yaradılmasına aparan dramatik hekayəsi.",
    image:
      "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
    trailer:
      "https://www.youtube.com/watch?v=bK6ldnjE3Y0"
  },

  {
    id: 6,
    ad: "The Shawshank Redemption",
    il: 1994,
    janr: "drama",
    reyting: 9.3,
    muddet: "2s 22dəq",
    rejissor: "Frank Darabont",
    tesvir:
      "Haqqsız yerə həbs olunan bankir illər ərzində ümidini qoruyur və azadlığa aparan yolu axtarır.",
    image:
      "https://image.tmdb.org/t/p/w500/9cqNxx0GxF0bflZmeSMuL5tnGzr.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/zfbjgQE1uSd9wiPTX4VzsLi0rGG.jpg",
    trailer:
      "https://www.youtube.com/watch?v=6hB3S9bIaco"
  },

  {
    id: 7,
    ad: "Fight Club",
    il: 1999,
    janr: "triller",
    reyting: 8.4,
    muddet: "2s 19dəq",
    rejissor: "David Fincher",
    tesvir:
      "Adi həyatından bezən bir adam sirli Tyler Durden ilə tanış olur və həyatını tamamilə dəyişdirən gizli kluba qoşulur.",
    image:
      "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    trailer:
      "https://www.youtube.com/watch?v=SUXWAEX2jlg"
  },

  {
    id: 8,
    ad: "The Grand Budapest Hotel",
    il: 2014,
    janr: "komediya",
    reyting: 8.1,
    muddet: "1s 39dəq",
    rejissor: "Wes Anderson",
    tesvir:
      "Məşhur otelin konsyerji və gənc işçisi qiymətli bir rəsm əsəri ətrafında yaranan macəraya düşür.",
    image:
      "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/nX5XotM9yprCKARQ3Cq8H3g6e8w.jpg",
    trailer:
      "https://www.youtube.com/watch?v=1Fg5iWmQjwk"
  },

  {
    id: 9,
    ad: "Forrest Gump",
    il: 1994,
    janr: "drama",
    reyting: 8.8,
    muddet: "2s 22dəq",
    rejissor: "Robert Zemeckis",
    tesvir:
      "Sadə və saf xarakterli Forrest Gump gözlənilmədən Amerika tarixinin bir çox mühüm hadisəsinin şahidinə çevrilir.",
    image:
      "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/qdIMHd4sEfJSckfVJfKQvisL02a.jpg",
    trailer:
      "https://www.youtube.com/watch?v=bLvqoHBptjg"
  },

  {
    id: 10,
    ad: "The Matrix",
    il: 1999,
    janr: "fantastika",
    reyting: 8.7,
    muddet: "2s 16dəq",
    rejissor: "Lana Wachowski",
    tesvir:
      "Neo reallığın göründüyü kimi olmadığını öyrənir və insanlığı idarə edən sistemə qarşı mübarizəyə başlayır.",
    image:
      "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/icmmSD4vTTDKOq2vvdulafOGw93.jpg",
    trailer:
      "https://www.youtube.com/watch?v=vKQi3bBA1y8"
  },

  {
    id: 11,
    ad: "Gladiator",
    il: 2000,
    janr: "drama",
    reyting: 8.5,
    muddet: "2s 35dəq",
    rejissor: "Ridley Scott",
    tesvir:
      "Roma generalı Maksimus xəyanət nəticəsində hər şeyini itirir və qladiator kimi arenaya qayıdır.",
    image:
      "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/Ar7QuJ7sJEiC1vM4Hh9z8QfX5kN.jpg",
    trailer:
      "https://www.youtube.com/watch?v=P5ieIbInFpg"
  },

  {
    id: 12,
    ad: "Deadpool",
    il: 2016,
    janr: "komediya",
    reyting: 7.6,
    muddet: "1s 48dəq",
    rejissor: "Tim Miller",
    tesvir:
      "Xüsusi güclərə sahib olan Wade Wilson qeyri-adi yumoru və təhlükəli missiyaları ilə düşmənlərinin qarşısına çıxır.",
    image:
      "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/en971MEXui9diirXlogOrPKmsEn.jpg",
    trailer:
      "https://www.youtube.com/watch?v=ONHBaC-pfsk"
  },

  {
    id: 13,
    ad: "The Wolf of Wall Street",
    il: 2013,
    janr: "komediya",
    reyting: 8.2,
    muddet: "3s",
    rejissor: "Martin Scorsese",
    tesvir:
      "Jordan Belfortun Wall Street-də sürətli yüksəlişi, zənginliyi və sonradan qarşılaşdığı problemlərdən bəhs edir.",
    image:
      "https://image.tmdb.org/t/p/w500/34m2tygAYBGqA9dJYpLqZJ8FZpO.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/cWUOv3H7YFwvKeaQhoAQT4cKLTg.jpg",
    trailer:
      "https://www.youtube.com/watch?v=iszwuX1AK6A"
  },

  {
    id: 14,
    ad: "Avengers: Endgame",
    il: 2019,
    janr: "fantastika",
    reyting: 8.2,
    muddet: "3s 1dəq",
    rejissor: "Anthony Russo",
    tesvir:
      "Qəhrəmanlar itirilmiş dostlarını və kainatın gələcəyini xilas etmək üçün son böyük missiyaya başlayırlar.",
    image:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/7RyHsO4yDXtBv1zUU2V4cK4t9rW.jpg",
    trailer:
      "https://www.youtube.com/watch?v=TcMBFSGVi1c"
  },

  {
    id: 15,
    ad: "Joker",
    il: 2019,
    janr: "triller",
    reyting: 8.1,
    muddet: "2s 2dəq",
    rejissor: "Todd Phillips",
    tesvir:
      "Gotham şəhərində yaşayan tənha Arthur Fleck cəmiyyətin təzyiqləri altında getdikcə daha qaranlıq bir həyata sürüklənir.",
    image:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
    trailer:
      "https://www.youtube.com/watch?v=zAGVQLHvwOY"
  },

  {
    id: 16,
    ad: "Pulp Fiction",
    il: 1994,
    janr: "triller",
    reyting: 8.9,
    muddet: "2s 34dəq",
    rejissor: "Quentin Tarantino",
    tesvir:
      "Los-Ancelesdə müxtəlif cinayətkarların və adi insanların hekayələri gözlənilməz şəkildə bir-birinə bağlanır.",
    image:
      "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/suaEOtk1N1sgg2MTM7oZd2cfVp3.jpg",
    trailer:
      "https://www.youtube.com/watch?v=s7EdQ4FqbhY"
  },

  {
    id: 17,
    ad: "Toy Story",
    il: 1995,
    janr: "komediya",
    reyting: 8.3,
    muddet: "1s 21dəq",
    rejissor: "John Lasseter",
    tesvir:
      "Oyuncaqlar sahibinin otaqda olmadığı zamanlarda canlanır və yeni oyuncaq gəldikdə macəra başlayır.",
    image:
      "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/9FBwqcd9IRruED6I3f7L9hQ7K2d.jpg",
    trailer:
      "https://www.youtube.com/watch?v=v-PjgYDrg70"
  },

  {
    id: 18,
    ad: "Spider-Man: Across the Spider-Verse",
    il: 2023,
    janr: "fantastika",
    reyting: 8.6,
    muddet: "2s 20dəq",
    rejissor: "Joaquim Dos Santos",
    tesvir:
      "Miles Morales çoxsaylı kainatların hörümçək qəhrəmanları ilə qarşılaşaraq yeni və təhlükəli macəraya başlayır.",
    image:
      "https://image.tmdb.org/t/p/w500/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/4HodYYKEIsGOdinkGi2Ucz6X9i0.jpg",
    trailer:
      "https://www.youtube.com/watch?v=shW9i6k8cB0"
  },

  {
    id: 19,
    ad: "Whiplash",
    il: 2014,
    janr: "drama",
    reyting: 8.5,
    muddet: "1s 47dəq",
    rejissor: "Damien Chazelle",
    tesvir:
      "Gənc musiqiçi dünyanın ən yaxşı nağaraçılarından biri olmaq istəyir, lakin sərt müəllimi ilə qarşılaşır.",
    image:
      "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeNOVIE.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/fRGxZuo7jJUWQsVg9ZSaAI8dG5x.jpg",
    trailer:
      "https://www.youtube.com/watch?v=7d_jQycdQGo"
  },

  {
    id: 20,
    ad: "The Hangover",
    il: 2009,
    janr: "komediya",
    reyting: 7.7,
    muddet: "1s 40dəq",
    rejissor: "Todd Phillips",
    tesvir:
      "Dostlar Las Veqasda keçirdikləri gecədən sonra nə baş verdiyini xatırlamağa və itkin dostlarını tapmağa çalışırlar.",
    image:
      "https://image.tmdb.org/t/p/w500/A0BypK1G3L3F5vX8JmK1z4zYp0T.jpg",
    backdrop:
      "https://image.tmdb.org/t/p/original/1A4Z6jH2mQz2cQ3xX5rL7yB8V9N.jpg",
    trailer:
      "https://www.youtube.com/results?search_query=The+Hangover+official+trailer"
  }
];

export default filmler;
