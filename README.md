# victorvaz.dev

Portfólio pessoal de Victor Vaz, feito em React 19 + TypeScript + Vite e hospedado no Firebase Hosting.
Substitui a versão anterior em Flutter Web ([victor_vaz_portfolio](https://github.com/victorvazdev/victor_vaz_portfolio)).

## Rodando

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # gera dist/
npm run preview  # serve o build
```

## Editando o conteúdo

Todo o conteúdo (perfil, habilidades, projetos, experiência, formação e certificados) está em
[`src/data/portfolio.ts`](src/data/portfolio.ts). Os componentes em `src/components/` apenas renderizam esses dados.

- Screenshots de apps: `src/assets/projects/` (proporção de celular, ~360×720).
- Currículo para download: `public/victor-vaz-curriculo.pdf`.
- O formulário de contato envia para a Cloud Function `api` do projeto Firebase `victor-vaz`
  (a mesma do portfólio antigo, cujo código-fonte fica em `functions/` daquele repositório).

## Deploy (Firebase Hosting)

```sh
npm install -g firebase-tools
firebase login
npm run build
firebase deploy --only hosting
```

`firebase.json` publica `dist/` no projeto `victor-vaz` (o mesmo que atende victorvaz.dev).
O `--only hosting` não mexe na Cloud Function do formulário.
