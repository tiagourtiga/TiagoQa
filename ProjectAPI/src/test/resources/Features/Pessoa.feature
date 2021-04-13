# language: pt

@Todos
Funcionalidade: Validacao de Cadastro de Pessoas

  @TesteBuscarPeloDDDTelefone  
  Cenario: Deve ser possivel buscar pessoa pelo DDD e telefone
    Dado que acesso a api de pessoa
    Quando buscar pessoa por 83 999914829
    Entao validarei o codigoStatus 200 de retorno da api

  @TesteTelefoneInexistente
  Cenario: Deve retornar erro quando buscar pessoa por telefone inexistente
    Dado que acesso a api de pessoa
    Quando buscar pessoa por 11 985399999
    Entao validarei o statuscode 404 de retorno da api

  @TesteSalvarPessoa
  Cenario: Deve salvar nova pessoa no sistema
    Dado que acesso a api de pessoa
    Quando cadastrar NovoCadastro.json da nova pessoa
    Entao validarei o statuscode 201 de retorno da api

  @TestePessoaComMesmoCPF
  Cenario: Nao deve ser possivel salvar duas pessoas com o mesmo CPF
    Dado que acesso a api de pessoa
    Quando cadastrar CpfIgualTelefoneDiferente.json da nova pessoa
    Entao validarei a mensagem Já existe pessoa cadastrada com o CPF 09045411423 de retorno da api
    E validarei o statuscode 400 de retorno da api

  @TestePessoaComMesmoTelefone
  Cenario: Nao deve ser possivel salvar duas pessoas com o mesmo telefone
    Dado que acesso a api de pessoa
    Quando cadastrar TelefoneIgualCpfDiferente.json da nova pessoa
    Entao validarei a mensagem Já existe pessoa cadastrada com o Telefone (11)985388877 de retorno da api
    E validarei o statuscode 400 de retorno da api
