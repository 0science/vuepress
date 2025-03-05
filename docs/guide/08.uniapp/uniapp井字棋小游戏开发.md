# 一、环境搭建
HBuilderX



# 二、开始
打开HBuilderX

新建项目

![](https://cdn.nlark.com/yuque/0/2024/png/26841888/1710306300173-6d725df0-2ceb-44ac-be19-6f311c97676e.png)

新建uni-app项目

填写项目名称

填写项目路径

![](https://cdn.nlark.com/yuque/0/2024/png/26841888/1710306333615-d5697048-ca98-4578-ac36-2d11c3f76d84.png)

下载微信开发者工具

[https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)

![](https://cdn.nlark.com/yuque/0/2024/png/26841888/1710307297644-bc7f241c-9c49-40c5-9668-23b6da2ed29c.png)

![](https://cdn.nlark.com/yuque/0/2024/png/26841888/1710306924270-21ed4b1d-b9f3-4d0e-955d-66e36d6f21bd.png)![](https://cdn.nlark.com/yuque/0/2024/png/26841888/1710307257993-ae7af94f-c979-46d5-a466-74b291b94e2c.png)

进入 设置-安全

打开服务端口

![](https://cdn.nlark.com/yuque/0/2024/png/26841888/1710307345537-00f148e5-acd9-4c51-9082-a32b0e3a4321.png)

运行小程序模拟器

![](https://cdn.nlark.com/yuque/0/2024/png/26841888/1710306822006-f294bb98-17fd-4e43-89e6-75441f4e15f6.png)

![](https://cdn.nlark.com/yuque/0/2024/png/26841888/1710307046458-360bdc99-3e85-4483-ab9c-0494bb797a1d.png)

![](https://cdn.nlark.com/yuque/0/2024/png/26841888/1710307484085-e10c3457-aadb-4155-8207-bc7bcb31981b.png)



# 三、添加新页面
## tabbar
[https://uniapp.dcloud.net.cn/collocation/pages.html#tabbar](https://uniapp.dcloud.net.cn/collocation/pages.html#tabbar)

```vue
<template>
  <view class="content">
    <image class="logo" src="/static/logo.jpg"></image>
    <view class="text-area">
      <text class="title">{{title}}</text>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: '井字棋小游戏'
      }
    },
    onLoad() {

    },
    methods: {

    }
  }
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .logo {
    height: 260rpx;
    width: 185rpx;
    margin-top: 200rpx;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 50rpx;
  }

  .text-area {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 36rpx;
    color: #8f8f94;
  }
</style>

```

```vue
<template>
	<view>
		<span>{{title}}</span>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '欢迎来到井字棋小游戏'
			}
		},
		onLoad() {
	
		},
		methods: {
	
		}
	}
</script>

<style>
</style>
```

```javascript
{
  "pages": [ //pages数组中第一项表示应用启动页，参考：https://uniapp.dcloud.io/collocation/pages
    {
      "path": "pages/index/index",
      "style": {
        "navigationBarTitleText": "井字棋"
      }
    },
    {
      "path": "pages/index/game",
      "style": {
        "navigationBarTitleText": "井字棋"
      }
    }
  ],
    "globalStyle": {
    "navigationBarTextStyle": "black",
      "navigationBarTitleText": "uni-app",
      "navigationBarBackgroundColor": "#F8F8F8",
      "backgroundColor": "#F8F8F8"
  },
  "tabBar": {
    "color": "#7A7E83",
      "selectedColor": "#3cc51f",		
      "borderStyle": "black",
      "backgroundColor": "#ffffff",
      "list": [{
      "pagePath": "pages/index/index",
      "iconPath": "static/image/1.jpg",
      "selectedIconPath": "static/image/2.jpg",
      "text": "首页"
    }, {
      "pagePath": "pages/index/game",
      "iconPath": "static/image/3.jpg",
      "selectedIconPath": "static/image/4.jpg",
      "text": "井字游戏"
    }]
  }

  "uniIdRouter": {}
}

```

## <font style="color:rgb(17, 35, 63);">利用canvas组件完成游戏棋盘的导入</font>
[https://uniapp.dcloud.net.cn/component/canvas.html](https://uniapp.dcloud.net.cn/component/canvas.html)

```vue
<template>
  <view>
    <span>{{title}}</span>
    <canvas id="id1" canvas-id="firstCanvas"></canvas>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        title: '欢迎来到井字棋小游戏'
      }
    },
    onLoad() {

    },
    methods: {

    }
  }
</script>

<style>
  #id1{
    background-image: url(../../static/image/bj.png);
    width: 300px;
    height: 450px;
    margin: 30px;
  }
</style>
```

![](https://cdn.nlark.com/yuque/0/2024/png/26841888/1710311012312-ecdf81ca-da56-42fe-ad33-09dd195483c4.png)

## 落子
使用vue2进行开发

RGB十六进制颜色对照表

[https://www.toolhelper.cn/Color/RGBToHex](https://www.toolhelper.cn/Color/RGBToHex)

onready和onload的区别

[https://blog.csdn.net/xiaoxinxin123456789/article/details/83443719](https://blog.csdn.net/xiaoxinxin123456789/article/details/83443719)

```vue
<template>
	<view>
		<span>{{title}}</span>
		<canvas id="id1" canvas-id="firstCanvas" @tap="a"></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '欢迎来到四二学堂',
				context:"",
				colorx:"#DC143C"
			}
		},
		
		methods: {
	       onReady(){
			   this.context=uni.createCanvasContext('firstCanvas')
			   this.context.setFillStyle(this.colorx)
		   },
		   
		   a(){
			   var x=event.touches[0].pageX
			   var y=event.touches[0].pageY
			   
			   console.log(x+":"+y)
			   
			   this.context.beginPath()
			   this.context.arc(x-30,y-100,40,0,2*Math.PI,false)
			   this.context.setFillStyle(this.colorx)
			   this.context.fill()
			   this.context.draw()
		   }
		}
	}
</script>

<style>
	#id1{
		background-image: url(../../static/image/bj.png);
		width: 300px;
		height: 450px;
		margin: 30px;
	}
</style>
```

## 交替落子
```vue
<template>
	<view>
		<span>{{title}}</span>
		<canvas id="id1" canvas-id="firstCanvas" @tap="a"></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '欢迎来到井字棋游戏',
				context:"",
				colorx:"#DC143C",
				position:[
					[0,0,0],
					[0,0,0],
					[0,0,0]
				],
				x1:"0",
				y1:"0"
			}
		},
		
		methods: {
	       onReady(){
			   this.context=uni.createCanvasContext('firstCanvas')
			   this.context.setFillStyle(this.colorx)
		   },
		   
		   a(){
			   // var x=event.touches[0].pageX
			   // var y=event.touches[0].pageY
			   
			   this.b(event)
			   
			   var x=this.x1*80+61
			   var y=this.y1*80+210
			   
			   console.log(x+":"+y)
			   
			   this.context.beginPath()
			   this.context.arc(x-30+40,y-100+40,40,0,2*Math.PI,false)
			   this.context.setFillStyle(this.colorx)
			   this.context.fill()
			   this.context.draw()
		   },
		   b:function(){
			   var x=event.touches[0].pageX
			   var y=event.touches[0].pageY
			   
			   this.x1=parseInt((x-61)/80) 
			   this.y1=parseInt((y-210)/80)
			   
			   if(this.position[this.x1][this.y1]==0){
					if(this.colorx=="#DC143C"){
						this.position[this.x1][this.y1]==1
					}else{
						this.position[this.x1][this.y1]==2
					}
					
					if(this.colorx=="#DC143C"){
						this.colorx="#1676dc"
					}else{
						this.colorx="#DC143C"
					}
				}
		   }
		}
	}
</script>

<style>
	#id1{
		background-image: url(../../static/image/bj.png);
		width: 300px;
		height: 450px;
		margin: 30px;
	}
</style>

```

## 记忆位置
```vue
<template>
	<view>
		<span>{{title}}</span>
		<canvas id="id1" canvas-id="firstCanvas" @tap="a"></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '欢迎来到井字棋游戏',
				context:"",
				colorx:"#DC143C",
				position:[
					[0,0,0],
					[0,0,0],
					[0,0,0]
				],
				x1:"0",
				y1:"0"
			}
		},
		
		methods: {
	       onReady(){
			   this.context=uni.createCanvasContext('firstCanvas')
			   this.context.setFillStyle(this.colorx)
		   },
		   
		   a(){
			   // var x=event.touches[0].pageX
			   // var y=event.touches[0].pageY
			   
			   this.b(event)
			   
			   // var x=this.x1*80+61
			   // var y=this.y1*80+210
			   
			   // console.log(x+":"+y)
			   
			   for(var i=0;i<3;i++){
				   for(var j=0;j<3;j++){
					   if(this.position[i][j]!=0){
						   this.context.beginPath()
						   this.context.arc(i*80+61-30+40,j*80+210-100+40,40,0,2*Math.PI,false)
						   if(this.position[i][j]==1){
						   	   this.context.setFillStyle("#DC143C")
						   }
						   else{
						   	   this.context.setFillStyle("#4B0082")
						   }					   
						   this.context.fill()
					   }					   
				   }
			   }
			   
			   // this.context.beginPath()
			   // this.context.arc(x-30+40,y-100+40,40,0,2*Math.PI,false)
			   // this.context.setFillStyle(this.colorx)
			   // this.context.fill()
			   this.context.draw()
			   								  
			},
		   b:function(event){
			   var x=event.touches[0].pageX
			   var y=event.touches[0].pageY
			   
			   this.x1=parseInt((x-61)/80)
			   this.y1=parseInt((y-210)/80)
			   
			   if(this.position[this.x1][this.y1]==0){
				   if(this.colorx=="#DC143C"){
					   this.position[this.x1][this.y1]=1
				   }else{
					   this.position[this.x1][this.y1]=2
				   }
				   
				   if(this.colorx=="#DC143C"){
					   this.colorx="#4B0082"
				   }else{
					   this.colorx="#DC143C"
				   }
			   }
		   }		   
			 
		}
	}
</script>

<style>
	#id1{
		background-image: url(../../static/image/bj.png);
		width: 300px;
		height: 450px;
		margin: 30px;
	}
</style>

```



最终代码

```vue
<template>
	<view @tap="d">
		<span>{{title}}</span>
		<canvas id="id1" canvas-id="firstCanvas" @tap="a"></canvas>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '欢迎来到井字棋游戏',
				context:"",
				colorx:"#DC143C",
				position:[
					[0,0,0],
					[0,0,0],
					[0,0,0]
				],
				x1:"0",
				y1:"0",
				isclose:"0"
			}
		},
		
		methods: {
	       onReady(){
			   this.context=uni.createCanvasContext('firstCanvas')
			   this.context.setFillStyle(this.colorx)
		   },
		   
		   a(event){
			   // var x=event.touches[0].pageX
			   // var y=event.touches[0].pageY
			   
			   if(this.isclose=="1"){
				   this.title="游戏已结束"
				   return
			   }
			   
			   this.b(event)
			   
			   // var x=this.x1*80+61
			   // var y=this.y1*80+210
			   
			   // console.log(x+":"+y)
			   
			   for(var i=0;i<3;i++){
				   for(var j=0;j<3;j++){
					   if(this.position[i][j]!=0){
						   this.context.beginPath()
						   this.context.arc(i*80+61-30+40,j*80+210-100+40,40,0,2*Math.PI,false)
						   if(this.position[i][j]==1){
						   	   this.context.setFillStyle("#DC143C")
						   }
						   else{
						   	   this.context.setFillStyle("#1515c3")
						   }					   
						   this.context.fill()
					   }					   
				   }
			   }
			   
			   // this.context.beginPath()
			   // this.context.arc(x-30+40,y-100+40,40,0,2*Math.PI,false)
			   // this.context.setFillStyle(this.colorx)
			   // this.context.fill()
			   this.context.draw()
			   	
				this.c()
			},
		   b:function(event){
			   var x=event.touches[0].pageX
			   var y=event.touches[0].pageY
			   
			   this.x1=parseInt((x-61)/80)
			   this.y1=parseInt((y-210)/80)
			   
			   if(this.position[this.x1][this.y1]==0){
				   if(this.colorx=="#DC143C"){
					   this.position[this.x1][this.y1]=1
				   }else{
					   this.position[this.x1][this.y1]=2
				   }
				   
				   if(this.colorx=="#DC143C"){
					   this.colorx="#1515c3"
				   }else{
					   this.colorx="#DC143C"
				   }
			   }
		   },
					  
			 c(){
				 //竖一
				 if(this.position[0][0]==this.position[0][1]&&this.position[0][1]==this.position[0][2]){
					this.e(this.position[0][0])
				 }
				 //竖二
				 if(this.position[1][0]==this.position[1][1]&&this.position[1][1]==this.position[1][2]){
				 	this.e(this.position[1][0])
				 }
				 //竖三
				 if(this.position[2][0]==this.position[2][1]&&this.position[2][1]==this.position[2][2]){
				 	this.e(this.position[2][0])
				 }
				 //横一
				 if(this.position[0][0]==this.position[1][0]&&this.position[1][0]==this.position[2][0]){
				 	this.e(this.position[0][0])
				 }
				 //横二
				 if(this.position[0][1]==this.position[1][1]&&this.position[1][1]==this.position[2][1]){
				 	this.e(this.position[0][1])
				 }
				 //横三
				 if(this.position[0][2]==this.position[1][2]&&this.position[1][2]==this.position[2][2]){
				 	this.e(this.position[0][2])
				 }
				 //左斜
				 if(this.position[0][0]==this.position[1][1]&&this.position[1][1]==this.position[2][2]){
					this.e(this.position[0][0])
				 }
				 //右斜
				 if(this.position[0][2]==this.position[1][1]&&this.position[1][1]==this.position[2][0]){
				 	this.e(this.position[0][2])
				 }
				
				var sum=0
				for(var i=0;i<3;i++){
					for(var j=0;j<3;j++){
						if(this.position[i][j]!=0){
							sum+=1
						}
					}
				}
				
				if(sum==9&&this.isclose==0){
					this.title="和棋，点我重开"
				}
			 },
			 e(a){
				 if(a!=0){
					 this.isclose=1
					 if(a==1){
						 this.title="红方胜利，点我重开"
						 // alert("红方胜利")
					 }else{
						 this.title="蓝方胜利，点我重开"
						 // alert("蓝方胜利")
					 }
				 }
			 },
			 d(event){
				 var x=event.touches[0].pageX
				 var y=event.touches[0].pageY
				 if(x>=0&&x<=210&&y>=0&&y<=20){
					 for(var i=0;i<3;i++){
						 for(var j=0;j<3;j++){
							 this.position[i][j]=0
						 }
					 }
					 this.isclose="0"
					 this.title="欢迎来到井字棋游戏"
					 
					 this.context.beginPath()
					 this.context.draw()
				 }
			 }
		}
	}
</script>

<style>
	#id1{
		background-image: url(../../static/image/bj.png);
		width: 300px;
		height: 450px;
		margin: 30px;
	}
</style>

```

