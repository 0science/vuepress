"use strict";(self.webpackChunkmy_vuepress_site=self.webpackChunkmy_vuepress_site||[]).push([[2973],{7929:(e,d,c)=>{c.r(d),c.d(d,{default:()=>n});var r=c(6252);const o=(0,r.uE)('<h2 id="修改软件源" tabindex="-1"><a class="header-anchor" href="#修改软件源"><span>修改软件源</span></a></h2><p><code>sudo vim /etc/apt/sources.list</code> 修改Ubuntu系统的软件源</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>deb https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse\n\ndeb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic main restricted universe multiverse\n\ndeb https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse\n\ndeb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-updates main restricted universe multiverse\n\ndeb https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse\n\ndeb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-backports main restricted universe multiverse\n\ndeb https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse\n\ndeb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-security main restricted universe multiverse\n\ndeb https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse\n\ndeb-src https://mirrors.ustc.edu.cn/ubuntu/ bionic-proposed main restricted universe multiverse\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>中科大源</p><p><code>sudo apt-get update</code> apt资源更新</p><p><code>sudo apt-get upgrade -y</code> apt资源安装</p><h2 id="安装常用软件" tabindex="-1"><a class="header-anchor" href="#安装常用软件"><span>安装常用软件</span></a></h2><p><code>sudo apt-get install openssh-server -y</code>      安装远程连接软件</p><p><code>sudo apt-get install vim -y</code>               安装vim编辑器</p><p><code>sudo apt-get install lrzsz -y</code>               安装上传与下载软件</p><p><code>sudo apt-get install net-tools -y</code>            安装网络命令工具</p><p><code>sudo apt-get install curl -y</code>                安装curl下载工具</p><p><code>sudo apt-get install tree -y</code>                安装目录树状图</p><p><code>sudo apt-get install build-essential -y</code>        安装gcc、make等软件</p><h2 id="安装docker" tabindex="-1"><a class="header-anchor" href="#安装docker"><span>安装docker</span></a></h2><p><code>apt install docker.io -y</code>         安装Docker软件包</p><p><code>systemctl enable docker</code>        将Docker服务设置为每次开机启动</p><p><code>systemctl start docker</code>          将Docker服务立即启动</p><p><code>vim /etc/docker/daemon.json</code>        Docker镜像加速设置</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>{\n\n  &quot;registry-mirrors&quot;: [&quot;https://docker.mirrors.ustc.edu.cn&quot;]\n\n}\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>systemctl restart docker</code>         将Docker服务重启</p><p><code>docker version</code>                查看当前Docker版本</p><p><code>docker run hello-world</code> 运行hello-world</p><p><code>docker run -d -p 80:80 nginx</code> 完成Nginx的下载与启动</p><p><code>curl -I 10.0.0.11</code> 测试</p><p><code>docker search</code>     搜索镜像，优先选官方，STARTS数量多 <code>docker search alpine</code></p><p><code>docker pull</code>       下载镜像 <code>docker pull alpine</code></p><p><code>docker push</code>       上传镜像 <code>docker pull alpine:3.12.10</code></p><p><code>docker load -i</code>       导入镜像</p>',29),i={href:"https://hub.docker.com/",target:"_blank",rel:"noopener noreferrer"},s=(0,r.uE)('<p><code>docker image ls</code></p><p><code>docker load -i docker_busybox.tar.gz</code></p><p><code>docker rmi alpine:3.15</code></p><p><code>docker run  -d -it -p 80:80  nginx:latest</code></p><p><code>docker ps</code></p><p><code>docker run -it --name centos6 centos:6.9 /bin/bash</code></p><h4 id="docker容器" tabindex="-1"><a class="header-anchor" href="#docker容器"><span>docker容器</span></a></h4><p><code>docker create</code>       创建容器 --name</p><p><code>docker start</code>         启动容器  可以用容器的名字、ID</p><p><code>docker  stop</code>        停止容器(正常关机)</p><p><code>docker  restart</code>     重启容器</p><p><code>docker  kill</code>        强制停止容器(直接拔电源)</p><p><code>docker  rm</code></p><p>删除容器，删除容器的时候先停止，再删除，docker不能删除正在运行的容器，除非强制删除，参数-f</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>docker rm -f `docker ps -a -q`      \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>批量强制删除所有容器但是容器对应的镜像还在</p><h2 id="安装docker-compose" tabindex="-1"><a class="header-anchor" href="#安装docker-compose"><span>安装Docker-Compose</span></a></h2><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>curl -L https://get.daocloud.io/docker/compose/releases/download/v2.6.1/docker-compose-`uname -s`-`uname -m` &gt; /usr/local/bin/docker-compose \n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>下载Docker-Compose</p><p><code>chmod +x /usr/local/bin/docker-compose</code></p><p>修改Docker-Compose的权限</p><p><code>docker-compose --version</code>                           查看Docker-Compose的版本</p><h2 id="安装golang" tabindex="-1"><a class="header-anchor" href="#安装golang"><span>安装golang</span></a></h2><p><code>wget https://studygolang.com/dl/golang/go1.17.11.linux-amd64.tar.gz</code> 下载Golang安装包</p><p><code>tar -xzvf go1.17.11.linux-amd64.tar.gz -C /usr/local/  </code>          解压缩Golang安装包</p><p><code>vim /etc/profile</code>                                              修改环境变量</p><div class="language-text line-numbers-mode" data-ext="text" data-title="text"><pre class="language-text"><code>export GOROOT=/usr/local/go    \n\nexport GOPATH=$HOME/go\n\nexport PATH=$PATH:$GOROOT/bin:$GOPATH/bin\n\nexport GOPROXY=https://goproxy.cn\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>source /etc/profile</code>                             使环境变量生效</p><p><code>go version</code>                       查看Golang版本</p><h2 id="搭建单一fabric环境" tabindex="-1"><a class="header-anchor" href="#搭建单一fabric环境"><span>搭建单一Fabric环境</span></a></h2><p>(1) 创建项目目录</p><p><code>mkdir -p ~/go/src/github.com/hyperledger</code></p><p><code>cd ~/go/src/github.com/hyperledger</code></p><p>(2) 拉取Fabric项目</p><p><code>git clone https://gitee.com/hyperledger/fabric.git</code></p><p>(3) 切换Fabric版本，其结果如图4-2所示。</p><p><code>cd fabric</code></p><p><code>git checkout v2.0.0</code></p><p>(4) 拉取Fabric镜像，在140行和141行将参数改为false，其修改如图4-3所示。</p><p><code>cd ~/go/src/github.com/hyperledger/fabric/scripts</code></p><p><code>vim bootstrap.sh</code></p><p>(5) 进入~/go/src/github.com/hyperledger后拉取fabric-samples</p><p><code>cd ~/go/src/github.com/hyperledger</code></p><p><code>git clone https://gitee.com/hyperledger/fabric-samples.git</code></p><p>(6) 进入fabric-samples目录，拉取成功后切换到v2.0.0-beta分支，其结果如图4-5所示。</p><p><code>cd ~/go/src/github.com/hyperledger/fabric-samples</code></p><p><code>git checkout v2.0.0-beta</code></p><p>(7) 在fabric-samples目录，下载所需文件</p><p><code>wget https://github.com/hyperledger/fabric/releases/download/v2.0.1/hyperledger-fabric-linux-amd64-2.0.1.tar.gz</code></p><p><code>tar -xzvf hyperledger-fabric-linux-amd64-2.0.1.tar.gz</code></p>',50),t={},n=(0,c(3744).Z)(t,[["render",function(e,d){const c=(0,r.up)("ExternalLinkIcon");return(0,r.wg)(),(0,r.iD)("div",null,[o,(0,r._)("p",null,[(0,r._)("a",i,[(0,r.Uk)("官方网址"),(0,r.Wm)(c)])]),s])}]])},1206:(e,d,c)=>{c.r(d),c.d(d,{data:()=>r});const r=JSON.parse('{"key":"v-3c0928cc","path":"/guide/17.%E5%8C%BA%E5%9D%97%E9%93%BE/Fabric.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"修改软件源","slug":"修改软件源","link":"#修改软件源","children":[]},{"level":2,"title":"安装常用软件","slug":"安装常用软件","link":"#安装常用软件","children":[]},{"level":2,"title":"安装docker","slug":"安装docker","link":"#安装docker","children":[]},{"level":2,"title":"安装Docker-Compose","slug":"安装docker-compose","link":"#安装docker-compose","children":[]},{"level":2,"title":"安装golang","slug":"安装golang","link":"#安装golang","children":[]},{"level":2,"title":"搭建单一Fabric环境","slug":"搭建单一fabric环境","link":"#搭建单一fabric环境","children":[]}],"git":{},"filePathRelative":"guide/17.区块链/Fabric.md"}')}}]);