<script>
import { ref } from 'vue'

export default{
    data(){
        return{
            message: "こんにちは！Vue3へようこそ！",
            changeLang: "Hello, Vue!",
            input: '',
            show: true,
            sw: true,
            writings: ''
        };
    },
    methods: {
        japanese: function(){
            this.changeLang = 'こんにちは！びゅーーー！'
        }
    },
    computed: {
        label: function(){
            return this.sw ? "閉じる" : "開く";
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
    <h2>スライドパネル</h2>
    <div id="introduction">
        <button @click="sw =! sw">
            {{ label }}
        </button>
        <transition name="slide">
            <div v-if="sw" class="panel">
                <p>私は舞鶴工業高等専門学校4年電気情報工学科の平田爽馬です。</p>
                <p>プログラマーズコミュニティ部に所属しており、プログラミングを通してものづくりを日々行なっています。</p>
                <p>昨年の全国高等専門学校プログラミングコンテストでは課題部門で優秀賞を受賞しました。</p>
            </div>
        </transition>
    </div>
    <h2>文字数カウント</h2>
    <div id="count">
        <textarea v-model.trim="writings"></textarea>
        <p class="count">あと {{ 140 - writings.length }} 文字入力できます</p>
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

textarea {
  width: 50%;
  height: 80px;
  border: 2px #ccc solid;
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;
}

/* Animation */
.slide-enter-active, .slide-leave-active {
  transition: .5s;
}
.slide-enter, .slide-leave-to {
  transform: scaleY(0);
}
</style>