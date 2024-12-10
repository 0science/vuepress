<template><div><h1 id="git" tabindex="-1"><a class="header-anchor" href="#git"><span>Git</span></a></h1>
<h2 id="一、git介绍" tabindex="-1"><a class="header-anchor" href="#一、git介绍"><span>一、Git介绍</span></a></h2>
<h3 id="git是什么" tabindex="-1"><a class="header-anchor" href="#git是什么"><span>Git是什么</span></a></h3>
<p>Git是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理</p>
<h3 id="git工作流程" tabindex="-1"><a class="header-anchor" href="#git工作流程"><span>Git工作流程</span></a></h3>
<p><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/工作流程.jpg" alt="工作流程.jpg"></p>
<h2 id="二、git安装配置" tabindex="-1"><a class="header-anchor" href="#二、git安装配置"><span>二、Git安装配置</span></a></h2>
<h3 id="下载安装" tabindex="-1"><a class="header-anchor" href="#下载安装"><span>下载安装</span></a></h3>
<p><a href="https://git-scm.com/download" target="_blank" rel="noopener noreferrer">Git官网<ExternalLinkIcon/></a></p>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>//查看Git版本
git --version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Git GUI：Git提供的图形界面工具
Git Bash：Git提供的命令行工具</p>
</blockquote>
<h3 id="新建仓库" tabindex="-1"><a class="header-anchor" href="#新建仓库"><span>新建仓库</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>//初始化，新建.git文件
git init 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置用户名和邮箱" tabindex="-1"><a class="header-anchor" href="#配置用户名和邮箱"><span>配置用户名和邮箱</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>//全局配置
git config --global user.name '你的账户名称'
git config --global user.email '你的 Email'
//局部配置
git config --local user.name '你的账户名称'   
git config --local user.email '你的 Email'
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="报错修改" tabindex="-1"><a class="header-anchor" href="#报错修改"><span>报错修改</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>//Windows系统下在提交代码时自动将LF转换为CRLF
git config --global core.autocrlf true
//Linux/macOS系统下在提交代码时自动将CRLF转换为LF
git config --global core.autocrlf input
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="查看配置" tabindex="-1"><a class="header-anchor" href="#查看配置"><span>查看配置</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>//查看全局配置
git config --global --list
//查看当前配置
git config --local --list
//查看用户
git config user.name
//查看邮箱
git config user.email
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、git的基本操作" tabindex="-1"><a class="header-anchor" href="#三、git的基本操作"><span>三、Git的基本操作</span></a></h2>
<h3 id="速查表" tabindex="-1"><a class="header-anchor" href="#速查表"><span>速查表</span></a></h3>
<p><img src="https://djm-1317856319.cos.ap-shanghai.myqcloud.com/djm-1317856319/20230815110059.png" alt="image.png"></p>
<h3 id="查看内容" tabindex="-1"><a class="header-anchor" href="#查看内容"><span>查看内容</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>//查看详细日志
git log
//查看简化日志
git log --pretty=oneline --all --graph --abbrev-commit
//查看版本号
git reflog
//查看变更状态
git status
//查看暂存区
git ls-files
//查看工作区与暂存区的差异
git diff
//查看暂存区与本地仓库的差异
git diff --cached
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>--pretty=oneline：显示为一行
--all：显示所有
--graph：图形化显示
--abbrev-commit：使用短提交哈希值</p>
</blockquote>
<h3 id="修改内容" tabindex="-1"><a class="header-anchor" href="#修改内容"><span>修改内容</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>//恢复工作区内容
git restore .
//删除工作区文件
git rm 文件
//删除暂存区文件
git rm --cached
//撤销上次提交
git commit --amend 
//重命名
git mv 旧名称 新名称
//版本回退
git reset --hard id
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>版本id可以用git reflog查看，只用输入前7位即可</p>
</blockquote>
<h3 id="提交内容" tabindex="-1"><a class="header-anchor" href="#提交内容"><span>提交内容</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>//全部提交
git add .
//指定提交
git add 文件
//无注释
git commit
//有注释
git commit -m "注释内容"
//跳过暂存区提交(新文件不行)
git commit -am "注释内容"
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="回滚操作" tabindex="-1"><a class="header-anchor" href="#回滚操作"><span>回滚操作</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>//删除记录回滚
git reflog
git reset --hard id
git push -f
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>//保留记录回滚
git reflog
git revert -n id
git commit -m "注释"
git push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、git的分支操作" tabindex="-1"><a class="header-anchor" href="#四、git的分支操作"><span>四、Git的分支操作</span></a></h2>
<h3 id="增删改查" tabindex="-1"><a class="header-anchor" href="#增删改查"><span>增删改查</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>//创建分支
git branch 分支名
//查看所有分支
git branch
//查看当前分支
git branch -v
//切换分支
git checkout 分支名
//创建并切换分支
git checkout -b 分支名
//合并分支
git merge 分支名
//删除分支
git branch -d 分支名
//强制删除分支
git branch -D 分支名
//删除远程分支
git push remote --delete 远程分支名
git push remote:远端分支名 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>切换分支前要先提交到暂存区</p>
</blockquote>
<h3 id="标签管理" tabindex="-1"><a class="header-anchor" href="#标签管理"><span>标签管理</span></a></h3>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>//添加标签
git tag -a 标签名
//指定版本添加标签
git tag -a 标签名 id
//查看标签
git tag
//添加标签内容
git tag -a 标签名 -m '标签内容'
//查看标签信息
git show 标签名
//推送单个标签
git push origin 标签名
//推送所有标签
git push origin --tags
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、git的远程仓库" tabindex="-1"><a class="header-anchor" href="#五、git的远程仓库"><span>五、Git的远程仓库</span></a></h2>
<div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre v-pre class="language-text"><code>//添加远程仓库
git remote add 远程仓库名 地址
//克隆仓库
git clone 远程仓库地址
//查看远程仓库地址
git remote -v
//查看远程仓库名称
git remote
//删除远程仓库
git remote remove 远程仓库名
//重命名远程仓库
git remote rename 旧名称 新名称
//抓取(同步本地没有的数据)
git fetch 远程仓库名
//拉取(同步到本地并合并)
git pull
//同步远程分支到本地
git remote prune origin
//推送(上传到远程仓库)
git push 仓库名 分支名
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>git pull = git fetch + git merge
远程仓库默认命名为origin
如果远程分支名和本地分支名称相同，则可以只写本地分支
可以省略已关联仓库的分支名和远端仓库名
可以直接克隆已有的仓库到本地，本地目录可以省略，会自动生成一个目录</p>
</blockquote>
</div></template>


