fetch("albums.json")
  .then(response => response.json())
  .then(data => {

    // Render favorites
    const favList = document.querySelector("#favorites .content");
    data.listened
      .filter(album => parseFloat(album.grade) >= 4.5) // seuil à ajuster
      .forEach(album => {
        const li = document.createElement("li");
        li.className = "favorite";
        li.textContent = `${album.title} - ${album.artist} (${album.grade}/5)`;
        favList.appendChild(li);
    });

    // Render albums to listen
    const toListenDiv = document.querySelector("#to-listen .content");
    data.to_listen.forEach(album => {
      const div = document.createElement("div");
      div.className = "album";
      div.innerHTML = `
        <img class="cover" src="${album.cover_image}" alt="${album.title} Cover">
        <div class="info">
          <h3>${album.title} - ${album.artist}</h3>
          <p>${album.description}</p>
        </div>
      `;
      toListenDiv.appendChild(div);
    });

    // Render listened albums
    const listenedDiv = document.querySelector("#listened .content");
    data.listened.forEach(album => {
      const div = document.createElement("div");
      div.className = "album";
      div.innerHTML = `
        <img class="cover" src="${album.cover_image}" alt="${album.title} Cover">
        <div class="info">
          <h3>${album.title} - ${album.artist} - listened on ${album.date_listened} : ${album.grade}/5</h3>
          <p>${album.description}</p>
        </div>
      `;
      listenedDiv.appendChild(div);
    });

  })
  .catch(error => console.error("Error loading albums.json:", error));