class ElectricalApp {
	constructor(name){
		this.name = name;
		this.included = false;
	}
	inclusion(i){
		if (i == 'on') {
		alert("прибор включен");
		this.included = true;
	}else if (i == 'off'){
		alert("прибор выключен");
		this.included = false;
	}
	}
}

class Lamp extends ElectricalApp {
	constructor(name, brend, power){
		super(name);
		this.brend = brend;
		this.power = power;
		this.included = false;
	}
}

class Comp extends ElectricalApp {
	constructor(name, brend, power, type){
		super(name);
		this.brend = brend;
		this.power = power;
		this.included = true;
	}
}
const lamp1 = new Lamp('lamp', 'samsung', 120);
const comp1 = new Comp("computer", 'aser',220, "notebook");
lamp1.inclusion("on");
for (let key in lamp1){
	alert(key +" "+lamp1.key);
}

// comp1.inclusion("off");
// alert(comp1.included);