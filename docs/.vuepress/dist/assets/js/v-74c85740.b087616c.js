"use strict";(self.webpackChunkmy_vuepress_site=self.webpackChunkmy_vuepress_site||[]).push([[7066],{7367:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});var i=t(6252);const d=[(0,i.uE)('<h2 id="硬件" tabindex="-1"><a class="header-anchor" href="#硬件"><span>硬件</span></a></h2><p>一台pc</p><h2 id="metamask" tabindex="-1"><a class="header-anchor" href="#metamask"><span>MetaMask</span></a></h2><h2 id="chrome" tabindex="-1"><a class="header-anchor" href="#chrome"><span>Chrome</span></a></h2><h2 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode"><span>VScode</span></a></h2><h2 id="xshell" tabindex="-1"><a class="header-anchor" href="#xshell"><span>xshell</span></a></h2><h2 id="vmware-workstation-pro" tabindex="-1"><a class="header-anchor" href="#vmware-workstation-pro"><span>VMware Workstation Pro</span></a></h2><h2 id="安装ubuntu" tabindex="-1"><a class="header-anchor" href="#安装ubuntu"><span>安装Ubuntu</span></a></h2><p>使用已配置好的vm文件 <code>sudo apt-get install openssh-server -y</code>         #安装远程连接软件 <code>sudo apt-get install vim -y</code>                          #安装vim编辑器 <code>sudo apt-get install lrzsz -y</code>                         #安装上传与下载软件 <code>sudo apt-get install net-tools -y</code>                   #安装网络命令工具 <code>sudo apt-get install curl -y</code>                           #安装curl下载工具 <code>sudo apt-get install tree -y</code>                           #安装目录树状图 <code>sudo apt-get install build-essential -y</code>         #安装gcc、make等软件</p><h2 id="go环境" tabindex="-1"><a class="header-anchor" href="#go环境"><span>Go环境</span></a></h2><h3 id="更新包索引" tabindex="-1"><a class="header-anchor" href="#更新包索引"><span>更新包索引</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo apt update\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="搜索golang-go软件包" tabindex="-1"><a class="header-anchor" href="#搜索golang-go软件包"><span>搜索golang-go软件包</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>apt search golang-go\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装go" tabindex="-1"><a class="header-anchor" href="#安装go"><span>安装Go</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo apt install golang-go\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看go版本" tabindex="-1"><a class="header-anchor" href="#查看go版本"><span>查看go版本</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>go version\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="git环境" tabindex="-1"><a class="header-anchor" href="#git环境"><span>Git环境</span></a></h2><h3 id="更新包索引-1" tabindex="-1"><a class="header-anchor" href="#更新包索引-1"><span>更新包索引</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo apt update\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装git" tabindex="-1"><a class="header-anchor" href="#安装git"><span>安装Git</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo apt install git\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看git版本" tabindex="-1"><a class="header-anchor" href="#查看git版本"><span>查看Git版本</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git --version\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="全局配置" tabindex="-1"><a class="header-anchor" href="#全局配置"><span>全局配置</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git config --global username &quot;Your Name&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git config --global user.email &quot;youremail@yourdomain.com&quot;\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看配置" tabindex="-1"><a class="header-anchor" href="#查看配置"><span>查看配置</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>git config --list\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="node环境" tabindex="-1"><a class="header-anchor" href="#node环境"><span>Node环境</span></a></h2><h3 id="更新包索引-2" tabindex="-1"><a class="header-anchor" href="#更新包索引-2"><span>更新包索引</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo apt update\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="安装ndoe" tabindex="-1"><a class="header-anchor" href="#安装ndoe"><span>安装ndoe</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo apt install nodejs npm\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="查看ndoe版本" tabindex="-1"><a class="header-anchor" href="#查看ndoe版本"><span>查看ndoe版本</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>nodejs --version\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="geth环境" tabindex="-1"><a class="header-anchor" href="#geth环境"><span>Geth环境</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo apt-get install software-properties-common\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo add-apt-repository -y ppa:ethereum/ethereum\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo apt-get update\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>sudo apt-get install ethereum\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>geth version\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="启动节点同步" tabindex="-1"><a class="header-anchor" href="#启动节点同步"><span>启动节点同步</span></a></h2><h3 id="快速启动" tabindex="-1"><a class="header-anchor" href="#快速启动"><span>快速启动</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>geth –datadir . --syncmode fast\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="同步测试网络" tabindex="-1"><a class="header-anchor" href="#同步测试网络"><span>同步测试网络</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>geth --testnet --datadir . --syncmode fast\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="私有链" tabindex="-1"><a class="header-anchor" href="#私有链"><span>私有链</span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{\n\t&quot;config&quot;: {\n\t&quot;chainId&quot;: 15\n},\n\t&quot;difficulty&quot;: &quot;2000&quot;,\n\t&quot;gasLimit&quot;: &quot;2100000&quot;,\n\t&quot;alloc&quot;: {\n\t\t&quot;7df9a875a174b3bc565e6424a0050ebc1b2d1d82&quot;: { &quot;balance&quot;: &quot;300000&quot; },\n\t\t&quot;f41c74c9ae680c1aa78f42e5647a62f353b7bdde&quot;: { &quot;balance&quot;: &quot;400000&quot; }\n\t}\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h3><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>geth --datadir path/to/custom/data/folder init genesis.json\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>geth --datadir path/to/custom/data/folder --networkid 15\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>',53)],l={},n=(0,t(3744).Z)(l,[["render",function(e,a){return(0,i.wg)(),(0,i.iD)("div",null,d)}]])},7246:(e,a,t)=>{t.r(a),t.d(a,{data:()=>i});const i=JSON.parse('{"key":"v-74c85740","path":"/guide/17.%E5%8C%BA%E5%9D%97%E9%93%BE/%E6%AF%95%E8%AE%BE/3.%E7%8E%AF%E5%A2%83%E5%AE%89%E8%A3%85.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"硬件","slug":"硬件","link":"#硬件","children":[]},{"level":2,"title":"MetaMask","slug":"metamask","link":"#metamask","children":[]},{"level":2,"title":"Chrome","slug":"chrome","link":"#chrome","children":[]},{"level":2,"title":"VScode","slug":"vscode","link":"#vscode","children":[]},{"level":2,"title":"xshell","slug":"xshell","link":"#xshell","children":[]},{"level":2,"title":"VMware Workstation Pro","slug":"vmware-workstation-pro","link":"#vmware-workstation-pro","children":[]},{"level":2,"title":"安装Ubuntu","slug":"安装ubuntu","link":"#安装ubuntu","children":[]},{"level":2,"title":"Go环境","slug":"go环境","link":"#go环境","children":[{"level":3,"title":"更新包索引","slug":"更新包索引","link":"#更新包索引","children":[]},{"level":3,"title":"搜索golang-go软件包","slug":"搜索golang-go软件包","link":"#搜索golang-go软件包","children":[]},{"level":3,"title":"安装Go","slug":"安装go","link":"#安装go","children":[]},{"level":3,"title":"查看go版本","slug":"查看go版本","link":"#查看go版本","children":[]}]},{"level":2,"title":"Git环境","slug":"git环境","link":"#git环境","children":[{"level":3,"title":"更新包索引","slug":"更新包索引-1","link":"#更新包索引-1","children":[]},{"level":3,"title":"安装Git","slug":"安装git","link":"#安装git","children":[]},{"level":3,"title":"查看Git版本","slug":"查看git版本","link":"#查看git版本","children":[]},{"level":3,"title":"全局配置","slug":"全局配置","link":"#全局配置","children":[]},{"level":3,"title":"查看配置","slug":"查看配置","link":"#查看配置","children":[]}]},{"level":2,"title":"Node环境","slug":"node环境","link":"#node环境","children":[{"level":3,"title":"更新包索引","slug":"更新包索引-2","link":"#更新包索引-2","children":[]},{"level":3,"title":"安装ndoe","slug":"安装ndoe","link":"#安装ndoe","children":[]},{"level":3,"title":"查看ndoe版本","slug":"查看ndoe版本","link":"#查看ndoe版本","children":[]}]},{"level":2,"title":"Geth环境","slug":"geth环境","link":"#geth环境","children":[]},{"level":2,"title":"启动节点同步","slug":"启动节点同步","link":"#启动节点同步","children":[{"level":3,"title":"快速启动","slug":"快速启动","link":"#快速启动","children":[]},{"level":3,"title":"同步测试网络","slug":"同步测试网络","link":"#同步测试网络","children":[]},{"level":3,"title":"私有链","slug":"私有链","link":"#私有链","children":[]},{"level":3,"title":"","slug":"","link":"#","children":[]}]}],"git":{},"filePathRelative":"guide/17.区块链/毕设/3.环境安装.md"}')}}]);