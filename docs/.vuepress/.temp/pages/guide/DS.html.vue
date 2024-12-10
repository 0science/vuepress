<template><div><h1 id="数据结构" tabindex="-1"><a class="header-anchor" href="#数据结构"><span>数据结构</span></a></h1>
<h2 id="绪论" tabindex="-1"><a class="header-anchor" href="#绪论"><span>绪论</span></a></h2>
<h3 id="基本概念" tabindex="-1"><a class="header-anchor" href="#基本概念"><span>基本概念</span></a></h3>
<p><strong>数据结构学科</strong>：一门研究非数值计算的程序设计问题中的操作对象，以及他们之间的关系和操作相关问题的学科</p>
<p><strong>数据</strong>：描述客观事物的符号</p>
<p><strong>数据元素</strong>：组成数据的，有一定意义的基本单位</p>
<p><strong>数据项</strong>：一个数据元素由若干数据项组成(<strong>最小单位</strong>)</p>
<p><strong>数据对象</strong>：相同数据元素的集合</p>
<p><strong>数据结构</strong>：相互存在一种或多种特定关系的数据元素集合</p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/202307280951600.png" height=250 /></center>
<p><strong>逻辑结构</strong>：数据对象中数据元素之间的相互关系</p>
<p><strong>集合结构</strong>：数据元素属于统一集合</p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/202307280956448.jpg" height=200 /></center>
<p><strong>线性结构</strong>：数据元素间是一对一的关系</p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/202307280956966.jpg" height=200 /></center>
<p><strong>树形结构</strong>：数据元素间是一对多的关系</p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/202307281008188.png" height=200 /></center>
<p><strong>图形结构</strong>：数据元素间是多对多的关系</p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/202307281009776.png" height=250 /></center>
<p><strong>物理结构</strong>：计算机中的存储形式</p>
<p><strong>顺序存储结构</strong>：将数据元素存放在地址连续的存储单元里</p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/202307281016277.png" height=60 /></center>
<p><strong>链式存储结构</strong>：将数据元素存放在任意的存储单元里</p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/202307281016084.png" height=250 /></center>
<p><strong>数据类型</strong>：一组性质相同的值的集合及定义在此集合上的一些操作</p>
<p><strong>原子类型</strong>：不可再分解的基本类型</p>
<p><strong>结构类型</strong>：由若干个类型组合而成，可再分解</p>
<p><strong>抽象</strong>：提取出事物具有的普遍性质</p>
<p><strong>抽象数据类型</strong>：一个数学模型及定义在该模型上的一组操作</p>
<h3 id="算法" tabindex="-1"><a class="header-anchor" href="#算法"><span>算法</span></a></h3>
<p><strong>算法</strong>：解决特定问题求解步骤的描述</p>
<p><strong>算法的特性</strong>：</p>
<ol>
<li><strong>输入输出</strong>：算法可以没有输入，但至少有一个输出</li>
<li><strong>有穷性</strong>：算法在执行有限步骤后会自动结束，每一步都在可接受的时间内完成</li>
<li><strong>确定性</strong>：算法的每一步都有确定的含义</li>
<li><strong>可行性</strong>：算法的每一步都可执行，每一步都能在有限执行次数内完成</li>
</ol>
<p><strong>算法的要求</strong>：</p>
<ol>
<li><strong>正确性</strong>：无歧义，正确得到答案，正确反应需求</li>
<li><strong>可读性</strong>：方便阅读、交流和理解</li>
<li><strong>健壮性</strong>：输入不合法时，能做出相关处理</li>
<li><strong>时间效率高</strong></li>
<li><strong>低存储需求</strong></li>
</ol>
<p><strong>算法的效率度量</strong>：</p>
<ol>
<li><strong>事后统计法</strong>：通过设计好的程序和数据，比较运行时间</li>
<li><strong>事前估计法</strong>：编程前估计算法输入规模</li>
<li><strong>输入规模</strong>：输入量的多少</li>
</ol>
<p><strong>算法的复杂度</strong>：</p>
<ol>
<li><strong>时间复杂度</strong>：算法执行时间的增长率随问题规模变化的函数</li>
<li><strong>空间复杂度</strong>：算法执行空间的增长率随问题规模变化的函数</li>
</ol>
<p><strong>大O记法</strong>：用大写的O()表示时间复杂度</p>
<ol>
<li>用1取代加法常数</li>
<li>只保留最高阶</li>
<li>去除最高阶系数</li>
</ol>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/202307281048338.png" height=60 /></center>
<h2 id="线性表" tabindex="-1"><a class="header-anchor" href="#线性表"><span>线性表</span></a></h2>
<h3 id="基本概念-1" tabindex="-1"><a class="header-anchor" href="#基本概念-1"><span>基本概念</span></a></h3>
<p><strong>线性表</strong>：n个数据元素的有限序列</p>
<p><strong>表长</strong>：线性表的元素个数n</p>
<p><strong>空表</strong>：n=0的线性表</p>
<p><strong>位序</strong>：数据元素的下标</p>
<p><strong>表头</strong>：第一个元素</p>
<p><strong>表尾</strong>：最后一个元素</p>
<p><strong>前驱</strong>：元素左侧元素</p>
<p><strong>后继</strong>：元素右侧元素</p>
<p><strong>直接前驱</strong>：元素左侧相邻元素</p>
<p><strong>直接后继</strong>：元素右侧相邻元素</p>
<blockquote>
<p>每个元素都有前驱（除表首）
每个元素都有后继（除表尾）</p>
</blockquote>
<p><strong>线性表的特点</strong>：</p>
<ol>
<li>元素个数有限</li>
<li>元素有先后顺序</li>
<li>每个元素都是数据元素</li>
<li>元素大小相同</li>
<li>元素具有抽象性</li>
</ol>
<h3 id="基本操作" tabindex="-1"><a class="header-anchor" href="#基本操作"><span>基本操作</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>InitList(&amp;L)       \\初始化表
Length(L)          \\表长
LocalElem(L,e)     \\按值查找
GetElem(L,e)       \\按位查找
ListInsert(&amp;L,i,e) \\插入
ListDelete(&amp;L,i,e) \\删除
PrintList(L)       \\输出
Empty(L)           \\判空
DestroyList(L)     \\销毁
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/*将所有的在线性表Lb中但不在La中的数据元素插入到La中*/
void unionL(SqList *La,SqList Lb)
{
	int La_len,Lb_len,i;
	ElemType e;                        /*声明与La和Lb相同的数据元素e*/
	La_len=ListLength(*La);            /*求线性表的长度 */
	Lb_len=ListLength(Lb);
	for (i=1;i&lt;=Lb_len;i++)
	{
		GetElem(Lb,i,&amp;e);              /*取Lb中第i个数据元素赋给e*/
		if (!LocateElem(*La,e))        /*La中不存在和e相同数据元素*/
			ListInsert(La,++La_len,e); /*插入*/
	}
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="顺序表" tabindex="-1"><a class="header-anchor" href="#顺序表"><span>顺序表</span></a></h2>
<h3 id="基本概念-2" tabindex="-1"><a class="header-anchor" href="#基本概念-2"><span>基本概念</span></a></h3>
<p><strong>顺序表</strong>：线性表的顺序存储，用一组地址连续的存储单元依次存储数据元素</p>
<p><strong>静态分配</strong>：数组大小和空间固定</p>
<p><strong>动态分配</strong>：在程序执行过程中分配空间</p>
<p><strong>地址</strong>：存储器中每个存储单元的编号</p>
<blockquote>
<p>线性表从1开始，数组从0开始
线性表具备三个属性：起始位置、最大容量、当前长度
线性表长度小于数组长度</p>
</blockquote>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>#define MAXSIZE 20          /* 存储空间初始分配量 */
typedef int ElemType;       /* ElemType类型根据实际情况而定，这里为int */
typedef struct
{
	ElemType data[MAXSIZE]; /* 数组，存储数据元素 */
	int length;             /* 线性表当前长度 */
}SqList;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>顺序表的优缺点</strong></p>
<ol>
<li>随机访问，可直接查找特定节点</li>
<li>存储密度高</li>
<li>逻辑相邻且物理相邻</li>
<li>插入删除移动大量元素</li>
<li>造成空间碎片化</li>
</ol>
<h3 id="基本操作-1" tabindex="-1"><a class="header-anchor" href="#基本操作-1"><span>基本操作</span></a></h3>
<h4 id="读取" tabindex="-1"><a class="header-anchor" href="#读取"><span>读取</span></a></h4>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>#define OK 1
#define ERROR 0
/* Status是函数的类型,其值是函数结果状态代码，如OK等 */
typedef int Status;         

/* 初始条件：顺序线性表L已存在，1≤i≤ListLength(L) */
/* 操作结果：用e返回L中第i个数据元素的值，注意i是指位置，第1个位置的数组是从0开始 */
Status GetElem(SqList L,int i,ElemType *e)
{
	if(L.length==0 || i&lt;1 || i>L.length)
		return ERROR;
	*e=L.data[i-1];

	return OK;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="插入" tabindex="-1"><a class="header-anchor" href="#插入"><span>插入</span></a></h4>
<ol>
<li>插入位置不合理，则显示异常</li>
<li>线性表长度大于数组长度，则显示异常或动态增加容量</li>
<li>从最后一个元素开始向前遍历到第个元素，并将其向后移动一位</li>
<li>将元素插入该位置</li>
<li>表长加一</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 初始条件：顺序线性表L已存在,1≤i≤ListLength(L)， */
/* 操作结果：在L中第i个位置之前插入新的数据元素e，L的长度加1 */
Status ListInsert(SqList *L,int i,ElemType e)
{ 
	int k;
	if (L->length==MAXSIZE)  			/* 顺序线性表已经满 */
		return ERROR;
	if (i&lt;1 || i>L->length+1)			/* 当i比第一位置小或者比最后一位置后一位置还要大时 */
		return ERROR;				

	if (i&lt;=L->length)        			/* 若插入数据位置不在表尾 */
	{
		for(k=L->length-1;k>=i-1;k--)  	/* 将要插入位置后的元素向后移一位 */
			L->data[k+1]=L->data[k];
	}
	L->data[i-1]=e;          			/* 将新元素插入 */
	L->length++;

	return OK;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除" tabindex="-1"><a class="header-anchor" href="#删除"><span>删除</span></a></h4>
<ol>
<li>位置不合理，则显示异常</li>
<li>取出删除元素</li>
<li>从删除元素位置开始遍历到最后一个元素，并将其前移一位</li>
<li>表长减一</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 初始条件：顺序线性表L已存在，1≤i≤ListLength(L) */
/* 操作结果：删除L的第i个数据元素，并用e返回其值，L的长度减1 */
Status ListDelete(SqList *L,int i,ElemType *e) 
{ 
	int k;
	if (L->length==0)               /* 线性表为空 */
		return ERROR;
	if (i&lt;1 || i>L->length)         /* 删除位置不正确 */
		return ERROR;
	*e=L->data[i-1];
	if (i&lt;L->length)                /* 如果删除不是最后位置 */
	{
		for(k=i;k&lt;L->length;k++)	/* 将删除位置后继元素前移 */
			L->data[k-1]=L->data[k];
	}
	L->length--;
	return OK;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="单链表" tabindex="-1"><a class="header-anchor" href="#单链表"><span>单链表</span></a></h2>
<h3 id="基本概念-3" tabindex="-1"><a class="header-anchor" href="#基本概念-3"><span>基本概念</span></a></h3>
<p><strong>单链表</strong>：线性表的链式存储，用任意一组存储单元存储元素</p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/3-6-7.jpg" height=120 /></center>
<p><strong>头指针</strong>：链表中第一个节点的存储位置，有头结点则指向头结点(<strong>必备</strong>)</p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/3-6-8.jpg" height=40 /></center>
<p><strong>头结点</strong>：单链表第一个结点前附加的一个结点</p>
<p><strong>数据域</strong>：存储信息元素的域(<strong>p-&gt;data</strong>)</p>
<p><strong>指针域</strong>：存储直接后继的位置(<strong>p-&gt;next</strong>)</p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/3-6-10.jpg" height=120 /></center>
<p><strong>空链表</strong></p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/20230812133616.png" height=120 /></center>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 线性表的单链表存储结构 */
typedef struct Node
{
    ElemType data;
    struct Node *next;
} Node;
/* 定义LinkList */
typedef struct Node *LinkList;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>单链表优缺点</strong></p>
<ol>
<li>无需连续存储单元</li>
<li>指针域会浪费空间</li>
<li>非随机存取，无法直接查找特定节点</li>
</ol>
<h3 id="基本操作-2" tabindex="-1"><a class="header-anchor" href="#基本操作-2"><span>基本操作</span></a></h3>
<h4 id="读取-1" tabindex="-1"><a class="header-anchor" href="#读取-1"><span>读取</span></a></h4>
<ol>
<li>声明指针p指向头结点，初始化j=1</li>
<li>j&lt;i时遍历链表，指针p不断向下移动，++j</li>
<li>p为空时，则i结点不存在</li>
<li>查找成功，则返回结点p的数据</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 初始条件：顺序线性表L已存在，1≤i≤
   ListLength(L) */
/* 操作结果：用e返回L中第i个数据元素的值 */
Status GetElem(LinkList L, int i, ElemType *e)
{
    int j;
    LinkList p;            /* 声明一指针p */
    p = L->next;        /* 让p指向链表L的第个结点 */
    j = 1;                 /* j为计数器 */
    /* p不为空且计数器j还没有等于i时，循环继续 */
    while (p &amp;&amp; j &lt; i)    
    {
        p = p->next;    /* 让p指向下一个结点 */
        ++j;
    }
    if (!p || j > i)
        return ERROR;      /* 第i个结点不存在 */
    *e = p->data;       /* 取第i个结点的数据 */
    return OK;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="插入-1" tabindex="-1"><a class="header-anchor" href="#插入-1"><span>插入</span></a></h4>
<p><strong>单链表的插入</strong></p>
<center><table><tr>
<td><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/3-8-2.jpg" width=250 /></td>
<td><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/3-8-3.jpg" width=250 /></td></tr></table></center>
<p><strong>表头/表尾的插入</strong></p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/3-8-4.jpg" width=500 /></center>
<ol>
<li>声明p指针指向头结点，初始化j=1</li>
<li>j&lt;i时遍历链表，指针p不断向下移动，++j</li>
<li>p为空时，则i结点不存在</li>
<li>查找成功，则生成空结点s</li>
<li>s-&gt;data = e</li>
<li>s-&gt;next = p-&gt;next</li>
<li>p-&gt;next = s</li>
<li>返回成功</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 初始条件：顺序线性表L已存在，1≤i≤
   ListLength(L)， */
/* 操作结果：在L中第i个结点位置之前插入新的数
   据元素e，L的长度加1 */
Status ListInsert(LinkList *L, int i, ElemType e)
{
    int j;
    LinkList p, s;
    p = *L;
    j = 1;
    /* 寻找第i-1个结点 */
    while (p &amp;&amp; j &lt; i)                     
    {
        p = p->next;
        ++j;
    }
    /* 第i个结点不存在 */
    if (!p || j > i)
        return ERROR;                      
    /* 生成新结点（C标准函数） */
    s = (LinkList)malloc(sizeof(Node));    
    s->data = e;
    /* 将p的后继结点赋值给s的后继 */
    s->next = p->next;                    
    /* 将s赋值给p的后继 */
    p->next = s;
    return OK;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除-1" tabindex="-1"><a class="header-anchor" href="#删除-1"><span>删除</span></a></h4>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/3-8-5.jpg" width=400 /></center>
<ol>
<li>声明p指针指向头结点，初始化j=1</li>
<li>j&lt;i时遍历链表，指针p不断向下移动，++j</li>
<li>p为空时，则i结点不存在</li>
<li>查找成功，则q = p-&gt;next</li>
<li>p-&gt;next = q-&gt;next</li>
<li>e = q-&gt;data</li>
<li>释放q结点</li>
<li>返回成功</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 初始条件：顺序线性表L已存在，1≤i≤
   ListLength(L) */
/* 操作结果：删除L的第i个结点，并用e返回其
   值，L的长度减1 */
Status ListDelete(LinkList *L, int i, ElemType *e)
{
    int j;
    LinkList p, q;
    p = *L;
    j = 1;
    /* 遍历寻找第i-1个结点 */
    while (p->next &amp;&amp; j &lt; i)    
    {
        p = p->next;
        ++j;
    }
    /* 第i个结点不存在 */
    if (!(p->next) || j > i)
        return ERROR;           
    q = p->next;
    /* 将q的后继赋值给p的后继 */
    p->next = q->next;          
    /* 将q结点中的数据给e */
    *e = q->data;               
    /* 让系统回收此结点，释放内存 */
    free(q);                    
    return OK;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="整表创建" tabindex="-1"><a class="header-anchor" href="#整表创建"><span>整表创建</span></a></h4>
<p><strong>头插法</strong></p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/3-9-1.jpg" width=400 /></center>
<ol>
<li>声明指针p和变量i</li>
<li>初始化空链表L</li>
<li>建立带头结点的空表(头结点指向NULL)</li>
<li>循环：
<ol>
<li>生成新节点，并赋值给p</li>
<li>随机生成数赋值给p的数据域</li>
<li>将p插入到头结点与新结点之间</li>
</ol>
</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 随机产生n个元素的值，建立带表头结点的单链
   线性表L（头插法） */
void CreateListHead(LinkList *L, int n)
{
    LinkList p;
    int i;
    /* 初始化随机数种子 */
    srand(time(0));                            
    *L = (LinkList)malloc(sizeof(Node));
    /* 先建立一个带头结点的单链表 */
    (*L)->next = NULL;                         
    for (i = 0; i &lt; n; i++)
    {
        /* 生成新结点 */
        p = (LinkList)malloc(sizeof(Node));    
        /* 随机生成100以内的数字 */
        p->data = rand() % 100 + 1;            
        p->next = (*L)->next;
        /* 插入到表头 */
        (*L)->next = p;                        
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>尾插法</strong></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 随机产生n个元素的值，建立带表头结点的单链
线性表L（尾插法） */
void CreateListTail(LinkList *L, int n)
{
    LinkList p,r;
    int i;
    /* 初始化随机数种子 */
    srand(time(0));                         
    /* 为整个线性表 */
    *L = (LinkList)malloc(sizeof(Node));    
    /* r为指向尾部的结点 */
    r = *L;                                 
    for (i = 0; i &lt; n; i++)
    {
        /* 生成新结点 */
        p = (Node *)malloc(sizeof(Node));   
        /* 随机生成100以内的数字 */
        p->data = rand() % 100 + 1;         
        /* 将表尾终端结点的指针指向新结点 */
        r->next = p;                        
        /* 将当前的新结点定义为表尾终端结点 */
        r = p;                              
    }
    /* 表示当前链表结束 */
    r->next = NULL;                         
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="整表删除" tabindex="-1"><a class="header-anchor" href="#整表删除"><span>整表删除</span></a></h4>
<ol>
<li>声明指针p和q</li>
<li>将头结点赋值给p</li>
<li>循环：
<ol>
<li>将下一结点赋值给q</li>
<li>释放p</li>
<li>将q赋值给p</li>
</ol>
</li>
</ol>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 初始条件：顺序线性表L已存在，操作结果：将L
   重置为空表 */
Status ClearList(LinkList *L)
{
    LinkList p, q;
    /* p指向第一个结点 */
    p = (*L)->next;       
    /* 没到表尾 */
    while (p)             
    {
        q = p->next;
        free(p);
        p=q;
    }
    /* 头结点指针域为空 */
    (*L)->next = NULL;    
    return OK;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>线性表</th>
<th>存储方式</th>
<th>时间性能</th>
<th>空间性能</th>
<th>适用</th>
</tr>
</thead>
<tbody>
<tr>
<td>顺序表</td>
<td>连续存储</td>
<td>查找O(1)<br>插入O(n)<br>删除O(n)</td>
<td>预分配空间</td>
<td>频繁查找，很少插入删除</td>
</tr>
<tr>
<td>单链表</td>
<td>链式存储</td>
<td>查找O(n)<br>插入O(n)<br>删除O(n)</td>
<td>自由分配空间</td>
<td>元素个数多，变化大</td>
</tr>
</tbody>
</table>
<h2 id="静态链表" tabindex="-1"><a class="header-anchor" href="#静态链表"><span>静态链表</span></a></h2>
<h3 id="基本概念-4" tabindex="-1"><a class="header-anchor" href="#基本概念-4"><span>基本概念</span></a></h3>
<p><strong>静态链表</strong>：用数组描述的链表</p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/3-12-1.jpg" height=150 /></center>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 线性表的静态链表存储结构 */
/* 假设链表的最大长度是1000 */
#define MAXSIZE 1000                     
typedef struct
{
    ElemType data;
    /* 游标（Cursor），为0时表示无指向 */
    int cur;                             
} Component, 
  /* 对于不提供结构struct的程序设计语言，
     可以使用一对并行数组data和cur来处理。 */
  StaticLinkList[MAXSIZE];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/3-12-3.jpg" height=120 /></center>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 若备用空间链表非空，则返回分配的结点下标，
   否则返回0 */
int Malloc_SLL(StaticLinkList space)
{
    /* 当前数组第一个元素的cur存的值， */
    /* 就是要返回的第一个备用空闲的下标 */
    int i = space[0].cur;               
    /* 由于要拿出一个分量来使用了，所以我们 */
    /* 就得把它的下一个分量用来做备用 */
    if (space[0].cur)
        space[0].cur = space[i].cur;    
    return i;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>静态链表的优缺点</strong></p>
<ol>
<li>插入删除只改游标，不动元素</li>
<li>无法确定表长</li>
<li>无法随机读取</li>
</ol>
<h3 id="基本操作-3" tabindex="-1"><a class="header-anchor" href="#基本操作-3"><span>基本操作</span></a></h3>
<h4 id="插入-2" tabindex="-1"><a class="header-anchor" href="#插入-2"><span>插入</span></a></h4>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/3-12-3.jpg" height=120 /></center>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 若备用空间链表非空，则返回分配的结点下标，
   否则返回0 */
int Malloc_SLL(StaticLinkList space)
{
    /* 当前数组第一个元素的cur存的值， */
    /* 就是要返回的第一个备用空闲的下标 */
    int i = space[0].cur;               
    /* 由于要拿出一个分量来使用了，所以我们 */
    /* 就得把它的下一个分量用来做备用 */
    if (space[0].cur)
        space[0].cur = space[i].cur;    
    return i;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 在L中第i个元素之前插入新的数据元素e  */
  Status ListInsert(StaticLinkList L, int i, ElemType e)
  {
      int j, k, l;
      /* 注意k首先是最后一个元素的下标 */
      k = MAX_SIZE - 1;                   
      if (i &lt; 1 || i > ListLength(L) + 1)
          return ERROR;
      /* 获得空闲分量的下标 */
      j = Malloc_SSL(L);                  
      if (j)
      {
         /* 将数据赋值给此分量的data */
         L[j].data = e;                  
         /* 找到第i个元素之前的位置 */
         for (l = 1; l &lt;= i - 1; l++)    
             k = L[k].cur;
         /* 把第i个元素之前的cur赋值给新元素的cur */
         L[j].cur = L[k].cur;        
         /* 把新元素的下标赋值给第i个元素之前元素的cur */
         L[k].cur = j;                   
         return OK;
     }
     return ERROR;
 }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除-2" tabindex="-1"><a class="header-anchor" href="#删除-2"><span>删除</span></a></h4>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/3-12-4.jpg" height=80 /></center>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 删除在L中第i个数据元素e */
Status ListDelete(StaticLinkList L, int i)
{
    int j, k;
    if (i &lt; 1 || i > ListLength(L))
        return ERROR;
    k = MAX_SIZE - 1;
    for (j = 1; j &lt;= i - 1; j++)
        k = L[k].cur;
    j = L[k].cur;
    L[k].cur = L[j].cur;
    Free_SSL(L, j);
    return OK;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 将下标为k的空闲结点回收到备用链表 */
void Free_SSL(StaticLinkList space, int k)
{
    /* 把第一个元素cur值赋给要删除的分量cur */
    space[k].cur = space[0].cur;    
    /* 把要删除的分量下标赋值给第一个元素的cur */
    space[0].cur = k;               
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 初始条件：静态链表L已存在。操作结果：返回L
   中数据元素个数 */
int ListLength(StaticLinkList L)
{
    int j = 0;
    int i = L[MAXSIZE - 1].cur;
    while (i)
    {
        i = L[i].cur;
        j++;
    }
    return j;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="循环链表" tabindex="-1"><a class="header-anchor" href="#循环链表"><span>循环链表</span></a></h2>
<h3 id="基本概念-5" tabindex="-1"><a class="header-anchor" href="#基本概念-5"><span>基本概念</span></a></h3>
<p><strong>循环链表</strong>：将链表末端空指针改为指向头节点</p>
<p><strong>空循环链表</strong></p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/3-13-3.jpg" height=60 /></center>
<p><strong>非空循环链表</strong></p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/3-13-4.jpg" height=70 /></center>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/3-13-5.jpg" height=70 /></center>
<h3 id="基本操作-4" tabindex="-1"><a class="header-anchor" href="#基本操作-4"><span>基本操作</span></a></h3>
<p><strong>合并链表</strong></p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/3-13-7.jpg" height=180 /></center>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 保存A表的头结点，即① */
p = rearA->next;                    
/*将本是指向B表的第一个结点（不是头结点） */
rearA->next = rearB->next->next;    
/* 赋值给reaA->next，即② */
q = rearB->next;
/* 将原A表的头结点赋值给rearB->next，即③ */
rearB->next = p;                    
/* 释放q */
free(q);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="双向链表" tabindex="-1"><a class="header-anchor" href="#双向链表"><span>双向链表</span></a></h2>
<h3 id="基本概念-6" tabindex="-1"><a class="header-anchor" href="#基本概念-6"><span>基本概念</span></a></h3>
<p><strong>双向链表</strong>：单链表的每个结点中设置一个指向前驱的指针域</p>
<p><strong>空双向链表</strong></p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/3-14-3.jpg" height=80 /></center>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 线性表的双向链表存储结构 */
typedef struct DulNode
{
    ElemType data;
    struct DuLNode *prior;    /* 直接前驱指针 */
    struct DuLNode *next;     /* 直接后继指针 */
} DulNode, *DuLinkList;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基本操作-5" tabindex="-1"><a class="header-anchor" href="#基本操作-5"><span>基本操作</span></a></h3>
<h4 id="插入-3" tabindex="-1"><a class="header-anchor" href="#插入-3"><span>插入</span></a></h4>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/3-14-5.jpg" height=200 /></center>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 把p赋值给s的前驱，如图中① */
s->prior = p;          
/* 把p->next赋值给s的后继，如图中② */
s->next = p->next;     
/* 把s赋值给p->next的前驱，如图中③ */
p->next->prior = s;    
/* 把s赋值给p的后继，如图中④ */
p->next = s;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除-3" tabindex="-1"><a class="header-anchor" href="#删除-3"><span>删除</span></a></h4>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/3-14-6.jpg" height=150 /></center>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 把p->next赋值给p->prior的后继，如图中① */
p->prior->next = p->next;     
/* 把p->prior赋值给p->next的前驱，如图中② */
p->next->prior = p->prior;    
/* 释放结点 */
free(p);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="栈" tabindex="-1"><a class="header-anchor" href="#栈"><span>栈</span></a></h2>
<h3 id="基本概念-7" tabindex="-1"><a class="header-anchor" href="#基本概念-7"><span>基本概念</span></a></h3>
<p><strong>栈</strong>：只允许在一段插入或删除的线性表(后进先出)</p>
<p><strong>进栈(push)</strong>：栈的插入</p>
<p><strong>出栈(pop)</strong>：栈的删除</p>
<p><strong>栈顶</strong>：允许插入或删除的一段</p>
<p><strong>栈底</strong>：不允许插入或删除的一段</p>
<p><strong>空栈</strong>：不含任何元素的空表</p>
<p><strong>顺序栈</strong>：采用顺序存储的栈</p>
<p><strong>共享栈</strong>：可让两个顺序栈共享一个一维数组空间，将两个栈的栈底分
别设置在共享空间的两端，两个栈顶向共享空间的中间延伸</p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/4-5-1.jpg" height=100 /></center>
<p><strong>链栈</strong>：采用链式存储的栈</p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/4-6-1.jpg" height=250 /></center>
<h3 id="基本操作-6" tabindex="-1"><a class="header-anchor" href="#基本操作-6"><span>基本操作</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>InitStack(*S):    初始化操作，建立一个空栈S。
DestroyStack(*S): 若栈存在，则销毁它。
ClearStack(*S):   将栈清空。
StackEmpty(S):    若栈为空，返回true，否则返回false。
GetTop(S, *e):    若栈存在且非空，用e返回S的栈顶元素。
Push(*S, e):      若栈S存在，插入新元素e到栈S中并成为栈顶元素。
Pop(*S, *e):      删除栈S中栈顶元素，并用e返回其值。
StackLength(S):   返回栈S的元素个数。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="顺序存储" tabindex="-1"><a class="header-anchor" href="#顺序存储"><span>顺序存储</span></a></h3>
<h4 id="结构定义" tabindex="-1"><a class="header-anchor" href="#结构定义"><span>结构定义</span></a></h4>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* SElemType类型根据实际情况而定，这里假设为int */
typedef int SElemType;    
typedef struct
{
    SElemType data[MAXSIZE];
    /* 用于栈顶指针 */
    int top;              
}SqStack;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>栈顶指针：S.top
初始时设置：S.top=-1
栈顶元素：S.data[S.top]
进栈操作：栈不满时，栈顶指针先加1，再送值到栈顶元素
出栈操作：栈非空时，先取栈顶元素值，再将栈顶指针减1
栈空条件：S.top==-1
栈满条件：S.top==MaxSize-1
栈长：S.top+1</p>
<h4 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化"><span>初始化</span></a></h4>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>void Initstack(SqStack &amp;S){
	S.top=-1;                //初始化栈顶指针
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="判栈空" tabindex="-1"><a class="header-anchor" href="#判栈空"><span>判栈空</span></a></h4>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>bool StackEmpty(Sqstack S){
	if(S.top==-1)            //栈空
		return true;
	else                     //不空
		return false;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="进栈" tabindex="-1"><a class="header-anchor" href="#进栈"><span>进栈</span></a></h4>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/4-2-2.jpg" height=200 /></center>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 插入元素e为新的栈顶元素 */
Status Push(SqStack *S, SElemType e)
{
    /* 栈满 */
    if (S->top == MAXSIZE - 1)    
    {
        return ERROR;
    }
    /* 栈顶指针增加一 */
    S->top++;                     
    /* 将新插入元素赋值给栈顶空间 */
    S->data[S->top] = e;          
    return OK;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="出栈" tabindex="-1"><a class="header-anchor" href="#出栈"><span>出栈</span></a></h4>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/4-2-3.jpg" height=200 /></center>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 若栈不空，则删除S的栈顶元素，用e返回其值，
   并返回OK；否则返回ERROR */
Status Pop(SqStack *S, SElemType *e)
{
    if (S->top == -1)
        return ERROR;
    /* 将要删除的栈顶元素赋值给e */
    *e = S->data[S->top];    
    /* 栈顶指针减一 */
    S->top--;                
    return OK;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="读栈顶元素" tabindex="-1"><a class="header-anchor" href="#读栈顶元素"><span>读栈顶元素</span></a></h4>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>bool GetTop(SqStack S,ElemType &amp;x){
	if(S.top==-1)                   //栈空，报错
		return false;
	x=S.data[S.top];                //x记录栈顶元素
		return true;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="共享栈" tabindex="-1"><a class="header-anchor" href="#共享栈"><span>共享栈</span></a></h4>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 两栈共享空间结构 */
typedef struct
{
    SElemType data[MAXSIZE];
    int top1;    /* 栈1栈顶指针 */
    int top2;    /* 栈2栈顶指针 */
} SqDoubleStack;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 插入元素e为新的栈顶元素 */
Status Push(SqDoubleStack *S, SElemType e, 
int stackNumber)
{
    /* 栈已满，不能再push新元素了 */
    if (S->top1 + 1 == S->top2)    
        return ERROR;
    /* 栈1有元素进栈 */
    if (stackNumber == 1)          
        /* 若栈1则先top1+1后给数组元素赋值 */
        S->data[++S->top1] = e;    
    /* 栈2有元素进栈 */
    else if (stackNumber == 2)     
        /* 若栈2则先top2-1后给数组元素赋值 */
        S->data[--S->top2] = e;    
    return OK;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 若栈不空，则删除S的栈顶元素，用e返回其值，
   并返回OK；否则返回ERROR */
Status Pop(SqDoubleStack *S, SElemType *e, int stackNumber)
{
    if (stackNumber == 1)
    {
        /* 说明栈1已经是空栈，溢出 */
        if (S->top1 == -1)
            return ERROR;           
        /* 将栈1的栈顶元素出栈 */
        *e = S->data[S->top1--];    
    }
    else if (stackNumber == 2)
    {
        /* 说明栈2已经是空栈，溢出 */
        if (S->top2 == MAXSIZE)
            return ERROR;           
        /* 将栈2的栈顶元素出栈 */
        *e = S->data[S->top2++];    
    }
    return OK;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="链式存储" tabindex="-1"><a class="header-anchor" href="#链式存储"><span>链式存储</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>typedef struct StackNode
{
    SElemType data;
    struct StackNode *next;
} StackNode, *LinkStackPtr;
typedef struct LinkStack
{
    LinkStackPtr top;
    int count;
} LinkStack;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="进栈-1" tabindex="-1"><a class="header-anchor" href="#进栈-1"><span>进栈</span></a></h4>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/4-6-2.jpg" height=250 /></center>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 插入元素e为新的栈顶元素 */
Status Push(LinkStack *S, SElemType e)
{
    LinkStackPtr s 
      = (LinkStackPtr)malloc(sizeof(StackNode));
    s->data = e;
    /* 把当前的栈顶元素赋值给新结点的直接后继，如图中① */
    s->next = S->top;    
    /* 将新的结点s赋值给栈顶指针，如图中② */
    S->top = s;          
    S->count++;
    return OK;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="出栈-1" tabindex="-1"><a class="header-anchor" href="#出栈-1"><span>出栈</span></a></h4>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/4-6-3.jpg" height=250 /></center>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>/* 若栈不空，则删除S的栈顶元素，用e返回其值，
   并返回OK；否则返回ERROR */
Status Pop(LinkStack *S, SElemType *e)
{
    LinkStackPtr p;
    if (StackEmpty(*S))
        return ERROR;
    *e = S->top->data;
    /* 将栈顶结点赋值给p，如图③ */
    p = S->top;               
    /* 使得栈顶指针下移一位，指向后一结点，如图④ */
    S->top = S->top->next;    
    /* 释放结点p */
    free(p);                  
    S->count--;
    return OK;
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="队列" tabindex="-1"><a class="header-anchor" href="#队列"><span>队列</span></a></h2>
<h3 id="基本概念-8" tabindex="-1"><a class="header-anchor" href="#基本概念-8"><span>基本概念</span></a></h3>
<p><strong>队列</strong>：只允许在一端插入，在另一端删除</p>
<center><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/4-10-1.jpg" height=100 /></center>
<p><strong>队头</strong>：允许删除的一端</p>
<p><strong>队尾</strong>：允许插入的一端</p>
<p><strong>空队列</strong>：不含任何元素的空表</p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="基本操作-7" tabindex="-1"><a class="header-anchor" href="#基本操作-7"><span>基本操作</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>InitQueue(*Q):    初始化操作，建立一个空队列Q。
DestroyQueue(*Q): 若队列Q存在，则销毁它。
ClearQueue(*Q):   将队列Q清空。
QueueEmpty(Q):    若队列Q为空，返回true，否则返回false。
GetHead(Q, *e):   若队列Q存在且非空，用e返回队列Q的队头元素。
EnQueue(*Q, e):   若队列Q存在，插入新元素e到队列Q中并成为队尾元素。
DeQueue(*Q, *e):  删除队列Q中队头元素，并用e返回其值。
QueueLength(Q):   返回队列Q的元素个数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


