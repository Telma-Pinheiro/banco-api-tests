const request = require('supertest');
const { expect } = require('chai')

describe('transferências', () => {
    describe('POST /transferências', () => {
        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de R$ 10,00', async () => {
             //Capturar o token
             const respostaLogin = await request('http://localhost:3000')
            .post('/login')
            //setando o cabeçalho pra essa requisição
            .set('Content-Type', 'application/json')
            .send({
                'username': 'julio.lima',
                'senha': '123456'
            })       
            // Depois q envio  a requisição eu recebo aqui em baixo a resposta login com o token, 
            // pq do faço q reauisção ele traz ali dentro do responseLogin, vou extrai o token.
            // na resposta login, tenho muito coisa status, p bodey, mas o q quero é o token,  
            // então copio só o body.token(lá do login.test.js), depois vou no set Autorization 
            // e verifica lá na API(no cadeado) verificar o bearer, perguntar para o dev pra saber o tipo de token
            // q nesse caso é bearer, depois q vejo posso concatenar (veja no autorization) ou bearer ${'token'})
            
            const token = respostaLogin.body.token
            const resposta = await request('http://localhost:3000')
            
            .post('/transferencias')
            .set('Content-Type', 'application/json' )
            .set('Authorization', `Bearer ${token}`)
            .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 11,
                    token: ""
                })
                
                expect(resposta.status).to.equal(201);
            
         })
            
         it('deve retornar com 422 quando o valor da transferência for abaixo de R$ 10,00', async () => {
             
             const respostaLogin = await request('http://localhost:3000')
            .post('/login')
            //setando o cabeçalho pra essa requisição
            .set('Content-Type', 'application/json')
            .send({
                'username': 'julio.lima',
                'senha': '123456'
            })       
            
            
            const token = respostaLogin.body.token
            const resposta = await request('http://localhost:3000')
            
            .post('/transferencias')
            .set('Content-Type', 'application/json' )
            .set('Authorization', `Bearer ${token}`)
            .send({
                    contaOrigem: 1,
                    contaDestino: 2,
                    valor: 7,
                    token: ""
                })
                
                expect(resposta.status).to.equal(422);
                

       })
   })
})