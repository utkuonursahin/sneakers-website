import icons from "../../images/sprite.svg"
const Spinner = () => {
  return (
      <div className="spinner">
        <svg className="">
          <use href={`${icons}#icon-spinner`}>
          </use>
        </svg>
      </div>
  );
};

export default Spinner;
