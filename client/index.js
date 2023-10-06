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
      category: `${category}`,
      content: `${textArea}`,
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

async function getPosts() {
  //fetch posts

  let tempArr = [];

  htmlString = ``;
  for (let i = 0; i < tempArr.length; i++) {
    htmlString += `
    <div id="post-1" class="entry d-flex flex-column align-items-center">
        <p>${grabContent}</p>
        <div class="d-flex justify-content-end">
            <p>${grabDate}</p>
            <p>${grabCategory}</p>
        </div>
    </div>`;
  }
  feedDiv.innerHTML = htmlString;
}
