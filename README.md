# official-web-with-backend
为带后台的官网搭建个试验性的版本

## 备注

- 想在开发编译中查看ie11效果，需要把`tsconfig.app.json`中的`target`字段改成`es5`

## 技术栈

### Client side

- [Angular 9.0](https://angular.cn/)
- [Angular Universal (SSR support)](https://angular.cn/guide/universal)
- [Ng-ZORRO](https://ng.ant.design/docs/introduce/zh)

### Server side
- [Midwayjs](https://midwayjs.org/midway/)


## Problems need to be solved

### Client side

- [ ] 动态路由，通过请求设备自动分配是电脑端还是移动端
- [ ] 后端渲染时动态设置meta
- [ ] 后端渲染时图片的加载失败问题
- [ ] http请求拦截鉴权
- [ ] 部分页面走回CSR（admin）

### Server side
