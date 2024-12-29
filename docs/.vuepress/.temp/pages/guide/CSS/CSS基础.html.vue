<template><div><h2 id="一、css基础" tabindex="-1"><a class="header-anchor" href="#一、css基础"><span>一、CSS基础</span></a></h2>
<h3 id="特性" tabindex="-1"><a class="header-anchor" href="#特性"><span>特性</span></a></h3>
<ol>
<li>层叠性：同一元素，不同选择器，不同属性，不同值，最终取最后一个。</li>
<li>继承性：子元素默认继承父元素的样式。</li>
</ol>
<h3 id="开发者文档" tabindex="-1"><a class="header-anchor" href="#开发者文档"><span>开发者文档</span></a></h3>
<p><a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer">兼容性<ExternalLinkIcon/></a></p>
<table>
<thead>
<tr>
<th>分类</th>
<th>优点</th>
<th>缺点</th>
<th>使用频率</th>
<th>作用范围</th>
</tr>
</thead>
<tbody>
<tr>
<td>行内样式</td>
<td>优先级最高</td>
<td>结构与样式未分离<br>代码结构混乱<br>样式不能复用</td>
<td>很低</td>
<td>当前标签</td>
</tr>
<tr>
<td>内部样式</td>
<td>样式可复用<br>代码结构清晰</td>
<td>结构与样式未彻底分离<br>样式不能多页面复用</td>
<td>一般</td>
<td>当前页面</td>
</tr>
<tr>
<td>外部样式</td>
<td>样式可多页面复用<br>代码结构清晰<br>可触发浏览器的缓存机制<br>结构与样式彻底分离</td>
<td>需要引入才能使用</td>
<td>最高</td>
<td>多个页面</td>
</tr>
</tbody>
</table>
<h3 id="元素关系" tabindex="-1"><a class="header-anchor" href="#元素关系"><span>元素关系</span></a></h3>
<table>
<thead>
<tr>
<th>关系</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>父元素</td>
<td>直接包裹某个元素的元素，就是该元素的父元素。</td>
</tr>
<tr>
<td>子元素</td>
<td>被父元素直接包含的元素。</td>
</tr>
<tr>
<td>兄弟元素</td>
<td>具有相同父元素的元素，互为兄弟元素。</td>
</tr>
<tr>
<td>祖先元素</td>
<td>父亲的父亲的父亲……，都是祖先。</td>
</tr>
<tr>
<td>后代元素</td>
<td>儿子的儿子的儿子……，都是后代。</td>
</tr>
</tbody>
</table>
<h3 id="语法规范" tabindex="-1"><a class="header-anchor" href="#语法规范"><span>语法规范</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>&lt;!-- ![alt text](image.png) -->
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>选择器</strong>：找到要添加样式的元素。</p>
<p><strong>声明块</strong>：设置具体的样式（声明块是由一个或多个声明组成的），</p>
<blockquote>
<p>声明的格式为： 属性名: 属性值;
声明后加分号
选择器与声明块之间，属性名与属性值之间，均有一个空格</p>
</blockquote>
<h3 id="注释规范" tabindex="-1"><a class="header-anchor" href="#注释规范"><span>注释规范</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>    /* 给h1元素添加样式 */
    h1 {
    	/* 设置文字颜色为红色 */
    	color: red;
    	/* 设置文字大小为40px */
    	font-size: 40px
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="代码风格" tabindex="-1"><a class="header-anchor" href="#代码风格"><span>代码风格</span></a></h3>
<p><strong>展开风格</strong>：开发时推荐，便于维护和调试。</p>
<p><strong>写法</strong>：</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>    h1 {
    	color: red;
    	font-size: 40px;
    }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>紧凑风格</strong>：项目上线时推荐，可减小文件体积。</p>
<p><strong>写法</strong>：<code v-pre>h1{color:red;font-size:40px;}</code></p>
<table>
<thead>
<tr>
<th>属性</th>
<th>名称</th>
<th>属性值</th>
<th>举例</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>color</td>
<td>字体颜色</td>
<td>rgb<br>rgba<br>hsl<br>hsla</td>
<td>-</td>
<td>IE 浏览器不支持 HEXA ，但支持 HEX<br>色相、饱和度、亮度</td>
</tr>
<tr>
<td>font-size</td>
<td>字体大小</td>
<td>px</td>
<td>-</td>
<td>Chrome 浏览器支持的最小文字为 12px ，默认的文字大小为 16px ，并且 0px 会自动消失。</td>
</tr>
<tr>
<td>font-family</td>
<td>字体族</td>
<td>字体名称</td>
<td><code v-pre>div { font-family: &quot;STCaiyun&quot;,&quot;Microsoft YaHei&quot;,sans-serif }</code></td>
<td>可以设置多个字体，按照从左到右的顺序逐个查找</td>
</tr>
<tr>
<td>font-style</td>
<td>字体风格</td>
<td>normal<br>italic<br>oblique</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>font-weight</td>
<td>字体粗细</td>
<td>lighter（100~300）<br>normal（400~500）<br>bold（600+）<br>bolder</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>font</td>
<td>字体复合写法</td>
<td><code v-pre>font: bold 100px '微软雅黑'</code></td>
<td>-</td>
<td>1. 字体大小、字体族必须都写上。<br>2. 字体族必须是最后一位、字体大小必须是倒数第二位。<br>3. 各个属性间用空格隔开。</td>
</tr>
<tr>
<td>letter-spacing</td>
<td>文本间距</td>
<td>px</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>text-decoration</td>
<td>文本修饰</td>
<td>none<br>underline<br>overline<br>line-through<br>dotted<br>wavy</td>
<td>-</td>
<td>-</td>
</tr>
<tr>
<td>text-indent</td>
<td>文本缩进</td>
<td>px</td>
<td>-</td>
<td><strong>作用</strong>：控制文本首字母的缩进</td>
</tr>
<tr>
<td>text-align</td>
<td>文本对齐_水平</td>
<td>left<br>right<br>center</td>
<td>-</td>
<td><strong>作用</strong>：控制文本的水平对齐方式</td>
</tr>
<tr>
<td>line-height</td>
<td>行高</td>
<td>像素、百分比、数字（1.5之类的）</td>
<td>-</td>
<td><strong>作用</strong>：控制一行文字的高度，控制行与行之间的距离</td>
</tr>
<tr>
<td>vertical-align</td>
<td>文本对齐_垂直</td>
<td>baseline<br>top<br>middle<br>bottom</td>
<td>-</td>
<td><strong>作用</strong>：用于指定同一行元素之间，或 表格单元格 内文字的 垂直对齐方式<br><strong>备注</strong>：vertical-align 不能控制块元素</td>
</tr>
</tbody>
</table>
<h3 id="列表" tabindex="-1"><a class="header-anchor" href="#列表"><span>列表</span></a></h3>
<table>
<thead>
<tr>
<th>CSS属性名</th>
<th>功能</th>
<th>属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td>list-style-type</td>
<td>设置列表符号</td>
<td>none:无<br>square:实心方块<br>disc:圆形<br>decimal:数字<br>lower-roman:小写罗马字<br>upper-roman:大写罗马字<br>lower-alpha:小写字母<br>upper-alpha:大写字母</td>
</tr>
<tr>
<td>list-style-position</td>
<td>设置列表符号的位置</td>
<td>inside : 在li的里面<br>outside:在li的外边</td>
</tr>
<tr>
<td>list-style-image</td>
<td>自定义列表符号</td>
<td>url(图片地址)</td>
</tr>
<tr>
<td>list-style</td>
<td>复合属性</td>
<td>没有数量、顺序的要求</td>
</tr>
</tbody>
</table>
<h3 id="边框" tabindex="-1"><a class="header-anchor" href="#边框"><span>边框</span></a></h3>
<table>
<thead>
<tr>
<th>CSS属性名</th>
<th>功能</th>
<th>属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td>border-width</td>
<td>边框宽度</td>
<td>CSS中可用的长度值</td>
</tr>
<tr>
<td>border-color</td>
<td>边框颜色</td>
<td>CSs中可用的颜色值</td>
</tr>
<tr>
<td>border-style</td>
<td>边框风格</td>
<td>none默认值<br>solid实线 <br>dashed虚线<br>dotted点线  <br>double双实线</td>
</tr>
<tr>
<td>border</td>
<td>边框复合属性</td>
<td>没有数量、顺序的要求</td>
</tr>
</tbody>
</table>
<h3 id="表格" tabindex="-1"><a class="header-anchor" href="#表格"><span>表格</span></a></h3>
<table>
<thead>
<tr>
<th>CSS属性名</th>
<th>功能</th>
<th>属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td>table-layout</td>
<td>设置列宽度</td>
<td>auto:自动，列宽根据内容计算(默认值)。<br>fixed:固定列宽，平均分。</td>
</tr>
<tr>
<td>border-spacing</td>
<td>单元格间距</td>
<td>CSS中可用的长度值。 <br>生效的前提：单元格边框不能合并。</td>
</tr>
<tr>
<td>border-collapse</td>
<td>合并单元格边框</td>
<td>collapse:合并  <br>separate:不合并</td>
</tr>
<tr>
<td>empty-cells</td>
<td>隐藏没有内容的单元格</td>
<td>show:显示，默认  <br>hide:隐藏<br>生效前提：单元格不能合并。</td>
</tr>
<tr>
<td>caption-side</td>
<td>设置表格标题位置</td>
<td>top:上面(默认值)  <br>bottom:在表格下面</td>
</tr>
</tbody>
</table>
<h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h3>
<table>
<thead>
<tr>
<th>css属性名</th>
<th>功能</th>
<th>属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td>background-color</td>
<td>设置背景颜色</td>
<td>符合cSS中颜色规范的值。  <br>  <br>默认背景颜色是transparent。</td>
</tr>
<tr>
<td>background-image</td>
<td>设置背景图片</td>
<td>url(图片的地址)</td>
</tr>
<tr>
<td>background-repeat</td>
<td>设置背景重复方  <br>  <br>式</td>
<td>repeat:重复，铺满整个元素，默认值。  <br>  <br>repeat-x:只在水平方向重复。  <br>  <br>repeat-y:只在垂直方向重复。  <br>  <br>no-repeat:不重复。</td>
</tr>
<tr>
<td>background-position</td>
<td>设置背景图位置</td>
<td>通过关键字设置位置：  <br>写两个值，用空格隔开  <br>  <br>水 平 ：left、center、right  <br>  <br>垂 直 ：top、center、bottom  <br>  <br>如果只写一个值，另一个方向的值取center  <br>  <br>  <br>通过长度指定坐标位置：  <br>  <br>以元素左上角，为坐标原点，设置图片左上角的  <br>位置。  <br>  <br>两个值，分别是x坐标和y坐标。  <br>  <br>只写一个值，会被当做x坐标，y坐标取  <br>  <br>center</td>
</tr>
<tr>
<td>background</td>
<td>复合属性</td>
<td>没有数量和顺序要求</td>
</tr>
</tbody>
</table>
<h3 id="鼠标" tabindex="-1"><a class="header-anchor" href="#鼠标"><span>鼠标</span></a></h3>
<table>
<thead>
<tr>
<th>CSS属性名</th>
<th>功能</th>
<th>属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td>Cursor</td>
<td>设置鼠标光标的样式</td>
<td>pointer  小手  <br>move:移动图标  <br>text:文字选择器  <br>crosshair:十字架  <br>wait:等待  <br>help:帮助</td>
</tr>
</tbody>
</table>
<h2 id="二、选择器" tabindex="-1"><a class="header-anchor" href="#二、选择器"><span>二、选择器</span></a></h2>
<h3 id="选择器汇总" tabindex="-1"><a class="header-anchor" href="#选择器汇总"><span>选择器汇总</span></a></h3>
<table>
<thead>
<tr>
<th>标志</th>
<th>选择器类型</th>
<th>作用</th>
<th>写法示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>*</td>
<td>通配选择器</td>
<td>选中所有标签，一般用于清除样式。</td>
<td><code v-pre>* { color: orange; font-size: 40px; }</code></td>
</tr>
<tr>
<td></td>
<td>元素选择器</td>
<td>为某些元素统一设置样式</td>
<td><code v-pre>h1 { color: orange; font-size: 40px; }</code><br><code v-pre>p { color: blue; font-size: 60px; }</code></td>
</tr>
<tr>
<td>.</td>
<td>类选择器</td>
<td>选中所有特定类名(class值)的元素</td>
<td><code v-pre>.speak { color: red; }</code><br><code v-pre>.answer { color: blue; }</code></td>
</tr>
<tr>
<td>#</td>
<td>ID 选择器</td>
<td>选中特定id值的那个元素(唯一的)</td>
<td><code v-pre>#earthy { color: red; font-size: 60px; }</code></td>
</tr>
<tr>
<td>A B</td>
<td>后代选择器</td>
<td>选中指定元素中，符合要求的后代元素</td>
<td><code v-pre>ul li { color: red; }</code><br><code v-pre>ul li a { color: orange; }</code><br><code v-pre>.subject li { color: blue; }</code><br><code v-pre>.subject li.front-end { color: blue; }</code></td>
</tr>
<tr>
<td>A &gt; B</td>
<td>子代选择器</td>
<td>选中指定元素中，符合要求的子元素</td>
<td><code v-pre>div &gt; a { color: red; }</code><br><code v-pre>.persons &gt; a { color: red; }</code></td>
</tr>
<tr>
<td>A + B</td>
<td>相邻兄弟选择器</td>
<td>选中指定元素后，符合条件的相邻兄弟元素</td>
<td><code v-pre>div + p { color: red; }</code></td>
</tr>
<tr>
<td>A ~ B</td>
<td>通用兄弟选择器</td>
<td>选中指定元素后，符合条件的所有兄弟元素</td>
<td><code v-pre>div ~ p { color: red; }</code></td>
</tr>
</tbody>
</table>
<h3 id="属性选择器" tabindex="-1"><a class="header-anchor" href="#属性选择器"><span>属性选择器</span></a></h3>
<table>
<thead>
<tr>
<th>标志</th>
<th>选择器类型</th>
<th>作用</th>
<th>写法示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>[attr]</td>
<td>属性选择器</td>
<td>选中具有某个属性的元素</td>
<td><code v-pre>div[title] { color: red; }</code></td>
</tr>
<tr>
<td>[attr=value]</td>
<td>属性选择器</td>
<td>选中包含某个属性，且属性值等于指定值的元素</td>
<td><code v-pre>div[title=&quot;atguigu&quot;] { color: red; }</code></td>
</tr>
<tr>
<td>[attr^=value]</td>
<td>属性选择器</td>
<td>选中包含某个属性，且属性值以指定的值开头的元素</td>
<td><code v-pre>div[title^=&quot;a&quot;] { color: red; }</code></td>
</tr>
<tr>
<td>[attr$=value]</td>
<td>属性选择器</td>
<td>选中包含某个属性，且属性值以指定的值结尾的元素</td>
<td><code v-pre>div[title$=&quot;u&quot;] { color: red; }</code></td>
</tr>
<tr>
<td>[attr*=value]</td>
<td>属性选择器</td>
<td>选中包含某个属性，属性值包含指定值的元素</td>
<td><code v-pre>div[title*=&quot;g&quot;] { color: red; }</code></td>
</tr>
</tbody>
</table>
<h3 id="伪类选择器" tabindex="-1"><a class="header-anchor" href="#伪类选择器"><span>伪类选择器</span></a></h3>
<table>
<thead>
<tr>
<th>标志</th>
<th>选择器类型</th>
<th>作用</th>
<th>写法示例</th>
</tr>
</thead>
<tbody>
<tr>
<td>:link</td>
<td>伪类选择器</td>
<td>选中超链接未被访问的状态</td>
<td><code v-pre>a:link { color: blue; }</code></td>
</tr>
<tr>
<td>:visited</td>
<td>伪类选择器</td>
<td>选中超链接访问过的状态</td>
<td><code v-pre>a:visited { color: purple; }</code></td>
</tr>
<tr>
<td>:hover</td>
<td>伪类选择器</td>
<td>选中鼠标悬停的状态</td>
<td><code v-pre>a:hover { color: red; }</code></td>
</tr>
<tr>
<td>:active</td>
<td>伪类选择器</td>
<td>选中按下鼠标不松开的状态</td>
<td><code v-pre>a:active { color: yellow; }</code></td>
</tr>
<tr>
<td>:focus</td>
<td>伪类选择器</td>
<td>选中获取焦点的状态</td>
<td><code v-pre>input:focus { border: 2px solid blue; }</code></td>
</tr>
<tr>
<td>:first-child</td>
<td>伪类选择器</td>
<td>选中所有兄弟元素中的第一个</td>
<td><code v-pre>li:first-child { color: green; }</code></td>
</tr>
<tr>
<td>:last-child</td>
<td>伪类选择器</td>
<td>选中所有兄弟元素中的最后一个</td>
<td><code v-pre>li:last-child { color: green; }</code></td>
</tr>
<tr>
<td>:nth-child(n)</td>
<td>伪类选择器</td>
<td>选中所有兄弟元素中的第 n 个</td>
<td><code v-pre>li:nth-child(2) { color: green; }</code></td>
</tr>
<tr>
<td>:first-of-type</td>
<td>伪类选择器</td>
<td>选中所有同类型兄弟元素中的第一个</td>
<td><code v-pre>p:first-of-type { color: green; }</code></td>
</tr>
<tr>
<td>:last-of-type</td>
<td>伪类选择器</td>
<td>选中所有同类型兄弟元素中的最后一个</td>
<td><code v-pre>p:last-of-type { color: green; }</code></td>
</tr>
<tr>
<td>:nth-of-type(n)</td>
<td>伪类选择器</td>
<td>选中所有同类型兄弟元素中的第 n 个</td>
<td><code v-pre>p:nth-of-type(2) { color: green; }</code></td>
</tr>
</tbody>
</table>
<h3 id="选择器优先级" tabindex="-1"><a class="header-anchor" href="#选择器优先级"><span>选择器优先级</span></a></h3>
<p>!important &gt; 行内样式 &gt; ID选择器 &gt; 类选择器 &gt; 元素选择器 &gt; 通配选择器 &gt; 继承的样式</p>
<blockquote>
<p>行内样式权重大于所有选择器。</p>
</blockquote>
<blockquote>
<p>每个选择器，都可计算出一组权重</p>
</blockquote>
<blockquote>
<p>!important 的权重，大于行内样式，大于所有选择器</p>
</blockquote>
<h2 id="浮动与定位" tabindex="-1"><a class="header-anchor" href="#浮动与定位"><span>浮动与定位</span></a></h2>
<h2 id="五、盒子模型" tabindex="-1"><a class="header-anchor" href="#五、盒子模型"><span>五、盒子模型</span></a></h2>
<h3 id="长度" tabindex="-1"><a class="header-anchor" href="#长度"><span>长度</span></a></h3>
<table>
<thead>
<tr>
<th>单位</th>
<th>名称</th>
</tr>
</thead>
<tbody>
<tr>
<td>px</td>
<td>像素</td>
</tr>
<tr>
<td>em</td>
<td>相对元素 font-size 的倍数</td>
</tr>
<tr>
<td>rem</td>
<td>相对根字体大小，html标签就是根</td>
</tr>
<tr>
<td>%</td>
<td>相对父元素计算</td>
</tr>
</tbody>
</table>
<h3 id="显示模式-display" tabindex="-1"><a class="header-anchor" href="#显示模式-display"><span>显示模式（display）</span></a></h3>
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
<td>块元素</td>
<td>block</td>
<td>&lt;html&gt; 、 &lt;body&gt;<br>&lt;h1&gt; ~ &lt;h6&gt; 、 &lt;hr&gt; 、 &lt;p&gt; 、 &lt;pre&gt; 、 &lt;div&gt;<br>&lt;ul&gt; 、 &lt;ol&gt; 、 &lt;li&gt; 、 &lt;dl&gt; 、 &lt;dt&gt; 、 &lt;dd&gt;<br>&lt;table&gt; 、 &lt;tbody&gt; 、 &lt;thead&gt; 、 &lt;tfoot&gt; 、 &lt;tr&gt; 、&lt;caption&gt;<br>&lt;form&gt;、&lt;option&gt;</td>
</tr>
<tr>
<td>行内元素</td>
<td>inline</td>
<td>&lt;br&gt; 、 &lt;em&gt; 、 &lt;strong&gt; 、 &lt;sup&gt; 、 &lt;sub&gt; 、 &lt;del&gt; 、 &lt;ins&gt;、&lt;a&gt; 、 &lt;label&gt;</td>
</tr>
<tr>
<td>行内块元素</td>
<td>inline-block</td>
<td>&lt;img&gt;  、&lt;td&gt; 、 &lt;th&gt;  、&lt;input&gt; 、 &lt;textarea&gt; 、 &lt;select&gt; 、 &lt;button&gt;、&lt;iframe&gt;</td>
</tr>
</tbody>
</table>
<blockquote>
<p>行内元素无法设置宽高</p>
</blockquote>
<blockquote>
<p>行内块可以</p>
</blockquote>
<h3 id="盒子组成" tabindex="-1"><a class="header-anchor" href="#盒子组成"><span>盒子组成</span></a></h3>
<p><img src="https://i-blog.csdnimg.cn/direct/5727d84f589f430199365b25cb9f36d8.png" alt="在这里插入图片描述"></p>
<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>外边距</td>
<td>margin</td>
<td>盒子与外界的距离</td>
<td>margin-top<br>margin-right<br>margin-bottom<br>margin-left</td>
</tr>
<tr>
<td>边框</td>
<td>border</td>
<td>盒子的边框</td>
<td>none ： 默认值<br>solid ： 实线<br>dashed ： 虚线<br>dotted ： 点线<br>double ： 双实线</td>
</tr>
<tr>
<td>内边距</td>
<td>padding</td>
<td>紧贴内容的补白区域</td>
<td>padding-top<br>padding-right<br>padding-bottom<br> padding-left</td>
</tr>
<tr>
<td>内容</td>
<td>content</td>
<td>元素中的文本或后代元素都是它的内容</td>
<td></td>
</tr>
</tbody>
</table>
<blockquote>
<p>上右下左</p>
<p>padding不负</p>
<p>margin可负</p>
<p>行内margin无上下</p>
</blockquote>
<h3 id="overflow" tabindex="-1"><a class="header-anchor" href="#overflow"><span>overflow</span></a></h3>
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
<td>overflow</td>
<td>溢出内容的处理方式</td>
<td>visible ：显示，默认值<br>hidden ：隐藏<br>scroll ：显示滚动条，不论内容是否溢出<br>auto ：自动显示滚动条，内容不溢出不显示</td>
</tr>
<tr>
<td>overflow-x</td>
<td>水平方向溢出内容的处理方式</td>
<td></td>
</tr>
<tr>
<td>overflow-y</td>
<td>垂直方向溢出内容给的处理方式</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="新增属性" tabindex="-1"><a class="header-anchor" href="#新增属性"><span>新增属性</span></a></h3>
<table>
<thead>
<tr>
<th>属性</th>
<th>名称</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>rem</td>
<td>rem</td>
<td>根元素字体大小的倍数，通常用于响应式设计，使页面元素大小随根元素字体大小变化而变化。</td>
</tr>
<tr>
<td>vw</td>
<td>vw</td>
<td>视口宽度的百分比，1vw 等于视口宽度的 1%。</td>
</tr>
<tr>
<td>vh</td>
<td>vh</td>
<td>视口高度的百分比，1vh 等于视口高度的 1%。</td>
</tr>
<tr>
<td>vmax</td>
<td>vmax</td>
<td>视口的较大值（宽度或高度）的百分比，1vmax 等于视口的较大值的 1%。</td>
</tr>
<tr>
<td>vmin</td>
<td>vmin</td>
<td>视口的较小值（宽度或高度）的百分比，1vmin 等于视口的较小值的 1%。</td>
</tr>
<tr>
<td>opacity</td>
<td></td>
<td>透明度</td>
</tr>
</tbody>
</table>
<h4 id="resize" tabindex="-1"><a class="header-anchor" href="#resize"><span>resize</span></a></h4>
<table>
<thead>
<tr>
<th>属性</th>
<th>名称</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>none</td>
<td>不允许调整大小</td>
<td>用户不能调整元素的尺寸。</td>
</tr>
<tr>
<td>both</td>
<td>水平和垂直方向都可以调整</td>
<td>用户可以同时在水平和垂直方向上调整元素的尺寸。</td>
</tr>
<tr>
<td>horizontal</td>
<td>仅水平方向调整</td>
<td>用户只能在水平方向上调整元素的尺寸。</td>
</tr>
<tr>
<td>vertical</td>
<td>仅垂直方向调整</td>
<td>用户只能在垂直方向上调整元素的尺寸。</td>
</tr>
</tbody>
</table>
<h4 id="box-shadow" tabindex="-1"><a class="header-anchor" href="#box-shadow"><span>box-shadow</span></a></h4>
<table>
<thead>
<tr>
<th>属性</th>
<th>名称</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>h-shadow</td>
<td>水平阴影偏移量</td>
<td>阴影在水平方向上的偏移量，正值向右，负值向左。</td>
</tr>
<tr>
<td>v-shadow</td>
<td>垂直阴影偏移量</td>
<td>阴影在垂直方向上的偏移量，正值向下，负值向上。</td>
</tr>
<tr>
<td>blur-radius</td>
<td>模糊半径</td>
<td>阴影的模糊程度，值越大越模糊。</td>
</tr>
<tr>
<td>spread-radius</td>
<td>扩展半径</td>
<td>阴影的扩展或收缩，正值扩大阴影，负值缩小阴影。</td>
</tr>
<tr>
<td>color</td>
<td>阴影颜色</td>
<td>阴影的颜色，可以使用任何有效的 CSS 颜色值。</td>
</tr>
</tbody>
</table>
<h4 id="background-origin" tabindex="-1"><a class="header-anchor" href="#background-origin"><span>background-origin</span></a></h4>
<table>
<thead>
<tr>
<th>属性</th>
<th>名称</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>padding-box</td>
<td>填充区</td>
<td>背景图像从填充区开始绘制。这是默认值。</td>
</tr>
<tr>
<td>border-box</td>
<td>边框区</td>
<td>背景图像从边框区开始绘制。</td>
</tr>
<tr>
<td>content-box</td>
<td>内容区</td>
<td>背景图像从内容区开始绘制。</td>
</tr>
</tbody>
</table>
<h4 id="background-clip" tabindex="-1"><a class="header-anchor" href="#background-clip"><span>background-clip</span></a></h4>
<table>
<thead>
<tr>
<th>属性</th>
<th>名称</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>border-box</td>
<td>边框区</td>
<td>背景被裁剪到边框区。这是默认值。</td>
</tr>
<tr>
<td>padding-box</td>
<td>填充区</td>
<td>背景被裁剪到填充区。</td>
</tr>
<tr>
<td>content-box</td>
<td>内容区</td>
<td>背景被裁剪到内容区。</td>
</tr>
</tbody>
</table>
<h4 id="background-size" tabindex="-1"><a class="header-anchor" href="#background-size"><span>background-size</span></a></h4>
<table>
<thead>
<tr>
<th>属性</th>
<th>名称</th>
<th>解释</th>
</tr>
</thead>
<tbody>
<tr>
<td>auto</td>
<td>自动</td>
<td>背景图像按其原始尺寸显示。这是默认值。</td>
</tr>
<tr>
<td>length</td>
<td>固定大小</td>
<td>通过指定宽度和高度来设置背景图像的大小。</td>
</tr>
<tr>
<td>percentage</td>
<td>百分比</td>
<td>通过指定相对于容器宽度和高度的百分比来设置背景图像的大小。</td>
</tr>
<tr>
<td>cover</td>
<td>覆盖</td>
<td>背景图像将被缩放以完全覆盖背景区域，可能会裁剪部分图像。</td>
</tr>
<tr>
<td>contain</td>
<td>包含</td>
<td>背景图像将被缩放以适应背景区域，不会裁剪图像。</td>
</tr>
</tbody>
</table>
<h3 id="文本溢出" tabindex="-1"><a class="header-anchor" href="#文本溢出"><span>文本溢出</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>  // 超出部分隐藏
  overflow: hidden;
  // 超出部分显示省略号
  text-overflow: ellipsis;
  // 文本不换行
  white-space: nowrap;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、css高级" tabindex="-1"><a class="header-anchor" href="#六、css高级"><span>六、CSS高级</span></a></h2>
<h3 id="线性渐变" tabindex="-1"><a class="header-anchor" href="#线性渐变"><span>线性渐变</span></a></h3>
<h3 id="径向渐变" tabindex="-1"><a class="header-anchor" href="#径向渐变"><span>径向渐变</span></a></h3>
<h3 id="重复渐变" tabindex="-1"><a class="header-anchor" href="#重复渐变"><span>重复渐变</span></a></h3>
<h3 id="web字体" tabindex="-1"><a class="header-anchor" href="#web字体"><span>web字体</span></a></h3>
<h3 id="过度" tabindex="-1"><a class="header-anchor" href="#过度"><span>过度</span></a></h3>
<h3 id="变形" tabindex="-1"><a class="header-anchor" href="#变形"><span>变形</span></a></h3>
<h3 id="动画" tabindex="-1"><a class="header-anchor" href="#动画"><span>动画</span></a></h3>
<h2 id="兼容性" tabindex="-1"><a class="header-anchor" href="#兼容性"><span>兼容性</span></a></h2>
<table>
<thead>
<tr>
<th>浏览器</th>
<th>内核</th>
<th>私有前缀</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Google Chrome</strong></td>
<td>Blink</td>
<td><code v-pre>-webkit-</code></td>
</tr>
<tr>
<td><strong>Mozilla Firefox</strong></td>
<td>Gecko</td>
<td><code v-pre>-moz-</code></td>
</tr>
<tr>
<td><strong>Safari</strong></td>
<td>WebKit</td>
<td><code v-pre>-webkit-</code></td>
</tr>
<tr>
<td><strong>Microsoft Edge</strong> (旧版本)</td>
<td>EdgeHTML</td>
<td><code v-pre>-ms-</code></td>
</tr>
<tr>
<td><strong>Microsoft Edge</strong> (新版本)</td>
<td>Blink</td>
<td><code v-pre>-webkit-</code></td>
</tr>
<tr>
<td><strong>Internet Explorer</strong></td>
<td>Trident</td>
<td><code v-pre>-ms-</code></td>
</tr>
<tr>
<td><strong>Opera</strong></td>
<td>Blink</td>
<td><code v-pre>-webkit-</code></td>
</tr>
<tr>
<td><strong>Samsung Internet</strong></td>
<td>WebKit</td>
<td><code v-pre>-webkit-</code></td>
</tr>
<tr>
<td><strong>UC Browser</strong></td>
<td>WebKit/Blink</td>
<td><code v-pre>-webkit-</code></td>
</tr>
<tr>
<td><strong>QQ Browser</strong></td>
<td>WebKit/Blink</td>
<td><code v-pre>-webkit-</code></td>
</tr>
<tr>
<td><strong>360 Browser</strong></td>
<td>WebKit/Blink</td>
<td><code v-pre>-webkit-</code></td>
</tr>
<tr>
<td><strong>Maxthon</strong></td>
<td>WebKit/Blick</td>
<td><code v-pre>-webkit-</code></td>
</tr>
</tbody>
</table>
<h2 id="一、css基础-1" tabindex="-1"><a class="header-anchor" href="#一、css基础-1"><span>一、CSS基础</span></a></h2>
<h3 id="_1-css" tabindex="-1"><a class="header-anchor" href="#_1-css"><span>1. CSS</span></a></h3>
<p><strong>作用</strong>：添加网页样式，能修改网页上的字号、字体颜色、背景图像等格式。</p>
<h3 id="_2-编写位置" tabindex="-1"><a class="header-anchor" href="#_2-编写位置"><span>2. 编写位置</span></a></h3>
<table>
<thead>
<tr>
<th>编写位置</th>
<th>写法</th>
<th>注意</th>
<th>举例</th>
</tr>
</thead>
<tbody>
<tr>
<td>行内样式</td>
<td>写在标签的 style 属性中</td>
<td>只能控制当前标签的样式<br>对其他标签无效<br>不推荐大量使用</td>
<td><code v-pre>&lt;h1 style=&quot;color:red;font-size:60px;&quot;&gt;你好，世界&lt;/h1&gt;</code></td>
</tr>
<tr>
<td>内部样式</td>
<td>写在 html 页面内部</td>
<td></td>
<td><code v-pre>&lt;style&gt;h1{color: red;font-size: 40px;}h1&lt;/style&gt;</code></td>
</tr>
<tr>
<td>外部样式</td>
<td>写在单独的 .css 文件中</td>
<td></td>
<td><code v-pre>&lt;link rel=&quot;stylesheet&quot; href=&quot;./xxx.css&quot;&gt;</code></td>
</tr>
</tbody>
</table>
<p><strong>位置</strong>：
<strong>写法</strong>：</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>    &lt;style>一般都放在 &lt;head> 标签中
    多个 HTML 页面无法复用样式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>位置</strong>：
<strong>写法</strong>：</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>    &lt;link> 标签要写在 &lt;head> 标签中
    可触发浏览器的缓存机制，提高访问速度
    最推荐的使用外部样式
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="样式优先级" tabindex="-1"><a class="header-anchor" href="#样式优先级"><span>样式优先级</span></a></h3>
<p><strong>优先级</strong>：行内样式 &gt; 内部样式 = 外部样式</p>
<blockquote>
<p>后面的会覆盖前面的</p>
</blockquote>
<table>
<thead>
<tr>
<th>分类</th>
<th>优点</th>
<th>缺点</th>
<th>使用频率</th>
<th>作用范围</th>
</tr>
</thead>
<tbody>
<tr>
<td>行内样式</td>
<td>优先级最高</td>
<td>结构与样式未分离<br>代码结构混乱<br>样式不能复用</td>
<td>很低</td>
<td>当前标签</td>
</tr>
<tr>
<td>内部样式</td>
<td>样式可复用<br>代码结构清晰</td>
<td>结构与样式未彻底分离<br>样式不能多页面复用</td>
<td>一般</td>
<td>当前页面</td>
</tr>
<tr>
<td>外部样式</td>
<td>样式可多页面复用<br>代码结构清晰<br>可触发浏览器的缓存机制<br>结构与样式彻底分离</td>
<td>需要引入才能使用</td>
<td>最高</td>
<td>多个页面</td>
</tr>
</tbody>
</table>
<h3 id="元素关系-1" tabindex="-1"><a class="header-anchor" href="#元素关系-1"><span>元素关系</span></a></h3>
<p><strong>父元素</strong>：直接包裹某个元素的元素，就是该元素的父元素。
<strong>子元素</strong>：被父元素直接包含的元素。
<strong>兄弟元素</strong>：具有相同父元素的元素，互为兄弟元素。
<strong>祖先元素</strong>：父亲的父亲的父亲······，都是祖先。
<strong>后代元素</strong>：儿子的儿子的儿子······，都是后代。</p>
<h3 id="语法规范-1" tabindex="-1"><a class="header-anchor" href="#语法规范-1"><span>语法规范</span></a></h3>
<p><strong>选择器</strong>：找到要添加样式的元素。
<strong>声明块</strong>：设置具体的样式（声明块是由一个或多个声明组成的），</p>
<pre><code>声明的格式为： 属性名: 属性值;
声明后加分号
选择器与声明块之间，属性名与属性值之间，均有一个空格
</code></pre>
<!-- ![](../../图片%201.png) -->
<h3 id="注释规范-1" tabindex="-1"><a class="header-anchor" href="#注释规范-1"><span>注释规范</span></a></h3>
<pre><code>/* 给h1元素添加样式 */
h1 {
	/* 设置文字颜色为红色 */
	color: red;
	/* 设置文字大小为40px */
	font-size: 40px
}
</code></pre>
<h3 id="代码风格-1" tabindex="-1"><a class="header-anchor" href="#代码风格-1"><span>代码风格</span></a></h3>
<p><strong>展开风格</strong>：开发时推荐，便于维护和调试。
<strong>写法</strong>：</p>
<pre><code>h1 {
	color: red;
	font-size: 40px;
}
</code></pre>
<p><strong>紧凑风格</strong>：项目上线时推荐，可减小文件体积。
<strong>写法</strong>：<code v-pre>h1{color:red;font-size:40px;}</code></p>
<h2 id="二、css选择器" tabindex="-1"><a class="header-anchor" href="#二、css选择器"><span>二、CSS选择器</span></a></h2>
<h3 id="选择器汇总-1" tabindex="-1"><a class="header-anchor" href="#选择器汇总-1"><span>选择器汇总</span></a></h3>
<table>
<thead>
<tr>
<th>基本选择器</th>
<th>特点</th>
<th>用法</th>
</tr>
</thead>
<tbody>
<tr>
<td>通配选择器</td>
<td>选中所有标签， 一般用于清除样式。</td>
<td>* {color:red}</td>
</tr>
<tr>
<td>元素选择器</td>
<td>选中所有同种标签，但是不能差异化选择。</td>
<td>h1 {color:red}</td>
</tr>
<tr>
<td>类选择器</td>
<td>选中所有特定类名(class值)的元素——使用频率很高。</td>
<td>.say {color:red}</td>
</tr>
<tr>
<td>ID选择器</td>
<td>选中特定id值的那个元素(唯一的)。</td>
<td>#earthy {color:red}</td>
</tr>
</tbody>
</table>
<h3 id="通配选择器" tabindex="-1"><a class="header-anchor" href="#通配选择器"><span>通配选择器</span></a></h3>
<p><strong>作用</strong>：可以选中所有的 HTML 元素。
<strong>写法</strong>：</p>
<pre><code>/* 选中所有元素 */
* {
	color: orange;
	font-size: 40px;
}
</code></pre>
<h3 id="元素选择器" tabindex="-1"><a class="header-anchor" href="#元素选择器"><span>元素选择器</span></a></h3>
<p><strong>作用</strong>：为某些元素统一设置样式。
<strong>写法</strong>：</p>
<pre><code>/* 选中所有h1元素 */
	h1 {
	color: orange;
	font-size: 40px;
}

/* 选中所有p元素 */
p {
	color: blue;
	font-size: 60px;
}



元素选择器无法实现差异化设置
</code></pre>
<h3 id="类选择器" tabindex="-1"><a class="header-anchor" href="#类选择器"><span>类选择器</span></a></h3>
<p><strong>作用</strong>：根据元素的class值，来选中某些元素。
<strong>写法</strong>：点</p>
<pre><code>/* 选中所有class值为speak的元素 */
	.speak {
	color: red;
}
/* 选中所有class值为answer的元素 */
	.answer {
	color: blue;
}



元素的 class 属性值不带 . ，但 CSS 的类选择器要带 .
自定义class 值时，不要使用纯数字、不要使用中文，使用 - 做连接，命名要有意义
一个元素不能写多个 class 属性
一个元素的 class 属性，能写多个值，要用空格隔开
</code></pre>
<h3 id="id选择器" tabindex="-1"><a class="header-anchor" href="#id选择器"><span>ID选择器</span></a></h3>
<p><strong>作用</strong>：根据元素的 id 属性值。
<strong>写法</strong>：井号</p>
<pre><code>/* 选中id值为earthy的那个元素 */
#earthy {
	color: red;
	font-size: 60px;
}



id 属性值由字母、数字、下划线、短杠组成,不要包含空格、区分大小写
id唯一，不能重复
可以同时拥有 id 和 class 属性
</code></pre>
<h3 id="交集选择器-且" tabindex="-1"><a class="header-anchor" href="#交集选择器-且"><span>交集选择器（且）</span></a></h3>
<p><strong>作用</strong>：选中同时符合多个条件的元素。
<strong>写法</strong>：紧挨</p>
<pre><code>/* 选中：类名为beauty的p元素，为此种写法用的非常多！！！！ */
p.beauty {
	color: blue;
}
/* 选中：类名包含rich和beauty的元素 */
.rich.beauty {
	color: green;
}



标签名必须写在前面
不可能出现两个元素选择器
</code></pre>
<h3 id="并集选择器-或" tabindex="-1"><a class="header-anchor" href="#并集选择器-或"><span>并集选择器（或）</span></a></h3>
<p><strong>作用</strong>：选中多个选择器对应的元素
<strong>写法</strong>：逗号隔开</p>
<pre><code>/* 选中id为peiqi，或类名为rich，或类名为beauty的元素 */
#peiqi,
.rich,
.beauty {
	font-size: 40px;
	background-color: skyblue;
	width: 200px;
}



一般竖着写
用于集体声明，可以缩小样式表体积
</code></pre>
<h3 id="后代选择器" tabindex="-1"><a class="header-anchor" href="#后代选择器"><span>后代选择器</span></a></h3>
<p><strong>作用</strong>：选中指定元素中，符合要求的后代元素。
<strong>写法</strong>：空格隔开</p>
<pre><code>/* 选中ul中的所有li */
ul li {
	color: red;
}
/* 选中ul中所有li中的a */
ul li a {
	color: orange;
}
/* 选中类名为subject元素中的所有li */
.subject li {
	color: blue;
}
/* 选中类名为subject元素中的所有类名为front-end的li */
.subject li.front-end {
	color: blue;
}



符合HTML嵌套要求
最终选择的是后代
</code></pre>
<h3 id="子代选择器" tabindex="-1"><a class="header-anchor" href="#子代选择器"><span>子代选择器</span></a></h3>
<p><strong>作用</strong>：选中指定元素中，符合要求的子元素。
<strong>写法</strong>：大于号</p>
<pre><code>/* div中的子代a元素 */
div&gt;a {
	color: red;
}
/* 类名为persons的元素中的子代a元素 */
.persons&gt;a{
	color: red;
}



只有儿子，不是后代
</code></pre>
<h3 id="相邻兄弟选择器-挨着" tabindex="-1"><a class="header-anchor" href="#相邻兄弟选择器-挨着"><span>相邻兄弟选择器（挨着）</span></a></h3>
<p><strong>作用</strong>：选中指定元素后，符合条件的相邻兄弟元素。
<strong>写法</strong>：加号</p>
<pre><code>/* 选中div后相邻的兄弟p元素 */
div+p {
	color:red;
}
</code></pre>
<h3 id="通用兄弟选择器-所有" tabindex="-1"><a class="header-anchor" href="#通用兄弟选择器-所有"><span>通用兄弟选择器（所有）</span></a></h3>
<p><strong>作用</strong>：选中指定元素后，符合条件的所有兄弟元素。
<strong>写法</strong>：波浪号</p>
<pre><code>/* 选中div后的所有的兄弟p元素 */
div~p {
	color:red;
}



两种兄弟选择器，选择的是下面的兄弟
</code></pre>
<h3 id="属性选择器-1" tabindex="-1"><a class="header-anchor" href="#属性选择器-1"><span>属性选择器</span></a></h3>
<p><strong>作用</strong>：选中属性值符合一定要求的元素。</p>
<h4 id="具有" tabindex="-1"><a class="header-anchor" href="#具有"><span>具有（[ ]）</span></a></h4>
<p><strong>作用</strong>：选中具有某个属性的元素。
<strong>写法</strong>：方括号</p>
<pre><code>/* 选中具有title属性的元素 */
div[title]{color:red;}
</code></pre>
<h4 id="等于" tabindex="-1"><a class="header-anchor" href="#等于"><span>等于（=）</span></a></h4>
<p><strong>作用</strong>：选中包含某个属性，且属性值等于指定值的元素。
<strong>写法</strong>：等号</p>
<pre><code>/* 选中title属性值为atguigu的元素 */
div[title=&quot;atguigu&quot;]{color:red
</code></pre>
<h4 id="开头" tabindex="-1"><a class="header-anchor" href="#开头"><span>开头（^）</span></a></h4>
<p><strong>作用</strong>：选中包含某个属性，且属性值以指定的值开头的元素。
<strong>写法</strong>：^</p>
<pre><code>/* 选中title属性值以a开头的元素 */
div[title^=&quot;a&quot;]{color:red;}
</code></pre>
<h4 id="结尾" tabindex="-1"><a class="header-anchor" href="#结尾"><span>结尾（$）</span></a></h4>
<p><strong>作用</strong>：选中包含某个属性，且属性值以指定的值结尾的元素。
<strong>写法</strong>：美元号</p>
<pre><code>/* 选中title属性值以u结尾的元素 */
div[title$=&quot;u&quot;]{color:red;}
</code></pre>
<h4 id="包含" tabindex="-1"><a class="header-anchor" href="#包含"><span>包含（*）</span></a></h4>
<p><strong>作用</strong>：选择包含某个属性，属性值包含指定值的元素。
<strong>写法</strong>：星号</p>
<pre><code>/* 选中title属性值包含g的元素 */
div[title*=&quot;g&quot;]{color:red;}
</code></pre>
<h3 id="伪类选择器-1" tabindex="-1"><a class="header-anchor" href="#伪类选择器-1"><span>伪类选择器</span></a></h3>
<p><strong>作用</strong>：选中特殊状态的元素。</p>
<h4 id="链接未访问-link" tabindex="-1"><a class="header-anchor" href="#链接未访问-link"><span>链接未访问（:link）</span></a></h4>
<p><strong>作用</strong>：超链接未被访问的状态。</p>
<h4 id="链接已访问-visited" tabindex="-1"><a class="header-anchor" href="#链接已访问-visited"><span>链接已访问（:visited）</span></a></h4>
<p><strong>作用</strong>：超链接访问过的状态。</p>
<h4 id="悬停-hover" tabindex="-1"><a class="header-anchor" href="#悬停-hover"><span>悬停（:hover）</span></a></h4>
<p><strong>作用</strong>：鼠标放上去。</p>
<h4 id="激活-active" tabindex="-1"><a class="header-anchor" href="#激活-active"><span>激活（:active）</span></a></h4>
<p><strong>作用</strong>：按下鼠标不松开。</p>
<pre><code>顺序为：link &gt; visited &gt; hover &gt; active
</code></pre>
<h4 id="获取焦点-focus" tabindex="-1"><a class="header-anchor" href="#获取焦点-focus"><span>获取焦点（:focus）</span></a></h4>
<p><strong>作用</strong>：点击、触摸、键盘tab键选择元素。</p>
<h4 id="长兄-first-child" tabindex="-1"><a class="header-anchor" href="#长兄-first-child"><span>长兄（:first-child）</span></a></h4>
<p><strong>作用</strong>：所有兄弟元素中的第一个。</p>
<h4 id="幺弟-last-child" tabindex="-1"><a class="header-anchor" href="#幺弟-last-child"><span>幺弟（:last-child）</span></a></h4>
<p><strong>作用</strong>：所有兄弟元素中的最后一个。</p>
<h4 id="老n-nth-child-n" tabindex="-1"><a class="header-anchor" href="#老n-nth-child-n"><span>老N（:nth-child(n) ）</span></a></h4>
<p><strong>作用</strong>：所有兄弟元素中的第 n 个。</p>
<h4 id="多胞胎老大-first-of-type" tabindex="-1"><a class="header-anchor" href="#多胞胎老大-first-of-type"><span>多胞胎老大（:first-of-type）</span></a></h4>
<p><strong>作用</strong>：所有同类型兄弟元素中的第一个。</p>
<h4 id="多胞胎老幺-last-of-type" tabindex="-1"><a class="header-anchor" href="#多胞胎老幺-last-of-type"><span>多胞胎老幺（:last-of-type）</span></a></h4>
<p><strong>作用</strong>：所有同类型兄弟元素中的最后一个。</p>
<h4 id="多胞胎老n-nth-of-type-n" tabindex="-1"><a class="header-anchor" href="#多胞胎老n-nth-of-type-n"><span>多胞胎老N（:nth-of-type(n)）</span></a></h4>
<p><strong>作用</strong>：所有同类型兄弟元素中的 第n个 。</p>
<pre><code>n的取值：
1. 偶数  2n/even
2. 奇数  2n+1/odd
3. 前3个 -n+3
</code></pre>
<h3 id="选择器优先级-1" tabindex="-1"><a class="header-anchor" href="#选择器优先级-1"><span>选择器优先级</span></a></h3>
<p>行内样式 &gt; ID选择器 &gt; 类选择器 &gt; 元素选择器 &gt; 通配选择器</p>
<pre><code>行内样式权重大于所有选择器。
每个选择器，都可计算出一组权重
!important 的权重，大于行内样式，大于所有选择器
</code></pre>
<h2 id="三、css特性" tabindex="-1"><a class="header-anchor" href="#三、css特性"><span>三、CSS特性</span></a></h2>
<h3 id="层叠性" tabindex="-1"><a class="header-anchor" href="#层叠性"><span>层叠性</span></a></h3>
<p><strong>作用</strong>：解决样式冲突
<strong>原因</strong>：同名不同值
<strong>解决方式</strong>：后面覆盖前面</p>
<h3 id="继承性" tabindex="-1"><a class="header-anchor" href="#继承性"><span>继承性</span></a></h3>
<p><strong>作用</strong>：元素自动拥有其父辈元素样式
<strong>可继承</strong>：text-?? ， font-?? ， line-?? 、 color</p>
<h3 id="优先级" tabindex="-1"><a class="header-anchor" href="#优先级"><span>优先级</span></a></h3>
<p><strong>优先级</strong>：!important &gt; 行内样式 &gt; ID选择器 &gt; 类选择器 &gt; 元素选择器 &gt; * &gt; 继承的样式</p>
<h2 id="四、css常用属性" tabindex="-1"><a class="header-anchor" href="#四、css常用属性"><span>四、CSS常用属性</span></a></h2>
<h3 id="字体颜色-color" tabindex="-1"><a class="header-anchor" href="#字体颜色-color"><span>字体颜色（color）</span></a></h3>
<h4 id="颜色名" tabindex="-1"><a class="header-anchor" href="#颜色名"><span>颜色名</span></a></h4>
<h4 id="rgb和rgba" tabindex="-1"><a class="header-anchor" href="#rgb和rgba"><span>rgb和rgba</span></a></h4>
<h4 id="hex和hexa" tabindex="-1"><a class="header-anchor" href="#hex和hexa"><span>hex和hexa</span></a></h4>
<p>#rrggbb</p>
<pre><code>IE 浏览器不支持 HEXA ，但支持 HEX
</code></pre>
<h4 id="hsl和hsla" tabindex="-1"><a class="header-anchor" href="#hsl和hsla"><span>hsl和hsla</span></a></h4>
<p>色相、饱和度、亮度</p>
<h3 id="字体大小-font-size" tabindex="-1"><a class="header-anchor" href="#字体大小-font-size"><span>字体大小（font-size）</span></a></h3>
<pre><code>Chrome 浏览器支持的最小文字为 12px ，默认的文字大小为 16px ，并且 0px 会自动消失。
</code></pre>
<h3 id="字体族-font-family" tabindex="-1"><a class="header-anchor" href="#字体族-font-family"><span>字体族（font-family）</span></a></h3>
<pre><code>div {
	font-family: &quot;STCaiyun&quot;,&quot;Microsoft YaHei&quot;,sans-serif
}



可以设置多个字体，按照从左到右的顺序逐个查找
</code></pre>
<h3 id="字体风格-font-style" tabindex="-1"><a class="header-anchor" href="#字体风格-font-style"><span>字体风格（font-style）</span></a></h3>
<ol>
<li>normal ：正常（默认值）</li>
<li>italic ：斜体（使用字体自带的斜体效果）</li>
<li>oblique ：斜体（强制倾斜产生的斜体效果）</li>
</ol>
<h3 id="字体粗细-font-weight" tabindex="-1"><a class="header-anchor" href="#字体粗细-font-weight"><span>字体粗细（font-weight）</span></a></h3>
<ol>
<li>lighter（100~300） ：细</li>
<li>normal（400~500） ： 正常</li>
<li>bold （600+）：粗</li>
<li>bolder ：很粗</li>
</ol>
<h3 id="字体复合写法" tabindex="-1"><a class="header-anchor" href="#字体复合写法"><span>字体复合写法</span></a></h3>
<p><code v-pre>font:blod 100px '微软雅黑'</code></p>
<ol>
<li>字体大小、字体族必须都写上。</li>
<li>字体族必须是最后一位、字体大小必须是倒数第二位。</li>
<li>各个属性间用空格隔开。</li>
</ol>
<h3 id="文本间距-letter-spacing" tabindex="-1"><a class="header-anchor" href="#文本间距-letter-spacing"><span>文本间距（letter-spacing）</span></a></h3>
<p>px</p>
<h3 id="文本修饰-text-decoration" tabindex="-1"><a class="header-anchor" href="#文本修饰-text-decoration"><span>文本修饰（text-decoration）</span></a></h3>
<table>
<thead>
<tr>
<th>属性名</th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>none</td>
<td>无装饰线</td>
<td></td>
</tr>
<tr>
<td>underline</td>
<td>下划线</td>
<td></td>
</tr>
<tr>
<td>overline</td>
<td>上划线</td>
<td></td>
</tr>
<tr>
<td>line-through</td>
<td>删除线</td>
<td></td>
</tr>
<tr>
<td>dotted</td>
<td>虚线</td>
<td></td>
</tr>
<tr>
<td>wavy</td>
<td>波浪线</td>
<td></td>
</tr>
</tbody>
</table>
<h3 id="文本缩进-text-indent" tabindex="-1"><a class="header-anchor" href="#文本缩进-text-indent"><span>文本缩进（text-indent）</span></a></h3>
<p><strong>作用</strong>：控制文本首字母的缩进
px</p>
<h3 id="文本对齐-水平-text-align" tabindex="-1"><a class="header-anchor" href="#文本对齐-水平-text-align"><span>文本对齐_水平（text-align）</span></a></h3>
<p>作用：控制文本的水平对齐方式</p>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>left</td>
<td>左对齐</td>
</tr>
<tr>
<td>right</td>
<td>右对齐</td>
</tr>
<tr>
<td>center</td>
<td>居中对齐</td>
</tr>
</tbody>
</table>
<h3 id="行高-line-height" tabindex="-1"><a class="header-anchor" href="#行高-line-height"><span>行高（line-height）</span></a></h3>
<p>作用：控制一行文字的高度，控制行与行之间的距离</p>
<p>属性值：像素、百分比、数字（1.5之类的）</p>
<h3 id="文本对齐-垂直" tabindex="-1"><a class="header-anchor" href="#文本对齐-垂直"><span>文本对齐_垂直</span></a></h3>
<p>顶部：默认
居中：height = line-height
底部：line-height = ( height × 2 ) - font-size - x（用定位）</p>
<h3 id="vertical-align" tabindex="-1"><a class="header-anchor" href="#vertical-align"><span>（vertical-align）</span></a></h3>
<p>作用：用于指定同一行元素之间，或 表格单元格 内文字的 垂直对齐方式</p>
<table>
<thead>
<tr>
<th>属性值</th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>baseline</td>
<td>使元素的基线与父元素的基线对齐</td>
</tr>
<tr>
<td>top</td>
<td>使元素的顶部与其所在行的顶部对齐</td>
</tr>
<tr>
<td>middle</td>
<td>使元素的中部与父元素的基线加上父元素字母 x 的一半对齐</td>
</tr>
<tr>
<td>bottom</td>
<td>使元素的底部与其所在行的底部对齐</td>
</tr>
</tbody>
</table>
<pre><code>vertical-align 不能控制块元素
</code></pre>
<h3 id="列表-1" tabindex="-1"><a class="header-anchor" href="#列表-1"><span>列表</span></a></h3>
<table>
<thead>
<tr>
<th>CSS属性名</th>
<th>功能</th>
<th>属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td>list-style-type</td>
<td>设置列表符号</td>
<td>none:无<br>square:实心方块<br>disc:圆形<br>decimal:数字<br>lower-roman:小写罗马字<br>upper-roman:大写罗马字<br>lower-alpha:小写字母<br>upper-alpha:大写字母</td>
</tr>
<tr>
<td>list-style-position</td>
<td>设置列表符号的位置</td>
<td>inside : 在li的里面<br>outside:在li的外边</td>
</tr>
<tr>
<td>list-style-image</td>
<td>自定义列表符号</td>
<td>url(图片地址)</td>
</tr>
<tr>
<td>list-style</td>
<td>复合属性</td>
<td>没有数量、顺序的要求</td>
</tr>
</tbody>
</table>
<h3 id="边框-1" tabindex="-1"><a class="header-anchor" href="#边框-1"><span>边框</span></a></h3>
<table>
<thead>
<tr>
<th>CSS属性名</th>
<th>功能</th>
<th>属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td>border-width</td>
<td>边框宽度</td>
<td>CSS中可用的长度值</td>
</tr>
<tr>
<td>border-color</td>
<td>边框颜色</td>
<td>CSs中可用的颜色值</td>
</tr>
<tr>
<td>border-style</td>
<td>边框风格</td>
<td>none默认值<br>solid实线 <br>dashed虚线<br>dotted点线  <br>double双实线</td>
</tr>
<tr>
<td>border</td>
<td>边框复合属性</td>
<td>没有数量、顺序的要求</td>
</tr>
</tbody>
</table>
<h3 id="表格-1" tabindex="-1"><a class="header-anchor" href="#表格-1"><span>表格</span></a></h3>
<table>
<thead>
<tr>
<th>CSS属性名</th>
<th>功能</th>
<th>属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td>table-layout</td>
<td>设置列宽度</td>
<td>auto:自动，列宽根据内容计算(默认值)。<br>fixed:固定列宽，平均分。</td>
</tr>
<tr>
<td>border-spacing</td>
<td>单元格间距</td>
<td>CSS中可用的长度值。 <br>生效的前提：单元格边框不能合并。</td>
</tr>
<tr>
<td>border-collapse</td>
<td>合并单元格边框</td>
<td>collapse:合并  <br>separate:不合并</td>
</tr>
<tr>
<td>empty-cells</td>
<td>隐藏没有内容的单元格</td>
<td>show:显示，默认  <br>hide:隐藏<br>生效前提：单元格不能合并。</td>
</tr>
<tr>
<td>caption-side</td>
<td>设置表格标题位置</td>
<td>top:上面(默认值)  <br>bottom:在表格下面</td>
</tr>
</tbody>
</table>
<h3 id="背景-1" tabindex="-1"><a class="header-anchor" href="#背景-1"><span>背景</span></a></h3>
<table>
<thead>
<tr>
<th>css属性名</th>
<th>功能</th>
<th>属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td>background-color</td>
<td>设置背景颜色</td>
<td>符合cSS中颜色规范的值。  <br>  <br>默认背景颜色是transparent。</td>
</tr>
<tr>
<td>background-image</td>
<td>设置背景图片</td>
<td>url(图片的地址)</td>
</tr>
<tr>
<td>background-repeat</td>
<td>设置背景重复方  <br>  <br>式</td>
<td>repeat:重复，铺满整个元素，默认值。  <br>  <br>repeat-x:只在水平方向重复。  <br>  <br>repeat-y:只在垂直方向重复。  <br>  <br>no-repeat:不重复。</td>
</tr>
<tr>
<td>background-position</td>
<td>设置背景图位置</td>
<td>通过关键字设置位置：  <br>写两个值，用空格隔开  <br>  <br>水 平 ：left、center、right  <br>  <br>垂 直 ：top、center、bottom  <br>  <br>如果只写一个值，另一个方向的值取center  <br>  <br>  <br>通过长度指定坐标位置：  <br>  <br>以元素左上角，为坐标原点，设置图片左上角的  <br>位置。  <br>  <br>两个值，分别是x坐标和y坐标。  <br>  <br>只写一个值，会被当做x坐标，y坐标取  <br>  <br>center</td>
</tr>
<tr>
<td>background</td>
<td>复合属性</td>
<td>没有数量和顺序要求</td>
</tr>
</tbody>
</table>
<h3 id="鼠标-1" tabindex="-1"><a class="header-anchor" href="#鼠标-1"><span>鼠标</span></a></h3>
<table>
<thead>
<tr>
<th>CSS属性名</th>
<th>功能</th>
<th>属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td>Cursor</td>
<td>设置鼠标光标的样式</td>
<td>pointer  小手  <br>move:移动图标  <br>text:文字选择器  <br>crosshair:十字架  <br>wait:等待  <br>help:帮助</td>
</tr>
</tbody>
</table>
<h2 id="盒子模型" tabindex="-1"><a class="header-anchor" href="#盒子模型"><span>盒子模型</span></a></h2>
<h3 id="长度-1" tabindex="-1"><a class="header-anchor" href="#长度-1"><span>长度</span></a></h3>
<table>
<thead>
<tr>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>px</td>
<td>像素</td>
</tr>
<tr>
<td>em</td>
<td>相对元素 font-size 的倍数</td>
</tr>
<tr>
<td>rem</td>
<td>相对根字体大小，html标签就是根</td>
</tr>
<tr>
<td>%</td>
<td>相对父元素计算</td>
</tr>
</tbody>
</table>
<h3 id="显示模式-display-1" tabindex="-1"><a class="header-anchor" href="#显示模式-display-1"><span>显示模式（display）</span></a></h3>
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
<td>块元素</td>
<td>block</td>
<td>&lt;html&gt; 、 &lt;body&gt;<br>&lt;h1&gt; ~ &lt;h6&gt; 、 &lt;hr&gt; 、 &lt;p&gt; 、 &lt;pre&gt; 、 &lt;div&gt;<br>&lt;ul&gt; 、 &lt;ol&gt; 、 &lt;li&gt; 、 &lt;dl&gt; 、 &lt;dt&gt; 、 &lt;dd&gt;<br>&lt;table&gt; 、 &lt;tbody&gt; 、 &lt;thead&gt; 、 &lt;tfoot&gt; 、 &lt;tr&gt; 、&lt;caption&gt;<br>&lt;form&gt;、&lt;option&gt;</td>
</tr>
<tr>
<td>行内元素</td>
<td>inline</td>
<td>&lt;br&gt; 、 &lt;em&gt; 、 &lt;strong&gt; 、 &lt;sup&gt; 、 &lt;sub&gt; 、 &lt;del&gt; 、 &lt;ins&gt;、&lt;a&gt; 、 &lt;label&gt;</td>
</tr>
<tr>
<td>行内块元素</td>
<td>inline-block</td>
<td>&lt;img&gt;  、&lt;td&gt; 、 &lt;th&gt;  、&lt;input&gt; 、 &lt;textarea&gt; 、 &lt;select&gt; 、 &lt;button&gt;、&lt;iframe&gt;</td>
</tr>
</tbody>
</table>
<pre><code>行内元素无法设置宽高
行内块可以
</code></pre>
<h3 id="盒子组成-1" tabindex="-1"><a class="header-anchor" href="#盒子组成-1"><span>盒子组成</span></a></h3>
<!-- ![](../../图片%202.png) -->
<table>
<thead>
<tr>
<th></th>
<th></th>
<th></th>
<th></th>
</tr>
</thead>
<tbody>
<tr>
<td>外边距</td>
<td>margin</td>
<td>盒子与外界的距离</td>
<td>margin-top<br>margin-right<br>margin-bottom<br>margin-left</td>
</tr>
<tr>
<td>边框</td>
<td>border</td>
<td>盒子的边框</td>
<td>none ： 默认值<br>solid ： 实线<br>dashed ： 虚线<br>dotted ： 点线<br>double ： 双实线</td>
</tr>
<tr>
<td>内边距</td>
<td>padding</td>
<td>紧贴内容的补白区域</td>
<td>padding-top<br>padding-right<br>padding-bottom<br> padding-left</td>
</tr>
<tr>
<td>内容</td>
<td>content</td>
<td>元素中的文本或后代元素都是它的内容</td>
<td></td>
</tr>
</tbody>
</table>
<pre><code>上右下左
padding不负
margin可负
行内margin无上下
</code></pre>
<h3 id="内容溢出" tabindex="-1"><a class="header-anchor" href="#内容溢出"><span>内容溢出</span></a></h3>
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
<td>overflow</td>
<td>溢出内容的处理方式</td>
<td>visible ：显示，默认值<br>hidden ：隐藏<br>scroll ：显示滚动条，不论内容是否溢出<br>auto ：自动显示滚动条，内容不溢出不显示</td>
</tr>
<tr>
<td>overflow-x</td>
<td>水平方向溢出内容的处理方式</td>
<td></td>
</tr>
<tr>
<td>overflow-y</td>
<td>垂直方向溢出内容给的处理方式</td>
<td></td>
</tr>
</tbody>
</table>
<h2 id="定位" tabindex="-1"><a class="header-anchor" href="#定位"><span>定位</span></a></h2>
<table>
<thead>
<tr>
<th>定位</th>
<th>参考位置</th>
<th>特点</th>
<th>属性值</th>
</tr>
</thead>
<tbody>
<tr>
<td>绝对定位</td>
<td>参考它的有定位的第一个祖先元素</td>
<td>脱离文档流，会对后面的兄弟元素、父元素有影响<br>绝对定位、浮动不能同时设置</td>
<td>absolute</td>
</tr>
<tr>
<td>相对定位</td>
<td>相对自己原来的位置</td>
<td>不会脱离文档流，不会对其他元素产生任何影响</td>
<td>relative</td>
</tr>
<tr>
<td>固定定位</td>
<td>参考它的视口</td>
<td>脱离文档流，会对后面的兄弟元素、父元素有影响<br>固定定位和浮动不能同时设置</td>
<td>fixed</td>
</tr>
<tr>
<td>粘性定位</td>
<td>离它最近的一个拥有“滚动机制”的祖先元素</td>
<td>不会脱离文档流，它是一种专门用于窗口滚动时的新的定位方式</td>
<td>sticky</td>
</tr>
</tbody>
</table>
<blockquote>
<p>定位元素的显示层级比普通元素高
无论什么定位，显示层级都是一样的
后写的元素会盖在先写的元素之上</p>
</blockquote>
<h3 id="定位层级-z-index" tabindex="-1"><a class="header-anchor" href="#定位层级-z-index"><span>定位层级（z-index）</span></a></h3>
<ol>
<li>定位元素的显示层级比普通元素高，定位显示层级一样。</li>
<li>如果位置发生重叠，默认情况是：后面的元素，会显示在前面元素之上。</li>
<li>z-index 的属性值是数字，没有单位，值越大显示层级越高。</li>
<li>只有定位的元素设置 z-index 才有效。</li>
<li>如果 z-index 值大的元素，依然没有覆盖掉 z-index 值小的元素，那么请检查其包含块的层级。</li>
</ol>
<h3 id="定位的特殊应用" tabindex="-1"><a class="header-anchor" href="#定位的特殊应用"><span>定位的特殊应用</span></a></h3>
<h4 id="充满父容器" tabindex="-1"><a class="header-anchor" href="#充满父容器"><span>充满父容器</span></a></h4>
<ol>
<li>块宽想与包含块一致，可以给定位元素同时设置 left 和 right 为 0 。</li>
<li>高度想与包含块一致， top 和 bottom 设置为 0 。</li>
</ol>
<h4 id="元素在包含块中居中" tabindex="-1"><a class="header-anchor" href="#元素在包含块中居中"><span>元素在包含块中居中</span></a></h4>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>left:0;
right:0;
top:0;
bottom:0;
margin:auto;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>left: 50%;
top: 50%;
margin-left: 负的宽度一半;
margin-top: 负的高度一半;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="布局" tabindex="-1"><a class="header-anchor" href="#布局"><span>布局</span></a></h2>
<h3 id="版心" tabindex="-1"><a class="header-anchor" href="#版心"><span>版心</span></a></h3>
<p>一个固定宽度且水平居中的盒子
版心的宽度一般是 960 ~ 1200 像素之间</p>
<h3 id="名词" tabindex="-1"><a class="header-anchor" href="#名词"><span>名词</span></a></h3>
<table>
<thead>
<tr>
<th>位置</th>
<th>翻译</th>
</tr>
</thead>
<tbody>
<tr>
<td>顶部导航条</td>
<td>topbar</td>
</tr>
<tr>
<td>页头</td>
<td>header、page-header</td>
</tr>
<tr>
<td>导航</td>
<td>nav、navigator、navbar</td>
</tr>
<tr>
<td>搜索框</td>
<td>search、search-box</td>
</tr>
<tr>
<td>横幅、广告、宣传图</td>
<td>banner</td>
</tr>
<tr>
<td>主要内容</td>
<td>content、main</td>
</tr>
<tr>
<td>侧边栏</td>
<td>aside、sidebar</td>
</tr>
<tr>
<td>页脚</td>
<td>footer、page-footer</td>
</tr>
</tbody>
</table>
<h3 id="重置默认样式" tabindex="-1"><a class="header-anchor" href="#重置默认样式"><span>重置默认样式</span></a></h3>
<table>
<thead>
<tr>
<th>元素</th>
<th>默认样式</th>
</tr>
</thead>
<tbody>
<tr>
<td>p</td>
<td>margin</td>
</tr>
<tr>
<td>h1</td>
<td>margin、加粗</td>
</tr>
<tr>
<td>body</td>
<td>padding</td>
</tr>
<tr>
<td>超链接</td>
<td>color、下划线</td>
</tr>
<tr>
<td>ul</td>
<td>padding-left</td>
</tr>
</tbody>
</table>
<h4 id="清除全局样式" tabindex="-1"><a class="header-anchor" href="#清除全局样式"><span>清除全局样式</span></a></h4>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>*{
	margin:0;
	padding:0;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="reset-css-全变白纸" tabindex="-1"><a class="header-anchor" href="#reset-css-全变白纸"><span>reset.css（全变白纸）</span></a></h4>
<h4 id="normalize-css-小改一下" tabindex="-1"><a class="header-anchor" href="#normalize-css-小改一下"><span>Normalize.css（小改一下）</span></a></h4>
<p>http://necolas.github.io/normalize.css/</p>
</div></template>


