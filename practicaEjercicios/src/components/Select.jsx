const Select =({titulo, value1, value2, value3}) =>{
    return(
        <select class="form-select" aria-label="Default select example">
        <option selected>{titulo}</option>
        <option value="1">{value1}</option>
        <option value="2">{value2}</option>
        <option value="3">{value3}</option>
        </select>
    );
}
export default Select