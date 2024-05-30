function contact (firstName, lastName, phonenumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phonenumber = phonenumber;
}

contact.prototype.fullName = function(){
    return this.firstName + ' ' + this.lastName;
}

let testcontact = new contact ('Maggot', 'Robbie', 712890381);
console.log(testcontact.fullName());