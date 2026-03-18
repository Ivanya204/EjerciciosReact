const Flush = ({ titulo1, titulo2, titulo3, texto1, texto2, texto3 }) => {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseOne"
          >
            {titulo1}
          </button>
        </h2>
        <div id="flush-collapseOne" className="accordion-collapse collapse">
          <div className="accordion-body">{texto1}</div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseTwo"
          >
            {titulo2}
          </button>
        </h2>
        <div id="flush-collapseTwo" className="accordion-collapse collapse">
          <div className="accordion-body">{texto2}</div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#flush-collapseThree"
          >
            {titulo3}
          </button>
        </h2>
        <div id="flush-collapseThree" className="accordion-collapse collapse">
          <div className="accordion-body">{texto3}</div>
        </div>
      </div>
    </div>
  );
};
export default Flush