<script>
import { ref } from 'vue'

export default{
    data(){
        return{
            message: "こんにちは！Vue3へようこそ！",
            changeLang: "Hello, Vue!"
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
    {{ message }}
    <h2>クリックしたら何か起こる系(イベントハンドリング)</h2>
    {{ changeLang }}
    <br>
    <button @click="japanese">日本語表示</button>
</template>