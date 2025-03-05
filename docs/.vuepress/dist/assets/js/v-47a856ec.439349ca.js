"use strict";(self.webpackChunkmy_vuepress_site=self.webpackChunkmy_vuepress_site||[]).push([[1455],{5836:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var d=a(6252);const n=[(0,d.uE)('<h1 id="数组" tabindex="-1"><a class="header-anchor" href="#数组"><span>数组</span></a></h1><h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义"><span>定义</span></a></h2><p><strong>作用</strong>：存储一组变量 <strong>取值</strong>：数组名[下标] <strong>元素</strong>：数组中保存的每个数据都叫数组元素 <strong>下标</strong>：数组中数据的编号 <strong>长度</strong>：数组中数据的个数，通过数组的length属性获得</p><h2 id="_1-创建数组" tabindex="-1"><a class="header-anchor" href="#_1-创建数组"><span>1.创建数组</span></a></h2><h3 id="使用new-array-创建数组" tabindex="-1"><a class="header-anchor" href="#使用new-array-创建数组"><span>使用new Array() 创建数组</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>  // 元素值类型为字符型\n  var area = new Array(&#39;Beijing&#39;, &#39;Shanghai&#39;, &#39;Shenzhen&#39;);\n  // 元素值类型为数值型\n  var score = new Array(56, 68, 98, 44);\n  // 元素值类型为混合型\n  var mix = new Array(123, &#39;abc&#39;, null, true, undefined);\n  // 空数组\n  var arr1 = new Array();  // 或 var arr2 = new Array;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用-创建数组" tabindex="-1"><a class="header-anchor" href="#使用-创建数组"><span>使用 [ ] 创建数组</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var weather = [&#39;wind&#39;, &#39;fine&#39;,];      // 相当于：new Array(&#39;wind&#39;, &#39;fine&#39;,)\nvar empty = [];                       // 相当于：new Array\nvar mood = [&#39;sad&#39;, , , ,&#39;happy&#39;];     // 控制台输出mood：(5) [&quot;sad&quot;, empty × 3, &quot;happy&quot;]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-操作数组" tabindex="-1"><a class="header-anchor" href="#_2-操作数组"><span>2.操作数组</span></a></h2><h3 id="获取数组长度" tabindex="-1"><a class="header-anchor" href="#获取数组长度"><span>获取数组长度</span></a></h3><p>使用.length</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var arr1 = [78, 88, 98];\nvar arr2 = [&#39;a&#39;, , , , &#39;b&#39;, &#39;c&#39;];\nconsole.log(arr1.length);   // 输出结果为：3\nconsole.log(arr2.length);   // 输出结果为：6\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置数组长度" tabindex="-1"><a class="header-anchor" href="#设置数组长度"><span>设置数组长度</span></a></h3><p>使用.length并初始化 大于留空 小于删除</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var arr1 = [];\narr1.length = 5;\nconsole.log(arr1);      // 输出结果：(5) [empty × 5]\nvar arr2 = [1, 2, 3];\narr2.length = 4; \nconsole.log(arr2);      // 输出结果：(4) [1, 2, 3, empty]\nvar arr3 = [&#39;a&#39;, &#39;b&#39;];\narr3.length = 2; \nconsole.log(arr3);      // 输出结果：(2) [&quot;a&quot;, &quot;b&quot;]\nvar arr4 = [&#39;hehe&#39;, &#39;xixi&#39;, &#39;gugu&#39;, &#39;jiujiu&#39;];\narr4.length = 3; \nconsole.log(arr4);      // 输出结果：(3) [&quot;hehe&quot;, &quot;xixi&quot;, &quot;gugu&quot;]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="遍历数组" tabindex="-1"><a class="header-anchor" href="#遍历数组"><span>遍历数组</span></a></h3><p>for in 循环</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var navlistArr = [&#39;首页&#39;,&#39;新闻&#39;,&#39;关于&#39;];\nvar str = &#39;&lt;ul&gt;&#39;;\nfor(var i in navlistArr){\n    str += &#39;&lt;li&gt;&lt;a&gt;&#39;+ navlistArr[i] +&#39;&lt;/a&gt;&lt;/li&gt;&#39;;\n}\nstr += &#39;&lt;/ul&gt;&#39;;\ndocument.getElementById(&#39;navlist&#39;).innerHTML = str;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-操作元素" tabindex="-1"><a class="header-anchor" href="#_3-操作元素"><span>3.操作元素</span></a></h2><p>使用 数组名[下标]的方式</p><h3 id="增加元素" tabindex="-1"><a class="header-anchor" href="#增加元素"><span>增加元素</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 为空数组添加元素\nvar height = [];\nheight[5] =  183;\nheight[0] =  175;\nheight[3] =  150;\nconsole.log(height);      // 输出结果：(6) [175, empty × 2, 150, empty, 183]\n\n// 为非空数组添加元素\nvar arr = [&#39;Asa&#39;, &#39;Taylor&#39;];\narr[2] = &#39;Tom&#39;;\narr[3] =  &#39;Jack&#39;;\nconsole.log(arr);         // 输出结果：(4) [&quot;Asa&quot;, &quot;Taylor&quot;, &quot;Tom&quot;, &quot;Jack&quot;]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="删除元素" tabindex="-1"><a class="header-anchor" href="#删除元素"><span>删除元素</span></a></h3><p>delete 数组名[下标] 删除后依旧占用空间</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var stu = [&#39;Tom&#39;, &#39;Jimmy&#39;, &#39;Lucy&#39;];\nconsole.log(stu);     // 输出结果：(3) [&quot;Tom&quot;, &quot;Jimmy&quot;, &quot;Lucy&quot;]\ndelete stu[1];        // 删除数组中第2个元素\nconsole.log(stu);     // 输出结果：(3) [&quot;Tom&quot;, empty, &quot;Lucy&quot;]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="修改元素" tabindex="-1"><a class="header-anchor" href="#修改元素"><span>修改元素</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var arr = [&#39;a&#39;, &#39;b&#39;, &#39;c&#39;, &#39;d&#39;];\narr[2] = 123;\narr[3] = 456;\nconsole.log(arr);         // 输出结果：(4) [&quot;a&quot;, &quot;b&quot;, 123, 456]\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>解构赋值</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// 传统方式\nvar arr = [1, 2, 3];\nvar a = arr[0];\nvar b = arr[1];\nvar c = arr[2];\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>// ES6解构赋值\nvar arr = [1, 2, 3];\n[a, b] = arr;\nconsole.log(a + &#39; - &#39; + b);     // 输出结果：1 - 2\nvar n1 = 4, n2 = 8;\n[n1, n2] = [n2, n1];\nconsole.log(n1 + &#39; - &#39; + n2);   // 输出结果：8 - 4\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查找数组" tabindex="-1"><a class="header-anchor" href="#查找数组"><span>查找数组</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>var arr = [&#39;hello&#39;, &#39;JavaScript&#39;, 22.48, true];\nconsole.log(arr[0]);\nconsole.log(arr[2]);\nconsole.log(arr);\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-数组属性与方法" tabindex="-1"><a class="header-anchor" href="#_4-数组属性与方法"><span>4.数组属性与方法</span></a></h2><table><thead><tr><th>方法</th><th>功能</th></tr></thead><tbody><tr><td>push()</td><td>向数组尾部添加元素</td></tr><tr><td>pop()</td><td>删除数组尾部元素</td></tr><tr><td>shift()</td><td>删除数组头部元素</td></tr><tr><td>unshift()</td><td>向数组头部添加元素</td></tr></tbody></table><table><thead><tr><th>方法</th><th>功能</th></tr></thead><tbody><tr><td>reverse()</td><td>反转数组</td></tr><tr><td>sort()</td><td>对数组元素进行排序</td></tr><tr><td>join()</td><td>将数组元素连接成字符串</td></tr><tr><td>concat()</td><td>连接两个数组</td></tr><tr><td>slice()</td><td>截取数组</td></tr><tr><td>splice()</td><td>删除数组元素</td></tr><tr><td>indexOf()</td><td>查找数组元素位置</td></tr><tr><td>forEach()</td><td>遍历数组</td></tr><tr><td>map()</td><td>映射数组</td></tr><tr><td>filter()</td><td>过滤数组</td></tr><tr><td>every()</td><td>判断数组元素是否满足条件</td></tr><tr><td>some()</td><td>判断数组元素是否满足条件</td></tr><tr><td>reduce()</td><td>数组元素累加</td></tr><tr><td>reduceRight()</td><td>数组元素累加</td></tr><tr><td>find()</td><td>查找数组元素</td></tr><tr><td>findIndex()</td><td>查找数组元素位置</td></tr><tr><td>fill()</td><td>填充数组</td></tr><tr><td>entries()</td><td>返回数组元素键值对</td></tr><tr><td>keys()</td><td>返回数组元素键名</td></tr><tr><td>values()</td><td>返回数组元素键值</td></tr><tr><td>Symbol.iterator()</td><td>返回数组迭代器</td></tr><tr><td>includes()</td><td>判断数组是否包含某个元素</td></tr><tr><td>Array.isArray()</td><td>判断是否为数组</td></tr><tr><td>Array.from()</td><td>将类数组对象转换为数组</td></tr><tr><td>Array.of()</td><td>将一组值转换为数组</td></tr><tr><td>indexOf()</td><td>查找数组元素位置</td></tr><tr><td>lastIndexOf()</td><td>查找数组元素位置</td></tr></tbody></table><h2 id="_5-map集合" tabindex="-1"><a class="header-anchor" href="#_5-map集合"><span>5.MAP集合</span></a></h2><h2 id="_6-set集合" tabindex="-1"><a class="header-anchor" href="#_6-set集合"><span>6.set集合</span></a></h2><h2 id="_7-迭代器" tabindex="-1"><a class="header-anchor" href="#_7-迭代器"><span>7.迭代器</span></a></h2>',38)],r={},i=(0,a(3744).Z)(r,[["render",function(e,t){return(0,d.wg)(),(0,d.iD)("div",null,n)}]])},8860:(e,t,a)=>{a.r(t),a.d(t,{data:()=>d});const d=JSON.parse('{"key":"v-47a856ec","path":"/guide/04.Javascript/%E6%95%B0%E7%BB%84.html","title":"数组","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"定义","slug":"定义","link":"#定义","children":[]},{"level":2,"title":"1.创建数组","slug":"_1-创建数组","link":"#_1-创建数组","children":[{"level":3,"title":"使用new Array() 创建数组","slug":"使用new-array-创建数组","link":"#使用new-array-创建数组","children":[]},{"level":3,"title":"使用 [ ] 创建数组","slug":"使用-创建数组","link":"#使用-创建数组","children":[]}]},{"level":2,"title":"2.操作数组","slug":"_2-操作数组","link":"#_2-操作数组","children":[{"level":3,"title":"获取数组长度","slug":"获取数组长度","link":"#获取数组长度","children":[]},{"level":3,"title":"设置数组长度","slug":"设置数组长度","link":"#设置数组长度","children":[]},{"level":3,"title":"遍历数组","slug":"遍历数组","link":"#遍历数组","children":[]}]},{"level":2,"title":"3.操作元素","slug":"_3-操作元素","link":"#_3-操作元素","children":[{"level":3,"title":"增加元素","slug":"增加元素","link":"#增加元素","children":[]},{"level":3,"title":"删除元素","slug":"删除元素","link":"#删除元素","children":[]},{"level":3,"title":"修改元素","slug":"修改元素","link":"#修改元素","children":[]},{"level":3,"title":"查找数组","slug":"查找数组","link":"#查找数组","children":[]}]},{"level":2,"title":"4.数组属性与方法","slug":"_4-数组属性与方法","link":"#_4-数组属性与方法","children":[]},{"level":2,"title":"5.MAP集合","slug":"_5-map集合","link":"#_5-map集合","children":[]},{"level":2,"title":"6.set集合","slug":"_6-set集合","link":"#_6-set集合","children":[]},{"level":2,"title":"7.迭代器","slug":"_7-迭代器","link":"#_7-迭代器","children":[]}],"git":{},"filePathRelative":"guide/04.Javascript/数组.md"}')}}]);