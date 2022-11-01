/*class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }


    showProperties() {
        const { name, age } = this;
        console.log(`Kalhmera ${name} eisai ${age} xronwn`);
    }
}

var person = new Person("Thanasis", 28);

person.name = "Paparia";
console.log(person.name);

function Person2(name, age) {

    this.name = name;
    this.age = age;
    var self = this;


    function showProperties() {
        const { name, age } = self;
        console.log(`Kalhmera ${name} eisai ${age} xronwn`);
    }

    return {
        showProperties: showProperties,
        name: this.name,
        age: this.age
    }
}

var personLol = new Person2("Paparia New", 28);

var personLol2 = new Person2("Hello", 28);

//de xreiazetai to new??
personLol.showProperties();
personLol2.showProperties();

personLol.name = "ante geia re asevaste";
console.log(personLol.name);
console.log(personLol2.name);

function foo() {
    console.log(this.a);
}
var a = 2;
(function () {
    "use strict";
    foo(); // 2
})();

var test = 5;
function foo() {
    alert(this.a);
    console.log(a===this.a);
   
}

function doFoo(fn) {
    // `fn` is just another reference to `foo`
    
    fn(); // <-- call-site!
}
var obj = {
    a: 2,
    foo: foo
};
var a = "oops, global"; // `a` also property on global object

doFoo(obj.foo); // "oops, global"

*/





   
   function foo() {
    // return an arrow function
   var self = this;
    return (a) => {
    // `this` here is lexically inherited from `foo()`
    console.log( this.a );

    (a) => {
        // `this` here is lexically inherited from `foo()`
        console.log( self.a );
        }
    
     
    }
   }
   
   var obj1 = {
    a: 2
   };
   var obj2 = {
    a: 3
   };

   var test = 1;
   var bar = foo.call( obj1 );
   bar.call( obj2 ); // 2, not 3!
   




