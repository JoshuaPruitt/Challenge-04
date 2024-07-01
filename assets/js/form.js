// TODO: Create a variable that selects the form element
const formEl = document.getElementsByTagName('form')
const error = document.getElementById('error')
const usernameId = document.getElementById('username')
const titleId = document.getElementById('title')
const bodyId = document.getElementById('bodyContent')
const submitId = document.getElementById('submit')

// set the url to blank. Define the storage
let redirectURL = '';
let infoStorage;

// initilize at page startup. Keeps infostorage from being overwritten to be blank
if (infoStorage == null){
  infoStorage = [];

} else {
  console.log("working!")
  infoStorage = JSON.parse(localStorage.getItem('pageInformation'));
  console.log(infoStorage);
}

function formSubmission(){
  let tempPageStorage = {username: usernameId.value, title: titleId.value, body: bodyId.value}
  infoStorage.push(tempPageStorage)

  // sends the collected information to local storage
  localStorage.setItem('pageInformation', JSON.stringify(infoStorage));
}

const redirectPage = function (url) {
  redirectURL = url;
  location.assign(url);
};

// TODO: Add an event listener to the form on submit. Call the function to handle the form submission.
submitId.addEventListener('click', function (event) {
  event.preventDefault();

  if (usernameId.value == null || titleId.value == null || bodyId.value == null){
    error.textContent = 'Error! Username, title, or body is missing! Please add then submit';
    error.append;

  } else {
    //push info to local storage
    formSubmission()

    //redirect page
    redirectPage('blog.html')
  }
});