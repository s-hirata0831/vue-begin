<script>
import { ref } from 'vue'

export default{
    data(){
        return{
            message: "こんにちは！Vue3へようこそ！",
            changeLang: "Hello, Vue!",
            input: '',
            show: true
        };
    },
    methods: {
        japanese: function(){
            this.changeLang = 'こんにちは！びゅーーー！'
        }
    }
};
</script>

<template>
    <h1>Home</h1>
    <p>{{ message }}</p>
    <h2>クリックしたら何か起こる系(イベントハンドリング)</h2>
    <p>{{ changeLang }}</p>
    <button @click="japanese">日本語表示</button>
    <h2>入力したら何か起こる系</h2>
    <p>Hello {{ input }}!</p>
    <input v-model="input" placeholder="何かを入力" type="text">
    <h2>ボックスを消す</h2>
    <div id="box" v-if="show" class="panel">
        <p>エラーメッセージ表示時に便利かもしれません</p>
        <button @click="show =! show">
            閉じる
        </button>
    </div>
</template>

<style>
.panel {
  background: #fee;
  border: 2px solid #fbb;
  padding: 20px;
  text-align: center;
}
button {
  font-size: 1rem;
  background: none;
  color: #f66;
  border-radius: 10px;
  border-color: #d44;
  cursor: pointer;
  outline: none;
}
button span {
  font-size: 2.25rem;
  position: relative;
  top: 5px;
}
button:hover {
  color: #d44;
}
</style>