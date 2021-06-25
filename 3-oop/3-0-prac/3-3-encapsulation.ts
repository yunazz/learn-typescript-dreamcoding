{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    static BEANS_PER_SHOT: number = 7; //class level
    coffeeBeans: number = 0; // instance (object) level

    constructor(coffeeBeans: number) {
      this.coffeeBeans = coffeeBeans;
    }

    static makeMachine(coffeeBeans) {
      return new CoffeeMaker(coffeeBeans);
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_PER_SHOT) {
        throw new Error("Not enough coffee beans!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }
  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);

  const maker3 = CoffeeMaker.makeMachine(32);
}

{
  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("Error!");
      }
      this.internalAge = num;
    }
    constructor(private firstName: string, private lastName: string) {}
  }
}
