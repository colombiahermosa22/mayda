document.addEventListener("DOMContentLoaded", () => {
    // 1. Observer original para mostrar elementos al hacer scroll[cite: 2]
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { 
            if (entry.isIntersecting) {
                entry.target.classList.add('show-element'); 
            }
        });
    }, { threshold: 0.15 }); // Umbral ajustado para activarse antes
    
    document.querySelectorAll('.hidden-element').forEach((el) => observer.observe(el));

    // 2. Lógica del Audio original[cite: 2]
    const audio = document.getElementById('real-audio');
    const playBtn = document.getElementById('play-btn');
    const progress = document.getElementById('progress');
    const disk = document.getElementById('disk');

    playBtn.addEventListener('click', () => {
        if (audio.paused) { 
            audio.play(); 
            playBtn.innerHTML = "⏸ PAUSAR LA MAGIA"; 
            disk.classList.add('spin'); 
        } else { 
            audio.pause(); 
            playBtn.innerHTML = "▶ REPRODUCIR"; 
            disk.classList.remove('spin'); 
        }
    });

    // 3. Progreso de la canción original[cite: 2]
    audio.addEventListener('timeupdate', () => {
        if (audio.duration) {
            const percentage = (audio.currentTime / audio.duration) * 100;
            progress.style.width = percentage + '%';
        }
    });

    // 4. Generación original de flores mágicas[cite: 2]
    const app = document.getElementById('mobile-app');
    const flowerTypes = ['🌸', '🌺', '✨', '💖', '🦋']; // Se añadieron más tipos
    for(let i = 0; i < 25; i++) { // Aumentado de 15 a 25 para abarcar el nuevo largo
        const f = document.createElement('div'); 
        f.innerHTML = flowerTypes[Math.floor(Math.random() * flowerTypes.length)]; 
        f.className = "flower-deco";
        f.style.left = Math.random() * 95 + "%"; 
        f.style.top = Math.random() * 400 + "%"; // Distribuido a lo largo del scroll extendido
        f.style.animationDelay = (Math.random() * 3) + "s"; 
        app.appendChild(f);
    }

    // 5. Corazones explosivos y Mensaje Secreto Expandido[cite: 2]
    let energy = 0;
    let messageShown = false;
    const energyBar = document.getElementById('energy-bar');
    const energyText = document.getElementById('energy-text');
    const heartBtn = document.getElementById('heart-btn');
    const secretMessage = document.getElementById('secret-message');
    const typewriterElement = document.getElementById('typewriter-text');

    // Carta de amor súper larga que se escribirá sola
    const loveLetterText = `Lorena, mi amor. \n\nHas llegado a la parte más profunda de este pequeño espacio que creé para ti. Tú eres mi persona favorita, el motivo de mis sonrisas constantes y la dueña de mis pensamientos. \n\n"Tú no eres cualquiera", así como dice la canción, eres el sueño que se hizo realidad. Eres la bandera de mi corazón, uniendo nuestros mundos en uno solo. Prometo cuidarte, valorarte y seguir llenando tus días de esta magia.\n\nGracias por estar en mi vida, te amo infinitamente. ❤️`;

    heartBtn.addEventListener('click', (e) => {
        // Llenar barra original[cite: 2]
        if (energy < 100) {
            energy += 10; 
            energyBar.style.width = energy + '%';
            energyText.innerText = `${energy}% de Amor Cargado`;
        }

        // Explosión de corazones original mejorada[cite: 2]
        const heartTypes = ['❤️', '💖', '💘', '💕', '💗'];
        for (let j = 0; j < 4; j++) { // 4 corazones en lugar de 3
            const h = document.createElement('div'); 
            h.innerHTML = heartTypes[Math.floor(Math.random() * heartTypes.length)]; 
            h.className = 'floating-heart';
            
            const randomX = (Math.random() - 0.5) * 100; // Mayor dispersión
            h.style.left = (e.clientX - 25 + randomX) + 'px'; 
            h.style.top = (e.clientY - 25) + 'px';
            
            document.body.appendChild(h);
            setTimeout(() => h.remove(), 3000); 
        }

        // Mostrar carta y activar efecto de escritura
        if (energy >= 100 && !messageShown) {
            messageShown = true;
            energyText.innerText = "¡Corazón Completamente Tuyo! 💖";
            secretMessage.style.display = 'block';
            heartBtn.style.transform = "scale(1.1)";
            heartBtn.style.pointerEvents = "none"; // Desactivar clics después del 100%
            
            // Función nueva: Typewriter effect
            let i = 0;
            typewriterElement.innerHTML = "";
            
            function typeWriter() {
                if (i < loveLetterText.length) {
                    if(loveLetterText.charAt(i) === '\n') {
                        typewriterElement.innerHTML += "<br>";
                    } else {
                        typewriterElement.innerHTML += loveLetterText.charAt(i);
                    }
                    i++;
                    setTimeout(typeWriter, 40); // Velocidad de tipeo
                }
            }
            
            // Retraso ligero para que el usuario vea que el mensaje aparece
            setTimeout(typeWriter, 500);
        }
    });
});