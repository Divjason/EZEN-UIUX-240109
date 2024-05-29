import { Node, LinkedList } from "./LinkedList.mjs";

const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.next = node3;

console.log(node1.data);
console.log(node1.next.data);
console.log(node1.next.next.data);

let list = new LinkedList();

console.log("=== insertAt() 다섯 번 호출 ===");
list.insertAt(0, 0);
list.insertAt(1, 1);
list.insertAt(2, 2);
list.insertAt(3, 3);
list.insertAt(4, 4);
list.printAll();

console.log("=== clear() 호출 ===");
list.clear();
list.printAll();

console.log("=== insertLast() 세 번 호출 ===");
list.insertLast(0);
list.insertLast(1);
list.insertLast(2);
list.printAll();

console.log("=== deleteAt() 호출 ===");
list.deleteAt(0);
list.printAll();
list.deleteAt(1);
list.printAll();

console.log("=== deleteLast() 호출 ===");
list.insertLast(5);
list.deleteLast();
list.deleteLast();
list.printAll();

console.log("=== getNodeAt() 호출 ===");
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
list.insertLast(5);

let secondNode = list.getNodeAt(2);
console.log(secondNode);
