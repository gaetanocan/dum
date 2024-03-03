class DumDum {
    constructor(name) {
      this.name = name || 'DumDum';
      this.happiness = 50;
    }
  
    eatCandy() {
      this.happiness += 10;
      console.log(`${this.name} is enjoying some candy! Happiness +10`);
      this.displayHappiness();
    }
  
    takeNap() {
      this.happiness += 5;
      console.log(`${this.name} is taking a nap. Happiness +5`);
      this.displayHappiness();
    }
  
    displayHappiness() {
      console.log(`${this.name}'s happiness level: ${this.happiness}`);
    }
  }
  
  // Example usage
  const dum1 = new DumDum('Dumpling');
  const dum2 = new DumDum('Dumdumette');
  
  dum1.eatCandy();
  dum2.takeNap();
  