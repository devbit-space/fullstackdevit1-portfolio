import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const FiveStar = ({ range }: { range: number }) => {
  return (
    <div className="flex items-center justify-center">
      {Array.from({ length: Math.floor(range / 20) }).map((_, index) => (
        <FaStar key={index} className="text-yellow-500 ml-2" />
      ))}
      {range % 20 > 0 && <FaStarHalfAlt className="text-yellow-500 ml-2" />}
    </div>
  );
};

export default FiveStar;
