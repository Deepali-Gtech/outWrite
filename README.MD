# OUTWrite
A site to find your muse.

## Concept
This website is for writers looking to flex their muscles and get a little inspiration. 

Designed with collaboration in mind, OUTWrite is a site for writers looking to create collaborative stories. Through a prompt and comment system, multiple users can create a cohesive (or as cohesive as the internet can make it) narrative. 

## User Story

>AS A writer looking to collaborate  
>I WANT a site that helps me write a story with others  
>SO THAT I can gain more experience writing  

___
## Process
For our group Julian worked on the frontend, Alyssa and Kimo worked on the backend, and Deepali was integral for both frontend and backend development. We had Slack stand-ups every day. We also hosted Zoom work sessions to work collaboratively with each other, bounce ideas off each other, and make sure we were all on the same page. This made it easier to debug and confront problems together. 



### Technologies Used

-[shuffle](https://www.npmjs.com/package/shuffle)

-[Goodreads API](https://www.goodreads.com/api)

-[Random Prompt API](https://rapidapi.com/martin.svoboda/api/quotes15)

-[Bootstrap](https://getbootstrap.com/)

### Challenges
From the start we knew our idea to create nested responses was going to be a challenge and we were right. 

The most difficult part was trying to determine the best way to try to write the logic. Should we use handlebars? A .js file? There were a lot of options available. We actually were able to get the comments working for brief and beautiful moment, until our code broke for reasons we are still trying to figure out. As of now the comments are rendering, but they are not nesting. 


### Successes
We were able to get the comments rendering to the page and as of now they are at least rending in order according to their parent ids, which is a huge win. 

We also used a few API's to add some fun functionality to our site for our users. They can get random quotes and find inspiration from accomplished writers on our homepage. And we made sure to include every writers favorite tool, a Google search link. 
___

## Links

[Repo](https://github.com/Deepali-Gtech/outWrite)

[Deployed Site](https://strawberry-crisp-31516.herokuapp.com/)


___
## Directions for Future Development
1. Create nested comments
2. Add favorites
3. Edit button
4. Recommended Posts Page
5. Drafts folder
6. Add more dynamic elements to the home page