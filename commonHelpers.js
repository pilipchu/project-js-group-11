import{a as b,i as S,S as m,N as p,K as w,M as v,A as M}from"./assets/vendor-d82bdbe6.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const d of n.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=o(s);fetch(s.href,n)}})();async function B(){const e="https://portfolio-js.b.goit.study/api/reviews",t=await b.get(e);if(t.status!==200)throw new Error("Network response was not ok");return t.data}async function A(e,t){const o="https://portfolio-js.b.goit.study/api/requests";return(await b.post(o,{email:e,comment:t})).data}document.getElementById("work-together-form");const c=document.getElementById("work-together-input-email"),r=document.getElementById("work-together-input-text"),y=document.getElementById("success-message"),f=document.getElementById("invalid-message"),l=document.getElementById("work-together-popup"),x=document.querySelector(".work-together-modal-close-btn"),P=document.querySelector(".work-together-btn");P.addEventListener("click",function(e){e.preventDefault();const t=c.value,o=r.value;if(!t||!o){S.error({message:"Please fill in all fields",position:"topRight"});return}if(!O(t)){I(),c.focus();return}T(t,o)});function O(e){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(e)}async function T(e,t){try{await A(e,t)?(N(),l.classList.add("open"),c.value="",r.value=""):S.error({message:"There was an error. Please try again later",position:"topRight"})}catch(o){console.error("Error:",o)}}x.addEventListener("click",function(){g()});l.addEventListener("click",function(e){e.target===l&&g()});document.addEventListener("keydown",function(e){e.key==="Escape"&&g()});function g(){l.classList.remove("open"),f.style.display="none",y.style.display="none",c.classList.remove("remove","success"),c.value="",r.value=""}function I(){f.style.display="block",y.style.display="none",c.classList.remove("success"),c.classList.add("remove")}function N(){y.style.display="block",f.style.display="none",c.classList.remove("remove"),c.classList.add("success")}//! обрізає на половині і не дає можливості видалити, тільки перезапуск сторінки
let u=Math.floor(r.clientWidth/parseFloat(window.getComputedStyle(r).fontSize))-1;r.addEventListener("input",function(){if(r.value.length>u){const o=r.value.slice(0,u)+"...";r.value=o}else u=Math.floor(r.clientWidth/parseFloat(window.getComputedStyle(r).fontSize))-1});const R=document.querySelectorAll(".faq-item");R.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("active")})});document.addEventListener("DOMContentLoaded",j);async function j(){try{const e=await B();z(e)}catch(e){console.error("Error fetching reviews:",e)}}function z(e){if(!Array.isArray(e)){console.error("Received reviews data is not an array:",e);return}const t=document.querySelector(".reviews-list"),o=e.map(({author:i,avatar_url:s,review:n})=>`<li class="reviews-item swiper-slide">
              <img src="${s}" alt="" width="48" height="48" class="reviews-img"/>
              <div class="reviews-text">
                  <h3 class="reviews-name">${i}</h3>
                  <p class="reviews-p">${n}</p>
              </div>
            </li>`).join("");t.insertAdjacentHTML("beforeend",o),V(".swiper-cont")}function V(e){const t=new m(e,{modules:[p,w,v],slidesPerView:1,breakpoints:{768:{slidesPerView:2},1440:{slidesPerView:4}},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0},speed:400,spaceBetween:16,allowTouchMove:!0,loop:!1,watchOverflow:!0,slideToClickedSlide:!0,navigation:{nextEl:".reviews-btn-next",prevEl:".reviews-btn-prev"}});t.on("reachEnd",function(){document.querySelector(".icon-arr").classList.add("reviews-disabled-swipe"),document.querySelector(".reviews-btn-next").classList.add("reviews-disabled-swipe")}),t.on("reachBeginning",function(){document.querySelector(".icon-prev-arr").classList.add("reviews-disabled-swipe"),document.querySelector(".reviews-btn-prev").classList.add("reviews-disabled-swipe")}),t.on("fromEdge",function(){document.querySelector(".icon-prev-arr").classList.remove("reviews-disabled-swipe"),document.querySelector(".reviews-btn-prev").classList.remove("reviews-disabled-swipe"),document.querySelector(".icon-arr").classList.remove("reviews-disabled-swipe"),document.querySelector(".reviews-btn-next").classList.remove("reviews-disabled-swipe")}),document.querySelector(".reviews-btn-next").addEventListener("click",()=>t.slideNext())}const $=document.querySelector(".list-about-me");new M($,{showMultiple:!0,openOnInit:[0]});const D=document.querySelector("#carousel-about-me-list"),E=document.querySelector(".btn-next-a-m");E.addEventListener("click",()=>F.slideNext());const F=new m(D,{modules:[p,w,v],direction:"horizontal",spaceBetween:0,navigation:{nextEl:E},slidesPerView:2,initialSlide:1,updateOnWindowResize:!0,breakpoints:{767:{slidesPerView:3},1440:{slidesPerView:6}},mousewheel:{enabled:!0,invert:!0},keyboard:{enabled:!0,onlyInViewport:!0},loop:!0,allowTouchMove:!0,followFinger:!0,simulateTouch:!0}),h=document.querySelector(".swipe-forward-btn"),L=document.querySelector(".swipe-back-btn"),a=new m("#proj-swiper",{speed:400,direction:"horizontal",loop:!1,navigation:{nextEl:h,prevEl:L},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0,invert:!0},simulateTouch:!0,followFinger:!0,allowTouchMove:!0,allowSlideNext:!0,allowSlidePrev:!0,modules:[p,w,v]}),k=document.querySelector(".arrow-forward-icon"),q=document.querySelector(".arrow-back-icon");a.on("reachEnd",function(){k.classList.toggle("disabled-swipe"),h.classList.toggle("disabled-swipe")});a.on("reachBeginning",function(){q.classList.toggle("disabled-swipe"),L.classList.toggle("disabled-swipe")});a.on("fromEdge",function(){q.classList.remove("disabled-swipe"),L.classList.remove("disabled-swipe"),k.classList.remove("disabled-swipe"),h.classList.remove("disabled-swipe")});const C=document.querySelector(".swiper-button-next");C.addEventListener("click",()=>a.slideNext());(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu");document.querySelectorAll(".header-link");const i=document.querySelector(".js-order-btn");document.querySelectorAll(".header-link");const s=()=>{e.classList.contains("is-open")?(e.classList.remove("is-open"),document.body.style.overflow=""):(e.classList.add("is-open"),document.body.style.overflow="hidden")};t.addEventListener("click",s),o.addEventListener("click",s),i.addEventListener("click",s),window.matchMedia("(min-width: 768px)").addEventListener("change",n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();menuLinks.forEach(e=>e.addEventListener("click",toggleMenu));document.addEventListener("DOMContentLoaded",function(){const e=document.getElementById("menu-button"),t=document.getElementById("menu-list");let o=!1;e.addEventListener("click",function(){if(o){const i=t.querySelectorAll("a");i.forEach((s,n)=>{s.classList.remove("menu-link-visible"),s.classList.add("menu-link-hidden"),s.style.transition=`opacity 0.3s ${(i.length-n-1)*250}ms, transform 0.3s ${(i.length-n-1)*250}ms`}),setTimeout(()=>{t.classList.remove("menu-list-visible"),t.classList.add("menu-list-hidden")},i.length*250),o=!1}else{t.classList.remove("menu-list-hidden"),t.classList.add("menu-list-visible");const i=t.querySelectorAll("a");i.forEach((s,n)=>{s.classList.remove("menu-link-hidden"),s.classList.add("menu-link-visible"),s.style.transition=`opacity 0.4s ${n*250}ms, transform 0.4s ${n*250}ms`}),setTimeout(()=>{t.classList.remove("menu-list-hidden"),t.classList.add("menu-list-visible")},i.length*250),o=!0}})});
//# sourceMappingURL=commonHelpers.js.map
