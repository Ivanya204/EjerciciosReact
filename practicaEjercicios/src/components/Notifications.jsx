const Notifications =({titulo, span}) =>{
    return(
        <button type="button" class="btn btn-primary">
  {titulo} <span class="badge text-bg-secondary">{span}</span>
</button>
    );
}
export default Notifications