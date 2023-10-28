const qiankunConfig = {
  registerMicroApps: [
    {
      name: 'my-vue-app',
      entry: '//localhost:4000',
      container: '#yourContainer2',
      activeRule: '/yourActiveRule2'
    }
  ],
  qiankunType: 'main' //主应用:main,子应用：Sub
};
export default qiankunConfig;
