<template>
  <div class="container">
    <p>Testing global vars</p>

    <h1>Happy Campers Memories</h1>
    <section>
      <h3>{{ memories.length }} results</h3>
      <article v-for="memory in memories" :key="memory.id">
        <p>{{ memory }}</p>
        <img :src="memory.fileUrl">
        <h4>{{ memory.title }}</h4>
        <p>{{ memory.description }}</p>
        <p>{{ memory.state }}</p>
        <p>{{ memory.destination }}</p>
        <!--
        <router-link :to="{ name: 'edit', params: { id: memory.id } }">
        </router-link>
        <section>
          <router-link :tp="{ name: 'edit', params: { id: memory.id } }">
            <button>Edit</button>
          </router-link>
          <aside></aside>
          <button class="secondary danger" @click.prevent="deleteMemory( memory.id )">Delete</button>
        </section>
        -->
      </article> 
    </section>
  </div>
</template>

<script>
// import Memory from "@components/Memory.vue"
import axios from "axios"

export default {
  name: "Directory",
  /*
  components: {
    Memory
  },
  inject: [ "globalVariable" ],
  */
  data() {
    return {
      memories: [],
    }
  },
  created() {
    let apiUrl = "http://localhost:4000/api/memories/"
    axios.get( apiUrl )
      .then( res => {
        this.memories = res.data
      })
      .catch( err => {
        console.error( err )
      })
  },
  methods: {
    deleteIdea( id ) {
      let apiUrl = `http://localhost:8080/api/memories/${ id }`
      let indexOfArrayItem = this.memories.findIndex( i => i.id === id )
      
      if ( window.confirm( "Do you really want to delete this?" ) ) {
        axios.delete( apiUrl )
          .then( () => {
            this.ideas.splice( indexOfArrayItem, 1 )
          })
          .catch( ( err ) => {
            console.error( err );
          })
      }
    }
  }
}
</script>    
