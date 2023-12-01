<template>
    <div class="principalFrame">

        <div class="mainDisplay">
            
            <div class="content">
                
                <div class="main">
                    <h3 class="main-title">
                        Besoin d'un nouveau <br>PC PORTABLE GAMER ?
                    </h3>
                    <div class="underline-main-title"></div>
                </div>

                <div class="second">
                    <h4 class="second-title">
                        Jetez un oeil à nos tous nouveaux <br>PC PORTABLE GAMER
                    </h4>
                    <div class="underline-second-title"></div>
                    <button class="newOffre">Nouvelles offres</button>
                </div>

            </div>
        </div>

        <div class="secondFrame">

            <div class="left-super">
                <div class="left">
                    <h4 class="main-title">
                        Les nouveautés
                    </h4>
                    <img src="../../assets/laptops.png" alt="">
                </div>
                <div class="rigth">
                    <div class="text">
                        <h5 class="text">
                            <span>Profitez des meilleures offres !</span>
                            <br>
                            <br>
                            Laptop dernières générations et meilleures 
                            capacités sur le marché.
                        </h5>
                    </div>
                    <div class="btn">
                        <button>Voir plus</button>
                    </div>
                </div>
            </div>

            <div class="rigth">

                <div class="up">
                    <img src="../../assets/suscribe_man.png" alt="" class="image">
                    <div class="head">
                        <h4 class="main-title">
                            Rejoins la team Premium 
                        </h4>
                        <button class="showSolde">Souscrire au compte premium</button>
                    </div>
                </div>
                
                <div class="down">
                    <div class="head">
                        <h4 class="main-title">
                            Plus de 50% de réduction
                        </h4>
                        <button class="showSolde">Voir les produits en solde</button>
                    </div>
                    <img src="../../assets/surprised_man.png" alt="" class="image">
                </div>
            </div>

        </div>
    </div>

</template>


<script>

</script>


<style scoped>
    *{
        font-family: 'Raleway Bold', sans-serif;
        scroll-behavior: smooth;
    }

    /*>>>>>PREMIERE FRAME*/
    div.principalFrame{
        width: 100%;
        height: 800px;
        display: flex;
        flex-direction: column;
        /*background-color: #6E36A3;*/
    }
    div.mainDisplay{
        margin-bottom: 1.5%;
        width: 100%;
        height: 50%;
        background-image : url("../assets/main_home_display_bg.jpg");
        background-position: right, left;
        background-size: 80% 170%;
        background-repeat: no-repeat;
        background-color: #6E36A3;
    }
    div.mainDisplay div.content{
        display: flex;
        flex-direction: column;
        padding-top: 1%;
        padding-left: 5%;
    }
    div.mainDisplay div.content div.main{
        margin-top: 2%;
        display: flex;
        flex-direction: column;
    }
    div.mainDisplay div.content div.main h3.main-title{
        color: #fff;
        font-size: 35px;
    }
    div.mainDisplay div.content div.main div.underline-main-title{
        margin-bottom: 1.5%;
        margin-top: 0.5%;
        background: linear-gradient(90deg, #ff6600 10%, 
                                        #ED7D31 35%,
                                        #7030A0 100%);
        height: 10px;
        width:25%;
    }
    div.mainDisplay div.content div.second h4.second-title{
        color: #fff;
        font-size: 25px;
    }
    div.mainDisplay div.content div.second div.underline-second-title{
        margin-bottom: 1.5%;
        margin-top: 0.5%;
        background: linear-gradient(90deg, #ff6600 10%, 
                                        #ED7D31 35%,
                                        #7030A0 100%);
        height: 7px;
        width: 15%;
    }
    div.mainDisplay div.content div.second button.newOffre{
        cursor: pointer;
        margin-top: 20px;
        padding: 20px 35px;
        font-size: 15px;
        border: none;
        border: 2px solid #fff;
        background-color: rgba(255, 255, 255, 0);
        color: #fff;
        transition: 0.4s;
    }
    div.mainDisplay div.content div.second button.newOffre:hover{
        border-color: #ff6600;
        background-color: #ff6600;
        color: #fff;
        transition: 0.3s;
        transform: scale(1.05);
    }


    /*>>>>>DEUXIEME FRAME*/
    div.secondFrame{
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    div.secondFrame div.left-super{
        display: flex;
        flex-direction: row;
        height: 100%;
        width: 49%;
        justify-content: space-between;
        background: linear-gradient(120deg, #0062ff 10%, 
                                        #31edb5 35%,
                                        #f6ee00 100%);
    }

    div.secondFrame div.left-super div.left{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 50%;
    }
    div.secondFrame div.left-super div.left h4{
        margin-top: 5%;
        font-size: 25px;
        margin-left: 20px;
        color: #fff;
        margin-bottom: 7%;
        
    }
    div.secondFrame div.left-super div.left img{
        width: 100%;
        height: 70%;
        margin-left: 20px;
        filter: drop-shadow(5px 5px 3px rgba(0, 0, 0, 0.42));
        
    }
    div.secondFrame div.left-super div.rigth{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 40%;  
        margin-right: 15px;
    }
    div.secondFrame div.left-super div.rigth h5{
        color: #fff;
        font-size: 20px;
    }
    div.secondFrame div.left-super div.rigth h5 span{
        font-size: 35px;
    }

    div.secondFrame div.left-super div.rigth div.btn{
        width: 100%;
        height: 30%;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }
    div.secondFrame div.left-super div.rigth div.btn button{
        cursor: pointer;
        width: 50%;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgba(0, 0, 0, 0);
        border : 2px solid #fff;
        color: #fff;
        font-size: 15px;
        transition: 0.4s;
        margin-bottom: 50px;
        margin-right: 20px;
    }
    div.secondFrame div.left-super div.rigth div.btn button:hover{
        color: #fff;
        border-color: #0062ff;
        background-color: #0062ff;
        transform: scale(1.02);
        transition: 0.3s;
    }


    div.secondFrame div.rigth{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 50%;
        align-items: flex-end;
        justify-content: space-between;
    }
    div.secondFrame div.rigth div.up{
        height: 48%; 
        width: 99%; 
        background-color: rgb(0, 255, 89);
        /*border-radius: 10px;*/
    }
    div.secondFrame div.rigth div.down{
        display: flex;
        justify-content: space-between;
        height: 48%;
        width: 99%; 
        background: linear-gradient(60deg, #00ccff 35%, 
                                        #00ccff 5%,
                                        #0095ff 100%);
        overflow: hidden;
    }
    div.secondFrame div.rigth div.down div.head{
        margin-top: 2.5%;
        display: flex;
        flex-direction: column;
    }
    div.secondFrame div.rigth div.down div.head .main-title{
        color: #fff;
        margin-top: 2%;
        font-size: 25px;
        margin-left: 15px;
        margin-bottom: 4%;
    }
    div.secondFrame div.rigth div.down div.head .showSolde{
        cursor: pointer;
        color: #fff;
        margin-top: 2%;
        border: 2px solid;
        border-color: #fff;
        background-color: #ffffff00;
        font-size: 15px;
        padding: 20px 0px;
        margin-left: 15px;
        width: 60%;
        transition: 0.3s;
    }
    div.secondFrame div.rigth div.down div.head .showSolde:hover{
        color: #fff;
        border-color: #ff6600;
        background-color: #ff6600;
        transform: scale(1.02);
        transition: 0.3s;
    }
    div.secondFrame div.rigth div.down .image{
        margin-top: -9%;
        width: 50%;
        height: 160%;
        filter: drop-shadow(5px 5px 3px rgba(34, 34, 34, 0.245));
    }




    div.secondFrame div.rigth div.up{
        height: 48%; 
        width: 99%; 
        background-color: rgb(0, 255, 89);
        /*border-radius: 10px;*/
    }
    div.secondFrame div.rigth div.up{
        display: flex;
        justify-content: space-between;
        height: 48%;
        width: 99%; 
        /*background-color: rgb(0, 119, 255);*/
        background: linear-gradient(60deg, #f3e116 35%, 
                                        #fe6a00 5%,
                                        #ffff00 100%);
        /*border-radius: 20px;*/
        overflow: hidden;
    }
    div.secondFrame div.rigth div.up div.head{
        margin-top: 2.5%;
        width: 70%;
        display: flex;
        flex-direction: column;
        margin-right: 15px;
        align-items: flex-end;
    }
    div.secondFrame div.rigth div.up div.head .main-title{
        color: #fff;
        margin-top: 2%;
        font-size: 25px;
        margin-bottom: 4%;
    }
    div.secondFrame div.rigth div.up div.head .showSolde{
        cursor: pointer;
        color: #fff;
        margin-top: 2%;
        border: 2px solid;
        border-color: #fff;
        background-color: #ffffff00;
        font-size: 15px;
        padding: 20px 0px;
        width: 65%;
        /*border-radius: 10px;*/
        transition: 0.3s;
    }
    div.secondFrame div.rigth div.up div.head .showSolde:hover{
        color: #fff;
        border-color: #0095ff;
        background-color: #0095ff;
        transform: scale(1.02);
        transition: 0.3s;
    }
    div.secondFrame div.rigth div.up .image{
        margin-top: -2%;
        transform: scaleX(-1);
        width: 50%;
        height: 250%;
        filter: drop-shadow(5px 5px 3px rgba(34, 34, 34, 0.245));
    }
</style>