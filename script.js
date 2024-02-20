$(document).ready(function () {
  $("#telefone").mask("(00) 0000-0000");
  $("#cpf").mask("000.000.000-00", { reverse: true });
  $("#cep").mask("00000-000");

  $("#registration-form").submit(function (event) {
    event.preventDefault();

    var nomeCompleto = $("#nome-completo").val();
    var email = $("#email").val();
    var telefone = $("#telefone").val();
    var cpf = $("#cpf").val();
    var endereco = $("#endereco").val();
    var cep = $("#cep").val();

    console.log("Nome Completo:", nomeCompleto);
    console.log("E-mail:", email);
    console.log("Telefone:", telefone);
    console.log("CPF:", cpf);
    console.log("Endereço:", endereco);
    console.log("CEP:", cep);
  });
});
