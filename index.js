const searchBox = document.querySelector('.search-box');
const searchIcon = document.querySelector('#search-icon');

searchIcon.onclick = () => {
  searchBox.classList.toggle('active');
};

// Prevent the document click event from triggering the search box toggle
searchIcon.addEventListener('click', (event) => {
  event.stopPropagation();
});

// Hide search box on document click outside searchBox
document.addEventListener('click', (event) => {
  if (!searchBox.contains(event.target) && searchBox.classList.contains('active')) {
    searchBox.classList.remove('active');
  }
});


