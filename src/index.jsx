import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { AppContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <HashRouter>
        <App></App>
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App)
  });
}
