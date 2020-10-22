const editionDescription = document.getElementById("editionDescriptions");
const comfort = document.getElementById("comfort");
const limitedTDI = document.getElementById("limitedTDI");
const limitedTSI = document.getElementById("limitedTSI");
const comfortDesc = document.getElementById("comfortDesc");
const limitedTDIDesc = document.getElementById("limitedTDIDesc");
const limitedTSIDesc = document.getElementById("limitedTSIDesc");
const leftLine = document.getElementById("leftLine");
const rightLine = document.getElementById("rightLine");
const svgImg = document.getElementById("svgImg");
const headerDiv = document.getElementById("headerDiv");
const nameDiv = document.getElementById("nameDiv");

comfort.onclick = function () {
    comfortDesc.style.opacity = "1";
    editionDescription.style.transform = "translateX(0%)";
    comfort.classList.add("selectedEdition");
    limitedTSI.classList.remove("selectedEdition");
    limitedTDI.classList.remove("selectedEdition");
    limitedTDIDesc.style.opacity = "0";
    limitedTSIDesc.style.opacity = "0";
    editionDescription.style.height = comfortDesc.offsetHeight.toString() + "px";
}

limitedTDI.onclick = function () {
    limitedTDIDesc.style.opacity = "1";
    editionDescription.style.transform = "translateX(-100%)";
    limitedTDI.classList.add("selectedEdition");
    comfort.classList.remove("selectedEdition");
    limitedTSI.classList.remove("selectedEdition");
    comfortDesc.style.opacity = "0";
    limitedTSIDesc.style.opacity = "0";
    editionDescription.style.height = limitedTDIDesc.offsetHeight.toString() + "px";
}

limitedTSI.onclick = function () {
    limitedTSIDesc.style.opacity = "1";
    editionDescription.style.transform = "translateX(-200%)";
    limitedTSI.classList.add("selectedEdition");
    comfort.classList.remove("selectedEdition");
    limitedTDI.classList.remove("selectedEdition");
    comfortDesc.style.opacity = "0";
    limitedTDIDesc.style.opacity = "0";
    editionDescription.style.height = limitedTSIDesc.offsetHeight.toString() + "px";
}

window.onscroll = function () {
    if (document.documentElement.scrollTop > document.getElementById("reviewTable").offsetTop
        - headerDiv.offsetHeight) {
        leftLine.style.backgroundColor = "#001e50";
        svgImg.style.fill = "#001e50";
        rightLine.style.backgroundColor = "#001e50";
        headerDiv.style.backgroundColor = "#fff";
        let selected = headerDiv.querySelectorAll(".menu");
        for (let elem of selected) {
            elem.style.backgroundColor = "#001e50";
        }
        nameDiv.style.color = "#001e50";
    } else {
        leftLine.style.backgroundColor = "#fff";
        svgImg.style.fill = "#fff";
        rightLine.style.backgroundColor = "#fff";
        headerDiv.style.backgroundColor = "";
        let selected = headerDiv.querySelectorAll(".menu");
        for (let elem of selected) {
            elem.style.backgroundColor = "#fff";
        }
        nameDiv.style.color = "#fff";
    }
}

window.addEventListener("load", function () {
    editionDescription.style.height = comfortDesc.offsetHeight.toString() + "px";
})