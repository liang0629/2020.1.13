var lunbo={banner:document.getElementsByClassName("banner")[0],lis:document.querySelectorAll(".banner li"),imgs:document.querySelectorAll(".banner_1 img"),j:0,init:function(){this.dj(),this.dt(),this.dsq(),this.tzdsq(),this.kqdsq()},dj:function(){var e=this;this.banner.onclick=function(t){var n=(t=t||window.event).target||t.srcElement;"LI"==n.nodeName&&(console.log(parseInt(n.getAttribute("dy"))),e.j=parseInt(n.getAttribute("dy")),e.dt())}},dt:function(){for(var t=0;t<this.lis.length;t++)console.log(this.imgs[t]),this.imgs[t].className="",this.lis[t].className="";this.imgs[this.j].className="active",this.lis[this.j].className="active"},dsq:function(){timer=setInterval(function(){lunbo.j++,3==lunbo.j&&(lunbo.j=0),lunbo.dt()},1e3)},tzdsq:function(){this.banner.onmouseover=function(){clearInterval(timer),timer=null}},kqdsq:function(){this.banner.onmouseout=function(){timer=setInterval(function(){lunbo.j++,3==lunbo.j&&(lunbo.j=0),lunbo.dt()},2e3)}}};window.onload=function(){lunbo.init()};