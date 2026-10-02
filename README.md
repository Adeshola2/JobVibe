# JobVibe

Modern job recruitment frontend built with React, Vite, Tailwind CSS, React Hook Form, Zod and TanStack Query.

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite, normally http://localhost:5173.

## Production build

```bash
npm run build
npm run preview
```

## Routes

Public:
- /
- /jobs
- /jobs/:id
- /search
- /companies
- /companies/:id
- /login
- /register
- /forgot-password

Candidate:
- /candidate
- /candidate/applications
- /candidate/saved-jobs
- /candidate/profile
- /candidate/resume

Employer:
- /employer
- /employer/post-job
- /employer/manage-jobs
- /employer/applications
- /employer/candidates/:id
- /employer/company

## Production integration

The demo uses local mock data. Replace `src/lib/api.js` with REST API calls and add:
- JWT authentication
- Cloudinary signed uploads
- PostgreSQL or your backend database
- server-side authorization for candidate/employer roles
- real application status transitions
- email notifications to employers/candidates
