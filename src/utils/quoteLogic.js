const quotes = [
  "Positive anything is better than negative nothing.",
  "Miracles happen to those who believe in them.",
  "One small positive thought can change your whole day.",
  "Believe you can and you're halfway there.",
  "Be positive. Be true. Be kind.",
  "You cannot have a positive life and a negative mind.",
  "If you are positive, you'll see opportunities instead of obstacles.",
  "Write it on your heart that every day is the best day in the year.",
  "I will go anywhere as long as it's forward.",
  "Keep a smile on your face. Keep a spring in your step.",
];

export const getQuote = () => quotes[Math.floor(Math.random() * quotes.length)];
