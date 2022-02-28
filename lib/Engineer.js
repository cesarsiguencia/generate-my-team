function Engineer(engineeranswers){
    this.name = engineeranswers.name;
    this.type = "Engineer";
    this.id = engineeranswers.id;
    this.email = engineeranswers.email;
    this.github = engineeranswers.github;
}

Engineer.prototype.getRole = function(){
    return   `
        <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
          <h3 class="portfolio-item-title text-light">${this.name}</h3>
            <h5 class="portfolio-languages">
            Type: ${this.type}
             </h5>
            <h5 class="portfolio-languages">
            ID: ${this.id}
            </h5>

        <p></p>
          <p>Email:</p> <a class="email-color" href="mailto:${this.email}">${this.email}</a>
          <p></p>
          <p>Github Username:</p> <a class="email-color" href="https://github.com/${this.github}"> ${this.github}</a>
        </div>
      `
}


module.exports = Engineer