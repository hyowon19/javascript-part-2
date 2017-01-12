function Person (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.emails = [];
};

Person.prototype.addEmail = function (address, type) {
    this.emails.push(new Email(address, type));
}

function Email (address, type) {
    this.address = address;
    if(type.toLowerCase() === "work"){
        this.type = type;
    }
    else if(type.toLowerCase() === "home") {
        this.type = type;
    }
    else {
        this.type = "other";
    }
}

var Judy = new Person("Judy", "Lane");
Judy.addEmail("judy123@example.com", "work");

console.log(Judy);