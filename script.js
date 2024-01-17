// Complete the js code
function Car(make, model) {
    this.make = make;
    this.model = model;
}

Car.prototype.getMakeModel = function() {
    return this.make + ' ' + this.model;
};

function SportsCar(make, model, topSpeed) {
    // Inherit from Car prototype
    Car.call(this, make, model);
    this.topSpeed = topSpeed;
}

// Inherit the Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Set the constructor property correctly
SportsCar.prototype.constructor = SportsCar;

SportsCar.prototype.getTopSpeed = function() {
    return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
