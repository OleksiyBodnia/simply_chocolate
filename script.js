function toggleMenu() {
    var menu = document.getElementById("myDiv");
    menu.classList.toggle("show-menu");
  }
  function closeMenu() {
    var menu = document.getElementById("myDiv");
    menu.classList.remove("show-menu");
  }  

  const showFormBtn = document.getElementById('showFormBtn');
  const overlay = document.getElementById('overlay');
  const formContainer = document.getElementById('formContainer');
  const closeButton = document.getElementById('closeButton'); // Додайте id кнопки закриття
  
  showFormBtn.addEventListener('click', function() {
    overlay.style.display = 'block';
    formContainer.style.display = 'block';
  });
  
  overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
      overlay.style.display = 'none';
      formContainer.style.display = 'none';
    }
  });
  
  closeButton.addEventListener('click', function() {
    overlay.style.display = 'none';
    formContainer.style.display = 'none';
  });
  
