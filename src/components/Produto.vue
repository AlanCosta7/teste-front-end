<template>
  <div class="hello aling-center">
      <div class="cardProduto ">
        <div>
          <img class="imagem" :src="produto.data.picture" alt="imagem do produto">
        </div>
        <div class="paddingProduto">
          <div>
            <a href="javascript:void(0)" @click="Avaliar(1)">
            <img v-if="avaliacao < 1" class="imgStar" src="../../public/starOutline.svg" id="s1">
            <img v-if="avaliacao > 0" class="imgStar" src="../../public/star.svg" id="s1"></a>

            <a href="javascript:void(0)" @click="Avaliar(2)">
            <img v-if="avaliacao < 2" class="imgStar" src="../../public/starOutline.svg" id="s2">
            <img v-if="avaliacao > 1" class="imgStar" src="../../public/star.svg" id="s1"></a>

            <a href="javascript:void(0)" @click="Avaliar(3)">
            <img v-if="avaliacao < 3" class="imgStar" src="../../public/starOutline.svg" id="s3">
            <img v-if="avaliacao > 2" class="imgStar" src="../../public/star.svg" id="s1"></a>

            <a href="javascript:void(0)" @click="Avaliar(4)">
            <img v-if="avaliacao < 4" class="imgStar" src="../../public/starOutline.svg" id="s4">
            <img v-if="avaliacao > 3" class="imgStar" src="../../public/star.svg" id="s1"></a>

            <a href="javascript:void(0)" @click="Avaliar(5)">
            <img v-if="avaliacao < 5" class="imgStar" src="../../public/starOutline.svg" id="s5">
            <img v-if="avaliacao > 4" class="imgStar" src="../../public/star.svg" id="s1"></a>
            <p>{{avaliacao}}</p>
          </div>
          <div class="title"> 
            {{produto.data.title}}
          </div>
          <div class="paddingProduto"> 
            {{produto.data.description}}
          </div>
          <div class="text-left text-positive valor">
           <span class="text-black"> Valor </span> <span>R${{produto.data.price}}</span> 
          </div>
        </div>
      <button class="btn" @click="excluir()">Excluir</button>
      </div>
  </div>
</template>

<script>

export default {
  name: 'Produto',
  data() {
    return {
      avaliacao: 0,
      produto: {
        description: '',
        id: '',
        picture: '',
        price: '',
        thumbnail: '',
        title: '',
      },
    }
  },
  created() {
    this.produto = this.$store.state.produto
  },  
  methods: {
    excluir() {
      var item = this.produto
      var index = item.index

      if (item.category_title === 'Pizza') {
        this.$store.state.listaPizza.data.splice(index, 1)
      } else if (item.category_title === 'Burger') {
        this.$store.state.listaBurguer.data.splice(index, 1)
      }
      
      this.$router.push({
        name: "Burger"
      });
    },
     Avaliar(estrela) {
      // var '../assets/star.svg' = '../assets/star.svg'
      
      if (estrela == 5){ 
      this.avaliacao = 5;
      } 
      
      //ESTRELA 4
      if (estrela == 4){ 
      this.avaliacao = 4;
      } 

      //ESTRELA 3
      if (estrela == 3){ 
      this.avaliacao = 3;
      }
      
      //ESTRELA 2
      if (estrela == 2){ 
      this.avaliacao = 2;
      }
      
      //ESTRELA 1
      if (estrela == 1){ 
      this.avaliacao = 1;
      } 

    }
  },
}
</script>

<style>

.cardProduto {
  margin: 8px;
  height: 90px;
  width: 90vw;
  max-width: 400px;
  border-radius: 5px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
}

.imagem {
  width: 100%;
  border-radius: 5px;

}

.text-black {
  color: black;
}

.paddingProduto {
  padding: 20px;
}

.text-left {
  text-align: left;
}

.title {
  font-weight: bold;
  font-size: 1.5em;
}

.valor {
  font-size: 1.5em;
}
.imgStar {
  width: 30px;
  margin: 5px;
}
.btn {
  -webkit-border-radius: 28;
  -moz-border-radius: 28;
  border-radius: 28px;
  font-family: Arial;
  color: #ffffff;
  font-size: 20px;
  background: #d93434;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
}

.btn:hover {
  background: #c72525;
  text-decoration: none;
}
</style>