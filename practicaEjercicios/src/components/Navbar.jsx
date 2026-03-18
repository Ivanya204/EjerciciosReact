const Navbar =({titulo, btn1, btn2, btn3, btn4}) =>{
    return(
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">{titulo}</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">{btn1}</a>
        <a class="nav-link" href="#">{btn2}</a>
        <a class="nav-link" href="#">{btn3}</a>
        <a class="nav-link disabled" aria-disabled="true">{btn4}</a>
      </div>
    </div>
  </div>
</nav>
    );
}
export default Navbar