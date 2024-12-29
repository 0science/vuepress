## DOM

文档对象是网页中所有对象的所有者

#### 定时器

轮循定时器

```
setInterval(function(){},1000)
```

延迟定时器

```
setTimeout(function(){},1000)
```

### 选择元素

```
//通过 id 找元素
document.getElementById(id) 

//通过 类 找元素
document.getElementsByClassName(name) 

//通过 标签 找元素
document.getElementsByTagName(name)
```

### 使用DOM

element.childNodes 返回一个元素的子节点的数组。

element.firstChild 返回元素的第一个子节点。

element.lastChild 返回元素的最后一个子节点。

element.hasChildNodes 如果元素有任何子节点，则返回 true，否则为 false 。

element.nextSibling 返回相同树级别的下一个节点。

element.previousSibling 返回在同一树级别的上一个节点。

element.parentNode 返回元素的父节点。

element.cloneNode() 克隆元素并返回结果节点。

document.createElement(element) 创建一个新的元素节点。

document.createTextNode(text) 创建一个新的文本节点。

element.appendChild(newNode) 将一个新的子节点添加到元素作为最后一个子节点。

element.insertBefore(node1, node2) 在节点2之前插入node1作为子节点。

要替换HTML元素，使用 element.replaceChild(newNode,oldNode) 方法