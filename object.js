/* eslint-disable indent */
const customer = {
  firstName: "Hita",
  lastName: "Tkachenko",
  gmail: "tkachenkogita@gmail.com",
  numberPhone: 380987625618,
  adress: {
    city: "Ivano-Frankivsk",
    street: "Halitska",
    hose: "145b",
    flat: 10,
  },
  changeNumberPhone: function (newNumberPhone) {
    this.numberPhone = newNumberPhone;
  },
};
const checkAdress = customer.adress;
console.log(checkAdress);

customer.changeNumberPhone(380980470472);
console.log(customer);

customer.isMale = (true - "male", false - "female");
delete customer.adress;

const customer2 = Object.assign({}, customer);
console.log(customer2);
console.log(customer2 === customer);

const customer3 = { ...customer };
console.log(customer3);
console.log(customer3 === customer);

const cat = {
  name: "Murka",
  color: "black",
  isMale: false,
  isafaurnitureDemage: true,
};

for (let key in cat) {
  console.log(key);
}

function book(nameAuthor, nameOfBook, publishingYear, price) {
  this.name = nameAuthor;
  this.nameBook = nameOfBook;
  this.year = publishingYear;
  (this.house = {
    city: "Down Town",
    nameOfThisCity: "Trash",
  }),
    (this.price = price);
  this.changePrice = function () {
    let newPrice;
    this.price === newPrice("234$");
  };
  this.ageOfBook = function (theAgeOfTheBook) {
    let ourDateOfYears = 2023;
    theAgeOfTheBook = ourDateOfYears - this.publishingYear;
    console.log(theAgeOfTheBook);
  };
}
const book1 = new book("Alise", "Alise in Wanderland", 1987, "Solid", "127$");
console.log(book1);
