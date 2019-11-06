import { createBrowserHistory } from 'history';
import publictUrl from '../publicUrl';

export default createBrowserHistory({ basename: publictUrl[process.env.NODE_ENV]  });
