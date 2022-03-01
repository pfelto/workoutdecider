const workout5min = [
  "Mady Fit 5min Stretch",
  "30 Push ups and 3 by 1min planks",
  "Mady Fit 5min Stretch",
  "Calf Raises up stairs",
  "30 Push ups and 3 by 1min planks",
  "Calf Raises up stairs",
  "Mady Fit 5min Stretch",
  "30 Push ups and 3 by 1min planks",
  "Mady Fit 5min Stretch",
  "Calf Raises up stairs",
  "30 Push ups and 3 by 1min planks",
  "Calf Raises up stairs",
  "Clean Kitchen",
];

const workout20min = [
  "Walk honey around poop loop",
  "Run 2 miles",
  "10min Core and 30 push ups and Calf Raises",
  "15 Morning Stretch and 30 push ups",
  "Run 2 miles",
  "10min Core and 30 push ups and Calf Raises",
  "15 Morning Stretch and 30 push ups",
  "Run 2 miles",
  "10min Core and 30 push ups and Calf Raises",
  "15 Morning Stretch and 30 push ups",
  "Run 2 miles",
  "10min Core and 30 push ups and Calf Raises",
  "15 Morning Stretch and 30 push ups",
];

const longWorkout = [
  "lift upper body",
  "lift lower body",
  "walk Parker Preserve",
  "run 3+ miles",
  "Beginners Yoga",
];

const getRandomElementFromWorkout = (id) => {
  if (id === "workout5")
    return workout5min[Math.floor(Math.random() * workout5min.length)];
  if (id === "workout20")
    return workout20min[Math.floor(Math.random() * workout20min.length)];
  if (id === "longWorkout")
    return longWorkout[Math.floor(Math.random() * longWorkout.length)];
  else return null;
};

export { getRandomElementFromWorkout };
