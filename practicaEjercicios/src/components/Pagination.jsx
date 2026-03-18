const Pagination =({btn1, btn2, btn3, btn4, btn5}) =>{
    return(
        <nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item"><a class="page-link" href="#">{btn1}</a></li>
    <li class="page-item"><a class="page-link" href="#">{btn2}</a></li>
    <li class="page-item"><a class="page-link" href="#">{btn3}</a></li>
    <li class="page-item"><a class="page-link" href="#">{btn4}</a></li>
    <li class="page-item"><a class="page-link" href="#">{btn5}</a></li>
  </ul>
</nav>
    );
}
export default Pagination