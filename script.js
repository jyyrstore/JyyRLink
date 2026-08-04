/* ========================================
   LOCK DOWNLOAD
======================================== */

document.addEventListener("contextmenu", e => e.preventDefault());

/* ========================================
   FUTURISTIC PARTICLES
======================================== */

const particles = document.getElementById("particles");

function createParticle(){

    const p = document.createElement("div");
    p.className = "particle";

    const size = Math.random()*3 + 2;

    p.style.width = size + "px";
    p.style.height = size + "px";

    p.style.left = Math.random()*100 + "%";
    p.style.top = Math.random()*100 + "%";

    p.style.animationDuration =
        (Math.random()*6 + 8) + "s";

    p.style.animationDelay =
        Math.random()*2 + "s";

    particles.appendChild(p);

    setTimeout(()=>{
        p.remove();
    },15000);

}

/* Jumlah partikel awal */

for(let i=0;i<30;i++){
    createParticle();
}

/* Tambah partikel terus */

setInterval(createParticle,500);

    // =========================
    // BUTTON HOVER EFFECT
    // =========================

    const buttons = document.querySelectorAll('.btn')

    buttons.forEach(button => {

      button.addEventListener('mousemove', e => {

        const rect = button.getBoundingClientRect()

        const x = e.clientX - rect.left
        const y = e.clientY - rect.top

        button.style.background = `
        radial-gradient(
        circle at ${x}px ${y}px,
        rgba(255,255,255,0)
        transparent 60%
        )`

      })

      button.addEventListener('mouseleave', () => {

        button.style.background = 'transparent'

      })

    })

/* ========================================
   JYYR CINEMATIC INTRO SYSTEM
======================================== */


document.addEventListener("DOMContentLoaded",()=>{


    const intro =
    document.getElementById("intro");


    if(!intro) return;



    /* LOCK SCROLL */

    document.body.style.overflow="hidden";



    function closeIntro(){


        intro.classList.add("hide");



        setTimeout(()=>{


            intro.remove();


            document.body.style.overflow="";


        },1200);


    }



    function startIntro(){


        intro.classList.add("active");



        setTimeout(()=>{


            closeIntro();


        },4000);


    }



    startIntro();



});
