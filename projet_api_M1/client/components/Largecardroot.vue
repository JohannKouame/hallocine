<template>
    <div id = "card2" class="card">
        <div class="images">
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
                    <h5 class="dispo" v-if="article.state == 'dispo'">En stock</h5>
                    <h5 class="indispo" v-else>Indisponible</h5>
                    <button @click.prevent='deleteArticle' id="add">Retirer du catalogue</button>
                </div>

                <div class="btn">
                    <h5></h5>
                    <button id="add">Ajouter au favoris</button>
                </div>

            </div>
        </div>
    </div>
  </template>
  
  <script type='module'>
    module.exports={
        props:{
            article: []
            // article: {
            //     id: -1,
            //     image: '',
            //     name: '',
            //     serie: '',
            //     ecran: '',
            //     processeur: '',
            //     ram: '',
            //     typeRam: '',
            //     rom: '',
            //     typeRom: '',
            //     os: '',
            //     price: 0,
            //     devise: '€',
            //     state: ''
            // },
        },
        date(){
            return{
                currentArticle: {
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
            deleteArticle(){
                this.$emit("deleteArticle", article.id)
            },
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
        width: 90%;
        height: 350px;
        /* border: 1px solid rgb(206, 206, 206); */
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
        /* border-bottom: 1px solid; */
    }


    .card div.text .card-header{
        display: flex;
        /* background-color: aqua; */
        flex-direction: row;
        align-items: flex-start;
        flex-wrap: wrap;
        font-size: 20px;
        justify-content: space-between;
        /* margin-top: -30px; */
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
</style>
  