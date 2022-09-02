/*using set() and get() functions */

class Employee {
    eid;
    ename;
    esal;
    setEid(id) {
        this.eid = id;
    }
    getEid() {
        return this.eid
    }
    setEname(name) {
        this.ename = name
    }
    getEname() {
        return this.ename
    }
    setEsal(sal) {
        this.esal = sal;
    }
    getEsal() {
        return this.esal
    }
}

let e1 = new Employee()
e1.setEid(10)
e1.setEname("ABC")
e1.setEsal(50000)
console.log(e1)
console.log(e1.getEid())
console.log(e1.getEname())
console.log(e1.getEsal())

let e2 = new Employee()
e2.setEid(11)
e2.setEname("DEF")
e2.setEsal(40000)
console.log(e2)
console.log(e2.getEid())
console.log(e2.getEname())
console.log(e2.getEsal())
