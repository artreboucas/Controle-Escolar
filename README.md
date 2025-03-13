#  📚 Gestão Escolar - Projeto Fullstack

Este projeto tem como objetivo criar uma aplicação para o gerenciamento de dados de uma escola. Utilizando **Node.js** com **Express**, **Prisma** como ORM para interagir com o banco de dados, e **PostgreSQL** como sistema de banco de dados, a aplicação permite visualizar, adicionar, atualizar e remover informações sobre alunos, professores e boletins.

---

## 💻 Funcionalidades
- **Cadastro de Alunos:** Permite adicionar, editar e remover alunos da escola.
- **Cadastro de Professores:** Permite adicionar, editar e remover professores.
- **Boletins de Notas:** Para cada aluno, é possível registrar, editar e excluir boletins de notas de diferentes disciplinas.
- **Exibição de Dados:** A aplicação possui uma interface web que exibe todos os alunos, professores e boletins registrados no banco de dados.
- **Manipulação de Dados:** Através da interface web, é possível adicionar novos alunos, professores e boletins, além de realizar edições ou remoções de dados existentes.

---

## 📁 Estrutura do Projeto


---


## 📋 Tecnologias

Frontend: HTML, CSS, JavaScript (fetch API)

Backend: Node.js, Express

Banco de Dados: PostgreSQL (utilizando Prisma ORM)

---

## 🚀 Instalação

1. **Clone este repositório:**

    ```bash
    git clone https://github.com/artreboucas/Controle-Escolar.git
    cd controle-escolar
    ```

2. **Instalar Dependências:**

    ```bash
    cd controle-escolar
    npm install
    ```

3. **Configure o Banco de Dados:**

   Configure o banco de dados PostgreSQL. Você pode criar um banco de dados local e        adicionar as credenciais no arquivo .env (caso necessário).

    ```bash
    DATABASE_URL=postgresql://usuario:senha@localhost:5432/escola
    ```

4. **Gerar as Migrações do Prisma.**

    O Prisma utiliza migrações para configurar o banco de dados com base no seu schema.prisma. Para gerar as migrações e aplicar as mudanças no banco de dados, utilize os seguintes comandos:



    ```bash
    npx prisma migrate dev --name init
    npx prisma generate
    ```
    
---

## 🛠️ Utilização

1. **Execute o Servidor:**

    ```bash
    node server.js
    ```

2. **Visualização da Aplicação:** http://localhost:3000.

---

## 📄 Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).


