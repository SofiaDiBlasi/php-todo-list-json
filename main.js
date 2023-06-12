const { createApp } = Vue;

createApp({
    
    data() {
        return {
            api: "../php-todo-list-json/api.php",
        }
    },
    methods: {
        invocaprincipesse(){
            axios.get(this.api).then((response) => {
                console.log(response);
                console.log(response.data);
            });
        }
    },
    mounted() {
        console.log("montato") 
    }
}).mount("#app");