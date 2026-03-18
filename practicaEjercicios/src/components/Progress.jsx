const Progress = ({ progreso }) => {
  return (
    <div
      className="progress"
      role="progressbar"
      aria-label="Progress"
      aria-valuenow={progreso}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <div
        className="progress-bar"
        style={{ width: `${progreso}%` }}
      >
        {progreso}%
      </div>
    </div>
  );
};

export default Progress;