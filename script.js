const latestMovies = [
    {
      title: "Dune: Part Two",
      poster: "https://m.media-amazon.com/images/M/MV5BZTI0NjM2ZDktNDc2Zi00YmEyLThhYmUtMDk3ZGMxODFlZmY5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
      description: "Paul Atreides unites with Chani and the Fremen to take revenge."
    },
    {
      title: "Oppenheimer",
      poster: "https://m.media-amazon.com/images/I/71VE3iTYNLL._AC_UF1000,1000_QL80_.jpg",
      description: "A look at J. Robert Oppenheimer and the Manhattan Project."
    }
  ];
  
  const upcomingMovies = [
    {
      title: "Deadpool 3",
      poster: "https://m.media-amazon.com/images/M/MV5BMmQ1ZmY3MTYtZTU0Mi00Y2FkLWI2NzAtZThjY2NlYTVjMTEzXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX1000_.jpg",
      description: "Deadpool teams up with Wolverine in an epic multiverse story."
    },
    {
      title: "Joker: Folie à Deux",
      poster: "https://m.media-amazon.com/images/M/MV5BMzZjZjEyODgtZmY4YS00YmMyLTg2ZjEtYzMxYjVkMDFiYjJjXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_FMjpg_UX1000_.jpg",
      description: "A musical psychological thriller continuing the Joker's tale."
    }
  ];
  
  const latestContainer = document.getElementById("latest-movies");
  const upcomingContainer = document.getElementById("upcoming-movies");
  const searchInput = document.getElementById("search");
  
  function createMovieCard(movie) {
    const div = document.createElement("div");
    div.classList.add("movie");
    div.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title}" />
      <h3>${movie.title}</h3>
      <p>${movie.description}</p>
    `;
    return div;
  }
  
  function displayMovies() {
    latestContainer.innerHTML = "";
    upcomingContainer.innerHTML = "";
  
    const searchValue = searchInput.value.toLowerCase();
  
    latestMovies
      .filter(movie => movie.title.toLowerCase().includes(searchValue))
      .forEach(movie => latestContainer.appendChild(createMovieCard(movie)));
  
    upcomingMovies
      .filter(movie => movie.title.toLowerCase().includes(searchValue))
      .forEach(movie => upcomingContainer.appendChild(createMovieCard(movie)));
  }
  
  searchInput.addEventListener("input", displayMovies);
  
  // Initial render
  displayMovies();

  