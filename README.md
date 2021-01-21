# 可以線上購物的調酒論壇 (製作中)

### [連結](https://impala8012.github.io/redux-cocktail/#/)
![](https://i.imgur.com/ynT4T0Y.png)

利用 React 的 Redux 框架，實作出一個結合線上購物的論壇，目前完成購物車的部分，利用 firebase 處理後端的會員驗證以及串接 stripe API 達到線上支付功能

## 功能介紹
- 首頁：可以藉由首頁的路由，直接進入該商品的頁面
- 酒類：顯示所有商品專區，最多以四個為一組
- 酒譜：提供大家可以分享酒譜的地方(製作中)
- 討論區：提供大家討論各類酒類知識的地方(製作中)
- 登入：會員/管理員可以登入頁面
- 管理員：管理員可以新增或者修改商品，並沒有管理員權限無法進入管理員頁面(製作中)
- 購物車：顯示加入購物車的商品，點選結帳去會導入到結帳頁面
![](https://i.imgur.com/YxuM4KH.gif)

## 使用技術與工具
### 前端框架
- React / Redux：使用 Hooks 的形式建構
- Redux-thunk：利用 Redux Middleware 來處理的非同步事件

### 套件
- React Router：處理路由協助達到 SPA 效果
- Stripe API：處理串接金流，可以利用信用卡支付效果
- Styled-components：利用 component 形式，來完成畫面的樣式

### 後端
- Firebase：處理會員認證，並且可以利用 google 信箱來協助登入

