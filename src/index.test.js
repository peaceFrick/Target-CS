import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './App/BusTransit/store';
import App from './App';
import { BrowserRouter } from "react-router-dom";

test('renders learn react link', () => {
  const { getByText } = render(
    <React.StrictMode>
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </React.StrictMode>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
