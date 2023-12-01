<template>

  <div id="login">

    <div class="frameP">
      <div class="header">
        <h2 class="rubrique">CONNEXION</h2>
      </div>
      <div class="body">
        <div class="frame">
            <div class="image">
                <img src="../assets/login.jpg" alt="">
            </div>

            <div class="formulaire">
                <h2 class="title">J'ai déjà un espace client</h2>
                
                <form>
                    <input v-model="infoUser.email" class="email" type="email" name="identifiant" placeholder="Identifiant">
                    <div class="mdp">
                        <input v-model="infoUser.password" type="password" name="email" placeholder="Mot de passe">
                        <!-- <button>Afficher</button> -->
                    </div>
                <div class="under">
                    <div class="souvenir">
                        <input type="checkbox" name="souvenir" id="">
                        <span class="text">Se souvenir de moi</span>
                    </div>
                    <button @click.prevent="checkuser" class='submit' type="submit">M'identifier</button>
                    <div class="create">
                        <span class="text">Vous n'avez pas de compte ?</span>
                        <router-link class="link" id="signin" to='/signin'>
                            Inscription
                        </router-link>
                    </div>
                    <button class="deconnect" @click.prevent="logout">Se déconnecter</button> 
                </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

  <script type="module">   
  module.exports={
    name: 'login',
    data(){
        return{
            infoUser:{
                email : '',
                password : '',
            },
        }
    },
    methods:{
        checkuser(){
            this.$emit("checkuser", this.infoUser)
        },
        logout(){
            this.$emit("logout")
        },
      }
  }
  </script>
  
<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap');
  
  div.frameP{
        margin-top: 2.5%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-family: 'Source Sans Pro', sans-serif;
    }

    div.frameP .header h2{
        border-bottom: 2px solid black;
        font-size: 35px;
        margin-bottom: 13%;
    }
    div.frameP .body{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 50px;
    }


div.frame{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    width: 55%;
    height: 450px;
}
div.frame .image{
    background-color: rgb(2, 107, 255);
    width: 100%;
    height: 450px;
}
div.frame .image img{
    width: 100%;
    height: 100%;
}
div.formulaire{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: 'Source Sans Pro', sans-serif
}
div.formulaire h2{
    margin-top: 15%;
    border-bottom: 2px solid black;
}
div.formulaire form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 100%;
}
div.formulaire form input{
    padding: 10px 20px;
    width: 100%;
    height: 100%;
}

div.formulaire form input.email{
    border: 1px solid rgb(205, 205, 205);
    margin-bottom: 3%;
    height: 60px;
}
div.formulaire form div.mdp{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    border: 1px solid rgb(205, 205, 205);
    outline: none;
}
div.formulaire form div.mdp input:focus, div.formulaire form input{
    border: none;
    outline: none;
}
div.formulaire form div.mdp input{
    border: none;
    outline: none;
}
div.formulaire form div.mdp button{
    cursor: pointer;
    margin-right: 3%;
    padding: 10px 15px;
    color: #00B0F0;
    /*color: #00B0F0;*/
    background-color: rgb(240, 240, 240);
    border: none;
    border-radius: 5px;
    outline: none;
    transition: 0.3s;
}
div.formulaire form div.mdp button:hover{
    color: #2c3e50;
    /*color: #00B0F0;*/
    background-color: rgb(221, 221, 221);
    transition: 0.3s;
}
div.formulaire form div.under{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 2%;
    /*background-color: #3535b5;*/
}
div.formulaire div.under div.souvenir{
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
div.formulaire div.under div.souvenir input{
    background-color: darkgoldenrod;
    width: 5%;
}
div.formulaire div.under div.souvenir span{
    width: 92%;
}

div.formulaire div.under button.submit{
    margin-top: 5%;
    cursor: pointer;
    padding: 10px 15px;
    color: #fff;
    width: 100%;
    height: 50px;
    background-color: #00B0F0;
    border: none;
    border-radius: 3px;
    outline: none;
    transition: 0.3s;
}
div.formulaire div.under button.submit:hover{
    color: #fff;
    background-color: #001f3d;
    transition: 0.3s;
}
div.formulaire div.under .create{
    margin-top: 5%;
}

button.deconnect{
    cursor: pointer;
    border: none;
    border-radius: 3px;
    background-color: #ff6600;
    color: #fff;
    padding: 10px 15px;
    margin-top: 10px;
    margin-bottom: 30px;
    transition: 0.3s;
}
button.deconnect:hover{
    background-color: #001f3d;
    transition: 0.3s;
}

</style>
  