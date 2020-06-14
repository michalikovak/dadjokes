import './index.html';
import './style.css';
import Vue from 'vue';
import './App.vue';

new Vue({
  el: '#app',
  data: {
    upLikes: 0,
    downLikes: 0,
  },
  methods: {
    btnUp() {
      this.upLikes += 1;
    }
  },
  btnDown() {
    this.downLikes += 1;
  },
});

