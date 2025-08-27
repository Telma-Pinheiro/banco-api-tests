const request = require('supertest');
const { expect } = require('chai')
require ('dotenv').config()
const { obterToken } = require('../helpers/autenticacao')
const postTransferencias = require('../fixtures/postTransferencias.json')

describe('transferências', () => {
    let token

        beforeEach(async () => {
            token = await obterToken('julio.lima', '123456')
        })


        describe('POST /transferências', () => {
        

        it('Deve retornar sucesso com 201 quando o valor da transferencia for igual ou acima de R$ 10,00', async () => {
            const bodyTransferencias = {...postTransferencias}
            const resposta = await request(process.env.BASE_URL)
            .post('/transferencias')
            .set('Content-Type', 'application/json' )
            .set('Authorization', `Bearer ${token}`)
            .send(bodyTransferencias)
                
                expect(resposta.status).to.equal(201);
            
         })
            
         it('deve retornar com 422 quando o valor da transferência for abaixo de R$ 10,00', async () => {
            const bodyTransferencias = {...postTransferencias }
            bodyTransferencias.valor = 7

            const resposta = await request('http://localhost:3000')
            .post('/transferencias')
            .set('Content-Type', 'application/json' )
            .set('Authorization', `Bearer ${token}`)
            .send(bodyTransferencias)
                
                expect(resposta.status).to.equal(422);
            
       })

   })
   describe('GET /transferencias/{id}', () => {
     it('Deve retornar sucesso com 200 e dados iguais ao registro de transferência contido no banco de dados qaundo o ID for válido', async () =>{
        const resposta = await request(process.env.BASE_URL)
        .get('/transferencias/24')
        .set('Authorization', `Bearer ${token}`)

        console.log(resposta.status)
        console.log(resposta.body)




     })

  })
})


