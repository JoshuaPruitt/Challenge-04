// TODO: Create a variable that selects the main element
const mainEl = document.getElementsByTagName('main')
const pageBody = document.getElementById('body')
const backButton = document.getElementById('back')

let redirectURL = '';
let infoStorage;

// sends user back to first page to add another blog
const redirectPage = function (url) {
    redirectURL = url;
    location.assign(url);
};

// builds the page by appending tags to the html
function pageBuild (storage){
    for (let i=0; i < storage.length; i++){
        const article = document.createElement('article')
        pageBody.appendChild(article);

        const titleEl = document.createElement('h2')
        titleEl.textContent = storage[i].title;
        article.appendChild(titleEl);

        const bodyEl = document.createElement('blockquote')
        bodyEl.textContent = storage[i].body;
        article.appendChild(bodyEl);

        const usernameEl = document.createElement('p')
        usernameEl.textContent = `Posted by : ${storage[i].username}`;
        article.appendChild(usernameEl);

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

// function for displaying a message when there are no blogs in storage
function noBlog (){
    const article = document.createElement('article')
    pageBody.appendChild(article);

    const noBlog = document.createElement('h4');
    noBlog.textContent = "Im Sorry, there are no blogs to display at this time.. No worries you can create one by hitting the 'Add Blog' button at the top right of the page!!";
    article.appendChild(noBlog);
};

// Reads the data from local storage and returns it
function pageStorage (){
    if (JSON.parse(localStorage.getItem('pageInformation')) !== null){
        infoStorage = JSON.parse(localStorage.getItem('pageInformation'))
        console.log(infoStorage)
    } else {
        noBlog()
    }
    return infoStorage
};

// runs createPage at page startup and adds blogs to page
function createPage(){
    pageStorage()

    pageBuild(infoStorage)
}

backButton.addEventListener('click', function (event) {
    // redirect to first page if button clicked
    redirectPage('index.html')
});

// createPage()

noBlog()