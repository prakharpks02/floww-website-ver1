function CopyButton(content, element) {
    navigator.clipboard.writeText(content);
    element.children[0].innerHTML = "Copied";
}

function CleanCopyButton(element) {
    element.children[0].innerHTML = "Click to Copy";
}

function ToggleCardView(element) {
    element.parentElement.parentElement.classList.toggle("card-expanded-container");

    console.log(element.innerHTML);

    if(element.innerHTML==="View More") {
        element.innerHTML = "View Less";
    } else {
        element.innerHTML = "View More";
    }
}