"use strict";(self.webpackChunkmy_vuepress_site=self.webpackChunkmy_vuepress_site||[]).push([[1643],{9012:(e,a,l)=>{l.r(a),l.d(a,{default:()=>n});var t=l(6252);const i=[(0,t.uE)('<h1 id="函数" tabindex="-1"><a class="header-anchor" href="#函数"><span>函数</span></a></h1><h2 id="定义函数" tabindex="-1"><a class="header-anchor" href="#定义函数"><span>定义函数</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>function 函数名(参数1,参数2,...){\n    函数体\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数设置" tabindex="-1"><a class="header-anchor" href="#参数设置"><span>参数设置</span></a></h2><ul><li>无参函数</li><li>有参函数</li><li>剩余参数</li></ul><h3 id="剩余参数" tabindex="-1"><a class="header-anchor" href="#剩余参数"><span>剩余参数</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>function 函数名(...参数){\n    函数体\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="作用域" tabindex="-1"><a class="header-anchor" href="#作用域"><span>作用域</span></a></h2><p>函数是一个基本作用域</p><ul><li>全局变量</li><li>局部变量</li><li>块级变量</li></ul><p>块级变量：let声明的变量，只在{}中有效</p><h2 id="预解析" tabindex="-1"><a class="header-anchor" href="#预解析"><span>预解析</span></a></h2><h2 id="变量提升" tabindex="-1"><a class="header-anchor" href="#变量提升"><span>变量提升</span></a></h2><p>变量提升到最上面 作用域才提升</p><h2 id="垃圾回收" tabindex="-1"><a class="header-anchor" href="#垃圾回收"><span>垃圾回收</span></a></h2><p>局部变量只在函数运行时存在，运行完毕后立即销毁，保存局部变量可以使用全局变量保存和return返回</p><h2 id="匿名函数" tabindex="-1"><a class="header-anchor" href="#匿名函数"><span>匿名函数</span></a></h2><p>没有名字的函数</p><h2 id="箭头函数" tabindex="-1"><a class="header-anchor" href="#箭头函数"><span>箭头函数</span></a></h2><p>函数名 = 参数 =&gt; 返回值</p><h2 id="回调函数" tabindex="-1"><a class="header-anchor" href="#回调函数"><span>回调函数</span></a></h2><table><thead><tr><th>方法</th><th>功能</th></tr></thead><tbody><tr><td>find()</td><td>返回满足的第一个条件的元素</td></tr><tr><td>every()</td><td>判断是否所有元素都满足条件</td></tr><tr><td>some()</td><td>判断是否有元素满足条件</td></tr><tr><td>forEach()</td><td>遍历数组</td></tr><tr><td>map()</td><td>返回一个新数组，元素是原数组元素调用函数处理后的值</td></tr><tr><td>reduce()</td><td>对数组元素进行计算，返回一个值</td></tr><tr><td>reduceRight()</td><td>从右向左计算</td></tr></tbody></table><h2 id="函数嵌套" tabindex="-1"><a class="header-anchor" href="#函数嵌套"><span>函数嵌套</span></a></h2><p>函数可以嵌套，嵌套的函数可以访问外层函数的变量，但是不能访问内层函数的变量</p><h2 id="作用域链" tabindex="-1"><a class="header-anchor" href="#作用域链"><span>作用域链</span></a></h2><p>函数执行时，会创建一个作用域链，作用域链中包含当前作用域，当前作用域的父作用域，直到全局作用域 找不到就返回上一层找，直到找到为止</p><h2 id="闭包函数" tabindex="-1"><a class="header-anchor" href="#闭包函数"><span>闭包函数</span></a></h2><ol><li>函数外部访问函数内的变量</li><li>变量的值保存在内存中，不能被修改</li></ol>',28)],d={},n=(0,l(3744).Z)(d,[["render",function(e,a){return(0,t.wg)(),(0,t.iD)("div",null,i)}]])},935:(e,a,l)=>{l.r(a),l.d(a,{data:()=>t});const t=JSON.parse('{"key":"v-749b3a25","path":"/guide/04.Javascript/%E5%87%BD%E6%95%B0.html","title":"函数","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"定义函数","slug":"定义函数","link":"#定义函数","children":[]},{"level":2,"title":"参数设置","slug":"参数设置","link":"#参数设置","children":[{"level":3,"title":"剩余参数","slug":"剩余参数","link":"#剩余参数","children":[]}]},{"level":2,"title":"作用域","slug":"作用域","link":"#作用域","children":[]},{"level":2,"title":"预解析","slug":"预解析","link":"#预解析","children":[]},{"level":2,"title":"变量提升","slug":"变量提升","link":"#变量提升","children":[]},{"level":2,"title":"垃圾回收","slug":"垃圾回收","link":"#垃圾回收","children":[]},{"level":2,"title":"匿名函数","slug":"匿名函数","link":"#匿名函数","children":[]},{"level":2,"title":"箭头函数","slug":"箭头函数","link":"#箭头函数","children":[]},{"level":2,"title":"回调函数","slug":"回调函数","link":"#回调函数","children":[]},{"level":2,"title":"函数嵌套","slug":"函数嵌套","link":"#函数嵌套","children":[]},{"level":2,"title":"作用域链","slug":"作用域链","link":"#作用域链","children":[]},{"level":2,"title":"闭包函数","slug":"闭包函数","link":"#闭包函数","children":[]}],"git":{},"filePathRelative":"guide/04.Javascript/函数.md"}')}}]);