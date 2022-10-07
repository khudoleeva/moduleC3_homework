
function ElectricalApp(name){
	this.name = name;
	this.included = false;
}
ElectricalApp.prototype.inclusion = function(i){
	if (i == 'on') {
		console.log("прибор включен");
		this.included = true;
	}else if (i == 'off'){
		console.log("прибор выключен");
		this.included = false;
	}
}
function Lamp(name, brend, power){
	this.name = name;
	this.brend = brend;
	this.power = power;
	this.included = false;
}
Lamp.prototype = new ElectricalApp();
function Comp(name, brend, power, type){
	this.name = name;
	this.brend = brend;
	this.power = power;
	this.included = true;
	this.type = type;
}
Comp.prototype = new ElectricalApp();
const lamp1 = new Lamp('lamp', 'samsung', 120);
const comp1 = new Comp("computer", 'aser',220, "notebook");
lamp1.inclusion("on");
for (let key in lamp1){
	console.log(key + " " + lamp1[key]);
}

comp1.inclusion("off");
for (let key in comp1){
	console.log(key + " " + comp1[key]);
}
