const darkLightToggle = document.getElementById('toggle')

let dark = false;
// TODO: Create logic to toggle the light/dark mode styles for the page and circle. The mode should be saved to local storage.
function LDToggle(){
    //toggles the page to put it into dark mode
    var element = document.body;
    element.classList.toggle('dark');

    if (dark == false){
        dark = true;
    } else {
        dark = false;
    }
};

// TODO: Create functions to read and write from local storage
function toggleStorage(){
    
    // check if there is storage. If there is then change the value of dark to equal true
    if (JSON.parse(localStorage.getItem('dark')) !== null){
        dark = true;

    // if there is not check if the value has been changed. If it has then store the value
    } else {

        if (dark == true){
            localStorage.setItem('toggle', JSON.stringify(dark));
    
        } 
    } 
};

darkLightToggle.addEventListener('click', function(event){
    toggleStorage();
    LDToggle();

});