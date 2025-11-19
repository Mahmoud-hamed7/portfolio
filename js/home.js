
  const scrollBtn = document.getElementById('scrollBtn');
  const ringValue = document.querySelector('.progress-ring__value');
  const radius = ringValue.r.baseVal.value;
  const circumference = 2 * Math.PI * radius;
  ringValue.style.strokeDasharray = `${circumference} ${circumference}`;
  ringValue.style.strokeDashoffset = circumference;

  function updateProgress() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = scrollHeight > 0 ? scrollTop / scrollHeight : 0;
    const offset = circumference - progress * circumference;
    ringValue.style.strokeDashoffset = offset;

    
    if (scrollTop > 150) { 
      scrollBtn.classList.add('show');
    } else {
      scrollBtn.classList.remove('show');
    }
  }

 
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', updateProgress);
  window.addEventListener('resize', updateProgress);
  

  updateProgress(); 
