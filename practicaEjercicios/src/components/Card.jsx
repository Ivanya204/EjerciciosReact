const Card =({titulo, subtitulo, texto, link }) =>{
    return(
        <div class="card">
  <div class="card-body">
    <h5 class="card-title">{titulo}</h5>
    <h6 class="card-subtitle mb-2 text-body-secondary">{subtitulo}</h6>
    <p class="card-text">{texto}</p>
    <a href="#" class="card-link">{link}</a>
  </div>
</div>
    );
}

export default Card