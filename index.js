import{a as p,S as g,i as n}from"./assets/vendor-BezXTN6Z.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const y="56208412-7d6dcb228c67b365f0b5ce0be",m="https://pixabay.com/api/";function d(a){return p.get(m,{params:{key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:12}}).then(r=>r.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader"),_=new g(".gallery a",{captionsData:"alt",captionDelay:250,preloading:!1,alertError:!1});function h({webformatURL:a,largeImageURL:r,tags:s,likes:i,views:e,comments:t,downloads:l}){return`
    <li class="gallery__item">
      <a class="gallery__link" href="${r}">
        <img class="gallery__image" src="${a}" alt="${s}" />
        <ul class="gallery__info">
          <li class="gallery__info-item">
            <span class="gallery__info-title">Likes</span>
            <span class="gallery__info-value">${i}</span>
          </li>
          <li class="gallery__info-item">
            <span class="gallery__info-title">Views</span>
            <span class="gallery__info-value">${e}</span>
          </li>
          <li class="gallery__info-item">
            <span class="gallery__info-title">Comments</span>
            <span class="gallery__info-value">${t}</span>
          </li>
          <li class="gallery__info-item">
            <span class="gallery__info-title">Downloads</span>
            <span class="gallery__info-value">${l}</span>
          </li>
        </ul>
      </a>
    </li>
  `}function b(a){const r=a.map(h).join("");c.insertAdjacentHTML("beforeend",r),_.refresh()}function L(){c.innerHTML=""}function S(){u.classList.add("is-visible")}function v(){u.classList.remove("is-visible")}const f=document.querySelector(".form"),o=f.querySelector('button[type="submit"]');f.addEventListener("submit",q);function q(a){a.preventDefault();const r=a.currentTarget.elements["search-text"].value.trim();if(!r){n.warning({message:"Please enter a search query!",position:"topRight"});return}L(),S(),o.disabled=!0,d(r).then(s=>{if(s.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(s.hits)}).catch(()=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight"})}).finally(()=>{v(),o.disabled=!1})}
//# sourceMappingURL=index.js.map
