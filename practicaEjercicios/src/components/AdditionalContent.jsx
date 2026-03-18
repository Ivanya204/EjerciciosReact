const AdditionalContent =({titulo, texto}) =>{
    return(
        <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">{titulo}</h4>
  <p>{texto}</p>
</div>
    );
}
export default AdditionalContent