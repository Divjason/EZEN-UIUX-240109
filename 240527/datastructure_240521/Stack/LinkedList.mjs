class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    // 가장 첫번째 연결리스트 노드 (*초기화)
    this.head = null;
    // 연결리스트안에 연결되어있는 노드 총 개수 (*초기화)
    this.count = 0;
  }

  // 현재까지 생성된 연결리스트 모두 출력
  printAll() {
    let currentNode = this.head;
    let text = "[";

    while (currentNode !== null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode !== null) {
        text += ", ";
      }
    }

    text += "]";
    console.log(text);
  }

  // 모든 연결리스트 데이터 제거 기능
  clear() {
    this.head = null;
    this.count = 0;
  }

  // 원하는 위치 = 인덱스에 데이터를 삽입하도록 추상자료형 함수
  insertAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error("연결리스트의 범위를 넘어갔습니다.");
    }

    let newNode = new Node(data);

    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.count++;
  }

  // 연결리스트에 있는 노드 아이템의 인덱스값을 삭제하는 기능
  deleteAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("제거할 수 없는 인덱스 입니다.");
    }

    let currentNode = this.head;

    if (index === 0) {
      let deleteNode = this.head;
      this.head = this.head.next;
      this.count--;
      return deleteNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }

      let deleteNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      this.count--;
      return deleteNode;
    }
  }

  // 연결리스트 안에 있는 인덱스 값을 읽어오는 기능
  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("존재하지 않는 인덱스입니다.");
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  // 연결리스트 마지막 인덱스에 값을 추가하는 기능
  insertLast(data) {
    this.insertAt(this.count, data);
  }

  // 연결리스트 마지막 인덱스에 값을 제거하는 기능
  deleteLast() {
    return this.deleteAt(this.count - 1);
  }
}

export { Node, LinkedList };
