import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createRootReducer } from '@/data/rootReducer';
import thunk from 'redux-thunk';

const history = createBrowserHistory();

const rootReducer = createRootReducer(history);
export default function configureStore() {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(routerMiddleware(history), thunk),
      (window as any).__REDUX_DEVTOOLS_EXTENSION__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION__() : (f: any) => f
    )
  );

  return {
    store,
    history,
  };
}
