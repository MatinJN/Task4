var Matin = {
    age: 25,
    salary: 200,
    job: 'developer'
        
}

var Umbulnise ={
    age: 20,
    salary: 150,
    job: 'dizayner'
}

var info ={
    fullinfo: function(){
        return this.age + "  is " + this.job + "  maas" +  this.salary
    }
}

console.log(info.fullinfo.call(Matin));
console.log(info.fullinfo.call(Umbulnise));

// ENCAPSULATION

class Player {

    setPlayer(name,lastname,position){
        this.name = name;
        this.lastname = lastname;
        this.position = position;
    }

        getName(){
            return this.name;
        }

        getlastName(){
            return this.lastname;
        }

        getPositon(){
            return this.position;
        }

    
}

var player1 = new Player();

player1.setPlayer('Robert','Lewandovski','Forvet')
console.log(player1.getName());
console.log(player1.getlastName());
console.log(player1.getPositon());