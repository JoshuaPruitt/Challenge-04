// TODO: Create a variable that selects the main element
const mainEl = document.getElementsByTagName('main')
const pageBody = document.getElementById('body')

let infoStorage;
// TODO: Create a function that builds an element and appends it to the DOM

function pageBuild (storage){
    for (let i=0; i < storage.length; i++){
        const article = document.createElement('article')
        pageBody.appendChild(article);

        const titleEl = document.createElement('h2')
        titleEl.textContent = storage[i].title;
        article.appendChild(titleEl);

        const usernameEl = document.createElement('h3')
        usernameEl.textContent = storage[i].username;
        article.appendChild(usernameEl);

        const bodyEl = document.createElement('p')
        bodyEl.textContent = storage[i].body;
        article.appendChild(bodyEl);

        article;
        pageBody.appendChild(article);

        // document.getElementById('body').innerHTML = `
        // <article>
        // <h2>${storage[i].title}</h2>
        // <h3>${storage[i].username}</h3>
        // <p>${storage[i].body}</p>
        // </article>`;
        // console.log("I should work")
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