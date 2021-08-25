<template>
  <form>
    <section>
      <label name="file">File</label>
      <input id="file" type="file" v-model="file">
    <section>
      <label name="title">Title</label>
      <input id="title" name="title" type="text" v-model="title">

      <label name="description">Description</label>
      <input id="description" name="description" type="text" placeholder="Enter description here" v-model="description">

      <label name="state">State</label>
      <input id="state" name="state" type="text" placeholder="Enter state here" v-model="state">

      <label name="destination">Destination</label>
      <input id="destination" name="destination" type="text" placeholder="Enter destination here" v-model="destination">
    </section>
    </section>
    <section>
      <button class="primary" @click.prevent="handleSubmit" type="submit">
        Save
      </button>
    </section>
  </form>
</template>



<script>
import axios from "axios"

export default {
  name: "Create",
  data() {
    return {
      memory: {
        title: "",
        description: "",
        state: "",
        destination: "",
        file: "",
      }
    }
  },
  methods: {
    handleSubmit() {
      let apiUrl = "http://localhost:4000/api/memories/"

      axios.post( apiUrl, memory )
        .then( res => {
          console.log( res )
          router.push( "/" )
        })
        .catch( err => {
          console.log( err )
        })
    }
  }
}
</script>
