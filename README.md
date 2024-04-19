## 簡介

以React建置的動物醫院官網，設有會員系統可以註冊及登入。

## 功能

串接firebase建立登入系統，可使用email註冊及使用google帳戶登入。\
以react-router-dom做前端路由功能。\
以react-slick做首頁的banner輪播功能。\
預約功能將陸續更新...

## 環境設置

firebase@ 10.10.0\
react-router-dom@ 6.22.3\
react-slick@ 0.30.2\
slick-carousel@ 1.8.1\
sass@ 1.71.1

## 開始使用

clone專案至本地。\
於終端機移至專案資料夾輸入:
```
npm install
```
於根目錄建立.env\
註冊firebase並將firebase環境變數寫入
```
REACT_APP_FIREBASE_API_KEY= xxxxxxxxxx
REACT_APP_FIREBASE_AUTH_DOMAIN= my-vet-web.firebaseapp.com
REACT_APP_FIREBASE_PROJECT_ID= my-vet-web
REACT_APP_FIREBASE_STOREAGE_BUCKET= my-vet-web.appspot.com
REACT_APP_FIREBASE_MESSAGING_SENDER_ID= xxxxxxxxxx
REACT_APP_FIREBASE_APP_ID= xxxxxxxxxx
REACT_APP_FIREBASE_MEASUREMENT_ID= xxxxxxxxxx
```
啟用伺服器
```
npm run start
```
打開瀏覽器進入到以下網址
```
http://localhost:3000
```
若欲停止使用請輸入
```
Ctrl + C
```