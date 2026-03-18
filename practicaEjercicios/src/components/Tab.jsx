const Tab =({btn1, btn2, btn3, btn4}) =>{
    return(
        <ul class="nav justify-content-end">
  <li class="nav-item">
    <a class="nav-link active" aria-current="page" href="#">{btn1}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">{btn2}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">{btn3}</a>
  </li>
  <li class="nav-item">
    <a class="nav-link disabled" aria-disabled="true">{btn4}</a>
  </li>
</ul>
    );
}
export default Tab