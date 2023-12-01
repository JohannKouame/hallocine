<template>

  <div id="homeview">
    <firsthomeview></firsthomeview>
    <div class="frame">
      <div class="header">
        <h2 class="rubrique">PC PORTABLES GAMER - ORDINATEURS PORTABLES GAMING</h2>
      </div>
      <div class="cards" v-for="article in articles" :key="article.id">
        <div id = "card2" class="card">
          <div class="images">
              <img id="im1" v-bind:src="article.image" alt="PC PORTABLE GAMER">
          </div>
          <div class="text">
              <div class="card-header">
                  <h4 class="serie">Pc Portable {{article.name}} {{article.serie}}</h4>
                  <h4 class="prix">{{article.price}} {{article.devise}}</h4>
                  <div class="description">
                      <ul>
                          <li>
                              Ecran {{article.ecran}}
                          </li>
                          <li>
                              Processeur {{article.processeur}}
                          </li>
                          <li>
                              RAM {{article.ram}} {{article.typeRam}} - {{article.rom}} {{article.typeRom}}
                          </li>
                          <li>
                              {{article.graphicCardName}}
                              {{article.graphicCardSerie}}
                              {{article.graphicCardCapacity}}
                          </li>
                          <li>
                              {{article.os}}
                          </li>
                      </ul>
                  </div>
              </div>

              <div class="btns">
                <div class="btn">
                    <h5 class="dispo" v-if="article.state == 'dispo'">En stock</h5>
                    <h5 class="indispo" v-else>Indisponible</h5>
                    <button @click.prevent="addpanier(article.id_article)" id="add">Ajouter au panier</button>
                </div> 
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type= "module"> 
  //Importation des composants
  const firsthomeview = httpVueLoader('../components/Firsthomeview.vue')
  Vue.component('firsthomeview', firsthomeview);

  module.exports =  {
    name: 'homeview',
    components: {
      firsthomeview
    },
    props: {
      articles: [] ,
      panier: { type: Object },
    },
    data(){
      return{
      }
    },
    methods:{
      addpanier(articleId){
        this.$emit("addpanier", articleId)
      },
    },
  }
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap');
   
  .frame{
    margin-top: 3%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .frame h2{
    margin-left: 5%;
    font-size: 25px;
    font-family: 'Source Sans Pro', sans-serif;
    color: #545454; 
  }
  .link-cat{
    color: #00B0F0;
    margin: 8px;
    font-size: 15px;
    text-decoration: none;
    margin-right: 20px;
    transition: 0.2s;
  }

  nav .onglets a{
    position: relative;
    font-size: 16px;
    color: #00B0F0;
    font-family: 'Source Sans Pro', sans-serif;
    transition: 0.2s;
  }

  nav .onglets a.sign{
    border: 2px solid #ff6600;
    border-radius: 3px;
    color: #ff6600;
    background-color: #fff;
    padding: 5px 10px;
    font-size: 16px;
    transition: 0.2s;
  }
  nav .onglets a.sign:hover{
    color: #fff;
    background-color: #ff6600;
    transition: 0.2s;
  }
  nav .onglets div.notif{
    font-size: 13px;
    border-radius: 100px;
    padding: 2px 6px;
    background-color: #2c3e50;
    position: absolute;
    top: -2px;
    left: 15px;
    color: var(--blanc);
    visibility: hidden;
    top: 0;
  }

  .link:hover, nav .onglets svg:hover{
    transform: scale(1.05);
    color: #2c3e50;
    transition: 0.2s;
  }
  nav .link.active{
    border-bottom: 2px solid;
    color: #2c3e50;
  }
  .frame .header{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
   }
   .card {
      background-color: white;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 90%;
      height: 350px;
      box-shadow: 0px 50px 40px -30px rgba(0, 0, 0, 0.149);
      border-radius: 10px;
      margin-top: 5%;
      margin-right: 20px;
      margin-left: 20px;
      padding-left: 10px;
      padding-right: 10px;
    }

    .card .images{
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }


    .card #im1{
      width: 360px;
      height: 280px;
    }
    .card img{
      width: 500px;
      height: 200px;
    }

  .card div.text .card-header{
      display: flex;
      flex-direction: row;
      align-items: flex-start;
      flex-wrap: wrap;
      font-size: 20px;
      justify-content: space-between;
  }
  .card div.text .card-header .serie{
    color: var(--blueF);
  }
  .card div.text .card-header .prix{
    font-size: 25px;
    margin-right: 20px;
    color: #00B0F0;
  }

  .card div.text{
    margin-top: 2%;
    display: flex;
    width: 60%;
    flex-direction: column;
    align-items: flex-end;
  }
  .card div.text div.description{
    margin-top: 2%;
    width: 70%;
    font-size: 15px;
    color: #6e6e6e;
  }
  .card div.text div.btns{
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 40%;
    justify-content: space-between;
    margin-top: 20px;
    align-items: flex-end;
    margin-right: 20px;
  }
  .card div.text div.btns div.btn{
    display: flex;
    flex-direction: row;
    width: 85%;
    align-items: center;
    justify-content: space-between;
  }
  .card div.text div.btns div.btn h5{
    font-size: 15px;
  }
  .card div.text div.btns div.btn h5.dispo{
    color: rgba(0, 181, 0, 0.829);
  }
  .card div.text div.btns div.btn h5.indispo{
    color: rgba(251, 0, 0, 0.829);
  }
  
  .card div.text div.btns div.btn button{
    cursor: pointer;
    width: 170px;
    height: 60px;
    color: #fff;
    border: 1px solid #00B0F0;
    border-radius: 2px;
    background-color: #00B0F0;
    transition: 0.3s;
  }
  .card div.text div.btns div.btn button:hover{
    color: #fff;
    border-color: #002060;
    background-color: #002060;
    transition: 0.2s;
  }

  .categories{
    padding-top: 5px;
    margin: 0px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 25%;
    margin-right: 5%;
  }
  .categories button{
    border: none;
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0);
    font-size: 20px;
    font-family: 'Source Sans Pro', sans-serif;
    color: #545454;
    transition: 0.2Ns;
  }
  .categories button:hover{
    text-decoration: none;
    font-family: 'Source Sans Pro', sans-serif;
    color: #00B0F0;
    transition: 0.2s;
  }
  .active{
    color: #00B0F0;
    border-bottom: 2px solid #00B0F0;
  }
  img{
    width: 30px;
    height: 30px;
  }
  .cards{
    display: flex;
    flex-direction: column;
    width: 90%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    column-gap: 0px;
    margin: 0% 5%;
    padding: 1% 0%;
    background-color: #fff;
  }
</style>
