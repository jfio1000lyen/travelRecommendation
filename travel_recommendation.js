// script.js
const btnSearch = document.getElementById('btnSearch');
const conditionInput = document.getElementById('conditionInput');
const resultContainer = document.getElementById('result');

// Example data for search functionality
const data = {
	countries: {
    name: "Sydney, Australia",
    image: 'https://s1.1zoom.me/big0/461/Australia_Houses_Marinas_475461.jpg',
    description: 'A vibrant city known for its iconic landmarks like the Sydney Opera House and Sydney Harbour Bridge.',

    nameT: "Tokyo, Japan",
    imageT: 'https://wallpaperaccess.com/full/18535.jpg',
    descriptionT: 'A bustling metropolis blending tradition and modernity, famous for its cherry blossoms and rich culture.',	
  },
	temples: {
    name: "Angkor Wat, Cambodia",
    image: 'https://c8.alamy.com/comp/APCKCY/aerial-view-of-angkor-wat-temple-complex-near-siem-reap-cambodia-APCKCY.jpg',
    description: 'A UNESCO World Heritage site and the largest religious monument in the world.',

    nameT: "Taj Mahal, India",
    imageT: 'https://c8.alamy.com/comp/FXRP1H/taj-mahal-the-famous-temple-in-india-FXRP1H.jpg',
    descriptionT: 'An iconic symbol of love and a masterpiece of Mughal architecture.',	
  },
	beaches: {
    name: "Bora Bora, French Polynesia",
    image: 'https://rare-gallery.com/uploads/posts/4567823-bora-bora-resort-beach-tropical-french-polynesia-mountains-palm-trees-sea-summer-nature-landscape-clouds-shrubs.jpg',
    description: 'An island known for its stunning turquoise waters and luxurious overwater bungalows.',

    nameT: "Copacabana Beach, Brazil",
    imageT: 'https://bookers.s3.amazonaws.com/pages/copacabana.jpg',
    descriptionT: 'A famous beach in Rio de Janeiro, Brazil, with a vibrant atmosphere and scenic views.',	
  },
};

btnSearch.addEventListener('click', () => {
  const query = conditionInput.value.toLowerCase();
  const result = data[query];

  if (result) {
    resultContainer.innerHTML = `
      <img src="${result.image}" alt="${query}" style="max-width: 300px; 
	  align-item: right; margin-left:100px; margin-top:20px;" >
	  <p style="margin-left:100px; color: black; background-color: yellow">${result.name}</p>
      <p style="margin-left:100px;">${result.description}</p>
	  
	  <img src="${result.imageT}" alt="${query}" style="max-width: 300px; 
	  align-item: right; margin-left:100px; margin-top:20px;" >
	  <p style="margin-left:100px; color: black; background-color: yellow">${result.nameT}</p>
      <p style="margin-left:100px;">${result.descriptionT}</p>
    `;
  } else {
    resultContainer.innerHTML = '<p>No results found. Try searching for "countries", "beaches", or "temples".</p>';
  }
});
