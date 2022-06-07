const users = [
  {
    user: {
      email: "pedestrianrunner-daniel@yahoo.com",
      password: "daniel",
      userName: "Daniel",
      firstName: "Daniel",
      lastName: "Daniel",
    },
    posts: [
      { title: "Welcome", body: "Hello, Welcome to Noob Board" },
      { title: "Javascript vs Node", body: "What is the difference between javascript and node?" },
      { title: "Senior developer", body: "How long does it take to become a senior developer?" },
    ],
  },
  {
    user: {
      email: "pedestrianrunner-john@yahoo.com",
      password: "johnjohn",
      userName: "John",
      firstName: "John",
      lastName: "John",
    },
    posts: [
      { title: "Http error 304", body: "I'm getting an error HTTP 304. What does it mean and how do I fix it? " },
      { title: "Python", body: "Do I need to learn python? after javacript?" },
    ],
  },
  {
    user: {
      email: "pedestrianrunner-mary@yahoo.com",
      password: "marymary",
      userName: "Mary",
      firstName: "Mary",
      lastName: "Mary",
    },
    posts: [{ title: "Javacript online courses", body: "What javacript course do you recommend on Udemy?" }],
  },
];

module.exports.users = users;
