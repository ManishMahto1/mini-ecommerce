backend/
│── Dockerfile
│── tsconfig.json
│── package.json
│── .env
│
├── src/
│   ├── server.ts
│   │
│   ├── routes/
│   │   ├── product.routes.ts
│   │   └── cart.routes.ts
│   │
│   ├── controllers/
│   │   ├── product.controller.ts
│   │   └── cart.controller.ts
│   │
│   ├── services/
│   │   ├── product.service.ts
│   │   └── cart.service.ts
│   │
│   ├── models/
│   │   ├── product.model.ts
│   │   └── cart.model.ts
│   │
│   ├── middleware/
│   │   ├── validate.middleware.ts
│   │   ├── error.middleware.ts
│   │   └── notFound.middleware.ts
│   │
│   ├── types/
│   │   ├── product.type.ts
│   │   └── cart.type.ts
│   │
│   ├── config/
│   │   └── db.ts
│   │
│   └── data/
│       └── products.json
