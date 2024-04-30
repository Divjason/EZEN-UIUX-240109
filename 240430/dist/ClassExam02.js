class Character {
    name;
    moveSpeed;
    extra;
    constructor(name, moveSpeed, extra) {
        this.name = name;
        this.moveSpeed = moveSpeed;
        this.extra = extra;
    }
    move() {
        console.log(`${this.moveSpeed} 속도로 이동!`);
    }
}
const characterA = new Character("짱구", 50, "test");
characterA.move();
export {};
//# sourceMappingURL=ClassExam02.js.map