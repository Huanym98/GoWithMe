# GoWithMe iOS (Expo)

基于你提供的网页端与设计说明书，已落地为可运行的 iOS 优先移动端骨架应用（Expo + React Native + TypeScript）。

## 已完成模块（MVP）

- 登录 / 注册入口（简化）
- 5 Tab 导航：首页、发现、发布、消息、我的
- 行程详情页
- 聊天页
- 编辑资料页
- 他人主页页

## 运行方式

```bash
npm install
npm run ios
```

> 若本机没有 Xcode，可先使用 `npm run start` 在 Expo Go 预览。

## 后续接入建议

1. 用 Supabase Auth 替换登录页临时跳转
2. 用 Supabase Database + Realtime 替换 `data/mock.ts`
3. 补齐发布校验、图片上传、消息持久化
4. 引入 Zustand/Redux 管理全局用户与会话状态

## 一条命令启动（会重置本地改动）

```bash
npm run dev:one
```

- 上面命令会自动执行：`git fetch --all` → `git reset --hard origin/当前分支` → `git clean -fdx` → `npm install` → `npx expo start --web --clear`
- 如果要真机模式：

```bash
npm run dev:one:native
```


兼容别名（如果终端或历史命令不方便带冒号）：`npm run devone`、`npm run one`。
