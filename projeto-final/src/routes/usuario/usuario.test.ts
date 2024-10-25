import request, { Response } from "supertest";
import app from "../../app";

describe("Testa a rota de usuários", () => {
  test("Deve responder o método GET com sucesso", (done) => {
    request(app)
      .get("/usuarios")
      .then((response: Response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Deve responder o método GET com uma lista de 10 registros", (done) => {
    request(app)
      .get("/usuarios")
      .then((response: Response) => {
        expect(response.body.length).toBe(10);
        done();
      });
  });

  test("Deve retornar um registro com sucesso", (done) => {
    request(app)
      .get("/usuarios/10")
      .then((response: Response) => {
        expect(response.statusCode).toBe(200);
        expect(response.body).not.toBeNull();
        expect(response.body).toBeDefined();
        expect(response.body.id).toBe(10);
        done();
      });
  });

  test("Deve deletar um registro com sucesso", (done) => {
    request(app)
      .delete("/usuarios/10")
      .then((response: Response) => {
        expect(response.statusCode).toBe(200);
        done();
      });
  });

  test("Deve criar um novo usuário com sucesso", (done) => {
    const newUser = {
      nome: "Novo Usuário",
      login: "novousuario",
      senha: "senha000",
    };

    request(app)
      .post("/usuarios")
      .send(newUser)
      .then((response: Response) => {
        expect(response.statusCode).toBe(201);
        expect(response.body).not.toBeNull();
        expect(response.body.login).toBe(newUser.login);
        expect(response.body.id).not.toBeUndefined();
        done();
      });
  });
});
