# uni-app-core-js fork from core-js

[get more information with origin core-js@2](https://github.com/zloirock/core-js/tree/v2)

此兼容库仅用于[`uni-app`](https://uniapp.dcloud.io)(基于core-js@v2.6.9)

仅支持对目标浏览器的对象进行实例/静态方法的兼容

如:
```javascript
// 一定兼容的情况
[].find(v=>v>1) // 可兼容(因为基本上任何浏览器都支持Araay)
Object.assign({}, { a: 1 }) // 可兼容(因为基本上任何浏览器都支持Object)
// 可能兼容的情况
// (关于"可能"的解释见下文)
// eg.1
new Promise(function(resolve){
  resolve()
}).finally(function(){
  console.log('finally')
})
// eg.2
const set = new Set()
set.add(1)
```
### 关于可能兼容的说明
取决于 __目标浏览器(webview)__ 是否支持相关对象/构造函数/数据类型
比如,浏览器支持Promise,但是不支持Promise.prototype.finally
那么可以为Promise加上finally兼容
但是浏览器(webview)不支持Promise,就没办法给浏览器(webview)添加Promise兼容(Set等其他es6新api同理)
因为小程序端没办法像网页端那样拿到全局变量(比如window)
__所以即使有相关兼容的代码,也加不到全局作用域里去__

如果确定目标浏览器不支持Promise的话,可以直接在github上找相关兼容库,直接进行`import`
如Promise:https://github.com/then/promise