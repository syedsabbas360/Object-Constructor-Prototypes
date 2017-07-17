//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (hungry, color, status) {
  this.name= this
  this.hungry= hungry
  this.color = color
  this.status= status
}

const sadie = new Dog(false, "black", "normal")
const moonshine = new Dog()
moonshine.hungry = true;

const atticus = new Dog()


// Instances of Dog
// Needed: sadie, moonshine, atticus

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (cool) {
  this.cool = cool
  this.feed = function(dog){
    dog.hungry = false
  }
  this.pet = function(dog){
    dog.status = "happy"
  };
}

const mason = new Human()
mason.cool= false
const julia = new Human()
julia.cool = true

// Instances of Human
// Needed: mason, julia
