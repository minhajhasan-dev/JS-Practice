class Person{
    constructor(firstName, lastName, salary){
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new Person('Sima', 'Islam', 25000);
console.log(heroPerson);
const friendlyPerson = new Person('Minhaj', 'Hasan', 25000);
console.log(friendlyPerson);