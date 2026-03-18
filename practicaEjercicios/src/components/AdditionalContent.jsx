const AdditionalContent = ({ titulo, texto }) => {
  return (
    <div className="alert alert-success" role="alert">
      <h4 className="alert-heading">{titulo}</h4>
      <p>{texto}</p>
    </div>
  );
};
export default AdditionalContent