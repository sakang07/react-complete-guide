//Primitives
// number, string, boolean

import { SignatureKind } from 'typescript';

let age: number;

age = 12;

let userName: string;

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex type
// arrays, objects

let hobbies: string[]; // 문자열 배열
hobbies = ['Sports', 'Cooking'];

// person 객체의 타입 지정
let person: {
  name: string;
  age: number;
};

person = {
  name: 'Max',
  age: 32,
};

// 배열 내의 객체의 타입 지정
let people: {
  name: string;
  age: number;
}[];

// 타입 추론 Type inference

let course = 'React - The Complete Guide';

// course = 123; // error!
// 타입스크립트는 타입 추론 기능으로 최초의 값의 타입을 추론하여 재할당 시에 오류를 잡아준다.
// 그러므로 변수에 바로 값을 할당할 경우 타입 지정을 할 필요가 없이 타입 추론 기능을 사용할 수 있다.

// Union Type
// 여러 타입의 값을 한꺼번에 지정해줄 수 있다. 한 변수에 여러 값이 들어갈 수 있을 때 유용.

let course2: string | number = 'Typescript';
course2 = 123;

// 타입 별칭 Type Aliases
// type 키워드를 사용하여 커스텀 타입을 만들어 활용할 수 있다.

// Cat이라는 커스텀 타입을 정의(자바스크립트 값이 아니다)
type Cat = {
  name: string;
  age: number;
};

let cat: Cat;

cat = {
  name: 'chiko',
  age: 4,
};

// 배열 내부에 든 객체의 타입을 정의
let babyCat: Cat[];

// function types, parameters
// 함수에서 타입을 지정할 때는 입력값 뿐만 아니라 반환값의 타입도 고려해야 한다

// 이 경우에는 타입 추론이 일어나기 때문에 굳이 함수에 타입을 지정할 필요가 없다
// function add(a: number, b: number): number | string {
//   return a + b;
// }

function add(a: number, b: number): number | string {
  return a + b;
}

// void : 함수에 반환값이 없을 때를 가리키는 함수에만 있는 특별한 타입
function printOutput(value: any): void {
  console.log(value);
}

// 제네릭 Generics

// 기존 배열을 변경하지 않고 깊은 복사한 새 배열을 반환하는 함수
// function insertAtBeginning(array: any[], value: any) {
//   const newArray = [value, ...array];
//   return newArray;
// }

// const demoArray = [1, 2, 3];

// 이 경우 updateArray의 타입을 타입스크립트가 인식하지 못해서 any로 식별하게 된다
// 그렇다고 타입을 지정하면 숫자와 문자열 둘 모두에서 함수를 쓸 수 없다
// any로 타입지정을 하는 것은 타입스크립트에서 의미가 없다
// const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3]
// updatedArray[0].split(''); // error가 나지 않는다

// <> 구문의 사용
// 같은 타입의 값들을 지정해 줌으로서 해당하는 값을 타입스크립트가 인식하고 추론할 수 있게 한다
// <> 내부에 들어가는 이름은 통상 Type의 T를 사용한다
function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // [-1, 1, 2, 3] : number 타입
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd'); // ['a', 'b', 'c', 'd'] : string 타입

// updatedArray[0].split(''); // error
