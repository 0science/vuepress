<template><div><p>[TOC]</p>
<h2 id="_1-创建数组" tabindex="-1"><a class="header-anchor" href="#_1-创建数组"><span>1.创建数组</span></a></h2>
<h3 id="使用new-array-创建数组" tabindex="-1"><a class="header-anchor" href="#使用new-array-创建数组"><span>使用new Array() 创建数组</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>  // 元素值类型为字符型
  var area = new Array('Beijing', 'Shanghai', 'Shenzhen');
  // 元素值类型为数值型
  var score = new Array(56, 68, 98, 44);
  // 元素值类型为混合型
  var mix = new Array(123, 'abc', null, true, undefined);
  // 空数组
  var arr1 = new Array();  // 或 var arr2 = new Array;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-创建数组" tabindex="-1"><a class="header-anchor" href="#使用-创建数组"><span>使用 [ ] 创建数组</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>var weather = ['wind', 'fine',];      // 相当于：new Array('wind', 'fine',)
var empty = [];                       // 相当于：new Array
var mood = ['sad', , , ,'happy'];     // 控制台输出mood：(5) ["sad", empty × 3, "happy"]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-操作数组" tabindex="-1"><a class="header-anchor" href="#_2-操作数组"><span>2.操作数组</span></a></h2>
<h3 id="获取数组长度" tabindex="-1"><a class="header-anchor" href="#获取数组长度"><span>获取数组长度</span></a></h3>
<p>使用.length</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>var arr1 = [78, 88, 98];
var arr2 = ['a', , , , 'b', 'c'];
console.log(arr1.length);   // 输出结果为：3
console.log(arr2.length);   // 输出结果为：6
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置数组长度" tabindex="-1"><a class="header-anchor" href="#设置数组长度"><span>设置数组长度</span></a></h3>
<p>使用.length并初始化
大于留空
小于删除</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>var arr1 = [];
arr1.length = 5;
console.log(arr1);      // 输出结果：(5) [empty × 5]
var arr2 = [1, 2, 3];
arr2.length = 4; 
console.log(arr2);      // 输出结果：(4) [1, 2, 3, empty]
var arr3 = ['a', 'b'];
arr3.length = 2; 
console.log(arr3);      // 输出结果：(2) ["a", "b"]
var arr4 = ['hehe', 'xixi', 'gugu', 'jiujiu'];
arr4.length = 3; 
console.log(arr4);      // 输出结果：(3) ["hehe", "xixi", "gugu"]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="遍历数组" tabindex="-1"><a class="header-anchor" href="#遍历数组"><span>遍历数组</span></a></h3>
<p>for in 循环</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>var navlistArr = ['首页','新闻','关于'];
var str = '&lt;ul>';
for(var i in navlistArr){
    str += '&lt;li>&lt;a>'+ navlistArr[i] +'&lt;/a>&lt;/li>';
}
str += '&lt;/ul>';
document.getElementById('navlist').innerHTML = str;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-操作元素" tabindex="-1"><a class="header-anchor" href="#_3-操作元素"><span>3.操作元素</span></a></h2>
<p>使用 数组名[下标]的方式</p>
<h3 id="增加元素" tabindex="-1"><a class="header-anchor" href="#增加元素"><span>增加元素</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>// 为空数组添加元素
var height = [];
height[5] =  183;
height[0] =  175;
height[3] =  150;
console.log(height);      // 输出结果：(6) [175, empty × 2, 150, empty, 183]

// 为非空数组添加元素
var arr = ['Asa', 'Taylor'];
arr[2] = 'Tom';
arr[3] =  'Jack';
console.log(arr);         // 输出结果：(4) ["Asa", "Taylor", "Tom", "Jack"]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除元素" tabindex="-1"><a class="header-anchor" href="#删除元素"><span>删除元素</span></a></h3>
<p>delete 数组名[下标]
删除后依旧占用空间</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>var stu = ['Tom', 'Jimmy', 'Lucy'];
console.log(stu);     // 输出结果：(3) ["Tom", "Jimmy", "Lucy"]
delete stu[1];        // 删除数组中第2个元素
console.log(stu);     // 输出结果：(3) ["Tom", empty, "Lucy"]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改元素" tabindex="-1"><a class="header-anchor" href="#修改元素"><span>修改元素</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>var arr = ['a', 'b', 'c', 'd'];
arr[2] = 123;
arr[3] = 456;
console.log(arr);         // 输出结果：(4) ["a", "b", 123, 456]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解构赋值</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>// 传统方式
var arr = [1, 2, 3];
var a = arr[0];
var b = arr[1];
var c = arr[2];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>// ES6解构赋值
var arr = [1, 2, 3];
[a, b] = arr;
console.log(a + ' - ' + b);     // 输出结果：1 - 2
var n1 = 4, n2 = 8;
[n1, n2] = [n2, n1];
console.log(n1 + ' - ' + n2);   // 输出结果：8 - 4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找数组" tabindex="-1"><a class="header-anchor" href="#查找数组"><span>查找数组</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>var arr = ['hello', 'JavaScript', 22.48, true];
console.log(arr[0]);
console.log(arr[2]);
console.log(arr);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-数组属性与方法" tabindex="-1"><a class="header-anchor" href="#_4-数组属性与方法"><span>4.数组属性与方法</span></a></h2>
<table>
<thead>
<tr>
<th>方法</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>push()</td>
<td>向数组尾部添加元素</td>
</tr>
<tr>
<td>pop()</td>
<td>删除数组尾部元素</td>
</tr>
<tr>
<td>shift()</td>
<td>删除数组头部元素</td>
</tr>
<tr>
<td>unshift()</td>
<td>向数组头部添加元素</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>方法</th>
<th>功能</th>
</tr>
</thead>
<tbody>
<tr>
<td>reverse()</td>
<td>反转数组</td>
</tr>
<tr>
<td>sort()</td>
<td>对数组元素进行排序</td>
</tr>
<tr>
<td>join()</td>
<td>将数组元素连接成字符串</td>
</tr>
<tr>
<td>concat()</td>
<td>连接两个数组</td>
</tr>
<tr>
<td>slice()</td>
<td>截取数组</td>
</tr>
<tr>
<td>splice()</td>
<td>删除数组元素</td>
</tr>
<tr>
<td>indexOf()</td>
<td>查找数组元素位置</td>
</tr>
<tr>
<td>forEach()</td>
<td>遍历数组</td>
</tr>
<tr>
<td>map()</td>
<td>映射数组</td>
</tr>
<tr>
<td>filter()</td>
<td>过滤数组</td>
</tr>
<tr>
<td>every()</td>
<td>判断数组元素是否满足条件</td>
</tr>
<tr>
<td>some()</td>
<td>判断数组元素是否满足条件</td>
</tr>
<tr>
<td>reduce()</td>
<td>数组元素累加</td>
</tr>
<tr>
<td>reduceRight()</td>
<td>数组元素累加</td>
</tr>
<tr>
<td>find()</td>
<td>查找数组元素</td>
</tr>
<tr>
<td>findIndex()</td>
<td>查找数组元素位置</td>
</tr>
<tr>
<td>fill()</td>
<td>填充数组</td>
</tr>
<tr>
<td>entries()</td>
<td>返回数组元素键值对</td>
</tr>
<tr>
<td>keys()</td>
<td>返回数组元素键名</td>
</tr>
<tr>
<td>values()</td>
<td>返回数组元素键值</td>
</tr>
<tr>
<td>Symbol.iterator()</td>
<td>返回数组迭代器</td>
</tr>
<tr>
<td>includes()</td>
<td>判断数组是否包含某个元素</td>
</tr>
<tr>
<td>Array.isArray()</td>
<td>判断是否为数组</td>
</tr>
<tr>
<td>Array.from()</td>
<td>将类数组对象转换为数组</td>
</tr>
<tr>
<td>Array.of()</td>
<td>将一组值转换为数组</td>
</tr>
<tr>
<td>indexOf()</td>
<td>查找数组元素位置</td>
</tr>
<tr>
<td>lastIndexOf()</td>
<td>查找数组元素位置</td>
</tr>
</tbody>
</table>
<h2 id="_5-map集合" tabindex="-1"><a class="header-anchor" href="#_5-map集合"><span>5.MAP集合</span></a></h2>
<h2 id="_6-set集合" tabindex="-1"><a class="header-anchor" href="#_6-set集合"><span>6.set集合</span></a></h2>
<h2 id="_7-迭代器" tabindex="-1"><a class="header-anchor" href="#_7-迭代器"><span>7.迭代器</span></a></h2>
</div></template>


