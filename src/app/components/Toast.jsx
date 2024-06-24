const Toast = ({ show, message }) => {
    if (!show) return null;
    return (
      <div className="toast fixed bottom-5 right-5">
        <div className="alert alert-info">
          <span>{message}</span>
        </div>
      </div>
    );
  };
  
  export default Toast;
  