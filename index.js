var alunos = [
  { nome: "João", nota: 7 },
  { nome: "Maria", nota: 5 },
  { nome: "Pedro", nota: 8 },
  { nome: "Ana", nota: 4 },
  { nome: "Nicolas", nota: 6 },
];

function alunosAprovados(arrayAlunos) {
  return arrayAlunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}

var alunosAprovadosArray = alunosAprovados(alunos);

console.log("Alunos aprovados:");
console.log(alunosAprovadosArray);
