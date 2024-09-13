class Shoe {
    constructor(brand, model, size) {
      this.brand = brand;
      this.model = model;
      this.size = size;
    }
  
    displayInfo() {
      return `Brand: ${this.brand}, Model: ${this.model}, Size: ${this.size}`;
    }
  
    checkAvailability(stock) {
      return stock.some(
        (shoe) => shoe.model === this.model && shoe.size === this.size
      )
        ? 'Available'
        : 'Out of Stock';
    }
  }
  
  let shoe1 = new Shoe('Puma', 'Speedcat OG', 45);
  let shoe2 = new Shoe('Adidas', 'Spezial', 40);
  
  console.log(shoe1.displayInfo());
  console.log(shoe2.displayInfo());
  
  let stock = [
    new Shoe('Adidas', 'Spezial', 40),
  ];
  
  console.log(shoe1.checkAvailability(stock));
  console.log(shoe2.checkAvailability(stock));  