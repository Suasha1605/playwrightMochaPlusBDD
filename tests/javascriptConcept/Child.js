import Parent from './Parent.js';
 class Child extends Parent {

constructor(name, age,location){

    super(name,age); // Invoke parent class contructor

    this.location=location;

}


getPersonalInfo(){
    
    super.getPersonalInfo();
    console.log(`Location: ${this.location}`)
}

}

export default Child;

