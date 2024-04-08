
class Fruit {
	constructor(name, emoji) {
		this.name = name;
		this.emoji = emoji;
	}
	display = () => {
		console.log(`${this.name}: ${this.emoji}`);
	};
}

const apple = new Fruit('apple', '사과');
const orange = new Fruit('oragne', '오렌지');
console.log(apple);
console.log(orange);
console.log(apple.name);
