var xx={about:document.getElementsByClassName("about")[0],about_rigth_1:document.querySelector(".about_rigth_1"),about_rigth_2:document.querySelector(".about_rigth_2"),span:document.querySelectorAll(".subnav1 span"),init:function(){this.dj()},dj:function(){console.log(this.span),this.about.onclick=function(e){var n=(e=e||window.enent).target||e.srcElement;"SPAN"==n.nodeName&&("发展历程"==n.innerHTML?(n.parentNode.nextElementSibling.lastElementChild.innerHTML="",n.parentNode.nextElementSibling.firstElementChild.style.color="",n.parentNode.lastElementChild.innerHTML=">",xx.span[3].innerHTML=n.innerHTML,xx.about_rigth_2.style.display="none",n.style.color="#EC6459",xx.about_rigth_1.style.display="block"):"品牌介绍"==n.innerHTML&&(n.parentNode.previousElementSibling.lastElementChild.innerHTML="",n.parentNode.previousElementSibling.firstElementChild.style.color="",n.parentNode.lastElementChild.innerHTML=">",xx.span[3].innerHTML=n.innerHTML,xx.about_rigth_2.style.display="block",xx.about_rigth_1.style.display="none",n.style.color="#EC6459"))}}};window.onload=function(){xx.init()};