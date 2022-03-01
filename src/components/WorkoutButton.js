export const WorkoutButton = ({ title, id, handleClick }) => (
  <button onClick={() => handleClick(id)}>{title}</button>
);
