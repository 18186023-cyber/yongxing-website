// =============================================
// 滚动进度条 & 返回顶部
// =============================================
const scrollProgress = document.getElementById('scrollProgress');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / docHeight) * 100;
    if (scrollProgress) scrollProgress.style.width = progress + '%';
    
    if (backToTop) {
        if (scrollTop > 500) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    }
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// =============================================
// 移动端菜单
// =============================================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// =============================================
// 导航栏滚动变色
// =============================================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// =============================================
// 产品分类筛选
// =============================================
const categoryBtns = document.querySelectorAll('.category-btn');
const productCards = document.querySelectorAll('.product-card');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const category = btn.dataset.category;
        
        productCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => { card.style.display = 'none'; }, 300);
            }
        });
    });
});

// =============================================
// 滚动动画
// =============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -30px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

document.querySelectorAll('.about-content, .about-images, .product-card, .advantage-card, .contact-item, .section-header, .export-content').forEach(el => {
    el.classList.add('fade-up');
    observer.observe(el);
});

// =============================================
// 联系表单
// =============================================
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const successModal = document.createElement('div');
        successModal.className = 'form-success-modal';
        successModal.innerHTML = `
            <div class="form-success-content">
                <div class="success-icon">
                    <i class="fas fa-check-circle"></i>
                </div>
                <h3>发送成功！</h3>
                <p>感谢您的咨询，我们会尽快与您联系。</p>
                <button class="btn btn-primary success-close-btn">确定</button>
            </div>
        `;
        document.body.appendChild(successModal);
        
        const modalStyle = document.createElement('style');
        modalStyle.textContent = `
            .form-success-modal {
                position: fixed; inset: 0;
                background: rgba(0,0,0,0.6);
                display: flex; justify-content: center; align-items: center;
                z-index: 10000;
                animation: fadeIn 0.3s ease forwards;
            }
            .form-success-content {
                background: white; padding: 40px 50px;
                border-radius: 20px; text-align: center;
                max-width: 400px;
                transform: scale(0.8);
                animation: scaleIn 0.3s ease forwards;
            }
            .success-icon {
                width: 80px; height: 80px;
                background: linear-gradient(135deg, var(--gold-color), #f4d03f);
                border-radius: 50%; display: flex;
                justify-content: center; align-items: center;
                margin: 0 auto 20px;
            }
            .success-icon i { font-size: 40px; color: white; }
            .form-success-content h3 { font-size: 24px; color: var(--dark-color); margin-bottom: 10px; }
            .form-success-content p { color: var(--text-light); margin-bottom: 25px; }
            @keyframes fadeIn { to { opacity: 1; } }
            @keyframes scaleIn { to { transform: scale(1); } }
        `;
        document.head.appendChild(modalStyle);
        
        successModal.querySelector('.success-close-btn').addEventListener('click', () => {
            successModal.remove();
            modalStyle.remove();
        });
        
        successModal.addEventListener('click', (e) => {
            if (e.target === successModal) {
                successModal.remove();
                modalStyle.remove();
            }
        });
    });
}

// =============================================
// 页面加载完成后隐藏加载动画
// =============================================
window.addEventListener('load', () => {
    setTimeout(() => {
        const pageLoader = document.getElementById('pageLoader');
        if (pageLoader) {
            pageLoader.classList.add('hidden');
        }
    }, 800);
});
