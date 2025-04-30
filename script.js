// Valor atual da contagem (pode ser atualizado)
let currentCount = 989;
const targetCount = 1000;

// Elementos DOM
const countdownElement = document.getElementById('countdown');
const progressBar = document.getElementById('progressBar');
const remainingElement = document.getElementById('remaining');

// Atualiza a exibição
function updateDisplay() {
    countdownElement.textContent = currentCount;
    
    const progress = (currentCount / targetCount) * 100;
    progressBar.style.width = `${progress}%`;
    
    const remaining = targetCount - currentCount;
    remainingElement.textContent = `Faltam apenas ${remaining} para alcançarmos nossa meta!`;
    
    // Efeito de animação ao atualizar
    countdownElement.style.transform = 'scale(1.1)';
    setTimeout(() => {
        countdownElement.style.transform = 'scale(1)';
    }, 300);
}

// Inicializa a exibição
updateDisplay();

// setInterval(() => {
//     if (currentCount < targetCount) {
//         currentCount++;
//         updateDisplay();
//     }
// }, 1000);


// Cria partículas animadas
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Posição aleatória
        const posX = Math.random() * 100;
        const posY = 100 + Math.random() * 20;
        
        // Tamanho aleatório
        const size = 1 + Math.random() * 2;
        
        // Cor aleatória entre as cores do tema
        const colors = ['#009ee3', '#00a650', '#ffffff'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        // Duração da animação aleatória
        const duration = 10 + Math.random() * 20;
        
        // Atraso aleatório
        const delay = Math.random() * 20;
        
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.backgroundColor = color;
        particle.style.animationDuration = `${duration}s`;
        particle.style.animationDelay = `-${delay}s`;
        
        particlesContainer.appendChild(particle);
    }
}

// Inicializa as partículas
createParticles();