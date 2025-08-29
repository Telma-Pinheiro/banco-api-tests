# Projeto de Automação de Testes - Banco API

## 🎯 Objetivo

Este projeto tem como objetivo realizar a automação dos testes de API REST do banco-api, validando suas funcionalidades e contribuindo com a qualidade de suas operações. 

## 🛠️ Stack Utilizada

-   **Linguagem:** Javascript(Node.js)
-   **Framework de Testes:** [Mocha](https://mochajs.org/)
-   **Cliente HTTP:** [Supertest](https://github.com/ladis/supertest)
-   **Biblioteca de Asserções:** [Chai](https://www.chaijs.com/)
-   **Relatórios de Teste:** [Mochawesome](https://github.com/adamgruber/mochawesome)
-   **Gerenciamento de variáveis de ambiente:** [dotenv](https://github.com/motdotla/dotenv)

## 📂 Estrutura de Diretórios

```
banco-api-tests/
├── tests/                # Testes organizdos por funcionalidade
│   ├── login.test.js
│   └── transferencias.test.js
├── mochawesome-report/   # Diretório onde os relatórios HTML são gerados
├── .env                  # Arquivo para configuração da variável BASE_URL
├── .gitignore           
├── package.json              
└── README.md             
```
## Formato do arquivo .env

Antes de rodar os testes, crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```
BASE_URL=http://localhost:3000
```
Substitua `http://localhost:3000` pela URL onde a API `banco-api` está rodando.

### Comando para execução

Instalar as Dependências:

```bash
npm install
```
Execute todos os testes:
```bash
npm test
```

### Geração automática de relatório HTML:

Após a executar `npm test` dos testes, um relatório será gerado dentro das pastas`mochawesome-report/`.

Sugestão: Para executar os testes e abrir o relatório HTML, adicione o script no  `package.json`: 
```json
"scripts": {
"test:report": "npm test start(windows) mochawesome-report/mochawesome.html"
}
```

Após a execução dos testes, um relatório detalhado em HTML será gerado automaticamente no diretório `mochawesome-report/`. Para visualizar o relatório, abra o arquivo `mochawesome.html` no seu navegador.

## 📚 Dependências utilizadas e suas documentações

Para mais detalhes sobre as ferramentas utilizadas neste projeto, consulte a documentação oficial:

-   **Mocha:** [https://mochajs.org/](https://mochajs.org/) - Framework de execução de testes
-   **Supertest:**[Supertest](https://github.com/ladis/supertest) - Biblioteca para chamada HTTP
-   **Chai:** [https://www.chaijs.com/](https://www.chaijs.com/) - Biblioteca de asserções
-   **Mochawesome:** [https://github.com/adamgruber/mochawesome] - Geração de reltóri em HTML
-   **Dotenv:** [https://github.com/motdotla/dotenv] - Gerenciamento de variáveis de ambiente
