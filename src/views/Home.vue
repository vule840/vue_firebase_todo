<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="title">What do I need to do today?</div>
    <input v-model="myTodo" type="" name=""><button @click="addToDo">Add</button>
    <!-- div>{{myTodo}}</div> -->
    <div v-if="this.errors !== ''">{{errors}}</div>

   <!--  <hr>

    <button @click="prazno">Pitaj me dali je prazno</button> 

    <input type="text" v-model="data" name="">
	<div v-if="this.bugovi !== ''">{{bugovi}}</div> -->
	<div v-if="this.$store.getters.getItems && this.$store.getters.getItems.length > 0">
      <div class="title">Today, you've go to do...</div>
 
     <div v-for="item in this.$store.getters.getItems" :key="item.id">
       {{ item.title }}<br /><br /><small style="text-decoration:underline;" @click="deleteItem(item.id)">Delete</small>
       <hr />
     </div>
   </div>
</div>
		

  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

//https://www.codewall.co.uk/how-to-create-a-real-time-to-do-list-app-with-vue-vuex-firebase-tutorial/
import { testExport } from '@/main'
import { db } from '@/main'

export default {
  name: 'home',
  components: {
    // HelloWorld
  },
  data(){
  	return{
  		myTodo: "",
  		errors: "",
  		data: '',
  		bugovi: ''

  	}
  },
  beforeCreate(){

  		// this.$store.dispatch('setitems')
  		// console.log(this.$store.getters.getItems)
  },
  methods:{
  	addToDo(){
  		console.log('radi li ' + this.myTodo)
  		console.log(testExport)
  		console.log(this.$store.state.items)
  		this.errors = ""
  		if(this.myTodo !== ''){
  			db.collection('items').add({
  				title: this.myTodo,
  				created_at: Date.now()	

  			}).then((response) => {
  				if(response){
  					this.myTodo = ''
  				}	

  			} ).catch((erorr) => {
  				this.errors = errors
  			})


  			this.myTodo

  		}

  		else{
  			this.errors = "nemre biti prazno, upiši text"
  		}
  		

  	 }

  	// ,prazno(){
  	// 	//////////
  	// 	this.bugovi = ''
  	// 	if(this.data !== ''){
  	// 		this.data
  	// 	}else{
  	// 		this.bugovi = "e sori ovo je prazno, upiši nešto"
  	// 	}
  	// }
  }
}
</script>
<style>
	* {
  box-sizing:border-box;
}

body, html, #app {
  background:#8ac8e5;
}

.home {
  width:300px;
  margin:auto;
}

#vue-logo {
  width:100px;
}

input, button {
  border:0;
  width:100%;
  margin:0 0 10px;
  padding:7px;
}

input {
  font-size:12px;
}

button {
  background:#43b823;
  border:0;
  text-transform:uppercase;
  color:#fff;
  font-weight:700;
  cursor:pointer;
}

.title {
  font-size:14px;
  font-weight:700;
  padding:0 0 10px 0;
  margin:0 0 10px 0;
  border-bottom:1px solid #666;
}

#errors {
  background:#a52222;
  color:#fff;
  padding:5px;
}

</style>