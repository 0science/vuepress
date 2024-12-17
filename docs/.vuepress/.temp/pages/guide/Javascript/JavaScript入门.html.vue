<template><div><h2 id="javascript入门" tabindex="-1"><a class="header-anchor" href="#javascript入门"><span>JavaScript入门</span></a></h2>
<p><strong>定义</strong>：一种运行在客户端（浏览器）的编程语言
<strong>作用</strong>：实现人机交互效果</p>
<h3 id="内嵌式" tabindex="-1"><a class="header-anchor" href="#内嵌式"><span>内嵌式</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;script>
	JavaScript语句
&lt;/script>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="外链式" tabindex="-1"><a class="header-anchor" href="#外链式"><span>外链式</span></a></h3>
<p><code v-pre> &lt;script src=&quot;js/test.js&quot;&gt;&lt;/script&gt;</code></p>
<h3 id="行内式" tabindex="-1"><a class="header-anchor" href="#行内式"><span>行内式</span></a></h3>
<p><code v-pre>&lt;a href=&quot;javascript:alert('单击超链接')&quot;&gt;点击这里&lt;/a&gt;</code></p>
<pre><code>注意：&lt;script&gt;放在&lt;body&gt;标签底部可以降低页面下载的影响
</code></pre>
<table>
<thead>
<tr>
<th>属性</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>language</td>
<td>脚本语言及脚本</td>
</tr>
<tr>
<td>src</td>
<td>外部脚本路径</td>
</tr>
<tr>
<td>type</td>
<td>脚本语言，代替language</td>
</tr>
<tr>
<td>defer</td>
<td>后执行</td>
</tr>
</tbody>
</table>
<h3 id="注释" tabindex="-1"><a class="header-anchor" href="#注释"><span>注释</span></a></h3>
<p><strong>单行注释</strong>：<code v-pre>//</code>
<strong>多行注释</strong>：<code v-pre>/**/</code></p>
<pre><code>快捷键为 `ctrl + /   shift + alt + A`
</code></pre>
<h3 id="语句" tabindex="-1"><a class="header-anchor" href="#语句"><span>语句</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>页面输出</td>
<td>document.write()</td>
<td></td>
</tr>
<tr>
<td>警告框输出</td>
<td>alert()</td>
<td></td>
</tr>
<tr>
<td>控制台输出</td>
<td>console.log()</td>
<td></td>
</tr>
<tr>
<td>对话框输入</td>
<td>prompt()</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="javascript基础" tabindex="-1"><a class="header-anchor" href="#javascript基础"><span>JavaScript基础</span></a></h2>
<h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h3>
<table>
<thead>
<tr>
<th>概念</th>
<th>解释</th>
<th>注意</th>
</tr>
</thead>
<tbody>
<tr>
<td>变量</td>
<td>计算机中用来存储数据的“容器”</td>
<td>var、let</td>
</tr>
<tr>
<td>声明</td>
<td></td>
<td></td>
</tr>
<tr>
<td>标识符</td>
<td></td>
<td></td>
</tr>
<tr>
<td>关键字</td>
<td></td>
<td></td>
</tr>
<tr>
<td>变量名</td>
<td></td>
<td>1. 只能是字母、数字、下划线、$，且不能能数字开头<br>2.字母区分大小写，如 Age 和 age 是不同的变量<br>3.JavaScript 内部已占用于单词（关键字或保留字）不允许使用<br>4.尽量保证变量具有一定的语义，见字知义</td>
</tr>
<tr>
<td>常量</td>
<td>值不改变的量</td>
<td>常量不允许重新赋值,声明的时候必须赋值</td>
</tr>
</tbody>
</table>
<h3 id="关键字-let-和-var" tabindex="-1"><a class="header-anchor" href="#关键字-let-和-var"><span>关键字 <code v-pre>let</code> 和 <code v-pre>var</code></span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th>var</th>
<th>let</th>
</tr>
</thead>
<tbody>
<tr>
<td>声明并赋值</td>
<td>√</td>
<td>√</td>
</tr>
<tr>
<td>重复声明</td>
<td>√</td>
<td>×</td>
</tr>
<tr>
<td>声明多个变量并赋值</td>
<td>√</td>
<td>√</td>
</tr>
</tbody>
</table>
<pre><code>注意：顺序执行；大小写敏感；空格省略，换行断句；分号可无
</code></pre>
<h3 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h3>
<p><strong>作用</strong>：存储一组变量
<strong>取值</strong>：数组名[下标]
<strong>元素</strong>：数组中保存的每个数据都叫数组元素
<strong>下标</strong>：数组中数据的编号
<strong>长度</strong>：数组中数据的个数，通过数组的length属性获得</p>
<h3 id="基本数据类型" tabindex="-1"><a class="header-anchor" href="#基本数据类型"><span>基本数据类型</span></a></h3>
<table>
<thead>
<tr>
<th>数据类型</th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>字符串型</td>
<td>string</td>
<td>单双反引号包裹</td>
</tr>
<tr>
<td>数值型</td>
<td>number</td>
<td>正数、负数、小数</td>
</tr>
<tr>
<td>布尔型</td>
<td>boolean</td>
<td>true、false</td>
</tr>
<tr>
<td>未定义型</td>
<td>undefined</td>
<td>只声明，未赋值</td>
</tr>
<tr>
<td>空</td>
<td>null</td>
<td>有值为空</td>
</tr>
</tbody>
</table>
<pre><code> typeof 关键字检测数据类型
 乘、除、取余优先级大于加、减
 加号，数字相加，字符相连
</code></pre>
<h3 id="模板字符串" tabindex="-1"><a class="header-anchor" href="#模板字符串"><span>模板字符串</span></a></h3>
<p><strong>作用</strong>：拼接字符</p>
<p>反引号包裹
内容拼接变量时，用 ${ } 包住变量</p>
<h3 id="数据类型转换" tabindex="-1"><a class="header-anchor" href="#数据类型转换"><span>数据类型转换</span></a></h3>
<h4 id="隐式转换" tabindex="-1"><a class="header-anchor" href="#隐式转换"><span>隐式转换</span></a></h4>
<p><strong>定义</strong>：系统内部自动将数据类型进行转换
<strong>规则</strong>：</p>
<ol>
<li>+ 号两边只要有一个是字符串，都会把另外一个转成字符串</li>
<li>- * / 等都会把数据转成数字类型</li>
</ol>
<h4 id="显示转换" tabindex="-1"><a class="header-anchor" href="#显示转换"><span>显示转换</span></a></h4>
<p><strong>定义</strong>：避免因隐式转换带来的问题</p>
<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>Number(数据)</td>
<td>转数字</td>
<td></td>
</tr>
<tr>
<td>parseInt(数据)</td>
<td>只保留整数</td>
<td></td>
</tr>
<tr>
<td>parseFloat(数据)</td>
<td>保留小数</td>
<td></td>
</tr>
<tr>
<td>String(数据)</td>
<td>转字符</td>
<td></td>
</tr>
<tr>
<td>变量.toString(进制)</td>
<td>转字符</td>
<td></td>
</tr>
</tbody>
</table>
<p><img src="https://cdn.nlark.com/yuque/0/2024/png/26841888/1711528245269-490db65a-ec16-4f4a-aacd-3fcad84d5c51.png#averageHue=%23f7f6f3&amp;clientId=u77771664-34fa-4&amp;from=paste&amp;id=uace12986&amp;originHeight=542&amp;originWidth=736&amp;originalType=url&amp;ratio=1.25&amp;rotation=0&amp;showTitle=false&amp;status=done&amp;style=none&amp;taskId=u053907c9-3b01-4df5-ab40-a6413c1b20b&amp;title=" alt=""></p>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>名称</td>
<td>符号</td>
</tr>
<tr>
<td>单行注释</td>
<td>//</td>
</tr>
<tr>
<td>多行注释</td>
<td>/**/</td>
</tr>
<tr>
<td>相等</td>
<td>==</td>
</tr>
<tr>
<td>四则运算</td>
<td>+-*/</td>
</tr>
<tr>
<td>比较</td>
<td>&gt;&lt;</td>
</tr>
</tbody>
</table>
<h3 id="运算符" tabindex="-1"><a class="header-anchor" href="#运算符"><span>运算符</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>赋值运算符</td>
<td>+=</td>
<td></td>
</tr>
<tr>
<td>一元运算符</td>
<td>++ --</td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span><strong>函数</strong></span></a></h3>
<h4 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span><strong>定义</strong></span></a></h4>
<p>模块化的代码，封装好的代码，只管用就行了</p>
<h4 id="返回值" tabindex="-1"><a class="header-anchor" href="#返回值"><span><strong>返回值</strong></span></a></h4>
<p>输出，执行完函数返回的结果</p>
<h4 id="参数" tabindex="-1"><a class="header-anchor" href="#参数"><span><strong>参数</strong></span></a></h4>
<p>输入，执行前带入的值</p>
<h4 id="自定义函数" tabindex="-1"><a class="header-anchor" href="#自定义函数"><span><strong>自定义函数</strong></span></a></h4>
<p>除去内置函数外，自己定义的函数</p>
<h3 id="_5-对象" tabindex="-1"><a class="header-anchor" href="#_5-对象"><span><strong>5.对象</strong></span></a></h3>
<h4 id="定义-1" tabindex="-1"><a class="header-anchor" href="#定义-1"><span><strong>定义</strong></span></a></h4>
<p>属性和方法组成，属性=变量，方法=函数</p>
<h4 id="windows对象" tabindex="-1"><a class="header-anchor" href="#windows对象"><span><strong>windows对象</strong></span></a></h4>
<p>windows.console属性</p>
<p>windows.document属性</p>
<p>windows.alert( )方法</p>
<p>windows.prompt( )方法</p>
<h4 id="document对象" tabindex="-1"><a class="header-anchor" href="#document对象"><span><strong>document对象</strong></span></a></h4>
<p>文档交互</p>
<h4 id="string对象" tabindex="-1"><a class="header-anchor" href="#string对象"><span><strong>string对象</strong></span></a></h4>
<p>直接定义字符串作为对象使用</p>
<h4 id="自定义对象" tabindex="-1"><a class="header-anchor" href="#自定义对象"><span><strong>自定义对象</strong></span></a></h4>
<p>除去内置对象外，自己定义的函数</p>
<h3 id="_6-事件" tabindex="-1"><a class="header-anchor" href="#_6-事件"><span><strong>6.事件</strong></span></a></h3>
<h4 id="定义-2" tabindex="-1"><a class="header-anchor" href="#定义-2"><span><strong>定义</strong></span></a></h4>
<p>交互行为</p>
</div></template>


