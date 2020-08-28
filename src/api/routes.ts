import { info } from 'api/info';
import getDb from '../server/db';

export const routes = (router: any) => {
  const db = getDb();

  router.use('/info', info({ db }));

  return router;
};
