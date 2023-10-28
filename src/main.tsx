import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './store/index.js';
import App from './App';
import qiankunConfig from '@/configure/qiankunConfig';
import { registerMicroApps, start } from 'qiankun';
import {
  renderWithQiankun,
  qiankunWindow
} from 'vite-plugin-qiankun/dist/helper';

function render(props: any) {
  const { container } = props;
  ReactDOM.createRoot(
    container
      ? container.querySelector('#root')
      : document.getElementById('root')
  ).render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  );
}

renderWithQiankun({
  mount(props) {
    console.log('sub-vite2-react mount');
    render(props);
  },
  bootstrap() {
    console.log('bootstrap');
  },
  unmount(props: any) {
    console.log('sub-vite2-react unmount');
    const { container } = props;
    const mountRoot = container?.querySelector('#root');
  },
  update() {
    console.log('update');
  }
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
  render({});
}

// 当做为主应用时
if (qiankunConfig.qiankunType == 'main') {
  // 注册子应用
  registerMicroApps(qiankunConfig.registerMicroApps);

  // 启动项目
  start();
}
