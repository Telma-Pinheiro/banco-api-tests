const request = require('supertest');
const { expect } = require('chai')

describe('login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com um token em string quando usar credenciais válidas', async () => {
            const resposta = await request('http://localhost:3000')
            //vou fazer uma requisição via post com credenciasi válidas para o post login
                .post('/login')
                //setando o cabeçalho pra essa requisição
                .set('Content-Type', 'application/json')
                .send({
                    'username': 'julio.lima',
                    'senha': '123456'
                })
                // agora vou fazer as validações com chai(importei ali em cima
                //espero q a resposta
                expect(resposta.status).to.equal(200);
                expect(resposta.body.token).to.be.a('string');
                


         })
            
    })
})