
## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


frontend/
│── Dockerfile
│── next.config.ts
│── tsconfig.json
│── package.json
│── .env.local
│
├── src/
│   ├── pages/
│   │   ├── index.tsx
│   │   ├── cart.tsx
│   │   └── _app.tsx
│   │
│   ├── components/
│   │   ├── ProductCard.tsx
│   │   ├── CartItem.tsx
│   │   ├── Header.tsx
│   │   └── Layout.tsx
│   │
│   ├── context/
│   │   └── CartContext.tsx
│   │
│   ├── types/
│   │   ├── product.ts
│   │   └── cart.ts
│   │
│   ├── services/
│   │   ├── api.ts
│   │   ├── productService.ts
│   │   └── cartService.ts
│   │
│   ├── hooks/
│   │   └── useCart.ts
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   └── utils/
│       └── helpers.ts
