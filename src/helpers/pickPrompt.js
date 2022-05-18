const pickPrompt = () => {
  const prompts = ['How far away is the moon?', 'Write me a song about a tree', 'How old is the earth?', 'Pick a number between 1 and 100', 'What time is it in Japan?'];

  const rand = Math.floor(Math.random() * (prompts.length));

  console.log(prompts[rand]);
};

module.exports = { pickPrompt };