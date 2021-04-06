// 모던한 프로퍼티 표기법

// const user = {
//   title: 'Codeit',
//   brith: 2017,
//   job: '프로그래밍 강사',
// };

// const title = 'Codeit';
// const birth = 2017;
// const job = '프로그래밍 강사';

// const user = {
//   title,
//   birth,
//   job,
// };

// console.log(user);

// function getFullName() {
//   return `${this.firstName} ${this.lastName}`;
// }

// const user = {
//   firstName: 'Tess',
//   lastName: 'Jang',
//   getFullName: getFullName,
// };

// const admin = {
//   firstName: 'Alex',
//   lastName: 'Kim',
//   getFullName: getFullName,
// };

// console.log(user.getFullName());
// console.log(admin.getFullName());

const user = {
  ['Code' + 'it']: 'value',
};

console.log(user);

const propertyName = 'birth';
const getJob = () => 'job';

const codeit = {
  ['topic' + 'Name']: 'Modern JavaScript',
  [propertyName]: 2017,
  [getJob()]: '프로그래밍 강사',
};

console.log(codeit);
