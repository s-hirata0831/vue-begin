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
            let datetime = date.getFullYear() + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' +('0' + date.getDate()).slice(-2) + ' ' +  ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
            this.boxes.push({num: randomNum, avrSize: size, renewDate: datetime})
        },
    },
};

</script>

<template>
    <div class="text-2xl font-bold tracking-tight text-gray-900">とり貝BOX追加ページ</div>
    <br />
    <div class="flex justify-center">
        <button class="flex items-center justify-center rounded-full bg-gray-500 px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400" @click="addBox">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mr-2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
        </svg>
        BOXを追加
    </button>
    </div>
    <div class="flex flex-wrap justify-center mt-8 gap-4">
        <div class="bg-cyan-600 w-50 p-4 rounded-lg shadow-md flex flex-col items-center" v-for="(box, index) in boxes" :key="index">
            <div class="text-xl font-bold tracking-tight text-gray-900">
                <h3>グループ： {{ index + 1 }}</h3>
            </div>
            <div class="text-base tracking-tight text-gray-50 flex flex-col items-center">
                <p>とり貝数：{{ box.num }}</p>
                <p>コンテナ数：{{ box.num }}</p>
                <p>平均サイズ: {{ box.avrSize }}</p>
                <p>水深：{{ box.num }}</p>
                <p>更新日： {{ box.renewDate }}</p>
            </div>
        </div>
    </div>
</template>