class Cat extends Aminal{
    constructor(name, weight, speed) {
        // gọi đến constructor của lớp cha
        super('cat', name, weight, speed);
    }

    fasterThan(animal){
        return this.speed > animal.speed;
    }
    biggerThan(animal){
        return this.weight > animal.weight;
    }
    eat(animal){
        if (animal.live){
            document.write(`${this.name} eats ${animal.name}.<br>`);
            this.weight += animal.weight;
        } else {
            document.write(`${this.name} doesn't eat ${animal.name} because ${animal.name} is death.<br>`);
        }

    }
    catch(animal){
        if (!this.biggerThan(animal)){
            document.write(`${this.name} catchs ${animal.name} fails: ${animal.name} is too big for ${this.name}.<br>`);
            return;
        }

        if (!this.fasterThan(animal)){
            document.write(`${this.name} catchs ${animal.name} fails: ${animal.name} is too fast for ${this.name}.<br>`);
            return;
        }

        document.write(`${this.name} catchs ${animal.name} success.<br>`);
        if (animal.breed === 'mouse'){
            this.eat(animal);
            animal.setDeath();
        }

    }
}