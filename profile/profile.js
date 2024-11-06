

const profileImg = document.getElementById('profile-img');
const profileImgUpload = document.getElementById('profile-img-upload');

profileImgUpload.addEventListener('change', function(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function(e) {
    profileImg.src = e.target.result;
  };

  reader.readAsDataURL(file);
});

// profile table // 

const days = document.querySelectorAll('.day');

days.forEach(day => {
  day.addEventListener('click', function() {
    this.classList.toggle('active'); // Toggle active state
    const date = this.getAttribute('data-date');
    const isActive = this.classList.contains('active');
    localStorage.setItem(date, isActive); // Save state
  });

  // Load state from local storage on page load
  const date = day.getAttribute('data-date');
  if (localStorage.getItem(date) === 'true') {
    day.classList.add('active'); // Load active state
  }
});
