const request = require('supertest');
const { expect } = require('chai');
require ('dotenv').config()
const postLogin = require('../fixtures/postLogin.json')

describe('login', () => {
    describe('POST /login', () => {
        it('Deve retornar 200 com um token em string quando usar credenciais válidas', async () => {
            const bodyLogin = {...postLogin}

            const resposta = await request(process.env.BASE_URL)
            //vou fazer uma requisição via post com credenciasi válidas para o post login
                .post('/login')
                //setando o cabeçalho pra essa requisição
                .set('Content-Type', 'application/json')
                .send(bodyLogin)
                // agora vou fazer as validações com chai(importei ali em cima
                expect(resposta.status).to.equal(200);
                expect(resposta.body.token).to.be.a('string');
                


         })
            
    })
})