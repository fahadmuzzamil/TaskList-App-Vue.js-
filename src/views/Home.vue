<template>
    <div>
      <div v-show="display">
        <FormComponent  @formData="insertData"/>
      </div>
        <TasksComponent :heightMe="heighted" :tasks="tasks" @dltd="deleteMe" @toggle="updateData"/>
    </div>
</template>
<script>
import TasksComponent from "../components/tasksComponent";
import FormComponent from "../components/addForm";

export default {
    name: "AppHome",
    components:{
    FormComponent,
    TasksComponent,
    },
    props:{
    display: Boolean,
    heighted: Boolean,
    },
    data() {
    return {
      tasks: Array,
    }
  },
  methods:{

   async insertData(data){
      const request = await fetch("api/tasks", {
      method: 'POST',
      headers:{
        'content-type': 'application/json ',
      },
      body: JSON.stringify(data),
      }) 
      const response = await request.json();
      this.tasks.push(response);
      this.displayMe = false
    },
    async updateData(id){
      const taskToToggle = await this.fetchSingleData(id);
      const updtTask = {...taskToToggle, reminder: !taskToToggle.reminder, updatedAt: Date()};
      const request = await fetch(`api/tasks/${id}`,{
        method: "PUT",
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updtTask),
      });
      const response = await request.json();
      this.tasks = this.tasks.map((task)=> task.id === id ? {...task, reminder: response.reminder}: task)
   },
   async deleteMe(id){
         if(confirm("Are you sure? The selected task will be deleted!")){
          const request = await fetch(`api/tasks/${id}`,{
            method: "DELETE"
          });
          request.status===200? this.tasks.remove(id): "Didnt find";
         }
     },
   //Here we are using JSON server for Fake Backend service
   async fetchData(){
    const request = await fetch("api/tasks");
    const response = await request.json();

    return response;
   },
   async fetchSingleData(id){
    const request = await fetch(`api/tasks/${id}`);
    const response = await request.json();
    return response;
   }
  },
  async created() {
    this.tasks = await this.fetchData();
  }
}
</script>
<style lang="">
    
</style>