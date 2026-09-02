document.addEventListener('DOMContentLoaded', () => {
  
  const loginBtn = document.getElementById('loginTabBtn');
  const registerBtn = document.getElementById('registerTabBtn');
  const loginView = document.getElementById('loginView');
  const registerView = document.getElementById('registerView');

  /** 
  *Toggle view between Login and Register tabs
   * @param {string} targetTab - `login` or `resgister`
   */
  function switchTab(targetTab) {
    if (targetTab === 'login') {
      loginBtn.classList.add('active');
      registerBtn.classList.remove('active');
      
      loginView.classList.add('active');
      registerView.classList.remove('active');
    } else if (targetTab === 'register') {
      registerBtn.classList.add('active');
      loginBtn.classList.remove('active');
      
      registerView.classList.add('active');
      loginView.classList.remove('active');
    }
  }

  
  loginBtn.addEventListener('click', () => switchTab('login'));
  registerBtn.addEventListener('click', () => switchTab('register'));
  switchTab('login');
});document.addEventListener('DOMContentLoaded', () => {
  
  const loginBtn = document.getElementById('loginTabBtn');
  const registerBtn = document.getElementById('registerTabBtn');
  const loginView = document.getElementById('loginView');
  const registerView = document.getElementById('registerView');

  
  
  

  
  loginBtn.addEventListener('click', () => switchTab('login'));
  registerBtn.addEventListener('click', () => switchTab('register'));
  switchTab('login');
});