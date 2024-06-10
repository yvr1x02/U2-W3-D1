console.log("ciao");

//---------Esercizio 1----------

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

//---------Esercizio 2----------

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  hasSameOwner(otherPet) {
    return this.ownerName === otherPet.ownerName;
  }

  petInfo() {
    return "Pet Name:" + " " + this.petName + " " + "Owner Name:" + " " + this.ownerName + " " + "Species:" + " " + this.species + " " + "Breed:" + " " + this.breed;
  }
}

const pets = [];

function addToPetList(pet) {
  const petList = document.getElementById("petList");
  const listItem = document.createElement("li");
  listItem.textContent = pet.petInfo();
  petList.appendChild(listItem);
}

function ownerComparison(newPet) {
  pets.forEach((pet) => {
    if (newPet.hasSameOwner(pet)) {
      return true;
    } else {
      return false;
    }
  });
}

document.getElementById("petForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);
  pets.push(newPet);
  addToPetList(newPet);
  -document.getElementById("petForm").reset();
});
