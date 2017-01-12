function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = [];
    this.addEmail = function(Email, type) {
        
    }
};

function Email (address, type) {
    this.address = address;
    this.type = function(type) {
        var tempType = this.type;
        if(!(this.type.toLowerCase() === "work") && !(this.type.toLowerCase() === "home")) {
           tempType = "other"; 
        }
    }
}