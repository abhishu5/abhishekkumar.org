document.addEventListener("DOMContentLoaded", () => {

const toc=document.getElementById("toc-list");

if(!toc) return;

const headings=document.querySelectorAll(".article-content h2");

headings.forEach((heading,index)=>{

if(!heading.id){

heading.id="section-"+(index+1);

}

const li=document.createElement("li");

const a=document.createElement("a");

a.href="#"+heading.id;

a.textContent=heading.textContent;

li.appendChild(a);

toc.appendChild(li);

});

const links=document.querySelectorAll("#toc-list a");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

links.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+entry.target.id){

link.classList.add("active");

}

});

}

});

},{
rootMargin:"-20% 0px -65% 0px"
});

headings.forEach(h=>observer.observe(h));

});
