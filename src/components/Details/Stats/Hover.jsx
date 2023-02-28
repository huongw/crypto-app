import { AiOutlineQuestionCircle } from "react-icons/ai";

const Hover = ({ text }) => {
  return (
    <span className="hover">
      <AiOutlineQuestionCircle />
      <span className="info">{text}</span>
    </span>
  );
};

export default Hover;
