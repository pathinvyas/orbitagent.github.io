// --- 1. SATELLITE NETWORK CANVAS BACKGROUND ---
const canvas = document.getElementById('network-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let width, height;
    let particles = [];
    let mouse = { x: null, y: null };

    const colors = ['rgba(0, 240, 255, 0.8)', 'rgba(255, 0, 122, 0.8)', 'rgba(138, 43, 226, 0.8)'];

    function initCanvas() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
        particles = [];
        const particleCount = Math.floor((width * height) / 12000); 
        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * width, y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5, vy: (Math.random() - 0.5) * 0.5, 
                radius: Math.random() * 2.5 + 1,
                color: colors[Math.floor(Math.random() * colors.length)]
            });
        }
    }

    function drawNetwork() {
        ctx.clearRect(0, 0, width, height);
        
        for (let i = 0; i < particles.length; i++) {
            let p = particles[i];
            
            p.vx *= 0.99; p.vy *= 0.99;
            p.x += p.vx; p.y += p.vy;

            if (p.x < 0 || p.x > width) p.vx *= -1;
            if (p.y < 0 || p.y > height) p.vy *= -1;

            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.shadowBlur = 10;
            ctx.shadowColor = p.color;
            ctx.fill();

            for (let j = i + 1; j < particles.length; j++) {
                let p2 = particles[j];
                let dist = Math.hypot(p.x - p2.x, p.y - p2.y);
                if (dist < 120) {
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(p2.x, p2.y);
                    let grad = ctx.createLinearGradient(p.x, p.y, p2.x, p2.y);
                    grad.addColorStop(0, p.color.replace('0.8)', `${1 - dist/120})`));
                    grad.addColorStop(1, p2.color.replace('0.8)', `${1 - dist/120})`));
                    ctx.strokeStyle = grad;
                    ctx.lineWidth = 1;
                    ctx.shadowBlur = 0;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(drawNetwork);
    }

    window.addEventListener('resize', initCanvas);
    initCanvas(); drawNetwork();
}


// --- 3. SCROLL REVEAL ---
const observer = new IntersectionObserver((entries) => { 
    entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); }); 
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


// --- 4. NAVIGATION ACTIVE STATE ---
const navLinks = document.querySelectorAll('.nav-links a');
const currentPath = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach(link => {
    const linkPath = link.getAttribute('href');
    if (linkPath === currentPath) {
        link.classList.add('active');
    }
});

// --- 5. 3D TILT PHYSICS FOR ALL GLASS CARDS ---
const tiltCards = document.querySelectorAll('.glass-card, [data-tilt]');
tiltCards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; const y = e.clientY - rect.top;  
        const centerX = rect.width / 2; const centerY = rect.height / 2;
        const rotateX = ((y - centerY) / centerY) * -5;
        const rotateY = ((x - centerX) / centerX) * 5;
        card.style.transition = 'none';
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
    });
    card.addEventListener('mouseleave', () => {
        card.style.transition = 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)';
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
    card.addEventListener('mouseenter', () => { card.style.transition = 'transform 0.1s ease-out'; });
});
