# Projeto de Automação de Testes - Banco API

## 🎯 Objetivo

Este projeto tem como objetivo realizar a automação dos testes de API REST para a aplicação [Banco API](https://github.com/Telma-Pinheiro/banco-api-tests), validando suas funcionalidades e contribuindo com a qualidade de suas operações. 
A automação abrange testes de contrato, testes funcionais e validações de regras de negócio, assegurando que a API se comporte conforme o esperado em diversos cenários.

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
├── package-lock.json     
└── README.md             
```
## Formato de arquivo .env

Antes de rodar os testes, crie um arquivo chamado `.env` na raiz do projeto com o seguinte conteúdo:

```
BASE_URL=http://localhost:3000
```
Substitua `http://localhost:3000` pela URL onde a API `banco-api` está rodando.

## ⚙️ Configuração do Ambiente

Antes de executar os testes, é necessário configurar o ambiente de desenvolvimento.

### 1. Clonar o Repositório

```bash
git clone [https://github.com/JonasFilhoo/banco-api-tests.git](https://github.com/JonasFilhoo/banco-api-tests.git)
cd banco-api-tests
```

### 2. Instalar as Dependências

Execute o comando abaixo para instalar todas as bibliotecas listadas no `package.json`:

```bash
npm install
```

```
BASE_URL=http://localhost:3000
```

**Importante:** A `BASE_URL` deve conter a URL base da API que será testada.

## ▶️ Execução dos Testes

Com o ambiente configurado, utilize os seguintes comandos para executar os testes e gerar os relatórios.

### Executar os Testes

Para rodar todos os cenários de teste definidos, execute o seguinte comando no terminal:

```bash
npm test
```

### Geração automática de relatório HTML:

Após a execução dos testes, um relatório detalhado em HTML será gerado automaticamente no diretório `mochawesome-report/`. Para visualizar o relatório, abra o arquivo `mochawesome.html` no seu navegador.

## 📚 Documentação das Dependências

Para mais detalhes sobre as ferramentas utilizadas neste projeto, consulte a documentação oficial:

-   **Mocha:** [https://mochajs.org/](https://mochajs.org/)
-   **Supertest:**[Supertest](https://github.com/ladis/supertest) - Biblioteca para chamada HTML
-   **Chai:** [https://www.chaijs.com/](https://www.chaijs.com/) - Biblioteca de asserções
-   **Mochawesome:** [https://github.com/adamgruber/mochawesome](https://github.com/adamgruber/mochawesome)
-   **Dotenv:** [https://github.com/motdotla/dotenv](https://github.com/motdotla/dotenv)
