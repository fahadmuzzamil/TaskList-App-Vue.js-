<template lang="">
    <div>
       <h2>TaskList App</h2> 
        <button @click="formDisplay"
         :style="{background: bgColor}"
         class="btn btn-primary btn-primary-outline">
        {{ text }}
        </button>
    </div>
</template>
<script>
export default {
    name: "AppHeader",
    props:{
        text: String,
        bgColor: String,
    },
    methods: {
        formDisplay(){
            this.$emit('formDisplay');
            this.$emit('heightHit');
        }
    }
}
</script>
<style scoped>
div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #ecd1ae;
    padding: 0px 10px;
}

button {
    margin-top: 10px;
    height: 40px;
    outline: none;
    border: none;
}

button:focus {
    outline: none;
    border: none;
}

h2 {
    font-family: revert;
    font-weight: bold;
}
</style>