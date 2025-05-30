/* empty css                      */import{S as n,N as u,P as a,a as p,A as o}from"./assets/vendor-JLaRIylK.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function d(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=d(e);fetch(e.href,t)}})();const m=document.querySelector('[data-action="open"]'),v=document.querySelector('[data-action="close"]'),c=document.querySelector("[data-visible]");m.addEventListener("click",i=>{c.dataset.visible="open"});v.addEventListener("click",i=>{c.dataset.visible="close"});const f="data:image/svg+xml,%3csvg%20aria-hidden='true'%20style='position:%20absolute;%20width:%200;%20height:%200;%20overflow:%20hidden;'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3csymbol%20id='icon-arrow'%20viewBox='0%200%2016%2032'%3e%3cpath%20fill='%23220731'%20style='fill:%20var(--color1,%20%23220731)'%20d='M3.269%208.774l1.415-1.413%207.705%207.703c0.124%200.123%200.223%200.27%200.29%200.432s0.102%200.335%200.102%200.51c0%200.175-0.035%200.348-0.102%200.51s-0.166%200.308-0.29%200.432l-7.705%207.707-1.413-1.413%207.232-7.233-7.233-7.233z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-menu'%20viewBox='0%200%2032%2032'%3e%3cpath%20fill='%23220731'%20style='fill:%20var(--color1,%20%23220731)'%20d='M4%2010.667v-1.333h22.667v1.333h-22.667zM26.667%2016v1.333h-22.667v-1.333h22.667zM4%2022.667h22.667v1.333h-22.667v-1.333z'%3e%3c/path%3e%3c/symbol%3e%3csymbol%20id='icon-star'%20viewBox='0%200%2034%2032'%3e%3cpath%20fill='%23fbbc04'%20style='fill:%20var(--color2,%20%23fbbc04)'%20d='M16.842%200l3.781%2011.638h12.237l-9.9%207.192%203.781%2011.638-9.9-7.192-9.9%207.192%203.781-11.638-9.9-7.192h12.236l3.781-11.638z'%3e%3c/path%3e%3c/symbol%3e%3c/defs%3e%3c/svg%3e",g=[{review:"So satisfying! The twist mechanics are brilliant. I’ve never played anything like it!",username:"Ava N.",rating:5},{review:"Clean design, relaxing sounds, and deceptively tricky puzzles. 10/10!",username:"Tyler M.",rating:4},{review:"The rotating layers make every level feel fresh and challenging.",username:"Mina R.",rating:4},{review:"Perfect puzzle game. Addictive, calm, and clever. I play it on my commute!",username:" Eric D.",rating:4},{review:"Would love more customization themes but the gameplay is fantastic!",username:"Chloe L.",rating:4}],h=i=>Array.from({length:i},()=>`
      <li>
        <svg width="20" height="20">
          <use href="${f}#icon-star"></use>
        </svg>
      </li>
    `).join("");n.use([u,a,p,o]);const y=document.querySelector(".swiper-wrapper"),w=g.map((i,r)=>`
      <ul class="swiper-slide">
        <li class="list-item" data-id="${r}">
          <p class="review-text">"${i.review}"</p>
          <div class="reviewer-info">
            <ul class="reviewer-rating-list">
              ${h(i.rating)}
            </ul>
            <p class="review-name-text">${i.username}</p>
          </div>
        </li>
      </ul>
    `).join("");y.innerHTML=w;new n(".swiper",{modules:[a,o],slidesPerView:1,spaceBetween:20,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:4e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1},1200:{slidesPerView:3}}});
//# sourceMappingURL=index.js.map
