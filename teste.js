let data = new Date()
console.log(data.toString('pt-br'));
console.log(data.toLocaleString('pt-br'));
console.log(data.toDateString('pt-br'));
console.log(data.toLocaleDateString('pt-br'));
console.log(data.toLocaleTimeString('pt-br'));
console.log(data.getHours());
console.log(data.getUTCHours());
console.log(data);

let nascimento = new Date('November 18, 2006 10:00:00 GMT-3:00')
console.log(nascimento.getUTCDay());