import { FaStar } from "react-icons/fa";

const Star = ({ selected = false }) => (
    <FaStar color={selected ? 'red' : 'grey'} />
);

const createArray = length => [...Array(length)];

const StarRating = ({ totalStars = 5 }) => {
    return createArray(totalStars).map((n, i) => <Star key={i} />);
}

export default StarRating;