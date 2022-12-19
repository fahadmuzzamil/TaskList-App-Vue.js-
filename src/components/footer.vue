<template lang="">
    <div>
        <h4><router-link :to="checkPath ? '/' : '/about'" :style="{background: checkPath ? 'green': 'Red'}">{{ checkPath ? 'Go Back' : 'About App'}}</router-link></h4>
        <p>Made with 💖 by FaDii</p>
    </div>
</template>
<script>
export default {
    name: 'AppFooter',
    computed:{
        checkPath(){
            if(this.$route.path === "/about"){
                return true
            }else{
                return false
            }
        }
    }
}
</script>
<style scoped>
    div{
        margin: 0;
        padding: 0;
        border-top: 10px solid #0000;
        background: #000000a6;
        height: 230px;
        text-align: center;
        color: white;
    }
    h4{
        font-size: 15px;
    }
    a{
        background-color: red;
        color: white;
        padding: 5px 5px;
        border-radius: 10px;
        transition: all .3s;
        text-decoration: none;
    }
    a:hover{
        text-decoration: none;
        background-color: red;
        color: white;
        transition: all .3s;
    }
    p{
        background-color: #3d2222;
        color: wheat;
        user-select: none;
    }
</style>