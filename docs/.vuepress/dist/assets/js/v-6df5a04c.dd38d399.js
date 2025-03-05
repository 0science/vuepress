"use strict";(self.webpackChunkmy_vuepress_site=self.webpackChunkmy_vuepress_site||[]).push([[1728],{4526:(e,a,t)=>{t.r(a),t.d(a,{default:()=>r});var i=t(6252);const d=(0,i.uE)('<h2 id="一、git命令速查表" tabindex="-1"><a class="header-anchor" href="#一、git命令速查表"><span>一、Git命令速查表</span></a></h2><p><img src="https://img-blog.csdnimg.cn/img_convert/bb553d59bc02b03547e4f986bb9e4c3c.png" alt="image.png"></p><h2 id="二、git简介" tabindex="-1"><a class="header-anchor" href="#二、git简介"><span>二、Git简介</span></a></h2><h3 id="_1-git是什么" tabindex="-1"><a class="header-anchor" href="#_1-git是什么"><span>1.Git是什么</span></a></h3><p>Git是一个开源的分布式版本控制系统，可以有效、高速地处理从很小到非常大的项目版本管理.</p><h3 id="_2-git工作流程" tabindex="-1"><a class="header-anchor" href="#_2-git工作流程"><span>2.Git工作流程</span></a></h3><p><img src="https://i-blog.csdnimg.cn/direct/16686aa63e65443f8687037032d90ac8.jpeg" alt="请添加图片描述"></p><h2 id="三、git安装配置" tabindex="-1"><a class="header-anchor" href="#三、git安装配置"><span>三、Git安装配置</span></a></h2><h3 id="_1-下载" tabindex="-1"><a class="header-anchor" href="#_1-下载"><span>1.下载</span></a></h3>',9),n={href:"https://git-scm.com/download",target:"_blank",rel:"noopener noreferrer"},s=(0,i.uE)('<h4 id="查看git版本" tabindex="-1"><a class="header-anchor" href="#查看git版本"><span>查看Git版本</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git --version\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>Git GUI：Git提供的图形界面工具 Git Bash：Git提供的命令行工具</p></blockquote><h3 id="_2-配置" tabindex="-1"><a class="header-anchor" href="#_2-配置"><span>2.配置</span></a></h3><h4 id="新建-git文件" tabindex="-1"><a class="header-anchor" href="#新建-git文件"><span>新建.git文件</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git init \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置"><span>全局配置</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git config --global user.name &#39;你的账户名称&#39;\ngit config --global user.email &#39;你的 Email&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="局部配置" tabindex="-1"><a class="header-anchor" href="#局部配置"><span>局部配置</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git config --local user.name &#39;你的账户名称&#39;   \ngit config --local user.email &#39;你的 Email&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-查看" tabindex="-1"><a class="header-anchor" href="#_3-查看"><span>3.查看</span></a></h3><h4 id="查看全局配置" tabindex="-1"><a class="header-anchor" href="#查看全局配置"><span>查看全局配置</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git config --global --list\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看当前配置" tabindex="-1"><a class="header-anchor" href="#查看当前配置"><span>查看当前配置</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git config --local --list\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看用户和邮箱" tabindex="-1"><a class="header-anchor" href="#查看用户和邮箱"><span>查看用户和邮箱</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git config user.name\ngit config user.email\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-报错修改" tabindex="-1"><a class="header-anchor" href="#_4-报错修改"><span>4.报错修改</span></a></h3><h4 id="windows系统下在提交代码时自动将lf转换为crlf" tabindex="-1"><a class="header-anchor" href="#windows系统下在提交代码时自动将lf转换为crlf"><span>Windows系统下在提交代码时自动将LF转换为CRLF</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git config --global core.autocrlf true\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="linux-macos系统下在提交代码时自动将crlf转换为lf" tabindex="-1"><a class="header-anchor" href="#linux-macos系统下在提交代码时自动将crlf转换为lf"><span>Linux/macOS系统下在提交代码时自动将CRLF转换为LF</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git config --global core.autocrlf input\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="四、git基本操作" tabindex="-1"><a class="header-anchor" href="#四、git基本操作"><span>四、Git基本操作</span></a></h2><h3 id="_1-查看内容" tabindex="-1"><a class="header-anchor" href="#_1-查看内容"><span>1.查看内容</span></a></h3><h4 id="查看详细日志" tabindex="-1"><a class="header-anchor" href="#查看详细日志"><span>查看详细日志</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git log\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看简化日志" tabindex="-1"><a class="header-anchor" href="#查看简化日志"><span>查看简化日志</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git log --pretty=oneline --all --graph --abbrev-commit\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看版本号" tabindex="-1"><a class="header-anchor" href="#查看版本号"><span>查看版本号</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git reflog\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看变更状态" tabindex="-1"><a class="header-anchor" href="#查看变更状态"><span>查看变更状态</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git status\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看暂存区" tabindex="-1"><a class="header-anchor" href="#查看暂存区"><span>查看暂存区</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git ls-files\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看工作区与暂存区的差异" tabindex="-1"><a class="header-anchor" href="#查看工作区与暂存区的差异"><span>查看工作区与暂存区的差异</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git diff\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看暂存区与本地仓库的差异" tabindex="-1"><a class="header-anchor" href="#查看暂存区与本地仓库的差异"><span>查看暂存区与本地仓库的差异</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git diff --cached\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>--pretty=oneline：显示为一行 --all：显示所有 --graph：图形化显示 --abbrev-commit：使用短提交哈希值</p></blockquote><h3 id="_2-修改内容" tabindex="-1"><a class="header-anchor" href="#_2-修改内容"><span>2.修改内容</span></a></h3><h4 id="恢复工作区内容" tabindex="-1"><a class="header-anchor" href="#恢复工作区内容"><span>恢复工作区内容</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git restore .\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除工作区文件" tabindex="-1"><a class="header-anchor" href="#删除工作区文件"><span>删除工作区文件</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git rm 文件\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除暂存区文件" tabindex="-1"><a class="header-anchor" href="#删除暂存区文件"><span>删除暂存区文件</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git rm --cached\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="撤销上次提交" tabindex="-1"><a class="header-anchor" href="#撤销上次提交"><span>撤销上次提交</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git commit --amend\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="重命名" tabindex="-1"><a class="header-anchor" href="#重命名"><span>重命名</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git mv 旧名称 新名称\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="版本回退" tabindex="-1"><a class="header-anchor" href="#版本回退"><span>版本回退</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git reset --hard id\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>版本id可以用git reflog查看，只用输入前7位即可</p></blockquote><h3 id="_3-提交内容" tabindex="-1"><a class="header-anchor" href="#_3-提交内容"><span>3.提交内容</span></a></h3><h4 id="全部提交" tabindex="-1"><a class="header-anchor" href="#全部提交"><span>全部提交</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git add .\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="指定提交" tabindex="-1"><a class="header-anchor" href="#指定提交"><span>指定提交</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git add 文件\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="无注释" tabindex="-1"><a class="header-anchor" href="#无注释"><span>无注释</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git commit\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="有注释" tabindex="-1"><a class="header-anchor" href="#有注释"><span>有注释</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git commit -m &quot;注释内容&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="跳过暂存区提交-新文件不行" tabindex="-1"><a class="header-anchor" href="#跳过暂存区提交-新文件不行"><span>跳过暂存区提交(新文件不行)</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git commit -am &quot;注释内容&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="_4-回滚操作" tabindex="-1"><a class="header-anchor" href="#_4-回滚操作"><span>4.回滚操作</span></a></h3><h4 id="删除记录回滚" tabindex="-1"><a class="header-anchor" href="#删除记录回滚"><span>删除记录回滚</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git reflog\ngit reset --hard id\ngit push -f\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="保留记录回滚" tabindex="-1"><a class="header-anchor" href="#保留记录回滚"><span>保留记录回滚</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git reflog\ngit revert -n id\ngit commit -m &quot;注释&quot;\ngit push\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="五、分支操作" tabindex="-1"><a class="header-anchor" href="#五、分支操作"><span>五、分支操作</span></a></h2><h3 id="_1-增删改查" tabindex="-1"><a class="header-anchor" href="#_1-增删改查"><span>1.增删改查</span></a></h3><h4 id="创建分支" tabindex="-1"><a class="header-anchor" href="#创建分支"><span>创建分支</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git branch 分支名\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看所有分支" tabindex="-1"><a class="header-anchor" href="#查看所有分支"><span>查看所有分支</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git branch\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看当前分支" tabindex="-1"><a class="header-anchor" href="#查看当前分支"><span>查看当前分支</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git branch -v\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="切换分支" tabindex="-1"><a class="header-anchor" href="#切换分支"><span>切换分支</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git checkout 分支名\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="创建并切换分支" tabindex="-1"><a class="header-anchor" href="#创建并切换分支"><span>创建并切换分支</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git checkout -b 分支名\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="合并分支" tabindex="-1"><a class="header-anchor" href="#合并分支"><span>合并分支</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git merge 分支名\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除分支" tabindex="-1"><a class="header-anchor" href="#删除分支"><span>删除分支</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git branch -d 分支名\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="强制删除分支" tabindex="-1"><a class="header-anchor" href="#强制删除分支"><span>强制删除分支</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git branch -D 分支名\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除远程分支" tabindex="-1"><a class="header-anchor" href="#删除远程分支"><span>删除远程分支</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git push remote --delete 远程分支名\ngit push remote:远端分支名 \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>切换分支前要先提交到暂存区</p></blockquote><h3 id="_2-标签管理" tabindex="-1"><a class="header-anchor" href="#_2-标签管理"><span>2.标签管理</span></a></h3><h4 id="添加标签" tabindex="-1"><a class="header-anchor" href="#添加标签"><span>添加标签</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git tag -a 标签名\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="指定版本添加标签" tabindex="-1"><a class="header-anchor" href="#指定版本添加标签"><span>指定版本添加标签</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git tag -a 标签名 id\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看标签" tabindex="-1"><a class="header-anchor" href="#查看标签"><span>查看标签</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git tag\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="添加标签内容" tabindex="-1"><a class="header-anchor" href="#添加标签内容"><span>添加标签内容</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git tag -a 标签名 -m &#39;标签内容&#39;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看标签信息" tabindex="-1"><a class="header-anchor" href="#查看标签信息"><span>查看标签信息</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git show 标签名\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="推送单个标签" tabindex="-1"><a class="header-anchor" href="#推送单个标签"><span>推送单个标签</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git push origin 标签名\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="推送所有标签" tabindex="-1"><a class="header-anchor" href="#推送所有标签"><span>推送所有标签</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git push origin --tags\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="六、远程仓库" tabindex="-1"><a class="header-anchor" href="#六、远程仓库"><span>六、远程仓库</span></a></h2><h4 id="添加远程仓库" tabindex="-1"><a class="header-anchor" href="#添加远程仓库"><span>添加远程仓库</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git remote add 远程仓库名 地址\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="克隆仓库" tabindex="-1"><a class="header-anchor" href="#克隆仓库"><span>克隆仓库</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git clone 远程仓库地址\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看远程仓库地址" tabindex="-1"><a class="header-anchor" href="#查看远程仓库地址"><span>查看远程仓库地址</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git remote -v\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="查看远程仓库名称" tabindex="-1"><a class="header-anchor" href="#查看远程仓库名称"><span>查看远程仓库名称</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git remote\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="删除远程仓库" tabindex="-1"><a class="header-anchor" href="#删除远程仓库"><span>删除远程仓库</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git remote remove 远程仓库名\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="重命名远程仓库" tabindex="-1"><a class="header-anchor" href="#重命名远程仓库"><span>重命名远程仓库</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git remote rename 旧名称 新名称\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="抓取-同步本地没有的数据" tabindex="-1"><a class="header-anchor" href="#抓取-同步本地没有的数据"><span>抓取(同步本地没有的数据)</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git fetch 远程仓库名\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="拉取-同步到本地并合并" tabindex="-1"><a class="header-anchor" href="#拉取-同步到本地并合并"><span>拉取(同步到本地并合并)</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git pull\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="同步远程分支到本地" tabindex="-1"><a class="header-anchor" href="#同步远程分支到本地"><span>同步远程分支到本地</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git remote prune origin\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="推送-上传到远程仓库" tabindex="-1"><a class="header-anchor" href="#推送-上传到远程仓库"><span>推送(上传到远程仓库)</span></a></h4><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git push 仓库名 分支名\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>git pull = git fetch + git merge 远程仓库默认命名为origin 如果远程分支名和本地分支名称相同，则可以只写本地分支 可以省略已关联仓库的分支名和远端仓库名 可以直接克隆已有的仓库到本地，本地目录可以省略，会自动生成一个目录</p></blockquote>',127),l={},r=(0,t(3744).Z)(l,[["render",function(e,a){const t=(0,i.up)("ExternalLinkIcon");return(0,i.wg)(),(0,i.iD)("div",null,[d,(0,i._)("p",null,[(0,i._)("a",n,[(0,i.Uk)("Git官网"),(0,i.Wm)(t)])]),s])}]])},9352:(e,a,t)=>{t.r(a),t.d(a,{data:()=>i});const i=JSON.parse('{"key":"v-6df5a04c","path":"/guide/01.%E5%89%8D%E7%AB%AF%E5%B7%A5%E5%85%B7/Git%E7%90%86%E8%AE%BA.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"一、Git命令速查表","slug":"一、git命令速查表","link":"#一、git命令速查表","children":[]},{"level":2,"title":"二、Git简介","slug":"二、git简介","link":"#二、git简介","children":[{"level":3,"title":"1.Git是什么","slug":"_1-git是什么","link":"#_1-git是什么","children":[]},{"level":3,"title":"2.Git工作流程","slug":"_2-git工作流程","link":"#_2-git工作流程","children":[]}]},{"level":2,"title":"三、Git安装配置","slug":"三、git安装配置","link":"#三、git安装配置","children":[{"level":3,"title":"1.下载","slug":"_1-下载","link":"#_1-下载","children":[]},{"level":3,"title":"2.配置","slug":"_2-配置","link":"#_2-配置","children":[]},{"level":3,"title":"3.查看","slug":"_3-查看","link":"#_3-查看","children":[]},{"level":3,"title":"4.报错修改","slug":"_4-报错修改","link":"#_4-报错修改","children":[]}]},{"level":2,"title":"四、Git基本操作","slug":"四、git基本操作","link":"#四、git基本操作","children":[{"level":3,"title":"1.查看内容","slug":"_1-查看内容","link":"#_1-查看内容","children":[]},{"level":3,"title":"2.修改内容","slug":"_2-修改内容","link":"#_2-修改内容","children":[]},{"level":3,"title":"3.提交内容","slug":"_3-提交内容","link":"#_3-提交内容","children":[]},{"level":3,"title":"4.回滚操作","slug":"_4-回滚操作","link":"#_4-回滚操作","children":[]}]},{"level":2,"title":"五、分支操作","slug":"五、分支操作","link":"#五、分支操作","children":[{"level":3,"title":"1.增删改查","slug":"_1-增删改查","link":"#_1-增删改查","children":[]},{"level":3,"title":"2.标签管理","slug":"_2-标签管理","link":"#_2-标签管理","children":[]}]},{"level":2,"title":"六、远程仓库","slug":"六、远程仓库","link":"#六、远程仓库","children":[]}],"git":{},"filePathRelative":"guide/01.前端工具/Git理论.md"}')}}]);