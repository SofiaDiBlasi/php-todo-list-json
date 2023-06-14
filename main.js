const { createApp } = Vue;

createApp({
    
    data() {
        return {
            api: "./api.php",
            task: "",
            todoList:""
        }
    },
    methods: {
      manda(){
        const data = {task: this.task};
        axios.post(this.api, data, {
            headers: { 'Content-Type': 'multipart/form-data' }
        }).then((response) => {
            this.todoList = response.data;
            this.task = "";
        });
      }
    },
    mounted() {
        axios.get(this.api).then((response) => {
            this.todoList = response.data;
            this.task = "";
        });
    }
}).mount("#app");