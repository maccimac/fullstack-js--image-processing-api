LINKS / REFERENCES:

  Project Specification - Image Processing API
    https://review.udacity.com/#!/rubrics/3005/view
  Prettier Config
    https://javascript.plainenglish.io/how-to-use-prettier-to-customize-your-code-formatting-b1a5424f2ed6
  Endpoint Sample
    localhost:3000/api/images/?filename=newfile&height=200&width=300
  Project Demo
    https://classroom.udacity.com/nanodegrees/nd0067/parts/9a82d642-1e18-4285-ae32-d9ffef5447bd/modules/c4f12626-4a59-4b37-b1c8-ceec1fc96e50/lessons/4d3b483d-bdab-495d-a93f-c08fc6c1a891/concepts/112c4a1d-47d0-4c19-8b05-5ee37ff0b2fd

INSTRUCTIONS

  Feel free to attempt to create this project based on the overview and rubric specifications. If you get stuck or prefer structured guidance -- here is a walkthrough to get you up and running!

  Initialize your project
    Add the dependencies that are required for this project including Express, TypeScript, Jest, Eslint, and Prettier. Complete your package.json file.
      - Where should your dependencies be placed?
      - What scripts should you create to fully take advantage of the dependencies you've added.
      - Are there other dependencies you would like to add or that you know you will need to improve your workflow?

    Set up your project structure.
      Create folders and files for what you anticipate you will need for the project.
        - How do you plan to keep your source code and build code separate?
        - Where will you keep your tests?
        - How do you plan to name your routes? Utilities?

  Configure your middleware.
    You have quite a few dependencies that all need to work together. Sometimes it's easiest to write some simple js functions to test that all of your dependencies are working together before you begin adding any sort of functionality.
      - Does your TypeScript compile?
      - Do your Eslint and Prettier scripts work?
      - Are you able to write and pass a basic unit test?

  Set up your server and create an API endpoint.
    Even though this application is fairly straightforward, you still want to set it up in a scalable way.
      - How can you set up your server and endpoint so that your project remains scalable?
        Only one endpoint is required. It's best to create this and test that it is working before you move on.


  Install Sharp and configure endpoint.
    Documentation for Sharp can be found here. It is required that you create a separate module for your processing functionality and import it into your route. It is only required that you add resizing, but you may add additional processing if you choose to extend your application. It is also only required that you work with jpg files, so keep that in mind if you choose to use your own images and they are other formats.

  Pay close attention to if you need to use asynchronous code or not.
    If you do, make sure you stay consistent throughout your application. There is limited information on using Sharp with TypeScript, but don't let that be a blocker. Think about what type, the Sharp constructor would return. Have a look at the complete documentation and the examples it provides.

  Write your tests.
    If you haven't already been writing unit tests, now would be the time to start. Think about what you should test? At a minimum, you should have at least one test for your endpoint and at least one test for your image processing, but there are many different tests you could create.

  Add caching.
    Add caching to your application so that repeated requests to your endpoint use pre-stored images rather than regenerating a new image each time.

  Test, Debug, and Refactor.
    Think of edge-cases for your project and how someone may access your project.
      - Should they get different error messages based on what's wrong?
          Make certain that your user isn't left in the dark when something goes wrong.  
      - Do all of your tests still pass?
      Does stopping and restarting your server cause any issues?
      Does your user get feedback when something goes wrong?
      Is your code easy to follow? Comments?
      Is your API production-ready?

  Build and Test.
    If everything else has gone well, you should be able to compile your typescript and start up your production server to test that everything still works as expected. If everything works, you're ready to submit! Congratulations!
