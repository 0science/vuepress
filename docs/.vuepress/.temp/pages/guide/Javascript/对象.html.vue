<template><div><h2 id="对象" tabindex="-1"><a class="header-anchor" href="#对象"><span>对象</span></a></h2>
<h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性"><span>特性</span></a></h3>
<p>封装性：隐藏细节，开放接口
继承性：继承另一个对象的成员
多态性：同一操作对不同对象，产生的结果不同</p>
<h3 id="定义对象" tabindex="-1"><a class="header-anchor" href="#定义对象"><span>定义对象</span></a></h3>
<p><code v-pre>var obj = {}</code></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>var obj = obj{
    name:"zhangsan",
    age:18,
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="json" tabindex="-1"><a class="header-anchor" href="#json"><span>JSON</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>{
    "name":"zhangsan",
    "age":18
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="访问对象成员" tabindex="-1"><a class="header-anchor" href="#访问对象成员"><span>访问对象成员</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>var obj = {
    name:"zhangsan",
    age:18
}
console.log(obj.name)
var introduce = function(){
    console.log("my name")
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="遍历对象" tabindex="-1"><a class="header-anchor" href="#遍历对象"><span>遍历对象</span></a></h3>
<p>for ··· in</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>var obj ={
    name:"zhangsan",
    age:18
}
for(var k in obj){
    console.log(k,obj[k])
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="对象是否存在" tabindex="-1"><a class="header-anchor" href="#对象是否存在"><span>对象是否存在</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>var obj= {
    name:"zhangsan",
    age:18
}
console.log('name' in obj)
console.log('sex' in obj)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="深浅拷贝" tabindex="-1"><a class="header-anchor" href="#深浅拷贝"><span>深浅拷贝</span></a></h3>
<p>浅拷贝：复制后相同,改一个变两个，节省内存</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>var obj ={
    name:"zhangsan",
    age:18
}
var obj2 = obj
obj2.name = "lisi"
console.log(obj === obj2)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>深拷贝：复制后不同，改一个不影响另一个</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>var obj ={
    name:"zhangsan",
    age:18
}
var obj2 = function(obj){
    for(i in obj){
        obj2[i] = obj[i]
    }
}
obj2.name = "lisi"
console.log(obj === obj2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="构造函数" tabindex="-1"><a class="header-anchor" href="#构造函数"><span>构造函数</span></a></h3>
<p>构造函数：创建相同特征的对象</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>function factory(name,age){
    var o = {}
    o.name = name
    o.age = age
}
o1 = factory("lisi",24)
o2 = factory("wangwu",25)
console.log(o1)
console.log(o2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>类：</p>
<p>实例化：通过类创建对象的过程</p>
<p>内置构造函数：</p>
<p><code v-pre>{}.constructor</code></p>
<p>[native code]表示是原生代码</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>var obj = new Object()
var str = new String("123")
console.log(obj.constructor)
console.log(str.constructor)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="自定义构造函数" tabindex="-1"><a class="header-anchor" href="#自定义构造函数"><span>自定义构造函数</span></a></h3>
<ol>
<li>帕斯卡命名法：首写字母大写</li>
<li>使用this指向实例化对象</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>function Person(name,age){
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log("Hello,my name is "+ this.name)
    }
}
var p1 = new Person("zhangsan",18)
var p2 = new Person("lisi",20)
p1.sayHello()
console.log(p1)
p2.sayHello()
console.log(p2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="class关键字" tabindex="-1"><a class="header-anchor" href="#class关键字"><span>class关键字</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    introduce(){
        console.log('我是' + this.name + ',今年'+this.age + '岁')
    }
}
var p = new Person("zhangsan",18)
p.introduce()
console.log(p)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="私有成员" tabindex="-1"><a class="header-anchor" href="#私有成员"><span>私有成员</span></a></h3>
<p>私有成员:构造函数中用var定义的成员</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>function Person(){
    var name = "zhangsan"
    this.getName = function(){
        return name
    }
}
var p = new Person()
console.log(p.name)
console.log(p.getName())
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="return-关键字" tabindex="-1"><a class="header-anchor" href="#return-关键字"><span>return 关键字</span></a></h3>
<p>return + 基本类型 = 数据
return +引用类型 = 对象</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>//返回基本数据类型
function Person(){
    obj =this
    return 123
}
var obj,p= new Person()
console.log(obj === p)
//返回引用数据类型
function Person2(){
    obj2 = this
    return {}
}
var obj2,p2 = new Person2()
console.log(obj2 === p2)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="this" tabindex="-1"><a class="header-anchor" href="#this"><span>this</span></a></h3>
<ol>
<li>指向构造函数内部对象</li>
<li>直接调用函数调用全局对象</li>
<li>对象的方法，指向对象</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>function obj(){
    return this
}
var o ={
    name :"zhangsan",
    function:obj
}
console.log(obj() == window)
console.log(o.function() === o)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="更改this指向" tabindex="-1"><a class="header-anchor" href="#更改this指向"><span>更改this指向</span></a></h3>
<p>apply()
call()</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>function obj(){
    console.log(this.name)
}
obj.apply({name:'张三'})
obj.call({name:'李四'})
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="string对象" tabindex="-1"><a class="header-anchor" href="#string对象"><span>String对象</span></a></h3>
<table>
<thead>
<tr>
<th>方法</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>length</td>
<td>字符串长度</td>
</tr>
<tr>
<td>charAt()</td>
<td>从0开始获取字符位置</td>
</tr>
<tr>
<td>indexOf()</td>
<td>获取字符首次出现位置</td>
</tr>
<tr>
<td>lastIndexOf()</td>
<td>获取字符最后出现位置</td>
</tr>
<tr>
<td>substr()</td>
<td>按位置截取字符串</td>
</tr>
<tr>
<td>substring()</td>
<td>按长度截取字符串</td>
</tr>
<tr>
<td>toLowerCase()</td>
<td>转小写</td>
</tr>
<tr>
<td>toUpperCase()</td>
<td>转大写</td>
</tr>
<tr>
<td>trim()</td>
<td>去除首尾空格</td>
</tr>
<tr>
<td>replace()</td>
<td>替换字符串</td>
</tr>
<tr>
<td>split()</td>
<td>分割字符串</td>
</tr>
</tbody>
</table>
</div></template>


