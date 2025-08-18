// Fetch JSON and render albums
fetch("albums.json")
  .then(response => response.json())
  .then(data => {
    // Render listened albums
    const listenedDiv = document.querySelector("#listened .content");
    data.listened.forEach(album => {
      const div = document.createElement("div");
      div.className = "album";
      div.innerHTML = `<h3>${album.title} – ${album.artist}</h3><p>${album.description}</p>`;
      listenedDiv.appendChild(div);
    });
    // Render albums to listen
    const toListenDiv = document.querySelector("#to-listen .content");
    data.to_listen.forEach(album => {
      const div = document.createElement("div");
      div.className = "album";
      div.innerHTML = `<h3>${album.title} – ${album.artist}</h3><p>${album.description}</p>`;
      toListenDiv.appendChild(div);
    });
    // Render favorites
    const favList = document.querySelector("#favorites .content");
    data.favorites.forEach(fav => {
      const li = document.createElement("li");
      li.textContent = fav;
      favList.appendChild(li);
    });
  })
  .catch(error => console.error("Error loading albums.json:", error));