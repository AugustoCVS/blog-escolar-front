# Blog Escolar Frontend

## Sumário
- [Introdução](#introdução)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Arquitetura do Sistema](#arquitetura-do-sistema)
- [Setup do Projeto](#setup-do-projeto)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Containerização](#containerização)
- [CI/CD](#cicd)
- [Guia de Uso](#guia-de-uso)
- [Experiências e Desafios](#experiências-e-desafios)

## Introdução
O Blog Escolar é uma plataforma web desenvolvida para facilitar a comunicação e o compartilhamento de informações em um ambiente escolar. O projeto foi desenvolvido com foco em proporcionar uma experiência de usuário intuitiva e responsiva, permitindo que professores e alunos possam interagir de forma eficiente.

## Tecnologias Utilizadas
- **React 19**: Framework JavaScript para construção da interface
- **TypeScript**: Superset do JavaScript para adicionar tipagem estática
- **Vite**: Build tool e bundler
- **Tailwind CSS**: Framework CSS para estilização
- **React Router DOM**: Gerenciamento de rotas
- **Axios**: Cliente HTTP para requisições à API
- **Docker**: Containerização da aplicação
- **GitHub Actions**: CI/CD
- **React Hook Form**: Gerenciamento de formulários
- **Yup**: Validação de schemas
- **React Query**: Gerenciamento de estado e cache de dados

### Padrões de Projeto
- **Clean Architecture**: Separação clara de responsabilidades
- **Redux**: Gerenciamento de estado global
- **Custom Hooks**: Reutilização de lógica de negócio

### Fluxo de Dados
1. Interface do usuário (Components)
2. Hooks personalizados (Custom Hooks)
3. Serviços (Services)
4. Chamadas à API (Axios)

## Setup do Projeto

### Pré-requisitos
- Node.js 18+
- npm ou yarn
- Docker
- Backend configurado ([Documentação do Backend](https://github.com/AugustoCVS/blog-escolar))

### Configuração Manual
1. Clone o repositório:
   ```bash
   git clone https://github.com/AugustoCVS/blog-escolar-front.git
   cd blog-escolar-front
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente, crie um .env:

   ```bash
    VITE_API_URL="http://localhost:3001"
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

### Configuração com Docker
1. Configure as variáveis de ambiente, crie um .env:

   ```bash
    VITE_API_URL="http://localhost:3001"
   ```

2. Execute comando:
   ```bash
   docker-compose up --build
   ```

## Estrutura do Projeto
```
blog-escolar-front/
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/           # Páginas da aplicação
│   ├── contexts/        # Contextos React
│   ├── services/        # Serviços e chamadas API
│   ├── types/           # Definições de tipos TypeScript
│   ├── utils/           # Funções utilitárias
│   └── styles/          # Estilos globais
├── public/              # Arquivos estáticos
├── .github/             # Configurações GitHub Actions
└── docker/              # Arquivos relacionados ao Docker
```

## Containerização
O projeto utiliza Docker para garantir consistência entre ambientes de desenvolvimento e produção.

### Dockerfile
- Utiliza multi-stage build para otimização
- Base em Node.js Alpine para imagens menores
- Configuração de variáveis de ambiente em build-time

## CI/CD
O projeto utiliza GitHub Actions para automação de deploy e integração contínua.

### Workflow Principal
- **Trigger**: Push na branch main
- **Etapas**:
  1. Checkout do código
  2. Build da imagem Docker
  3. Push para Docker Hub

### Segurança
- Secrets configurados no GitHub
- Variáveis de ambiente protegidas
- Scanning de vulnerabilidades

## Guia de Uso

### Funcionalidades Principais
1. **Autenticação**
   - Login de usuários
   - Registro de novos usuários

2. **Gestão de Posts**
   - Criação de posts
   - Edição de posts
   - Exclusão de posts
   - Visualização de posts

### Rotas Principais
- `/`: Autenticação
- `/home`: Pagina inicial com a listagem de posts
- `/posts/:id`: Detalhes do post
- `/perfil`: Perfil do usuário

## Experiências e Desafios

### Desafios Técnicos
1. **Performance**
   - Caching eficiente com React Query

2. **Segurança**
   - Validação de dados com Yup

3. **UX/UI**
   - Design responsivo
   - Acessibilidade
   - Feedback visual para ações do usuário

### Aprendizados
- Benefícios da tipagem estática com TypeScript
- Práticas de Clean Code
- Gestão eficiente de estado com React Query
- Containerização e CI/CD

### Melhorias Futuras
- Implementação de testes E2E
- Melhorias de performance
- Expansão de funcionalidades