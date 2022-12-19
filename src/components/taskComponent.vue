<template lang="">
    <div>
        <h4>{{ task.title }}
        <i class="fa-solid fa-xmark" @click="$emit('dlt', task.id)"></i>
        </h4>
        <p>{{ task.day }}</p>
    </div>
</template>
<script>
export default {
    name: "TaskComponent",
    props: {
        task: Object,
    }
}
</script>
<style scoped>
h4 {
    font-size: 18px;
    font-weight: 900;
    font-family: cursive;
    color: black;
    padding-top: 5px;
    text-shadow: 0 0 10px wheat;
    letter-spacing: 1px;
}

i {
    font-size: 32px;
    color: red;
    cursor: pointer;
    float: right;
    margin-right: 5px;
    transform: translateY(11px);
}

p {
    color: black;
    letter-spacing: 1px;
    font-weight: 700;
    text-shadow: 5px 2px 10px bisque;
    font-size: 11px;
    font-family: monospace;
    background: #ffebcd75;
    width: 126px;
    padding: 0 5px;
    text-align: center;
    border-radius: 10px;
}
</style>