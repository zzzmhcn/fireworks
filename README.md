# fireworks 烟花特效
#### 介绍
来源jq22
http://www.jq22.com/jquery-info3511
原作者ID @菲利克斯诗音

#### 在线演示
https://tczmh.gitee.io/fireworks

#### 源码Git地址
Gitee: https://gitee.com/tczmh/fireworks
Github: https://github.com/18121259693/fireworks

#### 主要内容
原版内容非常酷炫
本人只是精简代码到只留烟花
方便之后用在其他项目

#### 用法
烟花的核心部分只有3个

一个透明全屏的div
```html
<div id="fireworks"></div>
```
推荐样式
```css
position: fixed;
top: 0px;
z-index: 9999;
```

引入依赖 sketch.min.js
```javascript
<script src="js/sketch.min.js"></script>
```

以及引入最终的实现的js
(默认绘画在id=fireworks的DIV上，可以在代码里修改)
```javascript
<script src="js/sketch.min.js"></script>
```