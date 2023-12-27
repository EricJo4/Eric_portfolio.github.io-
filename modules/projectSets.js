const projectData = require('../data/projects');

let sets = [];

function initialize(){
    return new Promise((resolve, reject)=>{
        projectData.forEach(object=>{
            sets.push(object);
        })
        resolve();
    }).catch(err=>{
        reject(err.message);
    });
};

function getAllSets(){
    return new Promise((resolve, reject)=>{
        resolve(sets);
    });
};

function getSetByNum(id){
    return new Promise((resolve, reject)=>{
        const found_id = sets.find(element => element.id === id);
        if(found_id){
            resolve(found_id);
        } else{
            reject(`Unable to find the id ${id}`);
        }
    });
};

function getSetsByTheme(theme){
    return new Promise((resolve, reject) =>{
        const found_theme = sets.filter(element=> element.theme.toLowerCase().includes(theme.toLowerCase()));
        if(found_theme.length > 0){
            resolve(found_theme);
        } else{
            reject(`Unable to find theme ${theme}`);
        }
    });
    
};

module.exports = { initialize, getAllSets, getSetByNum, getSetsByTheme };


