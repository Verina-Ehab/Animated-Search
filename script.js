/*================= SEARCH BAR JS =================*/
const toggleSearch = (search, button) => {
  const searchBar = document.getElementById(search),
    searchButton = document.getElementById(button);

  searchButton.addEventListener("click", () => {
    // We add the show-search class, so that the search ba
    searchBar.classList.toggle("show-search");
  });
};
toggleSearch("search-bar", "search-button-id");
