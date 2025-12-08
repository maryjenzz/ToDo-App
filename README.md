# ✅ ToDo App ✨

-----

## 🚀 Visão Geral do Projeto

Este é um projeto de **Lista de Tarefas (ToDo List)** moderno e performático, construído com a velocidade e reatividade do **React (v19.2.0)** e a eficiência do *bundler* **Vite (v7.2.4)**.

O objetivo é simular uma aplicação completa, onde a persistência dos dados é tratada através de chamadas assíncronas (`fetch`) a um **servidor JSON local** (mock backend) que atende em `http://localhost:3001/tasks`.

-----

## 🌟 Funcionalidades Essenciais

Gerencie sua produtividade com um conjunto completo de recursos:

  * **➕ Adicionar Novas Tarefas:** Crie novos itens na lista rapidamente.
  * **✍️ Edição On-the-fly:** Entre no modo de edição para modificar o texto de qualquer tarefa.
  * **✔️ Alternar Conclusão:** Marque ou desmarque tarefas como concluídas com um simples clique.
  * **🗑️ Exclusão Definitiva:** Remova permanentemente tarefas que não são mais relevantes.
  * **📊 Acompanhamento Visual:** Um *status card* exibe a proporção de tarefas concluídas versus o total, mantendo você motivado.
  * **🎨 UI/UX Refinado:** Design moderno com a fonte **Inter** e uso de ícones **Boxicons** para uma interface intuitiva.

-----

## 🛠️ Stack de Tecnologia

| Categoria | Tecnologia | Versão | Uso no Projeto |
| :--- | :--- | :--- | :--- |
| **Frontend Core** | **React** | ^19.2.0 | Construção de componentes de UI. |
| **Tooling/Build** | **Vite** | ^7.2.4 | Servidor de desenvolvimento e empacotamento. |
| **API/Data** | **Fetch API** | Nativa | Comunicação RESTful com o mock backend. |
| **Mock Backend** | **JSON Server** | N/A | Simulação de persistência de dados via `data/db.json`. |
| **Estilização** | **CSS Modules** | N/A | Estilos específicos para `ToDo` e `Task`. |

-----

## ⚙️ Configuração e Execução

Siga estes passos para colocar o projeto em funcionamento:

### 1\. Clonagem e Instalação

```bash
# Clone o repositório
git clone <https://github.com/maryjenzz/todo-app>
cd todo-app

# Instale as dependências
npm install
```

### 2\. Iniciando o Mock Backend (JSON Server)

A aplicação **requer** o JSON Server para simular as operações de CRUD (Create, Read, Update, Delete).

Se você não tem o `json-server`, instale-o globalmente:

```bash
npm install -g json-server
```

Em seguida, inicie o servidor, observando o arquivo `data/db.json` e definindo a porta `3001`:

```bash
json-server --watch data/db.json --port 3001
```

### 3\. Iniciando a Aplicação Frontend

Com o mock backend rodando (Passo 2), inicie a aplicação React/Vite em um novo terminal:

```bash
npm run dev
```

A ToDo App estará acessível em **`http://localhost:5173/`**.

-----

## Comandos do Projeto

| Script | Ação |
| :--- | :--- |
| `npm run dev` | Inicia o servidor de desenvolvimento do Vite. Use este comando para o desenvolvimento diário. |
| `npm run build` | Cria a versão otimizada para produção na pasta `dist`. |
| `npm run lint` | Executa a verificação de código com ESLint. |
| `npm run preview` | Serve os arquivos de produção após o build para simular o ambiente de deploy. |

-----

**Made with ❤️ and Code\! Comece a organizar suas tarefas agora\!**
