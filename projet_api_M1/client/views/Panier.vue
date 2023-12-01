<template>
  <div id="panier">
    <h2 class="head">Mon Panier</h2>
    <div class="frame">
      
    <div class="frame-articles">
          <div class="articles" v-for="articlePanier in pan.articles">
            <!-- {{findIndex(articlePanier)}} -->
          <largecardpanier :articlePanier="articlePanier" :articles="articles"></largecardpanier>
      </div>
    </div>

    <div class="order">
      <div class="header">
        <h5 class="titre">Détails commande</h5>
        <div class="paiement">
          <div class="list">
            <img class='visa' src="../assets/visa.png" alt="visa">
            <img class='master-card' src="../assets/master-card.png" alt="master-card">
            <img class='paypal' src="../assets/paypal.png" alt="paypal">
          </div>
          <div class="card">
            <div class="info name">
              <h6 class="title">Nom sur la carte</h6>
              <input type="text" class="name">
            </div>
            <div class="info num">
              <h6 class="title">Numéro de la carte</h6>
              <input type="text" class="name">
            </div>
            <div class="join">
                <div class="info exp">
                <h6 class="title">Date d'expiration</h6>
                <input type="text" class="name">
              </div>
              <div class="info cvv">
                <h6 class="title">CVV</h6>
                <input type="text" class="name">
              </div>
            </div>
          </div>
        </div>

        <div class="facture">
          <h6 class="titre">Recapitulatif</h6>
          <div class="infos">
            <h6>Nbr article(s) : 6</h6>
            <h6>|</h6>
            <h6>Total : 5850.99 €</h6>
          </div>
          <button>Valider la commande</button>
        </div>

      </div>
    </div>
  </div>
  </div>
</template>

<script type="module">
const largecardpanier = httpVueLoader('../components/LargeCardPanier.vue')
Vue.component('largecardpanier', largecardpanier);
module.exports = {
  name: 'panier',
  components:{
    largecardpanier,
  },
  props: {
    articles: { type: Array, default: [] },
    pan:{ type: Object, default: [] }
  },
  data () {
    return {
      article:{
        id: -1,
        image: '',
        name: '',
        serie: '',
        ecran: '',
        processeur: '',
        ram: '',
        typeRam: '',
        rom: '',
        typeRom: '',
        os: '',
        price: 0,
        devise: '€',
        state: ''
      }
    }
  },
  async mounted () {
  },
  methods: {
  },
}
</script>

<style scoped>

  div#panier{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  div#panier h2{
    font-size: 50px;
    margin-left: 10%;
    margin-top: 2%;
    color: #002060;
    border-bottom: 5px solid #002060;
    margin-bottom: 1%;
  }

  div.frame .articles{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
  div.frame{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-around;
  }

  div.frame div.frame-articles{
    width: 65%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  div.articles{
    display: flex;
    flex-direction: column;
    width: 80%;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    column-gap: 0px;
    padding: 1% 0%;
    margin-bottom: 10px;
  }
  div.order{
    position: sticky;
    top: 100px;
    width: 30%;
    height: 550px;
    border-radius: 10px;
    background-color: #002060;
    box-shadow: 0px 60px 30px -40px rgba(0, 0, 0, 0.256);
  }

  div.order div.header{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
  div.order div.header h5{
    margin-top: 10px;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #fff;
  }
  div.order div.header div.paiement{
    margin-top: 5%;
    width: 80%;
  }
  div.order div.header div.paiement div.list{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    justify-content: space-between;

  }
  div.order div.header div.paiement div.list img:not(.master-card){
    width: 100px;
    height: 60px;
    padding: 10px 10px;
    border-radius: 10px;
    border: 2px solid #fff;
    transition: 0.2s;
  }
  div.order div.header div.paiement div.list img{
    width: 90px;
    height: 60px;
    padding: 10px 10px;
    border-radius: 10px;
    border: 2px solid #fff;
    transition: 0.2s;
  }
  div.order div.header div.paiement div.list img:hover{
    cursor: pointer;
    border-color: #ff6600;
    transition: 0.2s;
  }
  div.order div.header div.paiement div.card{
    width: 100%;
    margin-bottom: 7%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  div.order div.header div.paiement div.card .info{
    width: 100%;
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  div.order div.header div.paiement div.card .info h6{
    font-size: 17px;
    color: #fff;
  }
  div.order div.header div.paiement div.card .info input{
    outline: none;
    border: none;
    margin-top: 2px;
    background-color: #002d87;
    color: #fff;
    padding: 0px 10px;
    width: 90%;
    height: 30px;
    border-radius: 3px;
    font-size: 15px;
  }

  div.order div.header div.paiement div.card .join{
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
  }
  div.order div.header div.paiement div.card .join .cvv{
    width: 40%;
  }


  div.order div.header div.facture{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  div.order div.header div.facture h6{
    font-size: 20px;
    color: #fff;
    border-bottom: 2px solid #fff;
    margin-bottom: 5%;
  }
  
  div.order div.header div.facture div.infos{
    display: flex;
    width: 70%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  div.order div.header div.facture div.infos h6{
    font-weight: 20px;
    border: none;
    color: #00B0F0;
  }
  div.order div.header div.facture button{
    width: 50%;
    height: 50px;
    color: #fff;
    background-color: #ff6600;
    border: none;
    border-radius: 7px;
    transition: 0.2s;
  }
  div.order div.header div.facture button:hover{
    cursor: pointer;
    color: #fff;
    background-color: #e62e00;
    border: none;
    border-radius: 7px;
    transition: 0.3s;
  }
</style>
