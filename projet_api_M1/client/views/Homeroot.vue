<template>
    <div id="homeroot">
  
      <!-- <nav>
        <div class="img">
          <img src="../../assets/JK_BlueF.png" alt="">
        </div>
        <div class="onglets">
          <a href="#" class="link active">Acceuil</a>
          <a href="#" class="link">Voir boutique</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-basket3-fill" viewBox="0 0 16 16">
          <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15.5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H.5a.5.5 0 0 1-.5-.5v-1A.5.5 0 0 1 .5 6h1.717L5.07 1.243a.5.5 0 0 1 .686-.172zM2.468 15.426.943 9h14.114l-1.525 6.426a.75.75 0 0 1-.729.574H3.197a.75.75 0 0 1-.73-.574z"/>
        </svg>
        <a href="#" class="link sign"><span>Sign in</span></a>  
      </div>
    </nav> -->
  
    <!-- <firsthomeview></firsthomeview> -->
  
    <div class="frameP">
      <!-- <div class="header"> -->
        <!-- <h2 class="rubrique">PC PORTABLES GAMER - ORDINATEURS PORTABLES GAMING</h2> -->
  
        <!-- <div class="categories">
            <a href="/" class="link-cat active">Tout</a>
            <a href="/" class="link-cat">Dell</a>
            <a href="/" class="link-cat">HP</a>
            <a href="/" class="link-cat">MSI</a>
            <a href="/" class="link-cat">Asus</a>
        </div> -->
        
      <!-- </div> -->
      <div class="frame">
        
        <h2 class="rubrique">PC PORTABLES GAMER - ORDINATEURS PORTABLES GAMING</h2>
        <div class="cards" >
            
                <div id = "card2" class="card" v-for="article in articles">
                    <div class="images">
                        <!-- <h3 class="id">{{article.id_article}}</h3> -->
                        <img id="im1" v-bind:src="article.image" alt="PC PORTABLE GAMER">
                        <!-- <div :style="{ backgroundImage: 'url(' + article.image + ')' }"> -->
                        <!-- </div> -->
                        <!-- <img id="im2" class="" src="../assets/articles/im12.jpg" alt="t-shirt"> -->
                    </div>
                    <div class="text">
                        <div class="card-header">
                            <h4 class="id">ID : {{article.id_article}}</h4>
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
                                <button @click.prevent="deletearticle(article.id_article)" id="add">Retirer du catalogue</button>
                            </div>

                            <!-- <div class="btn">
                                <h5></h5>
                                <button id="add">Ajouter au favoris</button>
                            </div> -->

                        </div>
                    </div>
            </div>
            </div>
            
        <!-- <largecardroot @deletearticle='deletearticle' :article="article"></largecardroot> -->
        <!-- <h2>{{marque.articles.name}}</h2> -->
        <!-- <largecard :article = "marque.articles"></largecard> -->
        
      </div>
      <div class="formulaire">
        <h4 class="title">AJOUTER UN ARTICLE</h4>
        <form>
            <div class="champ">
                <div class="info image">
                    <h6 class="title">Image</h6>
                    <input v-model="article.image" type="text" class="image">
                </div>
                <div class="info name">
                    <h6 class="title">Marque</h6>
                    <input v-model="article.name" type="text" class="name">
                </div>
                <div class="info serie">
                    <h6 class="title">Serie</h6>
                    <input v-model="article.serie" type="text" class="serie">
                </div>
                <div class="info ecran">
                    <h6 class="title">Ecan</h6>
                    <input v-model="article.ecran" type="text" class="ecran">
                </div>
                <div class="info processeur">
                    <h6 class="title">Processeur</h6>
                    <input v-model="article.processeur" type="text" class="processeur">
                </div>
                <h2 class="graphicard">Mémoire Ram</h2>
                <div class="ram-general join">
                    <div class="info Ram">
                        <h6 class="title">Capacité Ram</h6>
                        <input v-model="article.Ram" type="text" class="Ram">
                    </div>
                    <div class="info typeRam">
                        <h6 class="title">Type Ram</h6>
                        <input v-model="article.typeRam" type="text" class="typeRam">
                    </div>
                </div>
                <h2 class="graphicard">Mémoire Rom</h2>
                <div class="rom-general join">
                    <div class="info rom">
                        <h6 class="title">Capacité Rom</h6>
                        <input v-model="article.rom" type="text" class="rom">
                    </div>
                    <div class="info typeRom">
                        <h6 class="title">Type Rom</h6>
                        <input v-model="article.typeRom" type="text" class="typeRom">
                    </div>
                </div>
                <div class="info os">
                    <h6 class="title">Système d'exploitation</h6>
                    <input v-model="article.os" type="text" class="os">
                </div>
                <div class="info code">
                    <h6 class="title">Code</h6>
                    <input v-model="article.code" type="text" class="code">
                </div>
                <h2 class="graphicard">Carte graphique</h2>
                <div class="info graphicCard-general">
                    <div class="info graphName">
                        <h6 class="title">Marque</h6>
                        <select v-model="article.name" name="marque" id="marque">
                            <option value="Asus">Asus</option>
                            <option value="Dell">Dell</option>
                            <option value="Hp">Hp</option>
                            <option value="MSI">MSI</option>
                        </select>
                        <!-- <input v-model="article.graphName" type="text" class="graphName"> -->
                    </div>
                    <div class="info graphSerie">
                        <h6 class="title">Série</h6>
                        <input v-model="article.graphicCardSerie" type="text" class="graphSerie">
                    </div>
                    <div class="info graphCapacity"> 
                        <h6 class="title">Capacité</h6>
                        <input v-model="article.graphicCardCapacity" type="text" class="graphCapacity">
                    </div>
                </div>
                <div class="info price">
                    <h6 class="title">Prix</h6>
                    <input v-model="article.price" type="text" class="price">
                </div>
            </div> 
            <div class="btn">

                <button @click.prevent="addarticle">Ajouter</button>
            </div>
        </form>
      </div>
    </div>
  </div>
  </template>
  <script type= "module">   
  
  module.exports =  {
    name:'homeroot',
    props:{
        articles: []
    },
    data(){
        return{
            article: {
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
                state: 'dispo',
                graphicCardName:'',
                graphicCardSerie:'',
                graphicCardCapacity:'',
            },
        }
    },
    methods:{
        deletearticle(articleId){
            this.$emit("deletearticle", articleId)
        },
        addarticle(){
            this.$emit("addarticle", this.article)
        }
    }
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap');   
  .frameP{
        margin-top: 3%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-around;
        width: 100%;
    }
    div.formulaire{
        position: sticky;
        top: 100px;
        width: 30%;
        height: 600px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 10px;
        box-shadow: 0px 30px 30px -20px rgba(0, 0, 0, 0.315);
        overflow-y: scroll;
    }
    div.formulaire h4{
        width: 70%;
        margin-top: 550px;
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: #002060;
        font-size: 25px;
        border-bottom: 2px solid #002060;
    }
    div.formulaire form{
        width: 85%;
    }
    div.formulaire form div.champ{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
    div.formulaire form div.champ .info{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        margin-bottom: 15px;
    }
    div.formulaire form div.champ .info h6{
        font-size: 17px;
        color: #002060;
    }

    div.formulaire form div.champ .info select{
        width: 40%;
        border-radius: 3px;
        cursor: pointer;
        border: none;
        color:#002060;
        font-size: 15px;
        height: 25px;
        padding-left: 10px;
    }
    div.formulaire form div.champ .info input{
        outline: none;
        border: none;
        margin-top: 2px;
        background-color: rgba(232, 232, 232, 0.642);
        color: #002060;
        padding: 0px 10px;
        width: 100%;
        height: 30px;
        border-radius: 3px;
        font-size: 15px;
  }
    div.formulaire form div.champ .join{
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        justify-content: center;
    }
    div.formulaire form div.champ .join input{
        width: 60%;
    }
    div.formulaire form div.champ h2{
        color: rgb(0, 140, 255);
    }
    div.formulaire form .btn{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
    }
    div.formulaire form button{
    width: 50%;
    height: 50px;
    color: #fff;
    background-color: #ff6600;
    border: none;
    border-radius: 7px;
    transition: 0.2s;
  }
  div.formulaire form button:hover{
    cursor: pointer;
    color: #fff;
    background-color: #e62e00;
    border: none;
    border-radius: 7px;
    transition: 0.3s;
  }
      .frameP h2{
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
    div.frameP div.frame{
        display: flex;
        flex-direction: column;
        width: 55%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
    }
    div.frameP div.frame h2{
        display: flex;
        flex-direction: column;
        width: 90%;
        flex-wrap: wrap;
        align-items: flex-start;
        justify-content: flex-start;
    }
    img{
      width: 20px;
      height: 10px;
    }
    .cards{
      
        display: flex;
        flex-direction: column;
        width: 100%;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        column-gap: 0px;
        padding: 1% 0%;
        margin-bottom: 10px;
    }
      .card {
        background-color: white;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 250px;
        border-radius: 10px;
        box-shadow: 0px 30px 40px -30px rgba(0, 0, 0, 0.149);
        margin-top: 1%;
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
        width: 230px;
        height: 200px;
        margin-right: 20px;
    }
    .card img{
        width: 300px;
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
    footer{
      margin-top: 50px;
      height: 150px;
      background-color: #00B0F0;
    }
  </style>
  