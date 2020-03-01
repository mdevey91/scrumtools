import Api from './Api';
import { getDefaultOptions } from './Helpers';

async function createScrumBoard(payload) {
  const { data } = await Api.post('/api/v1/board/create', payload, getDefaultOptions());
  return data.session;
}

export default {
  createScrumBoard,
};
