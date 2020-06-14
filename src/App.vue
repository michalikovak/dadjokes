<template>
  <div>
    <div id="app">
      <div class="container">
        <div class="joke">
          <div class="joke__body">
            <img class="joke__user" src="assets/img/user01.png" />
            <p class="joke__text">
              The secret service isn't allowed to yell "Get down!" anymore when
              the president is about to be attacked. Now they have to yell
              "Donald, duck!"
            </p>
          </div>
          <div class="joke__likes">
            <button id="btn-up" class="btn-like btn-like--up" v-on:click="btnUp()"></button>
            <span id="likes-up" class="likes-count likes-count--up">0</span>
            <button id="btn-down" class="btn-like btn-like--down" v-on:click="btnDown()"></button>
            <span id="likes-down" class="likes-count likes-count--down">0</span>
          </div>
        </div>
      </div>
    <jokes
      v-bind:userJoke="user"
      v-bind:textJoke="text"
      v-bind:likesJoke="likes"
      v-bind:dislikesJoke="dislikes"
    />
    <!--<img src="../dist/assets\img/user01.png" alt="user01"> 
    
    takhle nejak bych se snazila stahnou obrazek * 9 :D  -->
  </div>
</template>

<script>
import Jokes from "../components/Jokes.vue";
export default {
  name: "App",
  components: {
    jokes: Jokes,
  },
  methods: {
    btnUp() {
      this.upLikes += 1;
    },
    btnDown() {
      this.downLikes += 1;
    },
  },
  data() {
    return (
      {
        upLikes: 0,
        downLikes: 0,
      },
      {
        usersjokes: [
          {
            user: 01,

            text:
              "The secret service isn't allowed to yell 'Get down!' anymore when the president is about to be attacked. Now they have to yell 'Donald, duck!'",
            likes: 3,
            dislikes: 15,
          },
          {
            user: 02,

            text:
              " Why did the invisible man turn down the job offer? He couldn't see himself doing it.",
            likes: 50,
            dislikes: 10,
          },
          {
            user: 03,
            text:
              "I bought some shoes from a drug dealer. I don't know what he laced them with, but I was tripping all day!",
            likes: 30,
            dislikes: 2,
          },
          {
            user: 04,
            text:
              "Did you hear the news? FedEx and UPS are merging. They’re going to go by the name Fed-Up from now on.",
            likes: 15,
            dislikes: 8,
          },
          {
            user: 05,
            text:
              "My daughter screeched, 'Daaaaaad, you haven't listened to one word I've said, have you!?' What a strange way to start a conversation with me...",
            likes: 90,
            dislikes: 40,
          },
          {
            user: 06,
            text:
              "My wife tried to unlatch our daughter's car seat with one hand and said, 'How do one armed mothers do it?' Without missing a beat I replied, 'Single handedly.'",
            likes: 38,
            dislikes: 1,
          },
          {
            user: 07,
            text:
              "When a dad drives past a graveyard: Did you know that's a popular cemetery? Yep, people are just dying to get in there!",
            likes: 66,
            dislikes: 35,
          },
          {
            user: 08,
            text:
              "My friend keeps saying 'cheer up man it could be worse, you could be stuck underground in a hole full of water.'I know he means well.",
            likes: 27,
            dislikes: 18,
          },
          {
            user: 09,
            text:
              "The fattest knight at King Arthur’s round table was Sir Cumference. He acquired his size from too much pi.",
            likes: 42,
            dislikes: 9,
          },
        ],
      }
    );
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

.container {
  max-width: 30rem;
  margin: 5rem auto;
}

.joke {
  margin-bottom: 2rem;
}

.joke__body {
  display: flex;
}

.joke__user {
  flex: 0 0 auto;
  width: 5rem;
  height: 5rem;
  margin-right: 1rem;
}

.joke__text {
  background-color: cornflowerblue;
  color: white;
  border-radius: 1rem;
  padding: 1.5rem 2rem;
  margin: 0;
  line-height: 150%;
}

.joke__likes {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 1rem;
}

.likes-count {
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0 0.5rem;
}

.likes-count--up {
  color: #00e268;
}

.likes-count--down {
  color: #ff5654;
}

.btn-like {
  border: none;
  outline: none;
  width: 2rem;
  height: 2rem;
  border-radius: 1rem;
  background-size: 1.2rem;
  background-position: center;
  background-repeat: no-repeat;
}

.btn-like--up {
  background-color: #00e268;
  background-image: url("img/like-up.png");
}

.btn-like--down {
  background-color: #ff5654;
  background-image: url("img/like-down.png");
}
</style>
