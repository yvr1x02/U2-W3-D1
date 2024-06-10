console.log("ciao");

console.log("ESERCIZIO 1");

class User {
  constructor(firstName, lastName, age, location) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.location = location;
  }

  compareAge(secondUser) {
    if (this.age > secondUser.age) {
      return this.firstName + " " + this.lastName + " " + " is older than " + secondUser.firstName + " " + secondUser.lastName + ".";
    } else if (this.age < secondUser.age) {
      return this.firstName + " " + this.lastName + " " + "is younger than " + secondUser.firstName + " " + secondUser.lastName + ".";
    } else {
      return this.firstName + " " + this.lastName + " " + "and " + secondUser.firstName + " " + secondUser.lastName + " " + "have the same age" + ".";
    }
  }
}

const user1 = new User("Yuri", "Impellizzeri", 21, "Augusta");
const user2 = new User("Dario", "Moccia", 33, "Livorno");

console.log(user1);
console.log(user2);

console.log(user1.compareAge(user2));
