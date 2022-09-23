# Movies app

Preview: https://movie-app-nmd9.vercel.app/

## Used Technologies

- Next.js
- React.js
- React Query
- Typescript
- Tailwind

## An external API:Rest was used to obtain data

Read more https://developers.themoviedb.org/3/getting-started/append-to-response

## Getting Started

- You first need to register on https://developers.themoviedb.org/3/getting-started/append-to-response and get a unique key
- Next is, in the next-movie-app folder, you need to create .env.local and specify a field with a unique key inside like API_KEY=0898b2

- To run local, run the development server:

```bash
npm run dev
# or
yarn dev
```

- Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Client side: styles, UI, UX

### UI, UX:

- built responsively

### CSS:

- the app used Tailwind for styling

## Client side: Next.js

- for the state management of the application and for implementation of the app I used modern React and Next.js, customized hooks for fetching data
- Getting data for the feed Home Page used client side

## Server side

- Getting data for the Single Page used server side

## Optimization:

### Unit tests

- It is good practice to write unit tests
