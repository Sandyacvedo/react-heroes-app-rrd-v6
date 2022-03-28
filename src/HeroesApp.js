import { AppRouter } from './routers/AppRouter';

import { Provider } from 'react-redux';
import store from './app/store';

export const HeroesApp = () => {
    return (
        <Provider store={store} >
            <AppRouter />
        </Provider>
    )
}
