class Employee {
    name;
    age;
    position;
    // 필드
    // protected name: string; // 자동으로 public
    // public age: number; // 자동으로 public
    // public position: string; // 자동으로 public
    // 생성자 함수
    constructor(name, age, position) {
        this.name = name;
        this.age = age;
        this.position = position;
        // this.name = name;
        // this.age = age;
        // this.position = position;
    }
    // 메서드
    work() {
        console.log("열심히 일함");
    }
}
const employeeA = new Employee("짱구", 22, "대리");
employeeA.work();
// employeeA.name = "피구왕통키";
employeeA.age = 26;
employeeA.position = "과장";
console.log(employeeA);
// 상속 = extends : 부모요소로부터 값을 받을 수 있다는 전제를 설정하는 것이지, 반드시 상속받은 값을 구현해야할 의무x
// 실행 = implements : 부모로부터 받은 값은 반드시 구현해야하는 의무성!!!
class ExecutiveOfficer extends Employee {
    // 필드값은 변함없이 그대로 상속
    // super() 사용x, 메서드만 추가!!!
    func() {
        console.log(`${this.name}`);
        console.log(`${this.age}`);
    }
}
export {};
// TS 접근제어자
// public : 모든 범위에서 접근할 수 있는 제어자 설정 (*class를 생성 기본 세팅된 default 제어자)
// private : 클래스 내부 범위에서만 접근할 수 있는 제어자 설정
// protected : 클래스 내부 + 상속받은 파생 클래스에서만 접근할 수 있는 제어자 설정
//# sourceMappingURL=ClassExam01.js.map