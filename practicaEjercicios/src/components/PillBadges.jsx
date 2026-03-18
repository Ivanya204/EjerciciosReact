const PillBadges =({btn1, btn2, btn3, btn4}) =>{
    return(
        <>
        <span class="badge rounded-pill text-bg-primary">{btn1}</span>
<span class="badge rounded-pill text-bg-secondary">{btn2}</span>
<span class="badge rounded-pill text-bg-success">{btn3}</span>
<span class="badge rounded-pill text-bg-danger">{btn4}</span>
        </>
    );
}
export default PillBadges