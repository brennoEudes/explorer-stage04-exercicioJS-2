/*
Nesse desafio você irá criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma **função** que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é **7**, verifique **se** cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela.
*/

studentList = [
  {
    name: "Brenno",
    gradeOne: 8.4,
    gradeTwo: 9,
  },
  {
    name: "Brunna",
    gradeOne: 10,
    gradeTwo: 5.3,
  },
  {
    name: "Brunno",
    gradeOne: 7.1,
    gradeTwo: 5.4,
  },
];

function calculateAverage(gradeOne, gradeTwo) {
  return (gradeOne + gradeTwo) / 2;
}

function printResult(student) {
  let average = calculateAverage(student.gradeOne, student.gradeTwo);

  if (average >= 7) {
    return `Aprovado! O estudante ${student.name} tem a média ${average.toFixed(1)}.`;
  } else {
    return `Reprovado! O estudante ${student.name} tem a média ${average.toFixed(1)}.`;
  }
}

for (let student of studentList) {
  let finalResult = printResult(student);
  alert(finalResult);
}
