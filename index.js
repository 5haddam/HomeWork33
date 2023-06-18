class Human {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
  }
}

class Apartament {
  residents = [];

  addResident(resident) {
    resident instanceof Human ? this.residents.push(resident) : null;
    return this;
  }
}

class House {
  constructor(maxNumberOfApartaments) {
    this.maxNumberOfApartaments = maxNumberOfApartaments;
  }
  arrayOfApartaments = [];

  addApartament(apartament) {
    if (this.arrayOfApartaments.length < this.maxNumberOfApartaments) {
      apartament instanceof Apartament ? this.arrayOfApartaments.push(apartament) : null;
    }
    return this;
  }
}

const firstHuman = new Human('Alisa', 'Woman');
const secondHuman = new Human('Vova', 'Man');
const thirdHuman = new Human('Misha', 'Man');

const firstApartamets = new Apartament();
const secondApartamets = new Apartament();

firstApartamets.addResident(firstHuman).addResident(secondHuman);
secondApartamets.addResident(thirdHuman);

const house = new House(5);

house.addApartament(firstApartamets).addApartament(secondApartamets);

console.log(house);