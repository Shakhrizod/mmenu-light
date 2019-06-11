/*!
 * mmenu-light v1.0.6
 * mmenujs.com/mmenu-light
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-4.0
 * http://creativecommons.org/licenses/by/4.0/
 */
var mmlight=function(){var e=function(e){return Array.prototype.slice.call(e)},t=function(t,n){return e((n||document).querySelectorAll(t))},n=function(){document.addEventListener("click",function(e){var t=e.target;t.closest(".mm")&&t.matches("a")&&e.stopPropagation()});var n=function(e){e.target.closest(".mm")||t(".mm.mm--open").forEach(function(t){e.preventDefault(),e.stopPropagation(),t.mmenu.close()})};document.addEventListener("click",function(t){var n=t.target,m=n.closest(".mm");if(m){var a=n.matches("li")?n:!!n.matches("span")&&n.parentElement;a&&(t.stopPropagation(),e(a.children).forEach(function(e){e.matches("ul")&&(a.parentElement.classList.add("mm--parent"),m.mmenu.openPanel(e))}))}}),document.addEventListener("click",function(e){var n=e.target;if(n.matches(".mm")){e.stopPropagation();var m=t(".mm--open",n),a=m[m.length-1];if(a){a.classList.remove("mm--open");var o=a.parentElement.closest("ul");o&&n.mmenu.openPanel(o)}}}),document.addEventListener("click",n),document.addEventListener("touchstart",n)};return function(m){n(),n=function(){};var a=null,o=function(e){m.classList[e.matches?"add":"remove"]("mm")},r={create:function(e){return void 0===e&&(e="all"),"number"==typeof e&&(e="(max-width: "+e+"px)"),(a=window.matchMedia(e)).addListener(o),m.classList[a.matches?"add":"remove"]("mm"),r},destroy:function(){return a.removeListener(o),m.classList.remove("mm"),r},init:function(e){var n=t(e,m),a=n[n.length-1],o=null;return a&&(o=a.closest("ul")),o||(o=m.querySelector("ul")),r.openPanel(o),r},open:function(){return m.classList.add("mm--open"),r},close:function(){return m.classList.remove("mm--open"),r},openPanel:function(n){n||(n=m.querySelector("ul"));var a=n.dataset.mmTitle,o=n.parentElement;o===m?(m.classList.add("mm--home"),a||(a="Menu"),m.dataset.mmTitle=a):(m.classList.remove("mm--home"),a||e(o.children).forEach(function(e){e.matches("a, span")&&(a=e.textContent)}),a&&(m.dataset.mmTitle=a)),t(".mm--open",m).forEach(function(e){e.classList.remove(".mm--open","mm--parent")}),n.classList.add("mm--open"),n.classList.remove("mm--parent");for(var s=n.parentElement.closest("ul");s;)s.classList.add("mm--open","mm--parent"),s=s.parentElement.closest("ul");return r}};return m.mmenu=r,r}}();