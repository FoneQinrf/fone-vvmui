function Parent(){
  this.names = ['fone1','fone2'];
}

function Child(){
  Parent.call(this);
}

const child1 = new Child();
child1.names.push('fone3');
console.log(child1.names)      //['fone1','fone2','fone3']

const child2 = new Child();
console.log(child2.names)  //['fone1','fone2']