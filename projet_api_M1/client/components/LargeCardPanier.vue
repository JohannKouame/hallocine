<template>
    <div id="largecardpanier" v-for="article in article">
    <div id = "card2" class="card" v-if="article.id == articlePanier">
        <div class="images" >
            <img id="im1" v-bind:src="article.image" alt="PC PORTABLE GAMER">
            <!-- <div :style="{ backgroundImage: 'url(' + article.image + ')' }"> -->
            <!-- </div> -->
            <!-- <img id="im2" class="" src="../assets/articles/im12.jpg" alt="t-shirt"> -->
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
                    <button id="add">Retirer du panier</button>
                </div>

                <!-- <div class="btn">
                    <div class="qte">
                        <span @click.prevent = "minus" class="minus">-</span>
                        <span class="number"> {{quantity}} </span>
                        <span @click.prevent = "plus" class="plus">+</span>
                    </div>
                </div> -->
                    
            </div>
            </div>
        </div>
    </div>
  </template>
  
  <script type="module">
  
  alert(articlePanier)
    module.exports={
        props:{
            articlePanier: 0,
            quantity: 1,
            articles: []
        },
        data: function(){
            return{
                articles: {
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
                },
            }
        },
        methods:{
            plus(){
                quantity += 1;
            },
            minus(){
                    quantity -= 1;
                    if(quantity < 1){
                        this.plus()
                    }
            }
        }
    }
  </script>
  
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300&display=swap');
    :root{
        --blackC: #171717;
        --blueC : #00B0F0;
        --blueF: #002060;
    }

    * {
        font-family: 'Rubik', sans-serif;
    }

    .card {
        background-color: white;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 250px;
        border-radius: 10px;
        /* border: 0.5px solid rgb(206, 206, 206); */
        box-shadow: 0px 30px 40px -30px rgba(0, 0, 0, 0.149);
        margin-top: 1%;
        /* margin-left: 20px; */
        padding-left: 10px;
        padding-right: 10px;
    }

    .card .images{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;;
    }


    .card #im1{
        width: 230px;
        height: 200px;
        margin-right: 20px;
    }


    .card div.text .card-header{
        display: flex;
        /* background-color: aqua; */
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
        font-size: 15px;
        justify-content: space-between;
        /* margin-top: -30px; */
    }
    .card div.text .card-header .serie{
        color: var(--blueF);
    }
    .card div.text .card-header .prix{
        font-size: 20px;
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
        justify-content: flex-end;
        align-items: flex-end;
        margin-top: 20px;
        margin-top: -10px;
        /* background-color: #101b1f; */
    }
    .card div.text div.btns div.btn{
        display: flex;
        flex-direction: row;
        width: 85%;
        align-items: center;
        justify-content: center;
        /* background-color: #6e6e6e; */
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
        width: 130px;
        height: 40px;
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
    .card div.text div.btns div.qte .minus, .card div.text div.btns div.qte .plus{
        cursor: pointer ;
        width: 20%;
        height: 30px ; 
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 25px; 
        border: 1px solid black;
        transition: 0.2s;
    }
    .card div.text div.btns div.qte .minus:hover, .card div.text div.btns div.qte .plus:hover{
        color: #fff;
        background-color: #00B0F0;
        border-color: #00B0F0;
    }
    .card div.text div.btns div.qte .number{
        width: 50%;
        height: 30px ;
        border-radius: 10px; 
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid black;
    }
    .card div.text div.btns div.qte{
        margin-top: 1px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 150px;  
        height: 50px;
        /* background-color: red; */
    }

</style>
  