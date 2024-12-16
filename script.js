let filterSelector = document.querySelector("div.filter-selectors");
let selectors = document.querySelectorAll("div.filter-selectors span");



filterSelector.addEventListener("click", (e) => {

    let filterValue = e.target.id;

    if (e.target.nodeName != "SPAN") {
        return;
    }
    
    
    selectors.forEach(element => {
        element.setAttribute("style", "font-weight: normal");
    });
    
    e.target.setAttribute("style", "font-weight: bold;");
    
    let content = document.querySelectorAll("div.content");
    

    content.forEach(element => {

        
        if (element.classList.contains(filterValue) || filterValue == "all") {
            element.setAttribute("style", "display: block");
        }
        else {
            element.setAttribute("style", "display: none;");
        }

    });
});
