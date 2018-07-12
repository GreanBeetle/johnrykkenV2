
# johnrykken.com

### April 27, 2018

### _John Rykken_

_7/12/18  Upcoming builds will be deployed to Firebase. Link soon to follow _

Built with Angular, Bulma, Firestore and Firebase, this is my personal website. I'm aiming for a smooth UX and dark-themed UI. The site has 5 sections: Home, Crux, Code!, Portfolio, Admin.   

1. HOME
  * Landing page with the following:
  * A short 'About Me' section
  * An brief overview of my skills, both technical and soft
  * An overview of CRUX, my simply-written tech blog
  * An overview of my history as a writer, including links to and synopses of my manuscripts and published novels
  * A quick explanation of and link to CODE!, the sub-section of this site that showcases my various programming skills. CODE! will  include things like Euler Problems, CRUD functionality, API calls, and perhaps an API call made with a Rails API-only app that I built personally  

2. CRUX
  * My tech blog, CRUX, will be written for noob coders and the curious (e.g. new code school students and tech dilettantes)
  * It will address concepts like the 'DOM', 'promises', 'asynchronicity', 'state', 'the stack', and so on.
  * I'll assume my readers know basically nothing about code
  * In each post, I'll try to lay the technical ground knowledge necessary for understanding the larger idea    
  * I'll aim to keep an eighth-grade reading level   
  * I'm going to use a model for each post. E.g. Title, subtitle, author, date, category, image, article content
  * Each `Article` will be an object in a Firestore NoSQL database
  * Pagination will be incorporated, enabling users to click through the articles   
  * Articles will be styled users an Angular WYSIWYG library
  * Authenticated users will be able to leave comments
  * Each article's comment section will live below the articles
  * Admin will have the option to delete vulgar, aggressive, or otherwise negative comments
  * I may build a form allowing users to request explanation of specific terms

3. CODE!
  * An introductory paragraph will explain the idea behind CODE!. The idea, basically, is to showcase my facility for technical problem solving  
  * This section is built for tech recruiters and other developers
  * Pagination will divide it into 3 discrete parts
  * Part (page) 1 will contain 3 logic and/or [Euler-like](https://projecteuler.net/archives) problems
  * The UI for these problems will look something like (1) Explanation of problem (2) User input fields and/or buttons required by the problem (3) The display of the solution (4) Beneath these, a grayed-out area with a 'show code' link that, when clicked, expands to show the Javascript logic that solved the problem
  * Part 2 will contain some simple forms allowing users to perform basic CRUD operations. This will likely take the shape of users listing their favorite writers or tech role models (e.g. Hemingway or Turing or whoever ) and adding multiple quotes for each role model. Ultimately the user will be able to create, read, update, and delete each `role model` (exact class name TBD) and each `quote` belonging to each `role model`
  * Part 3 will let the user provide query parameters and make an API call. The results will display on page. Which API I'll use is TBD.

4. PORTFOLIO
  * A simple page with screenshots of and links to my other coding projects

5. ADMIN  


## Setup

You need NodeJS 

Navigate to the desktop and run:

`$ git clone https://github.com/GreanBeetle/john-rykken`

Navigate to the root directory of john-rykken and run:

`$ rails db:create`
`$ rails db:migrate`
`$ rails db:test:prepare`
`$ rails db:seed`

Type `rails s` and navigate to "localhost:3000" in your browser.

## Specs as of April 27, 2018

* Build landing page with navbar
* In navbar, include links to HOME, ABOUT, CODE, WRITING, and Crux
* Build basic CRUX page
* If users are on the CRUX page, display sidebar with with SIGN UP, SIGN IN, and SIGN OUT options  
* Utilize Devise to implement CRUX authentication   

## Notes
* Parallax scrolling to be implemented throughout site
* Research 'sticky bars' and 'web navigation trends'

## Built With

* HTML
* CSS, Bulma
* Javascript
* Ruby
* Rails

## Author

**John Rykken**

## Contact

_john.rykken@gmail.com_

## License

Licensed under the MIT License.

  <!-- ## Acknowledgments -->

Copyright (c) 2018 **_John Rykken_**
