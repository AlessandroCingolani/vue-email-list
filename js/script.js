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
        this.generatedEmail = myResponse.data.response
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  },

  mounted(){
    this.getApi();
  }
}).mount('#app')