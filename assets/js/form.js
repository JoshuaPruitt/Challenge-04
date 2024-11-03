// TODO: Create a variable that selects the form element
const formEl = document.getElementsByTagName("form");
const error = document.getElementById("error");
const usernameId = document.getElementById("username");
const titleId = document.getElementById("blog-title");
const bodyId = document.getElementById("bodyContent");
const submitId = document.getElementById("submit");
const blogRedirect = document.getElementById("back");

// set the url to blank. Define the storage
let redirectURL = "";
let infoStorage = [];

// initilize at page startup. Keeps infostorage from being overwritten to be blank
function initilize() {
  if (JSON.parse(localStorage.getItem("pageInformation")) !== null) {
    console.log("Information inside");
    infoStorage = JSON.parse(localStorage.getItem("pageInformation"));
  }

  return infoStorage;
}

function formSubmission() {
  let tempPageStorage = {
    username: usernameId.value,
    title: titleId.value,
    body: bodyId.value,
  };
  infoStorage.push(tempPageStorage);

  // sends the collected information to local storage
  localStorage.setItem("pageInformation", JSON.stringify(infoStorage));
}

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

blogRedirect.addEventListener("click", function () {
  // redirect to the blog page if button pressed
  redirectPage("./blog.html");
});

submitId.addEventListener("click", function (event) {
  event.preventDefault();

  // check is there is information inside of the boxes on click of the submission button
  if (
    usernameId.value == null ||
    titleId.value == null ||
    bodyId.value == null
  ) {
    error.textContent =
      "Error! Username, title, or body is missing! Please add then submit";
    error.append;

    // if theres info inside of all the boxes send that info to storage and switch pages
  } else {
    //push info to local storage
    formSubmission();

    //redirect page
    redirectPage("./blog.html");
  }
});

//initialize page. Prepare everything at page startup
initilize();
