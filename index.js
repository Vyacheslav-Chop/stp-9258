/* empty css                      */import{S as a,N as d,P as o,a as p,A as l}from"./assets/vendor-JLaRIylK.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function u(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=u(e);fetch(e.href,t)}})();const m=document.querySelector('[data-action="open"]'),f=document.querySelector('[data-action="close"]'),c=document.querySelector("[data-visible]");m.addEventListener("click",r=>{c.dataset.visible="open"});f.addEventListener("click",r=>{c.dataset.visible="close"});const g=[{review:"So satisfying! The twist mechanics are brilliant. I’ve never played anything like it!",username:"Ava N.",rating:5},{review:"Clean design, relaxing sounds, and deceptively tricky puzzles. 10/10!",username:"Tyler M.",rating:4},{review:"The rotating layers make every level feel fresh and challenging.",username:"Mina R.",rating:4},{review:"Perfect puzzle game. Addictive, calm, and clever. I play it on my commute!",username:" Eric D.",rating:4},{review:"Would love more customization themes but the gameplay is fantastic!",username:"Chloe L.",rating:4}],v=r=>Array.from({length:r},()=>`
      <li>
        <svg width="20" height="20">
          <use href="/sprite.svg#icon-star"></use>
        </svg>
      </li>
    `).join("");a.use([d,o,p,l]);const y=document.querySelector(".swiper-wrapper"),w=g.map((r,i)=>`
      <ul class="swiper-slide">
        <li class="list-item" data-id="${i}">
          <p class="review-text">"${r.review}"</p>
          <div class="reviewer-info">
            <ul class="reviewer-rating-list">
              ${v(r.rating)}
            </ul>
            <p class="review-name-text">${r.username}</p>
          </div>
        </li>
      </ul>
    `).join("");y.innerHTML=w;new a(".swiper",{modules:[o,l],slidesPerView:1,spaceBetween:20,pagination:{el:".swiper-pagination",clickable:!0},autoplay:{delay:4e3,disableOnInteraction:!1},breakpoints:{320:{slidesPerView:1},1200:{slidesPerView:3}}});
//# sourceMappingURL=index.js.map
