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
const menuNavigation = document.getElementById("menuNavigation");
const menuDiv = document.getElementById("menuDiv");
const designMenu = document.getElementById("designMenu");
const synchronizationMenu = document.getElementById("synchronizationMenu");
const assistanceMenu = document.getElementById("assistanceMenu");
const efficiencyMenu = document.getElementById("efficiencyMenu");
const techInfoMenu = document.getElementById("techInfoMenu");

comfort.onclick = function () {
    comfortDesc.style.opacity = "1";
    editionDescription.style.transform = "translateX(0%)";
    comfort.classList.add("selectedEdition");
    limitedTSI.classList.remove("selectedEdition");
    limitedTDI.classList.remove("selectedEdition");
    limitedTDIDesc.style.opacity = "0";
    limitedTSIDesc.style.opacity = "0";
}

limitedTDI.onclick = function () {
    limitedTDIDesc.style.opacity = "1";
    editionDescription.style.transform = "translateX(-100%)";
    limitedTDI.classList.add("selectedEdition");
    comfort.classList.remove("selectedEdition");
    limitedTSI.classList.remove("selectedEdition");
    comfortDesc.style.opacity = "0";
    limitedTSIDesc.style.opacity = "0";
}

limitedTSI.onclick = function () {
    limitedTSIDesc.style.opacity = "1";
    editionDescription.style.transform = "translateX(-200%)";
    limitedTSI.classList.add("selectedEdition");
    comfort.classList.remove("selectedEdition");
    limitedTDI.classList.remove("selectedEdition");
    comfortDesc.style.opacity = "0";
    limitedTDIDesc.style.opacity = "0";
}

menuDiv.onclick = function () {
    if (menuDiv.classList.length === 0) {
        menuNavigation.style.display = "block";
        menuDiv.classList.add("clicked");
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
        menuNavigation.style.display = "none";
        menuDiv.classList.remove("clicked");
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

window.onscroll = function () {
    if (menuDiv.classList.length === 0) {
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
}

function routine() {
    document.documentElement.scrollTop -= headerDiv.offsetHeight;
    menuNavigation.style.display = "none";
    menuDiv.classList.remove("clicked");
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

designMenu.onclick = function () {
    document.getElementById("design").scrollIntoView({behavior: "smooth", block: "start"});
    routine();
}

synchronizationMenu.onclick = function () {
    document.getElementById("synchronization").scrollIntoView({behavior: "smooth", block: "start"});
    routine();
}

assistanceMenu.onclick = function () {
    document.getElementById("assistance").scrollIntoView({behavior: "smooth", block: "start"});
    routine();
}

efficiencyMenu.onclick = function () {
    document.getElementById("efficiency").scrollIntoView({behavior: "smooth", block: "start"});
    routine();
}

techInfoMenu.onclick = function () {
    document.getElementById("techInfo").scrollIntoView({behavior: "smooth", block: "start"});
    routine();
}