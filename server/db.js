module.exports = {
  movies: [
    {
      id: 1,
      author: "김미래",
      title: "헤어질 결심",
      body: "올해 최고의 멜로 영화",
      isDone: false,
    },
    {
      id: 2,
      author: "태오",
      title: "캣독",
      body: "독은 물러가라 ",
      isDone: true,
    },
    {
      author: "정원지",
      title: "탑건짱",
      body: "재밌어요",
      idDone: "false",
      id: 3,
    },
  ],
  comments: [
    {
      id: 1,
      movieId: "2",
      commentAuthor: "독캣",
      commentBody: "",
    },
    {
      id: 2,
      movieId: "2",
      commentAuthor: "정원지",
      commentBody: "재밌다",
    },
  ],
};
