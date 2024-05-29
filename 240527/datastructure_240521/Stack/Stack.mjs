import { LinkedList } from "./LinkedList.mjs";

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  // 1.stack 에서 데이터 삽입 기능 구현
  push(data) {
    this.list.insertAt(0, data);
  }

  // 2.stack 에서 데이터 제거 기능 구현
  pop() {
    try {
      return this.list.deleteAt(0);
    } catch (e) {
      return null;
    }
  }

  // 3.stack에서 데이터 참조 기능 구현
  peek() {
    return this.list.getNodeAt(0);
  }

  // 4.stack에 데이터가 비어있는지 여부 체크 기능 구현
  isEmpty() {
    return this.list.count === 0;
  }
}

export { Stack };
