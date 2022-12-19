<template >
    <div class="tasks-div" :style="{height: heightMe? '306px' : '515px'}">
        <div v-for="task in tasks" :key="task.id" :class="{remember : task.reminder, task}" id="task" @dblclick="$emit('toggle', task.id)">
            <TaskComponent :task="task" @dlt="$emit('dltd',task.id)"/>
        </div>
    </div>
</template>
<script>
import TaskComponent from "./taskComponent";

export default {
    name: "TasksComponent",
    props:{
        tasks: Array,
        heightMe: Boolean
    },
    data(){
     return{
        //
     }
    },
    components:{
        TaskComponent,
    },

    
}
    

</script>
<style scoped>
  .tasks-div{
        overflow-y: scroll;
        padding: 5px;
        user-select: none;
        overflow-y: scroll;
    }
    .tasks-div::-webkit-scrollbar{
        display: none;
    }
    .task{
        padding: 0px 5px 3px 10px;
        margin: 5px 0px;
        border-radius: 10px;
        background: #d9edf7ad;
        transition: all .1s;
    }
   
    .remember{
        transition: all .1s;
        border-left: 10px solid black;
        background-color: rgba(98, 171, 123, 0.978);
    }
    h4{
        font-weight: bold;
    }
</style>