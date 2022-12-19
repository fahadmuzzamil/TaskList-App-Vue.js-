<template>
    <div class="div">
        <form action="get">
            <input type="text" placeholder="Title" name="title" v-model="formData.title" class="input" required>
            <input type="datetime-local" v-model="formData.day" placeholder="Date & Time" class="input" name="date" required>
            <div class="remember-div">
                <input type="checkbox" id="reminder" v-model="formData.reminder">
                <label for="reminder">Reminder</label>
            </div>
            <input class="btn input" type="submit" value="Submit" @click.prevent="sendingData">
        </form>
    </div>
</template>
<script>
export default {
    name: 'FormComponent',
    data() {
        return {
            formData: {
                title: '',
                day: '',
                reminder: false
            }
        }
    },
    methods: {
        sendingData() {
              if(this.formData.title === "" && this.formData.day == "") {  
                alert("Title and date fields are required");
            }     
            const data = {
                title: this.formData.title,
                day: this.formData.day,
                reminder: this.formData.reminder,
            }
            this.$emit("formData", data);
            //Clearing all inputs to default after submission
            this.formData.id = 0;
            this.formData.title = '';
            this.formData.day = '';
            this.formData.reminder = false;
           }
        }
    }
</script>
<style scoped>
.div {
    background: rgba(255, 255, 255, 0.807);
    transition: all 1s;
    padding: 5px 0px;
    border-radius: 14px;
    border: 2px solid black;
    margin: 5px;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: inherit;
    padding: 5px 20px;
    gap: 10px;
    color: black;
}
.remember-div{
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: flex-start;
    width: 130px;
    padding-left: 5px;
    box-sizing: border-box;
}
.remember-div input{
    margin-bottom: 12px;
}

.input {
    font-size: 17px;
    padding: 5px;
    border: 2px solid #bf8c2c;
    border-radius: 10px;
    font-style: oblique;
    font-family: fantasy;
    letter-spacing: 1px;
    transition: all .5s;
}
.input::placeholder{
    color: black;
}

.date {
    user-select: none;
}

label {
    display: inline-flex;
}

.input:hover {
    box-shadow: 0 0 5px black;
    transition: all 1s;
    border: 2px solid transparent;

}

.btn:hover {
    background-color: green;
    color: white;
}

.input:focus {
    outline: none;
    border: 2px solid #bf8c2c;
    ;
}
</style>