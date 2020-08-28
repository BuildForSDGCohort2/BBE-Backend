import { Request, Response, Router } from 'express';

export const info = ({ db }: { db: any }) => {
  const api: Router = Router();

  /**
   * Use this endpoint to test if info endpoint works
   */
  api.get('/test', async (req: Request, res: Response) => {
    res.status(200).json({ message: 'Enpoint works.' });
  });

  return api;
};
