<template><div><h2 id="dom" tabindex="-1"><a class="header-anchor" href="#dom"><span>DOM</span></a></h2>
<p>文档对象是网页中所有对象的所有者</p>
<h4 id="定时器" tabindex="-1"><a class="header-anchor" href="#定时器"><span>定时器</span></a></h4>
<p>轮循定时器</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>setInterval(function(){},1000)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>延迟定时器</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>setTimeout(function(){},1000)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="选择元素" tabindex="-1"><a class="header-anchor" href="#选择元素"><span>选择元素</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>//通过 id 找元素
document.getElementById(id) 

//通过 类 找元素
document.getElementsByClassName(name) 

//通过 标签 找元素
document.getElementsByTagName(name)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="使用dom" tabindex="-1"><a class="header-anchor" href="#使用dom"><span>使用DOM</span></a></h3>
<p>element.childNodes 返回一个元素的子节点的数组。</p>
<p>element.firstChild 返回元素的第一个子节点。</p>
<p>element.lastChild 返回元素的最后一个子节点。</p>
<p>element.hasChildNodes 如果元素有任何子节点，则返回 true，否则为 false 。</p>
<p>element.nextSibling 返回相同树级别的下一个节点。</p>
<p>element.previousSibling 返回在同一树级别的上一个节点。</p>
<p>element.parentNode 返回元素的父节点。</p>
<p>element.cloneNode() 克隆元素并返回结果节点。</p>
<p>document.createElement(element) 创建一个新的元素节点。</p>
<p>document.createTextNode(text) 创建一个新的文本节点。</p>
<p>element.appendChild(newNode) 将一个新的子节点添加到元素作为最后一个子节点。</p>
<p>element.insertBefore(node1, node2) 在节点2之前插入node1作为子节点。</p>
<p>要替换HTML元素，使用 element.replaceChild(newNode,oldNode) 方法</p>
</div></template>


