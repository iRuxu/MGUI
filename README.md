# MGUI
芒果TV 标准界面组件库

当前版本号：1.0.2
更新日志见手册：<http://mgui.iruxu.com/global.html>
以下均为基于新版Silky（SR）下的使用方法

## 方法一：指定引入
1.打开项目package.json，在“devDependencies”键中添加(版本号请酌情修改)：
```javascript
"mgui": "1.0.0",
```
2.打开项目package.json，在"sp-less"的"global"值中添加
```javascript
"mgui",
```
3.运行命令
```javascript
sr install mgui
```
4.在less文件中引入
```less
@import "@{mgui}/global.less";
//修改对应名称即可，可参见手册侧边栏
```

## 方法二：全局引入
1.打开项目package.json，在“devDependencies”键中添加(版本号请酌情修改)：
```javascript
"mgui": "1.0.0",
```
2.打开项目package.json，在"sp-less"的"global"值中添加
```javascript
"mgui",
"mgui/mgui.less"
```
3.运行命令
```javascript
sr install mgui
```
默认整个MGUI库将可被项目全局使用。

