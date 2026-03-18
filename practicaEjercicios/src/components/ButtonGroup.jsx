const ButtonGroup =({btn1, btn2, btn3}) =>{
    return(
        <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-primary">{btn1}</button>
  <button type="button" class="btn btn-primary">{btn2}</button>
  <button type="button" class="btn btn-primary">{btn3}</button>
</div>
    );
}
export default ButtonGroup