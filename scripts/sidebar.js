document.querySelector('.hamburger-js')
  .addEventListener('click', () => {

    const sidebar = document.querySelector('.nav-js');
    if(sidebar.classList.contains('nav-styles')){
      sidebar.classList.remove('nav-styles');
    }else{
      sidebar.classList.add('nav-styles');
    }
    
  })