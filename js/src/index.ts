// parameter properties

{
    class User{
        // initialization to class properties  inside the  constructor parameters 
        public constructor(public name : string , public age : number){
            console.log(this.name); //property of class
            console.log(name); // argument of object
            this.name=name;
            if(name=="malak"){
                console.log("ok");
            }else{
                console.log("no");
            }

        }
    }

    let u1 : User = new User("malak",19);
    console.log(u1.name);
    console.log(u1.age);
    let u2 : User = new User("ahmed",19);
    console.log(u2.name);
    console.log(u2.age);
}

// Encapsulation : hiding the internal details of class

{
    class Student{
        private name : string="";
        private age : number =NaN;

        public setValue(value : string | number){
            if(typeof(value) == "string"){
                this.name=value;
            }else if(typeof(value) == "number"){

                if(value <=0){
                    console.log("error 1");
                }else if(value< 18 && value > 0){
                    console.log("error2");
                }else{
                    this.age=value;
                }
            } 
        }

        public getValue( value : string): string | number{
            if(value =="name"){
                console.log("in class",this.name);
                return this.name;
            }else{
                console.log("in class",this.age);
                return this.age;
            }
        }
    }

    let s1 : Student = new Student();
    s1.setValue("malak");
    s1.setValue(19);

    console.log(`in object : ${s1.getValue("name")}`);
    console.log(`in object : ${s1.getValue("age")}`);

    let s2 : Student = new Student();
    s2.setValue("manar");
    s2.setValue(-5);

    s2.getValue("name");
    s2.getValue("age");
    
    let s3 : Student = new Student();
    s3.setValue("nada");
    s3.setValue(6);

    s3.getValue("name");
    s3.getValue("age");

}

// getter and setter are special keywords in typescript

{
    class Element{
        public x=""; // typescript is strongly and loosely datatype
        public constructor( private name : string){
            this.name =name;
            console.log(this.name);
        }
        public set setName( name : string){
            this.name =name;
        }
        public get getName() : string{
            return  this.name;
        }
    }

    let ele : Element= new Element("malak");
    console.log("before",ele.getName);
    ele.setName="ahmed";
    console.log("after",ele.getName);
}

// Static

{
    //static method and property 

    {
        class  Circuit{
            static PI :number=3.14;
            public constructor (public radios : number){
                this.radios=radios;
            }
            public circuitArea() : number{
                return  Circuit.PI*this.radios*this.radios;
            }
            static circuit(r : number): number{
                return 2 *Circuit.PI *this.PI* r;
                // this in static method refer to class
                // this.radios  : static method can't be read a non static property in class
            }
        }

        let r1 : Circuit = new Circuit(10);
        console.log(r1.circuitArea());
        console.log(Circuit.circuit(10).toFixed(2));
    }

    //static factory method

    {
        class U{
            private constructor(private name : string,private age : number ,private role : string){}

            static adminRole(name : string,age : number) : U{
                if(name =="mohamed"){
                    console.log("welcome Bis");
                    return new U(name,age,"admin")
                }else if(name =="ahmed"){
                    console.log("welcome Manger");
                    return new U(name,age,"admin")
                }else{
                    console.log("welcome to new admin");
                    return new U(name,age,"admin")
                }
            }
            static clientRole(name : string,age : number) : U | void{
                 if(age > 18){
                    return new U(name,age,"client")
                }else{
                    console.log(" too young");
                }
                 
            }
            public getData() : string {
                return `Name : ${this.name} , Age : ${this.age} , Role : ${ this.role}`;
            }
        }

        let u1 : U =U.adminRole("mohamed",30);
        console.log(u1.getData());

        let u2 : U =U.adminRole("ahmed",25);
        console.log(u2.getData());

        let u3 : U =U.adminRole("malak",19);
        console.log(u3.getData());

        let u4 : U | void = U.clientRole("manar",25);
        console.log(u4?.getData());

        let u5 : U | void = U.clientRole("nada",12);
        console.log(u5?.getData());
    }
}

// Inheritance

{
    class Human{
        public name : string =""
        public age  : number =NaN;

        public constructor( name : string ,age : number){
            console.log(name,age);
        }
    
    }
    class Person extends Human{
        public constructor(public name : string , public age : number){
            super("ahmed",20);
            console.log(name ,age);
        }
        
    }
    class Child extends Person{
        name ="malak";
        public constructor(){
            super( "",NaN)
        }
    }

    let object1 : Person = new Person("manar",25);
    console.log(object1);
    let object2 : Child = new Child();
    console.log(object2);
}

// Generic 

{
    function fun<T>(value : T): string {
        return `Hello ${value}`;
    }

    console.log( fun<number>(10));
    console.log( fun<string>("malak"));
}