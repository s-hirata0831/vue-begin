<script>

export default{
    data(){
        return{
            boxes: [],
        };
    },
    methods: {
        addBox() {
            let randomNum = Math.floor(Math.random() * 10)
            let size = Math.round(Math.random()*50)/10
            let date = new Date()
            let datetime = date.getFullYear() + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' +('0' + date.getDate()).slice(-2) + ' ' +  ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2) + ':' + ('0' + date.getSeconds()).slice(-2) + '.' + date.getMilliseconds();
            this.boxes.push({num: randomNum, avrSize: size, renewDate: datetime})
        },
    },
};

</script>

<template>
    トリガイページ
    <br />
    <div class="add-box">
        <butoton class="add-button" @click="addBox">
            BOXを追加
        </butoton>
    </div>
    <div class="box" v-for="(box, index) in boxes" :key="idnex">
        <h3>グループ： {{ index + 1 }}</h3>
        <p>とり貝数：{{ box.num }}</p>
        <p>コンテナ数：{{ box.num }}</p>
        <p>平均サイズ: {{  box.avrSize }}</p>
        <p>水深：{{ box.num }}</p>
        <p>更新日： {{ box.renewDate }}</p>
    </div>
</template>