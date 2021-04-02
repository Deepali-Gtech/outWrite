
// WE NEED THE LOGGED IN USERS ID 
// WE WANT TO GET ALL THE PROMPTS ASSOCIATED WITH THAT USER ID AND 
// DISPLAY THEM ON THE DASHBORAD.HANDLEBARS PAGE INSTEAD OF THE MOST RECENT STORIES PAGE
// ATTACH THIS AS AN EVENT LISTEN TO THE MY STORIES LINK

const { response } = require("express");
const { post } = require("../../controllers/homeRoutes");

const newFormHandler = async (event) => {
    event.preventDefault();
const prompt_id = document.querySelector("#prompt_id").value.trim();
const body = document.querySelector('#newcomment').value.trim();

if (prompt_id && body){
    const response = await fetch("/api/comments/", 
    {
    method:"post",
    body: JSON.stringify({prompt_id, body}), 
    headers:{
        "content-type":"application/JSON"
    }
    });
    if(response.ok){
        document.location.reload();
        
    }else {
        alert("IT DIDN'T WORK, OUR BAD"); 
    }
};



}
  document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);