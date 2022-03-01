import PropTypes from "prop-types";

export const WorkoutDisplay = ({ info }) => <p>{info}</p>;

WorkoutDisplay.propTypes = {
  info: PropTypes.string,
};
