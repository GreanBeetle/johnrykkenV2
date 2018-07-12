
# johnrykken.com

### April 27, 2018

### _John Rykken_

_Drafts of this project are deployed at https://pure-cliffs-95105.herokuapp.com/_

This is my personal website. I am building it with Ruby, Rails, and Javascript, using Bulma for the CSS framework, and incorporating a variety of Ruby Gems for everything from authentication to admin functionality. Generally speaking, I'm aiming for a simple, dark-themed UI and a smooth, intuitive UX. Eventually, this site will have five different sections. They are:

1. ABOUT
  * A paragraph or two about me
  * A section listing my skills, programming and otherwise
  * A section listing hobbies
  * A list of books, films, etc. that I enjoy

2. CRUX
  * Perhaps my favorite part of this site, Crux will explain computer terminology in simple terms
  * I will write as if my readers are eighth graders who have used computers but otherwise know nothing about code  
  * A pSQL Database will be utilized for this. Each term will be an instance of  `class Term`.
  * `Term` will have the attributes `name`, `blurb` and `definition`
  * Users will have the option to sign up and sign in to Crux  
  * The Devise Gem will handle authentication
  * Authenticated users will have the ability to leave comments, which will be instances of `class Comment`
  * Each `Comment` will `belongs_to :term` and `belongs_to :user`
  * Each  `Term` will `have_many :comments`
  * My hope is that users leave comments asking for clarification or providing feedback
  * Crux will have a request form where users may request explanations of specific terms
  * This portion of the site will have a protected route, accessible by only Admin, where I will be able to create, read, update, and delete `Term`s.     

3. PORTFOLIO
  * Single page section with pictures of and links to my other coding projects

4. CODE!
  * My other favorite part of this site, Code! will have 6 'toy' programming problems
  * 3 of them will be written in Ruby
  * 3 of them will be written in Javascript
  * For example, there may be a Javascript 'Ping-Pong' problem with an explanation. I.e. "Please input a positive number. The Javascript is going to return an array of numbers from 1 to the number you input. All numbers divisible by 3 will be replaced with "ping". All numbers divisible by 5 will be replaced with "pong". So, if you give me the number 7, the program will return 1, 2, ping, 4, pong, ping, 7." Then the idea will be executed.
  * Each problem will have a link titled 'show code', which will invoke a modal (or simply hidden) window displaying the actual coding logic.
  * I'm going to use the Red Carpet gem to stylize the code in the modals    

5. WRITING
  * An introduction to my history as a writer
  * An overview of the Max Mayhem Services
  * A link to my novel, BLOODWOOD
  * The first 10 chapters of my unpublished novel, THE ODDCLOCK      

## Setup

Assuming you have Ruby, Rails, and pSQL installed, run the following in the command line.

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
