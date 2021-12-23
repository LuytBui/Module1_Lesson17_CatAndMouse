class Aminal {
    constructor(breed, name, weight, speed) {
        this._breed = breed;
        this._weight = weight;
        this._name = name;
        this._speed = speed;
        this._live = true;
    }
    _breed;
    _weight;
    _name;
    _speed;
    _live;


    speak(msg) {
        document.write(this._name + ': ' + msg + '<br>');
    }

    setDeath(){
        this._live = false;
        this._speed = 0;
    }

    get breed() {
        return this._breed;
    }

    set breed(value) {
        this._breed = value;
    }

    get live() {
        return this._live;
    }

    set live(value) {
        this._live = value;
    }

    get speed() {
        return this._speed;
    }

    set speed(value) {
        this._speed = value;
    }

    get weight() {
        return this._weight;
    }

    set weight(value) {
        this._weight = value;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        this._name = value;
    }
}