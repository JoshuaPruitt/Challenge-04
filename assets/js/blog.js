// TODO: Create a variable that selects the main element
const mainEl = document.getElementsByTagName('main')
const pageBody = document.getElementById('body')

const article = document.createElement('article')
const titleEl = document.createElement('h2')
const usernameEl = document.createElement('h3')
const bodyEl = document.createElement('p')

let infoStorage;
// TODO: Create a function that builds an element and appends it to the DOM

function pageBuild (storage){
    for (let i=0; i > storage.length; i++){
        pageBody.appendChild(article);

        titleEl.textContent = storage[i].title;
        article.appendChild(titleEl);

        usernameEl.textContent = storage[i].username;
        article.appendChild(usernameEl);

        bodyEl.textContent = storage[i].body;
        article.appendChild(bodyEl);

        pageBody.appendChild(article);
    }
};
// TODO: Create a function that handles the case where there are no blog posts to display

function noBlog (){

}
// TODO: Create a function that reads from local storage and returns the data

function pageStorage (){
    if (JSON.parse(localStorage.getItem('pageInformation')) !== null){
        infoStorage = JSON.parse(localStorage.getItem('pageInformation'))
        console.log(infoStorage)
    } else {
        noBlog()
    }
    return infoStorage
};
// TODO: Call the function to render the list of blog posts

function createPage(){
    pageStorage()
    pageBuild(infoStorage)
}

createPage()