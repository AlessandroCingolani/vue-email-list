const {createApp} = Vue;


createApp({

  data(){
    return{

      title : 'List Emails:',
      generatedEmail : []
    }
  },
  methods:{
    getApi(){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then((myResponse)=>{
        this.generatedEmail.push(myResponse.data.response)
      })
      .catch((error)=>{
        console.log(error);
      })
    },
    generateEmail(n){
      for(let i = 0;i < n;i++){
        this.getApi();
      }
    }
  },


  mounted(){
    this.generateEmail(10)
  }
}).mount('#app')