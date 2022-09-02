class Employee {
    eId;
    eName;
    eSal;
    eEmail;
    eMobile;
    constructor(id, name, sal, email, mobile) {
        /*console.log("All the best")*/
        this.eId = id;
        this.eName = name;
        this.eSal = sal;
        this.eEmail = email;
        this.eMobile = mobile;
    }
    get_Details() {
        console.log("Got Details")
    }
}
let a = new Employee(1, "Rachel", 45000, "rachel@gmail.com", 995999)
let b = new Employee(2, "Monica", 55000, "monica@gmail.com", 875621)
let c = new Employee(3, "Joey", 50000, "joeytribbiani@gmail.com", 659854)
console.log(a)
console.log(b)
console.log(c)

/*a.get_Details()
b.get_Details()
c.get_Details()*/