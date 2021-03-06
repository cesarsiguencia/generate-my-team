function Manager(manageranswers){
    this.name = manageranswers.name;
    this.type = "Manager";
    this.id = manageranswers.id;
    this.email = manageranswers.email;
    this.office = manageranswers.office;
}

Manager.prototype.getRole = function(){
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
          <p>Office:</p> ${this.office}
        </div>
      `
    
}

module.exports = Manager