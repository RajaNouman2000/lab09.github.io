async function fetchNews() {
  const url =
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=ea403db9f526455aba7beda8873e98c6";

  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
  }
}

document.addEventListener("DOMContentLoaded", async () => {
  const data = await fetchNews();
  console.log(data);

  const newsContainer = document.querySelector("#news-container");

  data.articles.forEach((article) => {
    const articleContainer = document.createElement("div");
    articleContainer.classList.add("w3-quarter");

    const image = document.createElement("img");
    image.src = article.urlToImage;
    image.style.width = "100%";
    image.style.height = "200px";
    image.style.objectFit = "cover";

    const title = document.createElement("h3");
    title.textContent = article.title;

    const description = document.createElement("p");
    description.textContent = article.description || "";

    articleContainer.appendChild(image);
    articleContainer.appendChild(title);
    articleContainer.appendChild(description);

    newsContainer.appendChild(articleContainer);
  });
});
