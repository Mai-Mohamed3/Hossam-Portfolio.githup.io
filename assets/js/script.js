
    AOS.init();

    const words = ["Senior Data Quality & Reporting Analyst", "Senior Data Analyst Instructor","Data Analysis Track Lead At CIC", "Freelancer"];
    const typedElement = document.querySelector(".typed");
    const cursor = document.querySelector(".typed-cursor");
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    
    function typeEffect() {
        const currentWord = words[wordIndex];
        if (isDeleting) {
        charIndex--;
        } else {
        charIndex++;
        }
    
        typedElement.textContent = currentWord.slice(0, charIndex);
    
        if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1500); // توقف بعد كتابة الكلمة كاملة
        } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 500);
        } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
        }
    }
    
    typeEffect();
    const categories = document.querySelectorAll('.categories a');
    const images = document.querySelectorAll('.img-item2');

    window.onload = () => {
        // عند تحميل الصفحة، اجعل جميع الصور تظهر
        images.forEach(img => img.classList.add('active'));
      };
      
    categories.forEach(category => {
      category.addEventListener('click', (e) => {
        e.preventDefault();

        // Remove active class from all links
        categories.forEach(cat => cat.classList.remove('active'));

        // Add active class to clicked link
        e.target.classList.add('active');

        const filter = e.target.getAttribute('data-filter');

        images.forEach(img => {
          if (filter === 'all') {
            img.classList.add('active');
          } else if (img.classList.contains(filter)) {
            img.classList.add('active');
          } else {
            img.classList.remove('active');
          }
        });
      });
    });
  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("menu-toggle");
    const header = document.getElementById("header");

    toggleBtn.addEventListener("click", function () {
      header.classList.toggle("show");
    });
  });

  const container = document.getElementById("projectScroll");
  const btnLeft = document.getElementById("btn-left");
  const btnRight = document.getElementById("btn-right");

  function updateScrollButtons() {
    const scrollLeft = container.scrollLeft;
    const scrollWidth = container.scrollWidth;
    const clientWidth = container.clientWidth;

    // عطّل الزرار لو في البداية أو النهاية
    btnLeft.disabled = scrollLeft <= 0;
    btnRight.disabled = scrollLeft + clientWidth >= scrollWidth - 1;
  }

  function scrollProjects(direction) {
    const scrollAmount = 300;

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }

    // بعد السكروول حدث حالة الأزرار
    setTimeout(updateScrollButtons, 300); // نديه وقت يكمل الحركة
  }

  // لما الصفحة تفتح أو يحصل سحب يدوي
  container.addEventListener("scroll", updateScrollButtons);
  window.addEventListener("load", updateScrollButtons);

  window.onscroll = function () {
    const btn = document.querySelector(".scroll-to-top");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      btn.style.display = "block";
    } else {
      btn.style.display = "none";
    }
  };

  // لما ندوس على الزر نرجع لفوق بسلاسة
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }