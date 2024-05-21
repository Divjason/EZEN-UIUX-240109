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

    while (currentNode !== null) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
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
}

export { Node, LinkedList };
