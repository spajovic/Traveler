function probaMail(){var e=document.getElementById("email").value,t=document.getElementById("pre-maila");console.log(t),console.log(e);/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)?(document.getElementById("email").classList.remove("crveni-border"),document.getElementById("email").classList.add("zeleni-border"),t.innerHTML="Get the latest updates about ticket sales..."):(document.getElementById("email").classList.add("crveni-border"),t.innerHTML='<span class="boldovano">(Make sure your E-mail adress is right)</span>',console.log(t))}function proveraForme(){var e=document.getElementById("ime").value,t=document.getElementById("prezime").value,n=document.getElementById("lista").selectedIndex,a=document.getElementById("boks");console.log(a);var l=/^[a-zA-Z\/šđčćžŠĐČŽĆ]{2,30}(([a-zA-Z\/šđčćžŠĐČŽĆ ])?[a-zA-Z\/šđčćžŠĐČŽĆ]*)*$/;if(console.log(l),l.test(e)?(document.getElementById("ime").classList.add("zeleni-border"),document.getElementById("ime").classList.remove("crveni-border"),document.getElementById("labelime").innerHTML="Name :"):""==e?(document.getElementById("ime").classList.add("crveni-border"),document.getElementById("labelime").innerHTML=" &nbsp;(You left name blank)"):(document.getElementById("ime").classList.add("crveni-border"),document.getElementById("labelime").innerHTML="&nbsp;(At least 2 letters, and without numbers)"),/^[a-zA-Z\/šđčćžŠĐČŽĆ]{2,30}(([a-zA-Z\/šđčćžŠĐČŽĆ ])?[a-zA-Z\/šđčćžŠĐČŽĆ]*)*$/.test(t)?(document.getElementById("prezime").classList.add("zeleni-border"),document.getElementById("prezime").classList.remove("crveni-border"),document.getElementById("labelprezime").innerHTML="Surname :"):""==t?(document.getElementById("prezime").classList.add("crveni-border"),document.getElementById("labelprezime").innerHTML="&nbsp;(You left surname blank)"):(document.getElementById("prezime").classList.add("crveni-border"),document.getElementById("prezime").innerHTML="&nbsp;(At least 2 letters, and without numbers)"),n>0){n=document.getElementById("lista").classList.add("zeleni-border"),n=document.getElementById("lista").classList.remove("crveni-border");document.getElementById("labellista").innerHTML="Gender :"}else{n=document.getElementById("lista").classList.add("crveni-border");document.getElementById("labellista").innerHTML=" &nbsp;(You must choose)"}0==a.checked?(document.getElementById("chbxlabela").innerHTML=" You must check",document.getElementById("chbxlabela").style.color="red"):(document.getElementById("chbxlabela").innerHTML="Yes, im over 18 years old",document.getElementById("chbxlabela").style.color="black")}function openModal(){document.getElementById("simpleModal").style.display="block"}function closeModal(){document.getElementById("simpleModal").style.display="none"}document.addEventListener("DOMContentLoaded",function(){window.onload=function(){var e=new TimelineMax;e.staggerFrom("section",2,{opacity:0,scale:.5,ease:Power2.easeOut},.3),e.staggerFrom(".animacija",1,{opacity:0,y:-40,ease:Power2.easeInOut},.2,"-=2"),e.staggerFrom(".anim-panel",1,{opacity:0,y:-40,ease:Power2.easeInOut},.2,"-=1"),$("#dugmejos").on("click",function(){$("#dodatak").stop(!0,!0).toggle(2e3,function(){"Show more"==$("#dugmejos").attr("value")?$("#dugmejos").attr("value","Show less"):$("#dugmejos").attr("value","Show more")})}),$(function(){$.scrollUp()}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var t=$(this.hash);(t=t.length?t:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:t.offset().top},1e3))}}),document.getElementById("dugme-mail").addEventListener("click",probaMail),document.getElementById("dugmence2").addEventListener("click",proveraForme),setInterval(function(){var e=new Date,t=e.getHours(),n=e.getMinutes(),a=e.getSeconds(),l="AM";t>12&&(t-=12,l="PM"),t<10&&(t="0"+t),n<10&&(n="0"+n),a<10&&(a="0"+a);var o=t+":"+n+":"+a+" "+l;document.getElementById("sat").innerHTML=`<p  class="satina">${o}</p><p class="tekstIspodSata">Clock's ticking, why would you wait ?\n                You should join us and enjoy the sight of NY.</p>`},1e3);var t=["Choose your gender","Male","Female"];console.log(t);var n=document.getElementById("lista"),a="";for(var l in console.log(n),t)a+=`<option value="${l}">${t[l]}</option>`;n.innerHTML+=a;var o=document.getElementById("modalBtn"),s=document.getElementById("closeBtn");o.addEventListener("click",openModal),s.addEventListener("click",closeModal)};var e=["assets/img/slika1.jpg","assets/img/slika2.jpg","assets/img/slika3.jpg","assets/img/slika4.jpg"],t="";for(var n in e)t+=`<img src='${e[n]}' alt='${n}Slika' class="slika${Number(n)+Number(1)} animated"/>`;document.getElementById("slajder").innerHTML+=t;var a=1;setInterval(()=>{$(".slika"+a).addClass("slideOutRight"),setTimeout(()=>{$(".slika"+a).removeClass("slideOutRight animated"),$(".slika"+a).hide(),++a>e.length&&(a=1),$(".slika"+a).show(),$(".slika"+a).addClass("fadeIn animated")},1e3)},3500)});