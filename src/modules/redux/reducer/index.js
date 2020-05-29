import { combineReducers } from '../../../libraries/libraries';
import reducerHotSeries from './reducerHotSeries';
import reducerLatesRelease from './reducerLatestRelease';

const rootReducers = combineReducers({
  listHotSeries:reducerHotSeries,
  listLatesRelease: reducerLatesRelease
});

export default rootReducers;