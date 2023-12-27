const projectData = require('./modules/projectSets');
const express = require('express');
const app = express();

const HTTP_PORT = process.env.PORT || 8080;

app.use(express.static("public"));
app.use(express.json());
app.set('view engine', 'ejs');

app.get("/", (req, res)=>{
    res.render("home");
});

app.get("/about", (req, res)=>{
    res.render("about");
});

app.get("/portfolio", async(req, res) =>{
    try{
        const allData = await projectData.getAllSets();
        res.render("portfolio", {sets: allData});
    } catch(err){
        res.status(404).send(err);
    }
});

app.get("/projects", async(req, res) =>{
    try{
        const allData = await projectData.getAllSets();
        const theme = req.query.theme;
    
        if(theme){
            const filteredSets = await projectData.getSetsByTheme(theme);
            res.render("projects", {sets: filteredSets, language: theme});
        } else{
            res.render("projects", {sets: allData, language: "All projects"});
        }
    } catch(err){
        res.status(404).send(err);
    }
});

app.get("/project/:id", async(req, res)=>{
    try{
        const id = req.params.id;
        const data = await projectData.getSetByNum(id);
        if(data){
            res.render("project", {set: data});
        } else{
            res.status(404).send(err);
        }
    } catch(err){
        res.status(404).send(err);
    }
});

projectData.initialize().then(()=>{
    app.listen(HTTP_PORT, () =>{
        console.log(`server listeing on ${HTTP_PORT}`);
    })
}).catch(err=>{
    console.log(`Unable to start the server ${err}`);
});

