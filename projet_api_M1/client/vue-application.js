const Homeview = window.httpVueLoader('./components/Homeview.vue')
const Homeroot = window.httpVueLoader('./views/Homeroot.vue')

const Panier = window.httpVueLoader('./views/Panier.vue')
const Login = window.httpVueLoader('./views/Login.vue')
const Signin = window.httpVueLoader('./views/Signin.vue')

const routes = [
  { path: '/', component: Homeview},
  { path: '/homeroot', component: Homeroot},

  { path: '/panier', component: Panier},
  { path: '/login', component: Login},
  { path: '/signin', component: Signin},
]

const router = new VueRouter({
  routes
})

var app = new Vue({
  router,
  el: '#app',
  
  data: {
    articles: [],
    isConnect : -1,
    panier: {
      createdAt: null,
      updatedAt: null,
      articles: []
    }
  },

  async mounted () {
    //Recuperation de la liste de tous les pc
    const res = await axios.get('/api/articles')
    this.articles = res.data
    var homeroot = document.getElementById("homeroot")
    homeroot.style.visibility = "hidden"
  },

  methods: {
    async addpanier (articleId) {
      if(this.isConnect == -1){
        alert("Connectez-vous ou inscrivez-vous avant d'ajouter un article dans le panier")
        router.replace('/login')
      }
      else{
        const res = await axios.post('/api/panier/', articleId)
        console.log("articleId")
        if(res.data == 1){
          alert("Article ajouté au panier")
        } 
      }
    },

    async updateArticle (newArticle) {
      await axios.put('/api/article/' + newArticle.id, newArticle)
      const article = this.artcle.image
      article.price = newArticle.priceicles.find(a => a.id === newArticle.id)
      article.name = newArticle.name
      article.description = newArticle.description
      article.image = newArti
    },

    async deletearticle (articleId) {
      await axios.delete('/api/article/'+ articleId).then(async res =>{
        if(res == -1) alert('erreur de suppression')
        else{
          alert('article supprimé')
          document.location.reload()
        }
        
      }).catch(err => {
        console.log(err)
      })

    },

    async addUser (user) {
      const res = await axios.post('/api/user/signin', user)
    },

    async addarticle (article) {
      const res = await axios.post('/api/article', article)
      //On reccharge la page après un ajout pour pouvoir voir les articles
      document.location.reload()
    },

    async checkuser (infoUser) {
      const res  = await axios.post('/api/user/login', infoUser)
      /**
       * Les valeurs possibles que peut retournées la requête "/api/user/login" sont:
       * => 1 si l'utilisateur existe et est l'administrateur (email: root@root | mot de passe : mdproot)
       * => 0 si l'utilisateur existe et n'est pas l'administrateur (utilisateur quelconque)
       * => -1 si l'utilisateur n'existe pas
       */
      if(res.data == -1) alert("Utilisateur inexistant.Vous pouvez vous inscrire")
        
      else if(res.data == 1){
          alert("Utilisateur existant : root connecté")
          this.isConnect = 1
          var home = document.getElementById("home")
          var homeroot = document.getElementById("homeroot")
          var panier = document.getElementById("panier")
          var login = document.getElementById("login")
          login.textContent = 'Log out'
          login.style.backgroundColor = "blue"
          login.style.color = "white"
          /**
           * L'admin n'est pas censé voir les pages suivantes:
           * => home
           * => panier
           * On rend visile la root "homeroot"
           */
          home.style.visibility = "hidden"
          panier.style.visibility = "hidden"
          homeroot.style.visibility = "visible"
          router.replace('/homeroot')
        }

        else if(res.data == 0){
          
          alert("Bienvenu")
          this.isConnect = 1
          var home = document.getElementById("home")
          var homeroot = document.getElementById("homeroot")
          var panier = document.getElementById("panier")
          /**
           * L'utilisateur n'est pas censé voir la page suivante:
           * => homeroot
           * On rend visile la root "homeroot"
           */
          home.style.visibility = "visible"
          panier.style.visibility = "visible"
          homeroot.style.visibility = "hidden"
          var login = document.getElementById("login")
          login.textContent = 'Log out'
          login.style.backgroundColor = "green"
          login.style.color = "white"
          router.replace('/')
        }
      },

      async logout (){
        if(this.isConnect == -1){
          alert("Aucun utilisateur connecté")
        }
        else{
          var home = document.getElementById("home")
          var homeroot = document.getElementById("homeroot")
          var panier = document.getElementById("panier")
          var login = document.getElementById("login")
          alert("Merci et à bientôt !")
          home.style.visibility = "visible"
          panier.style.visibility = "visible"
          homeroot.style.visibility = "hidden"
          login.textContent = 'Log in'
          login.style.backgroundColor = "white"
          login.style.color = "#ff6600"
          router.replace("/")
          this.isConnect == -1
        }
      }
  }
  
})