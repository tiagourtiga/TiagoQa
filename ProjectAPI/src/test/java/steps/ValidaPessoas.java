package steps;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;
import org.hamcrest.Matchers;
import org.json.JSONException;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;

public class ValidaPessoas {
	private Response response;
	private static final String baseURL = "http://localhost:9090";
	private static final String basePath = "/pessoas";
	RequestSpecification request;

	@Dado("que acesso a api de pessoa")
	public void acesseiAPI() {
		RestAssured.baseURI = baseURL;
	}

	@Quando("buscar pessoa por (.*) (.*)")
	public void cadastrarDadosNovaPessoa(Integer ddd, Integer telefone) {
		response = RestAssured.given().when().get(basePath + "/" + ddd + "/" + telefone);
	}

	@Quando("cadastrar (.*) nova pessoa")
	public void cadastrarDadosNovaPessoa(String file) throws FileNotFoundException, IOException, JSONException {
		File jsonDataFile = new File("src/test/resources/Arquivos/" + file);
		response = RestAssured.given().contentType("application/json").body(jsonDataFile).when().post(basePath);
	}

	@Entao("validarei o código de status (.*) de retorno da api")
	public void codigoStatus(Integer codigoStatus) {
		response.then().statusCode(statuscode).extract().response();
	}

	@Entao("validarei a mensagem (.*) de retorno da api")
	public void mensagemRetorno(String mensagem) {
		response.then().body("erro", Matchers.equalTo(mensagem)).log().all();
	}
}
