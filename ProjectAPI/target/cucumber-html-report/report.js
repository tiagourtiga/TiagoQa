$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/Pessoas.feature");
formatter.feature({
  "name": "Validacao de Cadastro de Pessoas",
  "description": "",
  "keyword": "Funcionalidade",
  "tags": [
    {
      "name": "@Todos"
    }
  ]
});
formatter.scenario({
  "name": "Deve ser possivel procurar pessoa pelo DDD e telefone",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Todos"
    },
    {
      "name": "@TesteBuscarPessoaDDDTelefone"
    }
  ]
});
formatter.step({
  "name": "que acesso a api de pessoa",
  "keyword": "Dado "
});
formatter.match({
  "location": "PessoaSteps.acesseiAPI()"
});
formatter.result({
  "status": "passou"
});
formatter.step({
  "name": "buscar pessoa por 83 999914829",
  "keyword": "Quando "
});
formatter.match({
  "location": "PessoaSteps.cadastrarDadosNovaPessoa(Integer,Integer)"
});
formatter.result({
  "status": "passou"
});
formatter.step({
  "name": "validarei o codigo 200 de retorno da api",
  "keyword": "Entao "
});
formatter.match({
  "location": "PessoaSteps.codigoStatus(Integer)"
});
formatter.result({
  "status": "passou"
});
formatter.scenario({
  "name": "Deve retornar erro quando buscar pessoa por telefone inexistente",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Todos"
    },
    {
      "name": "@TesteTelefoneInexistente"
    }
  ]
});
formatter.step({
  "name": "que acesso a api de pessoa",
  "keyword": "Dado "
});
formatter.match({
  "location": "PessoaSteps.acesseiAPI()"
});
formatter.result({
  "status": "passou"
});
formatter.step({
  "name": "buscar pessoa por 11 985399999",
  "keyword": "Quando "
});
formatter.match({
  "location": "PessoaSteps.cadastrarDadosNovaPessoa(Integer,Integer)"
});
formatter.result({
  "status": "passou"
});
formatter.step({
  "name": "validarei o statuscode 404 de retorno da api",
  "keyword": "Entao "
});
formatter.match({
  "location": "PessoaSteps.codigoStatus(Integer)"
});
formatter.result({
  "status": "passou"
});
formatter.scenario({
  "name": "Deve salvar nova pessoa no sistema",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Todos"
    },
    {
      "name": "@TesteSalvarPessoa"
    }
  ]
});
formatter.step({
  "name": "que acesso a api de pessoa",
  "keyword": "Dado "
});
formatter.match({
  "location": "PessoaSteps.acesseiAPI()"
});
formatter.result({
  "status": "passou"
});
formatter.step({
  "name": "cadastrar NovoCadastro.json da nova pessoa",
  "keyword": "Quando "
});
formatter.match({
  "location": "PessoaSteps.cadastrarDadosNovaPessoa(String)"
});
formatter.result({
  "status": "passou"
});
formatter.step({
  "name": "validarei o statuscode 201 de retorno da api",
  "keyword": "Entao "
});
formatter.match({
  "location": "PessoaSteps.codigoStatus(Integer)"
});
formatter.result({
  "status": "passou"
});
formatter.scenario({
  "name": "Nao deve ser possivel salvar duas pessoas com o mesmo CPF",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Todos"
    },
    {
      "name": "@TestePessoaComMesmoCPF"
    }
  ]
});
formatter.step({
  "name": "que acesso a api de pessoa",
  "keyword": "Dado "
});
formatter.match({
  "location": "PessoaSteps.acesseiAPI()"
});
formatter.result({
  "status": "passou"
});
formatter.step({
  "name": "cadastrar CpfIgualTelefoneDiferente.json da nova pessoa",
  "keyword": "Quando "
});
formatter.match({
  "location": "PessoaSteps.cadastrarDadosNovaPessoa(String)"
});
formatter.result({
  "status": "passou"
});
formatter.step({
  "name": "validarei a mensagem Já existe pessoa cadastrada com o CPF 09045411423 de retorno da api",
  "keyword": "Entao "
});
formatter.match({
  "location": "PessoaSteps.mensagemRetorno(String)"
});
formatter.result({
  "status": "passou"
});
formatter.step({
  "name": "validarei o statuscode 400 de retorno da api",
  "keyword": "E "
});
formatter.match({
  "location": "PessoaSteps.codigoStatus(Integer)"
});
formatter.result({
  "status": "passou"
});
formatter.scenario({
  "name": "Nao deve ser possivel salvar duas pessoas com o mesmo telefone",
  "description": "",
  "keyword": "Cenario",
  "tags": [
    {
      "name": "@Todos"
    },
    {
      "name": "@TestePessoaComMesmoTelefone"
    }
  ]
});
formatter.step({
  "name": "que acesso a api de pessoa",
  "keyword": "Dado "
});
formatter.match({
  "location": "PessoaSteps.acesseiAPI()"
});
formatter.result({
  "status": "passou"
});
formatter.step({
  "name": "cadastrar TelefoneIgualCpfDiferente.json da nova pessoa",
  "keyword": "Quando "
});
formatter.match({
  "location": "PessoaSteps.cadastrarDadosNovaPEssoa(String)"
});
formatter.result({
  "status": "passou"
});
formatter.step({
  "name": "validarei a mensagem Já existe pessoa cadastrada com o Telefone (83)999914829 de retorno da api",
  "keyword": "Entao "
});
formatter.match({
  "location": "PessoaSteps.mensagemRetorno(String)"
});
formatter.result({
  "status": "passou"
});
formatter.step({
  "name": "validarei o statuscode 400 de retorno da api",
  "keyword": "E "
});
formatter.match({
  "location": "PessoaSteps.codigoStatus(Integer)"
});
formatter.result({
  "status": "passed"
});
});