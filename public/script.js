
//image
function createImage(project){
    let image = document.getElementById("image");
    let newImage = document.createElement("img");
    newImage.src = project.img;
    newImage.alt = project.img;
    image.appendChild(newImage);
}

//name
function createTitle(project){
    let title = document.getElementById("title");
    let newTitle = document.createElement("h3");
    newTitle.textContent = project.name;
    title.appendChild(newTitle);
}

//description
function createDescription(project){
    let description = document.getElementById("description");
    let newDesc = document.createElement("p");

    // Split the description by "\n" and create separate <span> elements for each line
    project.description.split("\n").forEach((line) => {
        let lineSpan = document.createElement("span");
        lineSpan.textContent = line;
        newDesc.appendChild(lineSpan);

        // Add a line break <br><br><br> after each line except the last one
        if (line !== project.description.split("\n").slice(-1)[0]) {
            newDesc.appendChild(document.createElement("br"));
            newDesc.appendChild(document.createElement("br"));
            newDesc.appendChild(document.createElement("br"));
        }
    });

    description.appendChild(newDesc);
}

//hyperlink
function createHyperLink(project){
    let hyperLink = document.getElementById("hyperLink");
    let detailButton = document.createElement("button");
    detailButton.textContent = "In detail";
    let newHyperLink = document.createElement("a");
    newHyperLink.href = project.hyperLink;
    newHyperLink.appendChild(detailButton);
    hyperLink.appendChild(newHyperLink);
}


function showPortfolio(project){
    //clear the previous content when clicking the button
    document.getElementById("image").innerHTML = "";
    document.getElementById("title").innerHTML = "";
    document.getElementById("description").innerHTML = "";
    document.getElementById("hyperLink").innerHTML = "";
    createImage(project);
    createTitle(project);
    createDescription(project);
    createHyperLink(project);
}

//buttons
/*
let button = document.getElementById("menu-button");
for (let i = 0; i < project.length; i++){
    let newButton = document.createElement("button");
    newButton.textContent = `${i + 1}`;
    newButton.id = `button ${i + 1}`;

    newButton.addEventListener("click", function(){
        showPortfolio(data[i]);
    })
    button.appendChild(newButton);
}
*/

//data[0] as default
//    createImage(data[0]);
 //   createTitle(data[0]);
  //  createDescription(data[0]);
  //  createHyperLink(data[0]);