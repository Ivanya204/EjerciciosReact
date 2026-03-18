const Diverd =({titulo1, titulo2}) =>{
    return(
        <nav style={{ "--bs-breadcrumb-divider": "'>'" }} aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">{titulo1}</a></li>
    <li class="breadcrumb-item active" aria-current="page">{titulo2}</li>
  </ol>
</nav>
    );
}
export default Diverd