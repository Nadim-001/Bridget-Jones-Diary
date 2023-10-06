const entryForm = document.querySelector("#create-post form");
const formBtn = document.querySelector("#create-post form button");

const oldestBtn = document.querySelector("#oldest");
const recentBtn = document.querySelector("#recent");
const searchBtn = document.querySelector("#search");

const feedDiv = document.querySelector("#feed");

entryForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e.target[0].value, e.target[1].value, e.target[2].value);
  //date input e.target[0].value
  //category input e.target[1].value
  //text area input e.target[2].value
});

async function createPost(date, category, textArea) {
  const settings = {
    method: "POST",
    body: JSON.stringify({
      date: `${date}`,
      name: `${category}`,
      description: `${textArea}`,
    }),
  };
  try {
    const fetchResponse = await fetch(`${apiAddress}`, settings);
    const data = await fetchResponse.json();
    return data;
  } catch (e) {
    return e;
  }
}

async function getPosts(route) {
  //route for oldest, mostrecent and search by date
  //fetch posts
  if (route == undefined) {
    route = "";
  }
  const response = await fetch(`http://localhost:3000/entries${route}`);
  const data = await response.json();
  console.log(data);

  htmlString = ``;
  for (let i = 0; i < data.length; i++) {
    htmlString += `
    <div id="post-${data[i].entries_id}" class="entry d-flex flex-column align-items-center">
        <p>${data[i].description}</p>
        <div class="d-flex justify-content-end">
            <p>${data[i].date}</p>
            <p>${data[i].name}</p>
        </div>
    </div>`;
  }
  feedDiv.innerHTML = htmlString;
}
getPosts();

async function destroy(id) {
  const settings = {
    method: "DELETE",
  };
  const fetchResponse = await fetch(`http://localhost:3000/${id}`, settings);
  const data = fetchResponse.json();

  getPosts();
}
