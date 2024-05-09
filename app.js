
  let apiKey = `205dea6a77bf459f97fcfb197caa6bfb`;
  let apiurl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=`;
  let apiurl1 = `https://newsdata.io/api/1/news?apikey=pub_43821c805463989a78ca34ab63a294e337544&q=cryptocurrency`;
// Make a request for a user with a given ID
axios.get(apiurl1)
  .then(function (response) {
    // handle success
    console.log(response);


    
      const newsContainer = document.getElementById('newsContainer');
      response.data.results.forEach((item) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
          <img src="${item.country.image_url}" alt="${item.title}">
          <div class="card-content">
            <h2>${item.title}</h2>
            <p>${item.description}</p>
          </div>
        `;
        newsContainer.appendChild(card);
      });

   
  })

  .catch(function (error) {
    // handle error
    console.log(error);
  })
  