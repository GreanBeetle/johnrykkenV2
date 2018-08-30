
[johnrykken.com](https://johnrykken.com)

### April 27, 2018

### _John Rykken_

Built with Angular, Bulma, Firestore and Firebase, this is my personal website. I'm aiming for a smooth UX and dark-themed UI. The site has 5 sections: Home, Crux, Code!, Portfolio, and Admin.   


#### 1. HOME
  * Landing page with the following:
  * A short 'About Me' section
  * An brief overview of my skills, both technical and soft
  * An overview of CRUX, my simply-written tech blog
  * An overview of my history as a writer, including links to and synopses of my manuscripts and published novels
  * A quick explanation of and link to CODE!, the sub-section of this site that showcases my various programming skills. CODE! will  include things like Euler Problems, CRUD functionality, and API calls  


#### 2. CRUX
  * My tech blog, CRUX, will be written for noob coders and the curious (e.g. new code school students and tech dilettantes)
  * It will address concepts like the 'DOM', 'promises', 'asynchronicity', 'state', 'the stack', and so on.
  * I'll assume my readers know basically nothing about code
  * Each article will try to lay the technical ground knowledge necessary for understanding the larger idea    
  * I'll aim to keep an eighth-grade reading level   
  * I'm going to use a model for each article. E.g. Title, subtitle, author, date, category, image, article content
  * Each `Article` will be an object in a Firestore NoSQL database
  * Pagination will be incorporated, enabling users to click through the articles
  * Additionally, a sidebar will list all articles    
  * Articles will be styled with a WYSIWYG library
  * Authenticated users will be able to leave comments
  * Each article's comment section will live below the articles
  * Admin will have the option to delete vulgar, aggressive, or otherwise negative comments
  * I may build a form allowing users to request explanation of specific terms


#### 3. CODE!
  * An introductory paragraph will explain the idea behind CODE!. The idea, basically, is to showcase my facility for technical problem solving  
  * This section is built for tech recruiters and other developers
  * Pagination will divide it into 3 discrete parts
  * Part (page) 1 will contain 3 logic and/or [Euler-like](https://projecteuler.net/archives) problems
  * The UI for these problems will look something like (1) Explanation of problem (2) User input fields and/or buttons required by the problem (3) The display of the solution (4) Beneath these, a grayed-out area with a 'show code' link that, when clicked, expands to show the Javascript logic that solved the problem
  * Part 2 will contain some simple forms allowing users to perform basic CRUD operations. This will likely take the shape of users listing their favorite writers or tech role models (e.g. Hemingway or Turing or whoever ) and adding multiple quotes for each role model. Ultimately the user will be able to create, read, update, and delete each `role model` (exact class name TBD) and each `quote` belonging to each `role model`
  * Part 3 will let the user provide query parameters and make an API call. The results will display on the page. Which API I'll use is TBD.


#### 4. PORTFOLIO
  * A simple page with screenshots of and links to my other coding projects


#### 5. ADMIN
  * This will be a protected page containing admin functionality
  * It will list all `article`s and provide a form for updating and deleting each
  * A significant portion of space will be dedicated to writing new `article`s (some input boxes and a large-ish text area)
  * All user comments will be listed. Admin will have the ability to delete comments.  
  * There will be a file dropzone for images, PDFs, or other files I may find useful on the site
  * Admin will be able to CRUD all files
  * Additional functionality will be added as necessary  


## DAILY SPECS 8.30.18
  * Generate edit article component.
  * Build edit-article functionality.
  * Write a list of what the feature article component ought to include.
  * Style the feature article component.
  * Add image to feature article.
  * Add `@media` queries to portfolio page
  * Ensure that project synopses and pictures resize appropriately for mobile, tablet, etc.

## Setup

Setup assumes you have a working knowledge of Github, npm, CLI, and have installed the [Angular-CLI](https://cli.angular.io/).

`$ git clone https://github.com/GreanBeetle/johnrykkenV2`

`$ cd john-rykken-V2`

`$ npm install`

`$ ng serve`

Open `http://localhost:4200`

## Built With

* HTML
* CSS, Bulma
* Angular
* Typescript
* Firebase
* Firebase Storage
* Firestore

## Author

**John Rykken**

## Contact

_john.rykken@gmail.com_

## License

Licensed under the MIT License.

  <!-- ## Acknowledgments -->

Copyright (c) 2018 **_John Rykken_**
