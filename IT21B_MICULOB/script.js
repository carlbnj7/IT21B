class Flower {
    constructor(name, color, bloomSeason, isFragrant) {
      this.name = name;
      this.color = color;
      this.bloomSeason = bloomSeason;
      this.isFragrant = isFragrant;
    }
  
    bloom() {
      return `The ${this.name} blooms in ${this.bloomSeason}.`;
    }
  
    fragrance() {
      if (this.isFragrant) {
        return `The ${this.name} is fragrant.`;
      } else {
        return `The ${this.name} is not fragrant.`;
      }
    }
  
    colorDisplay() {
      return `The ${this.name} has a beautiful ${this.color} color.`;
    }
  }
  
  const myFlower = new Flower('Tulip', 'pink', 'Spring', false);

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('output').innerHTML = `
      ${myFlower.bloom()}<br>
      ${myFlower.fragrance()}<br>
      ${myFlower.colorDisplay()}
    `;
  });
  