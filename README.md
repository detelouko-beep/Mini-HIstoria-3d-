# StoryVerse AI

Plataforma completa de histórias criadas por inteligência artificial — terror, romance, fantasia, ficção científica e mais — construída com **Next.js 15 (App Router)**, **React**, **TypeScript**, **Tailwind CSS** e **Firebase**.

## 🚀 Stack de Tecnologias

| Camada | Tecnologia |
|--------|------------|
| Framework | Next.js 15 (App Router) |
| Linguagem | TypeScript (strict mode) |
| Estilo | Tailwind CSS 3 + tema customizado |
| Ícones | lucide-react |
| Autenticação | Firebase Authentication |
| Banco de dados | Firebase Firestore |
| Armazenamento | Firebase Storage |
| Editor de texto | Tiptap (rich text editor) |
| Validação | Zod |
| Deploy | Vercel |

## 📦 Instalação Local

```bash
# 1. Instale as dependências
npm install

# 2. Configure o arquivo .env.local
cp .env.example .env.local
# Preencha com suas credenciais do Firebase

# 3. Rode o servidor de desenvolvimento
npm run dev

# 4. Acesse http://localhost:3000
```

## ⚙️ Configuração do Firebase

### 1. Criar projeto
1. Acesse [firebase.google.com](https://firebase.google.com)
2. Ative Authentication (E-mail/Senha + Google)
3. Crie o Firestore Database
4. Ative o Firebase Storage

### 2. Copie as credenciais
Em **Project Settings > Your apps > Web**, copie para `.env.local`:
```
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
```

### 3. Admin SDK
Em **Project Settings > Service Accounts**, gere uma chave:
```
FIREBASE_ADMIN_PROJECT_ID=
FIREBASE_ADMIN_CLIENT_EMAIL=
FIREBASE_ADMIN_PRIVATE_KEY=
```

## 📁 Estrutura de Pastas

```
src/
  app/              # Rotas do App Router
  components/       # Componentes React
  contexts/         # Contextos globais (Auth)
  hooks/            # Custom hooks
  lib/              # Utilitários (Firebase, validações, sanitização)
  types/            # Tipos TypeScript
  constants/        # Constantes da aplicação
```

## 🔐 Segurança

- **Firestore Rules**: Leitura pública, escrita restrita
- **Storage Rules**: Upload autenticado com limite de 5MB
- **Sanitização**: XSS protection via DOMPurify
- **Validação**: Zod schemas em todos os formulários
- **Rate Limiting**: Proteção em rotas de API
- **Middleware**: Proteção de rotas autenticadas

## 📝 Scripts Disponíveis

```bash
npm run dev       # Desenvolvimento
npm run build     # Build de produção
npm run start     # Roda build em produção
npm run lint      # ESLint
npm run format    # Prettier
```

## 🌍 Deploy na Vercel

1. Suba o repositório para GitHub
2. Importe em [vercel.com](https://vercel.com)
3. Configure variáveis de ambiente
4. Adicione domínio em Firebase > Authentication > Authorized domains
5. Clique em Deploy

## 📄 Licença

MIT - Veja LICENSE para detalhes
