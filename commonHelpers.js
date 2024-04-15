import{a as w,A as g,S as y,N as f,K as v,M as h}from"./assets/vendor-278829d3.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function S(t,n){const s="https://portfolio-js.b.goit.study/api/requests";return(await w.post(s,{email:t,comment:n})).data}document.getElementById("work-together-form");const c=document.getElementById("work-together-input-email"),r=document.getElementById("work-together-input-text"),d=document.getElementById("success-message"),m=document.getElementById("invalid-message"),b=document.querySelector(".work-together-btn"),a=document.getElementById("work-together-popup"),E=document.querySelector(".work-together-modal-close-btn");let u=Math.floor(r.clientWidth/parseFloat(window.getComputedStyle(r).fontSize))-1;r.addEventListener("input",function(){if(r.value.length>u){const s=r.value.slice(0,u)+"...";r.value=s}else u=Math.floor(r.clientWidth/parseFloat(window.getComputedStyle(r).fontSize))-1});function L(t){return/^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(t)}async function k(t,n){try{(await S(t,n)).success?(a.classList.add("open"),c.value="",r.value=""):alert("There was an error. Please try again later.")}catch(s){console.error("Error:",s)}}b.addEventListener("click",function(t){t.preventDefault();const n=c.value,s=r.value;if(!L(n)){m.style.display="block",d.style.display="none",c.classList.remove("success"),c.classList.add("remove"),c.focus();return}c.classList.remove("remove"),c.classList.add("success"),d.style.display="block",m.style.display="none",k(n,s)});E.addEventListener("click",function(){p()});a.addEventListener("click",function(t){t.target===a&&p()});document.addEventListener("keydown",function(t){t.key==="Escape"&&p()});function p(){a.classList.remove("open"),m.style.display="none",d.style.display="none",c.classList.remove("remove","success"),c.value="",r.value=""}//! ======================= Відкриття модального вікна за кліком, в коді не потрібен, для перевірки
const P=document.querySelectorAll(".faq-item");P.forEach(t=>{t.addEventListener("click",()=>{t.classList.toggle("active")})});const M=document.querySelector(".list-about-me");new g(M,{openOnInit:[0],collapse:!1});const x=document.querySelector("#carousel-about-me-list");document.querySelector(".swiper-button-next");new y(x,{modules:[f,v,h],direction:"horizontal",spaceBetween:0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},slidesPerView:2,initialSlide:1,updateOnWindowResize:!0,breakpoints:{319:{slidesPerView:2},767:{slidesPerView:3},1440:{slidesPerView:6}},mousewheel:{enabled:!0,invert:!0},keyboard:{enabled:!0,onlyInViewport:!0},loop:!0,allowTouchMove:!0,followFinger:!0,simulateTouch:!0});const B=document.querySelector(".swipe-forward-btn"),q=document.querySelector(".swipe-back-btn"),O=new y("#proj-swiper",{speed:400,direction:"horizontal",loop:!1,navigation:{nextEl:B,prevEl:q},keyboard:{enabled:!0,onlyInViewport:!0},mousewheel:{enabled:!0,invert:!0},allowTouchMove:!0,followFinger:!0,simulateTouch:!0,allowSlideNext:!0,allowSlidePrev:!0,modules:[f]}),A=document.querySelector(".swiper-button-next");A.addEventListener("click",()=>O.slideNext());(()=>{const t=document.querySelector(".js-menu-container"),n=document.querySelector(".js-open-menu"),s=document.querySelector(".js-close-menu"),l=document.querySelectorAll(".header-link"),e=()=>{const o=n.getAttribute("aria-expanded")==="true"||!1;n.setAttribute("aria-expanded",!o),t.classList.toggle("is-open");const i=o?"enableBodyScroll":"disableBodyScroll";bodyScrollLock[i](document.body)};l.forEach(o=>o.addEventListener("click",e)),n.addEventListener("click",e),s.addEventListener("click",e),window.matchMedia("(min-width: 768px)").addEventListener("change",o=>{o.matches&&(t.classList.remove("is-open"),n.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))})})();
//# sourceMappingURL=commonHelpers.js.map
