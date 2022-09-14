import { rest } from 'msw';

export const handlers = [
  rest.get(`${import.meta.env.VITE_APP_URL}/ping`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        message: 'Pong!',
      }),
    );
  }),
];
