import Api from './Api';
import { getDefaultOptions } from './Helpers';
import store from '../store/index';

async function getNotes() {
  const { data } = await Api.get(`/note/getAll/${store.state.currentDashboard.id}`, getDefaultOptions());
  return data.notes;
}

export default {
  getNotes,
};
