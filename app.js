const app = Vue.createApp({
  data() {
    return {
      firstName: "Bill",
      lastName: "Waters",
      email: "bWaters@gmail.com",
      gender: "male",
      picture: "https://randomuser.me/api/portraits/men/24.jpg",
    };
  },
});

app.mount("#app");
