# Myspace Clone

This is a Myspace/social media website created following the Next.js full course from [Fireship.io](https://fireship.io/)

# Features

- User Authentication using next-auth
- Prisma ORM with neon postgres database
- Following other users

# Possible future features

- Posts
- Comments
- Likes
- Messaging

# Tech Stack

- Next.js 13
- React
- Typescript
- next-auth
- Prisma
- Postgres
- Tailwind CSS

# Installation

1. Clone the repo
2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Create a .env file and add the following environment variables

```bash
GITHUB_ID= # Get this from github
GITHUB_SECRET= # Get this from github

NEXTAUTH_SECRET= # Generate a secret using `openssl rand -base64 32`
NEXTAUTH_URL=http://localhost:3000

DATABASE_URL= # Get this from neon
SHADOW_DATABASE_URL= # Get this from neon
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
