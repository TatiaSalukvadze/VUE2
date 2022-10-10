Vue.createApp({
    data(){
        return{
            user: '',
            confirmUser: '',
            user1: '',
            confirmUser1: ''
        };
    },
    methods:{
        alertFunction(){
            alert("this is an alert!");
        },
        // setUser(event){
        //     this.user = event.target.value;
        // },
        confirmInput(){
            this.confirmUser = this.user;
        },
        // setUser1(event){
        //     this.user1 = event.target.value;
        // },
        confirmInput1(){
            this.confirmUser1 = this.user1;
        }
    }
}).mount('#assignment');