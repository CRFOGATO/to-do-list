# 📝 TodoList

Uma aplicação de lista de tarefas moderna e responsiva, desenvolvida com TypeScript, Express.js e Prisma ORM.

## ✨ Funcionalidades

- ✅ Adicionar novas tarefas
- 🔄 Marcar/desmarcar tarefas como concluídas
- 🗑️ Excluir tarefas com confirmação
- 📱 Interface responsiva e moderna
- 💾 Persistência de dados com banco de dados
- ⚡ API RESTful completa
- 🎨 Design elegante com gradientes e animações

## 🛠️ Tecnologias Utilizadas

### Backend

- **TypeScript** - Linguagem principal
- **Express.js** - Framework web
- **Prisma ORM** - Gerenciamento de banco de dados
- **Node.js** - Runtime JavaScript

### Frontend

- **HTML5** - Estrutura da página
- **CSS3** - Estilização com gradientes e animações
- **JavaScript ES6+** - Lógica do frontend
- **Fetch API** - Comunicação com a API

### Banco de Dados

- **PostgreSQL/MySQL/SQLite** (configurável via Prisma)

## 📂 Estrutura do Projeto

```
todolist/
├── src/
│   ├── controllers/
│   │   └── controller.ts      # Controladores da API
│   ├── models/
│   │   └── todo.ts           # Model e interface Todo
│   └── routes/               # Rotas da aplicação
├── public/
│   ├── index.html           # Página principal
│   ├── style.css            # Estilos da aplicação
│   └── script.js            # Lógica do frontend
├── prisma/
│   └── schema.prisma        # Schema do banco de dados
└── README.md
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn
- Banco de dados (PostgreSQL, MySQL ou SQLite)

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/seu-usuario/todolist.git
cd todolist
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure o banco de dados**

```bash
# Configure a string de conexão no arquivo .env
DATABASE_URL="sua_string_de_conexao"

# Execute as migrações
npx prisma migrate dev
```

4. **Inicie o servidor**

```bash
npm run dev
```

5. **Acesse a aplicação**

```
http://localhost:4000
```

## 📋 API Endpoints

| Método   | Endpoint    | Descrição              |
| -------- | ----------- | ---------------------- |
| `GET`    | `/todo`     | Lista todas as tarefas |
| `POST`   | `/todo`     | Cria uma nova tarefa   |
| `PUT`    | `/todo/:id` | Atualiza uma tarefa    |
| `DELETE` | `/todo/:id` | Remove uma tarefa      |

### Exemplos de Uso da API

#### Criar uma tarefa

```bash
curl -X POST http://localhost:4000/todo \
  -H "Content-Type: application/json" \
  -d '{"title": "Minha nova tarefa", "done": false}'
```

#### Atualizar status da tarefa

```bash
curl -X PUT http://localhost:4000/todo/1 \
  -H "Content-Type: application/json" \
  -d '{"done": true}'
```

#### Excluir uma tarefa

```bash
curl -X DELETE http://localhost:4000/todo/1
```

## 🎨 Características do Design

- **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- **Gradientes Modernos**: Visual atrativo com cores vibrantes
- **Animações Suaves**: Transições e efeitos hover
- **UX Intuitiva**: Interface limpa e fácil de usar
- **Feedback Visual**: Mensagens de sucesso e erro
- **Scrollbar Customizada**: Estilização personalizada

## 📱 Responsividade

A aplicação é totalmente responsiva e se adapta a diferentes tamanhos de tela:

- **Desktop**: Layout horizontal com sidebar
- **Tablet**: Layout adaptado para telas médias
- **Mobile**: Layout vertical otimizado para touch

## 🔧 Configuração do Banco de Dados

### PostgreSQL

```env
DATABASE_URL="postgresql://username:password@localhost:5432/todolist"
```

### MySQL

```env
DATABASE_URL="mysql://username:password@localhost:3306/todolist"
```

### SQLite (para desenvolvimento)

```env
DATABASE_URL="file:./dev.db"
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

⭐ Se este projeto te ajudou, considere dar uma estrela!
