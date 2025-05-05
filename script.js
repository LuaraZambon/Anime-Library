const animeList = [
    {
      title: "Attack on Titan",
      genre: "Action",
      year: 2013,
      rating: 9.0,
      description: "Humans fight for survival against man-eating titans.",
      image: "images/attackontitan.jpg",
      link: "https://www.crunchyroll.com/it/series/GR751KNZY/attack-on-titan?utm_campaign=media_actions&utm_medium=deep_link&utm_source=google"
    },
    {
        title: "Demon Slayer",
        genre: "Action",
        year: 2019,
        rating: 8.7,
        description: "A young boy becomes a demon slayer after his family is slaughtered by demons.",
        image: "images/kimetsu.jpg",
        link: "https://www.crunchyroll.com/it/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba"
    },
    {
        title: "One Punch Man",
        genre: "Action",
        year: 2015,
        rating: 8.6,
        description: "A hero who can defeat anyone with a single punch looks for a real challenge.",
        image: "images/onepunchman.jpg",
        link: "https://www.crunchyroll.com/it/series/G63K98PZ6/one-punch-man"
    },
    {
      title: "From me to you",
      genre: "Romance",
      year: 2009,
      rating: 8.0,
      description: "A shy girl finds her voice through friendship and love.",
      image: "images/frommetoyou.jpg",
      link: "https://www.crunchyroll.com/it/series/GRDQVVNGY/kimi-ni-todoke---from-me-to-you"
    },
    {
        title: "Toradora!",
        genre: "Romance",
        year: 2008,
        rating: 8.2,
        description: "A high school romance between two students with strong personalities.",
        image: "images/toradora.jpg",
        link:"https://www.crunchyroll.com/it/series/G6P8PXJW6/toradora"
    },
    {
        title: "Ouran High School Host Club",
        genre: "Comedy",
        year: 2006,
        rating: 8.1,
        description: "A girl ends up in a club of handsome boys in a prestigious school after a mix-up.",
        image: "images/ouran.jpg",
        link: "https://www.crunchyroll.com/it/series/GRGGJWD2R/ouran-high-school-host-club?srsltid=AfmBOoqeZNJfX5rchU2qpC8uw02wmQn9fZAuAuUM5qs_w7Em8SlKwV0J"
    },
    {
        title: "Blue Exorcist",
        genre: "Action",
        year: 2011,
        rating: 7.6,
        description: "A boy discovers he is the son of Satan and decides to fight against his destiny.",
        image: "images/bluexorcist.jpg",
        link: "https://www.crunchyroll.com/it/series/G649PJ0JY/blue-exorcist"
    },
    {
        title: "Yu Yu Hakusho",
        genre: "Action",
        year: 1992,
        rating: 8.6,
        description: "A delinquent teen is given a second chance to protect the world of the living from evil spirits.",
        image: "images/yuyuhakusho.jpg",
        link: "https://www.crunchyroll.com/it/series/GR9PKENW6/yu-yu-hakusho?srsltid=AfmBOopHMmbnUBW5vzED3p27xC_JOHYcgKwpoGnmXVgowAa5AT-u43JX"
    },
    {
        title: "Dragon Ball Z",
        genre: "Action",
        year: 1989,
        rating: 8.7,
        description: "The adventures of Goku and his friends as they defend Earth from various powerful threats.",
        image: "images/dragonball.jpg",
        link: "https://www.crunchyroll.com/it/series/G9VHN9PPW/dragon-ball-z?srsltid=AfmBOorjda3f9e0kUfw3In2evrNGsepRstzalqWl5jqYjeaoC9GRazix"
    },
    {
      title: "Barakamon",
      genre: "Comedy",
      year: 2014,
      rating: 8.2,
      description: "A calligrapher finds inspiration on a remote island.",
      image: "images/barakamon.jpg",
      link: "https://www.crunchyroll.com/it/series/GYMGD89VY/barakamon"
    },
    {
        title: "One Piece",
        genre: "Action",
        year: 1999,
        rating: 8.8,
        description: "A group of pirates search for the legendary treasure known as One Piece",
        image: "images/onepiece.jpg",
        link: "https://www.crunchyroll.com/it/series/GRMG8ZQZR/one-piece"
    },
    {
        title: "Naruto",
        genre: "Action",
        year: 2002,
        rating: 8.3,
        description: "A young ninja strives to become the strongest and earn the respect of his village.",
        image: "images/naruto.jpg",
        link: "https://www.crunchyroll.com/it/series/GY9PJ5KWR/naruto"
    },
    {
        title: "Shounen Maid",
        genre: "Comedy",
        year: 2016,
        rating: 7.4,
        description: "A young boy takes up a job as a maid to support his family after his mother dies.",
        image: "images/shounemaid.jpg",
        link: "https://www.crunchyroll.com/it/series/GRW4E40KY/shonen-maid"
    },
    {
        title: "Haikyuu!!",
        genre: "Sports",
        year: 2014,
        rating: 8.6,
        description: "A volleyball team battles their way to the top with the help of a passionate new member.",
        image: "images/haikyuu.jpg",
        link: "https://www.crunchyroll.com/it/series/GY8VM8MWY/haikyu"
    },
    {
        title: "Solo Leveling",
        genre: "Action",
        year: 2021,
        rating: 8.8,
        description: "A weak hunter becomes one of the most powerful beings in a world full of dangers.",
        image: "images/sololeveling.jpg",
        link: "https://www.crunchyroll.com/it/series/GDKHZEJ0K/solo-leveling"
    },
    {
        title: "KonoSuba: God's Blessing on This Wonderful World!",
        genre: "Comedy",
        year: 2016,
        rating: 8.3,
        description: "A boy is reincarnated into a fantasy world, where he teams up with quirky companions.",
        image: "images/konosuba.jpg",
        link: "https://www.crunchyroll.com/it/series/GYE5K3GQR/konosuba--gods-blessing-on-this-wonderful-world?srsltid=AfmBOop8N76kPCBjEczampdSTENL6tZDIv4epL1cuWysFWi_W1is45Gx"
    },
    {
      title: "Kuroko's Basketball",
      genre: "Sports",
      year: 2012,
      rating: 8.1,
      description: "A mysterious player transforms a high school team.",
      image: "images/kuroko.jpg",
      link: "https://www.crunchyroll.com/it/series/G62P48X56/kurokos-basketball?srsltid=AfmBOopqlazIC0xv9iFe7L7Cgr3LF1_Vbnc-cbbw8X5squ5PUdutSCjr"
    },
    {
      title: "SK8 the Infinity",
      genre: "Sports",
      year: 2021,
      rating: 7.9,
      description: "Teen skateboarders compete in dangerous races.",
      image: "images/sk8.jpg",
      link: "https://www.crunchyroll.com/it/series/G5PHNM434/sk8-the-infinity"
    },
    {
      title: "Lovely Complex",
      genre: "Romance",
      year: 2007,
      rating: 8.1,
      description: "A girl and a boy with height complexes try to find love in an unlikely relationship.",
      image: "images/lovelycomplex.jpg",
      link: "https://www.crunchyroll.com/it/series/GR79XXJV6/lovely-complex?srsltid=AfmBOoqFuDmuPGkroDE6O1HLJaoN72REpGAOb5a7RB0a3LlGiQCAfFOL"
    },
    {
      title: "Run with the Wind",
      genre: "Sports",
      year: 2018,
      rating: 8.0,
      description: "A group of college students prepare for a marathon relay race, learning about each other's dreams.",
      image: "images/run.jpg",
      link: "https://www.crunchyroll.com/it/series/GR79XXJV6/lovely-complex?srsltid=AfmBOoqFuDmuPGkroDE6O1HLJaoN72REpGAOb5a7RB0a3LlGiQCAfFOL"
    },
    {
      title: "Iwatobi Swim Club",
      genre: "Sports",
      year: 2013,
      rating: 8.0,
      description: "A group of high school students form a swim club and compete against each other.",
      image: "images/free.jpg",
      link: "https://www.crunchyroll.com/it/series/GRDQV2VWY/free---iwatobi-swim-club"
    },
    {
      title: "Monthly Girls' Nozaki-kun",
      genre: "Romance",
      year: 2014,
      rating: 7.5,
      description: "A girl confesses love, but ends up his manga assistant.",
      image: "images/gekkan.jpg",
      link: "https://www.crunchyroll.com/it/series/GY8V1N38Y/monthly-girls-nozaki-kun?srsltid=AfmBOorRV-GeRdhN-AYJSUnHeDqoOK4A3x1zcchuHnuqEB758TrP0dM6"
    },
    {
      title: "The Disastrous Life of Saiki K.",
      genre: "Comedy",
      year: 2016,
      rating: 8.4,
      description: "A psychic boy just wants a normal high school life.",
      image: "images/saiki.jpg",
      link: "https://www.crunchyroll.com/it/series/GY8DVVD9Y/the-disastrous-life-of-saiki-k"
    }
  ];
  
  let currentGenre = "All";
  
  const animeContainer = document.getElementById("anime-container");
  
  function displayAnimes(animes) {
    animeContainer.innerHTML = "";
    animes.forEach(anime => {
      const card = document.createElement("div");
      card.classList.add("anime-card");
  
      const img = document.createElement("img");
      img.src = anime.image;
      img.alt = anime.title;
      img.className = "anime-image";
      card.appendChild(img);
  
      const title = document.createElement("h3");
      title.textContent = anime.title;
      card.appendChild(title);
  
      const genre = document.createElement("p");
      genre.innerHTML = `<strong>Genre:</strong> ${anime.genre}`;
      card.appendChild(genre);
  
      const year = document.createElement("p");
      year.innerHTML = `<strong>Year:</strong> ${anime.year}`;
      card.appendChild(year);
  
      const rating = document.createElement("p");
      rating.innerHTML = `<strong>Rating:</strong> ${anime.rating}`;
      card.appendChild(rating);
  
      const description = document.createElement("p");
      description.innerHTML = `<strong>Description:</strong> ${anime.description}`;
      card.appendChild(description);

      const link = document.createElement("a");
      link.href = anime.link;
      link.textContent = "Watch Now";
      link.target = "_blank"; 
      link.classList.add("watch-link");
  
      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(genre);
      card.appendChild(year);
      card.appendChild(rating);
      card.appendChild(description);
      card.appendChild(link); 
  
      animeContainer.appendChild(card);
    });

  }
  
  function sortByYear() {
    const sorted = [...animeList]
      .filter(a => currentGenre === "All" || a.genre === currentGenre)
      .sort((a, b) => a.year - b.year);
    displayAnimes(sorted);
  }
  
  function sortByRating() {
    const sorted = [...animeList]
      .filter(a => currentGenre === "All" || a.genre === currentGenre)
      .sort((a, b) => b.rating - a.rating);
    displayAnimes(sorted);
  }
  
  function showRandomAnime() {
    const filtered = animeList.filter(a => currentGenre === "All" || a.genre === currentGenre);
    const random = filtered[Math.floor(Math.random() * filtered.length)];
    displayAnimes([random]);
  }
  
  function filterByGenre(genre) {
    currentGenre = genre;
  
    document.querySelectorAll(".filters button").forEach(btn => {
      btn.classList.toggle("active", btn.textContent === genre || (genre === "All" && btn.textContent === "All"));
    });
  
    const filtered = genre === "All" ? animeList : animeList.filter(anime => anime.genre === genre);
    displayAnimes(filtered);
  }
  
  displayAnimes(animeList);
  