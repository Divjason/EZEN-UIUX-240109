import { DoublyLinkedList } from "./DoublyLinkedList.mjs";

class HashData {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }
}

class HashTable {
  constructor() {
    this.arr = [];
    for (let i = 0; i < 10; i++) {
      this.arr[i] = new DoublyLinkedList();
    }
  }

  hashFunction(number) {
    return number % 10;
  }

  // 해시테이블 자료구조에서 데이터를 추가하는 추상자료형 함수
  set(key, value) {
    this.arr[this.hashFunction(key)].insertAt(0, new HashData(key, value));
  }

  // 해시테이블 자료구조에서 데이터를 찾아오는 추상자료형 함수
  get(key) {
    let currentNode = this.arr[this.hashFunction(key)].head;
    while (currentNode !== null) {
      if (currentNode.data.key === key) {
        return currentNode.data.value;
      }
      currentNode = currentNode.next;
    }
    return null;
  }

  // 해시테이블 자료구조에서 데이터를 제거하는 추상자료형 함수
  remove(key) {
    let list = this.arr[this.hashFunction(key)];
    let currentNode = list.head;
    let deletedIndex = 0;
    while (currentNode !== null) {
      if (currentNode.data.key === key) {
        return list.deleteAt(deletedIndex);
      }
      currentNode = currentNode.next;
      deletedIndex++;
    }
    return null;
  }
}

export { HashTable };
