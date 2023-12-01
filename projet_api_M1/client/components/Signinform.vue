<template>
    <div id="signinform">
        <div class="frame">
            <form @submit.prevent="addUser">
                <div class="champ civilite">
                    <div class="label">
                        <label for="civilite">Civilité <span>*</span> </label>
                    </div>
                    <div class="entry choices">
                        <div class="femme">
                            <input v-model="user.civilite" type="radio" name="femme." id="genre"><span>Mme.</span>
                        </div>
                        <div class="homme">
                            <input v-model="user.civilite" type="radio" name="home." id="genre"><span>M.</span>
                        </div>
                    </div>
                </div>

                <div class="champ nom">
                    <div class="label">
                        <label for="nom">Nom <span>*</span> </label>
                    </div>
                    <div class="entry">
                        <input v-model="user.name" type='text' class='input-field' required>
                    </div>
                </div>

                <div class="champ prenom">
                    <div class="label">
                        <label for="prenom">Prénom <span>*</span> </label>
                    </div>
                    <div class="entry">
                        <input v-model="user.surename" type='text' class='input-field' required>
                    </div>
                </div>

                <div class="champ email">
                    <div class="label">
                        <label for="adresseEmail">Adresse email <span>*</span> </label>
                    </div>
                    <div class="entry">
                        <input v-model="user.email" type='email' class='input-field' required>
                    </div>
                </div>

                <div class="champ mdp">
                    <div class="label">
                        <label for="motdDePasse">Mot de passe <span>*</span> </label>
                    </div>
                    <div class="entry">
                        <input v-model="user.password" type='password' class='input-field' required>
                        <h4 class="infoMdp">
                            Votre mot de passe doit être composé au minimum de 
                            10 caractères et contenir au moins une minuscule, 
                            une majuscule, un chiffre et un caractère spécial.
                        </h4>
                    </div>
                </div>

                <div class="champ tel">
                    <div class="label">
                        <label for="telephone">Téléphone <span>*</span> </label>
                    </div>
                    <div class="entry">
                        <input v-model="user.tel" type='text' class='input-field'  required>
                    </div>
                </div>

                <div class="champ pays">
                    <div class="label">
                        <label for="pays">Pays <span>*</span> </label>
                    </div>
                    <div class="entry">
                        <input v-model="user.country" type='text' class='input-field'  required>
                    </div>
                </div>

                <div class="champ codePostale">
                    <div class="label">
                        <label for="codePostale">Code Postale <span>*</span> </label>
                    </div>
                    <div class="entry">
                        <input v-model="user.codePostal" type='text' class='input-field'  required>
                    </div>
                </div>
                
                <div class="champ ville">
                    <div class="label">
                        <label for="ville">Ville <span>*</span> </label>
                    </div>
                    <div class="entry">
                        <input v-model="user.city" type='text' class='input-field'  required>
                    </div>
                </div>
                <div class="buttons">
                    <button type="reset" class="reset">Annuler</button>
                    <button class="submit" type="submit">Valider mon inscription</button>
                </div>
            </form>        
        </div>
    </div>
</template>
  
<script type="module"> 
  module.exports={
    name: 'signinform',
    components: {
    },
    data(){
      return{
        user:{
            name : '',
            surename : '',
            email : '',
            civilite : '',
            password : '',
            tel : '',
            country : '',
            codePostal : '',
            city : '',
        }
      }
    },
    methods:{
        addUser(){
            this.$emit('add-user', this.user)
        }
    }
  }
</script>
  
<style scoped>
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@600&display=swap');

    div.frame{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background-color: #fff;
        border-radius: 10px;
        overflow: hidden;
        font-family: 'Source Sans Pro', sans-serif
    }
    div.frame form{
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    div.frame div.champ{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 70%;
        margin-bottom: 2%;
    }
    div.frame div.champ div.entry h4.infoMdp{
        font-size: 15px;
        color: rgb(95, 95, 95);
    }
    
    div.frame div.champ div.entry{
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 70%;
    }
    div.frame div.champ div.choices{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        background-color: #ff6600;
        width: 15%;
        height: 30px;
    }

    input{
        width: 80%;
    }
    div.frame div.champ div.entry input:not(#genre){
        width: 100%;
        height: 40px;
        padding-left: 10px;
        border: 1px solid rgb(205, 205, 205);
    }
    div.frame div.champ div.entry input:not(#genre), textarea{
        font-size: 100%;
        padding-left: 1%;
        width: 100%;
        height: 40px;
        border: 1px solid rgb(205, 205, 205);
    }
    textarea{
        padding-top: 1%;
        max-width: 100%;
        max-height: 70px;
        font-family: 'Source Sans Pro', sans-serif;
        
    }
    div.frame div.champ div.entry input:not(#genre):focus, textarea:focus{
        outline: none;
    }
    div.frame div.labels{
        margin-top: 5%;
        display: flex;
        width: 20%;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
    }
    div.frame div.champ div.label span{
        color: red;
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
    
    div.frame form div.buttons{
        width: 40%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }

    div.frame form div.buttons button.reset{
        margin-top: 5%;
        cursor: pointer;
        padding: 10px 15px;
        color: #fff;
        width: 150px;
        height: 50px;
        /*color: #00B0F0;*/
        background-color: #ff6600;
        border: none;
        border-radius: 3px;
        outline: none;
        transition: 0.3s;
    }
    div.frame form div.buttons button.reset:hover{
        color: #fff;
        background-color: #001f3d;
        transition: 0.3s;
    }
    div.frame form div.buttons button.submit{
        margin-top: 5%;
        cursor: pointer;
        padding: 10px 15px;
        color: #fff;
        width: 200px;
        height: 50px;
        /*color: #00B0F0;*/
        background-color: #00B0F0;
        border: none;
        border-radius: 3px;
        outline: none;
        transition: 0.3s;
    }
    div.frame form div.buttons button.submit:hover{
        color: #fff;
        background-color: #001f3d;
        transition: 0.3s;
    }
    div.formulaire div.under .create{
        margin-top: 5%;
    }
</style>
  