const Modal =({titulo, texto, boton1, boton2}) =>{
    return(
        <div class="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">{titulo}</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <p>{texto}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">{boton1}</button>
        <button type="button" class="btn btn-primary">{boton2}</button>
      </div>
    </div>
  </div>
</div>
    );
}
export default Modal;   