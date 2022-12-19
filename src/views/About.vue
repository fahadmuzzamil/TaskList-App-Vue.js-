<template>
    <div>
        <h4>This App is basically a <b>Simple Task List App</b>, that can save your task with date and time. You can delete the task by
            clicking on the (Red-Cross-button), or you can update the task reminder by just double click anywhere on the
            task. <span>I hope you would like this app.</span> For more suggestions <strong>Please let me know😄</strong> </h4>

    </div>
</template>
<script>
export default {
    name: "AppAbout"
}
</script>
<style scoped>
    div{
        height:515px;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        background-color: #faebd794;

    }
    h4{
    font-size: 25px;
    font-family: cursive;
    padding: 10px;
    }
    span{
    color: azure;
    text-shadow: 0 0 10px black;
    }
</style>