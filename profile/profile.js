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
