const slides = document.querySelectorAll('.slide');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');
let currentIndex = 0;

// Slider functionality
function showSlide(index) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle('active', idx === index);
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 2000);

// Mobile menu toggle
menuToggle.addEventListener('click', () => {
  siteNav.classList.toggle('open');
  menuToggle.classList.toggle('active');
});

siteNav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle.classList.remove('active');
  });
});

// Welcome section expand/collapse
const viewAllToggle = document.getElementById('viewAllToggle');
const welcomeText = document.getElementById('welcomeText');

viewAllToggle.addEventListener('click', () => {
  welcomeText.classList.toggle('collapsed');
  viewAllToggle.textContent = welcomeText.classList.contains('collapsed') ? 'View All' : 'View Less';
});

// Course tabs functionality
const courseTabs = document.querySelectorAll('.course-tab');
const coursePanels = document.querySelectorAll('.course-panel');

courseTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const targetTabId = tab.dataset.tab;
    const targetPanel = document.getElementById(targetTabId);
    const isActive = tab.classList.contains('active');

    // Remove active class from all tabs and panels
    courseTabs.forEach((t) => t.classList.remove('active'));
    coursePanels.forEach((panel) => panel.classList.remove('active'));

    // Add active class to clicked tab and corresponding panel only if it wasn't already active
    if (!isActive) {
      tab.classList.add('active');
      targetPanel.classList.add('active');
    }
  });
});

// Book Event form toggle functionality
const bookEventButtons = document.querySelectorAll('.book-event-btn');
const bookEventForm = document.getElementById('bookEventForm');
const inquiryForm = document.getElementById('inquiryForm');
const eventForm = document.getElementById('eventForm');
const inquiryFormElement = document.getElementById('inquiryFormElement');

// WhatsApp number
const WHATSAPP_NUMBER = '9779841696692'; // Without +

// Show forms when book event buttons are clicked
bookEventButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    const formType = btn.dataset.form;
    const isActive = btn.classList.contains('active');
    
    // Remove active class from all buttons
    bookEventButtons.forEach((b) => b.classList.remove('active'));
    
    // Hide all forms
    bookEventForm.classList.add('hidden');
    inquiryForm.classList.add('hidden');
    
    // Show selected form only if it wasn't already active
    if (!isActive) {
      btn.classList.add('active');
      if (formType === 'book-event') {
        bookEventForm.classList.remove('hidden');
      } else if (formType === 'inquiry') {
        inquiryForm.classList.remove('hidden');
      }
    }
  });
});

// Book Event Form Submission
eventForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('eventName').value;
  const address = document.getElementById('eventAddress').value;
  const reason = document.getElementById('eventReason').value;
  
  const message = `
    *Book Event - New Inquiry*
    
    Name: ${name}
    Address: ${address}
    Reason for Booking: ${reason}
  `.trim();
  
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
  
  // Reset form
  eventForm.reset();
});

// Inquiry Form Submission
inquiryFormElement.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = document.getElementById('inquiryName').value;
  const address = document.getElementById('inquiryAddress').value;
  const course = document.getElementById('inquiryCourse').value;
  
  const message = `
    *Course Inquiry - New Inquiry*
    
    Name: ${name}
    Address: ${address}
    Course Interested In: ${course}
  `.trim();
  
  const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(whatsappURL, '_blank');
  
  // Reset form
  inquiryFormElement.reset();
});
