<template>
  <div>
    <div class="padding">
      <input @input="filtrar(buscar)" v-model="buscar" type="text" class="css-input" id="fname" name="fname" />
      <br />
    </div>
    <div
      v-for="(item, index) in listaProducts"
      :key="index"
      class="aling-center"
    >
      <div class="card" @click="selectProduto(item)">
        <div>
          <img class="img" :src="item.thumbnail" alt="imagem do produto" />
        </div>
        <div class="content-start padding">
          <div class="bold">
            {{ item.title }}
          </div>
          <div class="text-right text-positive">R${{ item.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Burger",
  data() {
    return {
      listaProducts: [],
      buscar: null
    };
  },
  created() {
    this.listaProducts = this.$store.state.listaBurguer.data;
  },
  methods: {
    selectProduto(item) {
      var index = this.listaProducts.indexOf(item);
      this.$router.push({
        name: "Produto",
      });
      var data = {
        index: index,
        category_title: "Burger",
        data: item,
      };
      this.$store.commit("selectProduto", data);
    },
    filtrar(item) {
      var listaProducts = this.$store.state.listaBurguer.data;
      
      const needle = item.toLowerCase().replace(/ /g, "");

      this.listaProducts = listaProducts.filter(
          v =>
            v.title
              .toLowerCase()
              .replace(/ /g, "")
              .indexOf(needle) > -1
        );

    }
  },
};
</script>

<style  >
.aling-center {
  display: inline-flex;
  padding: 10px;
}

.card {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 8px 2px;
  height: 90px;
  width: 90vw;
  max-width: 400px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
}

.container {
  padding: 2px 16px;
}

.text-right {
  text-align: right;
}
.text-positive {
  color: green;
}
.img {
  border-radius: 5px 0 0 5px;
}
.padding {
  padding: 10px;
}
.bold {
  font-weight: bold;
}
.css-input {
  font-size: 16px;
  border-color: #cccccc;
  border-style: solid;
  border-width: 0px;
  padding: 12px;
  border-radius: 50px;
  box-shadow: 3px 3px 8px 0px rgba(42, 42, 42, 0.75);
}
.css-input:focus {
  outline: none;
}
</style>