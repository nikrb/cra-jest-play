export const getTopics = () =>
  fetch('/api/v1/topics').then(res => res.json());
