const projects = [
    {
        name: "Cyclistic Case Study",
        description: "Conducted the data analysis of a company named Cyclistic launched in 2016 assuming I'm a junior data analyst working in the marketing analyst team at the company.\nThe goal of this analysis is maximizing the number of annaul memberships, which can be mainly accoplished by attracting the casual riders to the annual membership.\nProcessed and analyized the trip data of the customers using tidyverse and lubricate libraries in R language.",
        img: "Cyclistic.PNG",
        hyperLink: "https://www.kaggle.com/code/ericjunericjo/case-study-1-cyclistic"
    },

    {
        name: "Cyclistic Case Study in Tableau",
        description: "Cyclistic Case Study dashboard created with Tableau.\nUsing multiple chart layouts, displayed the comparison between casual and membership by week and month.\nAverage duration of riding of the both types was also highlighted.",
        img: "Tableau_Cyclistic.PNG",
        hyperLink: "https://public.tableau.com/app/profile/hyeonjun.jo/viz/CaseStudy1Cyclistic_16584555926410/Dashboard1"
    },

    {
        name: "Bellabeat Case Study",
        description: "Bellabeat is a successful small company that produces smart service for fitness.\nFocused on one of Bellabeat's products and analyze smart data to gain insight into how consumers are using their smart devices.\nResearched another company, Fitbit's fitness tracker data and found specific patterns in minute-level output for physical activity, heart rate, and sleep monitoring\nMade recommendations to improve some functions of the company's products.",
        img: "Bellabeat.PNG",
        hyperLink: "https://www.kaggle.com/code/ericjunericjo/case-study2-bellabeat"
    },

    {
        name: "EV deliveries by company",
        description: "Researched the number of deliveries of EV(Electric Vehicle) company by quarter since I got interested in EV.\nReferred to each company's delivery report and created CSV file to record the data.\nDisplayed the data on the coding note using pandas and visualized it as graphs using matplotlib.pyplot.\nExpected Tesla would dominate the market in a year considering growth rate and gargantuan amount of delivery despite uncountable pessimistic opinions about the company.",
        img: "EV.PNG",
        hyperLink: "https://www.kaggle.com/code/ericjunericjo/ev-deliveries-by-company-tesla-ford-and-etc"
    }

]



//image
function createImage(category){
    let image = document.getElementById("image");
    let newImage = document.createElement("img");
    newImage.src = category.img;
    newImage.alt = category.img;
    image.appendChild(newImage);
}

//name
function createTitle(category){
    let title = document.getElementById("title");
    let newTitle = document.createElement("h3");
    newTitle.textContent = category.name;
    title.appendChild(newTitle);
}

//description
function createDescription(category){
    let description = document.getElementById("description");
    let newDesc = document.createElement("p");

    // Split the description by "\n" and create separate <span> elements for each line
    category.description.split("\n").forEach((line) => {
        let lineSpan = document.createElement("span");
        lineSpan.textContent = line;
        newDesc.appendChild(lineSpan);

        // Add a line break <br><br><br> after each line except the last one
        if (line !== category.description.split("\n").slice(-1)[0]) {
            newDesc.appendChild(document.createElement("br"));
            newDesc.appendChild(document.createElement("br"));
            newDesc.appendChild(document.createElement("br"));
        }
    });

    description.appendChild(newDesc);
}

//hyperlink
function createHyperLink(category){
    let hyperLink = document.getElementById("hyperLink");
    let detailButton = document.createElement("button");
    detailButton.textContent = "In detail";
    let newHyperLink = document.createElement("a");
    newHyperLink.href = category.hyperLink;
    newHyperLink.appendChild(detailButton);
    hyperLink.appendChild(newHyperLink);
}


function showPortfolio(category){
    //clear the previous content when clicking the button
    document.getElementById("image").innerHTML = "";
    document.getElementById("title").innerHTML = "";
    document.getElementById("description").innerHTML = "";
    document.getElementById("hyperLink").innerHTML = "";
    createImage(category);
    createTitle(category);
    createDescription(category);
    createHyperLink(category);
}

//buttons
let button = document.getElementById("menu-button");
for (let i = 0; i < projects.length; i++){
    let newButton = document.createElement("button");
    newButton.textContent = `${i + 1}`;
    newButton.id = `button ${i + 1}`;

    newButton.addEventListener("click", function(){
        showPortfolio(projects[i]);
    })
    button.appendChild(newButton);
}

//projects[0] as default
    createImage(projects[0]);
    createTitle(projects[0]);
    createDescription(projects[0]);
    createHyperLink(projects[0]);