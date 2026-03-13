const Badges =({heading, text}) =>{
    return(
        <h1> {heading} <span class="badge text-bg-secondary">{text}</span></h1>
    );
}
export default Badges;