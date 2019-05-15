// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
let article_wrapper = document.querySelector(".articles");

class Article {
  constructor(attributes) {
    this.header = attributes.header;
    this.date = attributes.date;
    this.paragraph = attributes.paragraph;
    this.allParagraph = attributes.allParagraph;
    let h2 = document.createElement("h2");
    this.div = document.createElement("div");
    let p = document.createElement("p");
    let span = document.createElement("span");
    span.textContent = "Expand";
    h2.textContent = this.header;
    p.textContent = this.date;
    this.div.className += "article";
    p.className += "date";
    span.className += "expandButton";
    this.div.appendChild(h2);
    this.div.appendChild(p);
    this.div.appendChild(span);
    
    span.addEventListener("click", () => this.expandArticle());
    article_wrapper.appendChild(this.div);
    // this.addAllParagraph = this.addAllParagraph.bind(this);
    this.addAllParagraph(this.allParagraph);
    // assign this.domElement to the passed in domElement
    // this.domElement = domElement;
    // create a reference to the ".expandButton" class. 
    // this.expandButton = this.domElement.querySelector('.expandButton');
    // Using your expandButton reference, update the text on your expandButton to say "expand"
    // this.expandButton.textContent = "expand";
    // Set a click handler on the expandButton reference, calling the expandArticle method.
    // this.expandButton.addEventListener("click", () => this.expandArticle());
    // console.log(this);
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    // this.domElement.classList.toggle("article-open");
    this.div.classList.toggle("article-open");
    // console.log(this.domElement);
  }

  addAllParagraph(allParagraph){
    allParagraph.forEach(function(pa){
      let tempP = document.createElement("p");
      tempP.textContent = pa;
      this.div.appendChild(tempP);
      // console.log(this);
    }.bind(this));
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  

- With your selection in place, now chain .forEach() on to the articles variable to 
iterate over the articles NodeList and create a new instance of Article by passing in each 
article as a parameter to the Article class.

*/

let articles = document.querySelectorAll(".article");

// articles.forEach( article => new Article(article));
new Article({
  header: "Header 1",
  date: "The Date",
  paragraph: "lorem lorem lorem",
  allParagraph: ["aslkdjalskdj kqwelqjwekq", "test2", "test3"]
})

new Article({
  header: "Header 1",
  date: "The Date",
  paragraph: "lorem lorem lorem",
  allParagraph: ["test1", "test2", "test3"]
})

new Article({
  header: "Header 1",
  date: "The Date",
  paragraph: "lorem lorem lorem",
  allParagraph: ["test1", "test2", "test3"]
})

new Article({
  header: "Header 1",
  date: "The Date",
  paragraph: "lorem lorem lorem",
  allParagraph: ["test1", "test2", "test3"]
})