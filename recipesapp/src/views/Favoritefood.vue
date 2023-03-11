<template>
  <div>
    <h2>Favorite Food</h2>
<form @submit.prevent="save">
<div class="form-group">
  <label>Name </label>
  <input type="text" v-model="foods.name" class="form-control"  placeholder="Name">
 
</div>
<div class="form-group">
  <label>Favorite Food</label>
  <input type="text" v-model="foods.favoritefood" class="form-control"  placeholder="FavoriteFood">
 
</div>

<button type="submit" class="btn btn-primary">Save</button>

</form>


    <h2>Food View</h2>
    <table class="table table-dark">
<thead>
  <tr>
    <th scope="col">ID</th>
    <th scope="col">Name</th>
    <th scope="col">Favorite Food</th>
    <th scope="col">Option</th>
  </tr>
</thead>
<tbody>
  <tr v-for="foods in result" v-bind:key="foods._id">
        
        <td>{{ foods._id }}</td>
        <td>{{ foods.name }}</td>
        <td>{{ foods.favoritefood }}</td>
        <td>
          <button type="button" class="btn btn-warning" @click="edit(foods)">Edit</button>
          <button type="button" class="btn btn-danger"  @click="remove(foods)">Delete</button>
        </td>
      </tr>
  
</tbody>
</table>
   
  </div>
</template>

<script>
  import Vue from 'vue';
  import axios from 'axios';

   Vue.use(axios)


export default {
  name: 'Favoritefood',
  data () {
    return {
      result: {},
      foods:{
                 _id: '',
                 name: '',
                 favoritefood: '',


      }
    }
  },
  created() { 
      this.foodsLoad();
  },
  mounted() {
        console.log("mounted() called.......");
       
    },

  methods: {
         foodsLoad()
         {
               var page = "http://localhost:8000/user/getAll";
               axios.get(page)
                .then(
                    ({data})=>{
                      console.log(data);
                      this.result = data.data;
                    }
                );
         },
         
         




         save()
         {
          if(this.foods._id == '')
            {
              this.saveData();
            }
            else
            {
              this.updateData();
            }       

         },
         saveData()
         {
          axios.post("http://localhost:8000/user/create", this.foods)
          .then(
            ({data})=>{
              alert("saveddddd");
              this.FoodsLoad();
            }
          )

         },
         edit(foods)
         {
          this.foods = foods;
         
         },
         updateData()
         {
            var editrecords = 'http://localhost:8000/user/update/'+ this.foods._id;
            axios.patch(editrecords, this.foods)
            .then(
              ({data})=>{
                this.foods.name = '';
                this.foods.favoritefood = '',
                this.id = ''
                alert("Updated!!!");
                this.FoodsLoad();
              }
            );

         },

         remove(foods){
           var url = `http://localhost:8000/user/delete/${foods._id}`;
            axios.delete(url);
            alert("Deleteddd");
            this.foodsLoad();
          }
    }
}
</script>