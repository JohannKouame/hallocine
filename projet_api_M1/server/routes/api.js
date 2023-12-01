const mysql = require('mysql')
const express = require('express')
var userIn = 0
var articleIn = 0

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "PasswordMySQL1!",
  database: "db_jokeys",
})

//TEST DE CONNEXION  A LA BASE DE DONNEES
connection.connect((err, result)=>{
  if(err) throw err;
  console.log("Bien connecté: " + typeof(articles))
})

//TEST REQUETE <<SELECT>> A LA BASE DE DONNEES
connection.query("SELECT * FROM users", function (err, result, fields){
  if (err) throw err;
  console.log(result);
})

 const router = express.Router()
 //require : importer les fichiers (ici les articles)
 const articles = require('../data/articles.js')
 
 class Panier {
   constructor () {
     this.createdAt = new Date()
     this.updatedAt = new Date()
     //un article sera représenter par son id dans le tableau de panier
     this.articles = []
   }
 }
 
 /*
  * Dans ce fichier, vous trouverez des exemples de requêtes GET, POST, PUT et DELETE
  * Ces requêtes concernent l'ajout ou la suppression d'articles sur le site
  * Votre objectif est, en apprenant des exemples de ce fichier, de créer l'API pour le panier de l'utilisateur
  *
  * Notre site ne contient pas d'authentification, ce qui n'est pas DU TOUT recommandé.
  * De même, les informations sont réinitialisées à chaque redémarrage du serveur, car nous n'avons pas de système de base de données pour faire persister les données
  */
 
 /*
  * Notre mécanisme de sauvegarde des paniers des utilisateurs sera de simplement leur attribuer un panier grâce à req.session, sans authentification particulière
  */
 
 /*
 * Création d'un panier lors d'une première connexion d'un utilisateur
 * ou encore lors d'une nouvelle utilisation du router
 */
 router.use((req, res, next) => {
   // l'utilisateur n'est pas reconnu, lui attribuer un panier dans req.session
   if (typeof req.session.panier === 'undefined') {
     req.session.panier = new Panier()
   }
   next()
 })
 
 /*
  * Cette route doit retourner le panier de l'utilisateur, grâce à req.session
  */
 router.get('/panier', (req, res) => {
   res.json(req.session.panier.articles)
 })
 
 /*
  * Cette route doit ajouter un article au panier, puis retourner le panier modifié à l'utilisateur
  * Le body doit contenir l'id de l'article, ainsi que la quantité voulue
  */
 router.post('/panier', (req, res) => {
   const id = req.body.id
  console.log("id>>>>>"+id)
  req.session.panier.articles.push(id)
  console.log("req.body")
  console.log(req.body)
  res.json(1)
 })
 
       
 
 /*
  * Cette route doit permettre de confirmer un panier, en recevant le nom et prénom de l'utilisateur
  * Le panier est ensuite supprimé grâce à req.session.destroy()
  */
 router.post('/panier/pay', (req, res) => {
   let surname = req.body.surname
   let name = req.body.name
   if(req.session.panier.articles.length != 0){
     req.session.destroy()
     res.status(500).json({ message : 'Merci' + surname + ' ' + name + ' pour votre achat' })
   }
   else{
     res.status(400).json({ message : 'bad request' })
   }
 })
 
 /*
  * Cette route doit permettre de changer la quantité d'un article dans le panier
  * Le body doit contenir la quantité voulue
  */
 router.put('/panier/:articleId', (req, res) => {
   let parametre = parseInt(req.params.articleId)
     if(parametre <= 0){
         res.status(400).json({ message : 'invalid index' })
     }
     else{
       const quantity = parseInt(req.body.quantity)
       if(quantity < 0){
         res.status(400).json({ message : 'Invalide quantity' })
       }
       else{
         let isFound = -1 
         for (let i = 0; i < req.session.panier.articles.length; i++) {
           if(req.session.panier.articles[i].id == parametre){
             req.session.panier.articles[i].quantity = req.body.quantity
             res.json(req.session.panier.articles)
             isFound = 0
             return
           }
         }
         if(isFound == -1){
           res.status(400).json({ message : 'bad request' })
         }
       }
     }
 })
 /*
  * Cette route doit supprimer un article dans le panier
  */
 router.delete('/panier/:articleId', (req, res) => {
   let parametre = parseInt(req.params.articleId)
   if(parametre <= 0){
     res.status(400).json({ message : 'bad request' })
   }
   else{
     const index = -1
     index = articles.findIndex(a => a.id === parametre)
     if(index == -1){
       res.status(400).json({ message: 'bad request' })
     }
     else{
       req.session.panier.articles.splice(i, 1)
       req.session.destroy()
       res.json(req.session.panier.articles)
     }
   }
 })

 router.post('/user/login', (req, res) => {
    let email = req.body.email
    let mdp = req.body.password
    connection.query('SELECT * FROM users WHERE email = ? AND password = ? ',[[[email]],[[mdp]]], 
    function (err, user) {
      if (err) throw err
        if(user.length == 0) res.json(-1)
        else{
          if(user[0].name == 'root') res.json(1)  //S'il s'agit du route
          else res.json(0)                       //Sinon s'il s'agit d'un user
        }
      });
  })
 
 
 /**
  * Cette route envoie l'intégralité des articles du site
  */
 router.get('/user', (req, res) => {
      connection.query("SELECT * FROM users", function (err, result, fields) {
        if (err) throw err;
        console.log(result)
        res.json(result)
      })
 })

 router.get('/articles', (req, res) => {
      connection.query("SELECT * FROM articles", function (err, result, fields) {
        if (err) throw err;
        console.log(result)
        res.json(result)
      });
 })


 router.post('/user/signin', (req, res) =>{
  const name = req.body.name
  const surename = req.body.surename
  const email = req.body.email
  const civilite = req.body.civilite
  const password = req.body.password
  const tel = req.body.tel
  const country = req.body.country
  const codePostal = req.body.codePostal
  const city = req.body.city
  var user = [{
    name: name,
    surename: surename,
    email: email,
    civilite: civilite,
    password: password,
    tel: tel,
    country: country,
    codePostal: codePostal,
    city: city,
  }]
  connection.query("INSERT INTO users"+
  "(name, surename, email, civilite, password,"+ 
   " tel, country, codePostal, city) VALUES ?", 
  [user.map(user => [user.name, user.surename, 
    user.email, user.civilite, user.password, 
    user.tel, user.country, user.codePostal, 
    user.city])], 
    function (err, result) {
      if (err) throw err;
      res.json(result)
  });

 })

 router.post('/article', (req, res) => {
   const image = req.body.image
   const name = req.body.name
   const serie = req.body.serie
   const ecran = req.body.ecran
   const processeur = req.body.processeur
   const ram = req.body.ram
   const typeRam = req.body.typeRam
   const rom = req.body.rom
   const typeRom = req.body.typeRom
   const os = req.body.os
   const price = req.body.price
   const graphicCardName = req.body.graphicCardName
   const graphicCardSerie = req.body.graphicCardSerie
   const graphicCardCapacity = req.body.graphicCardCapacity
   const devise = req.body.devise
   const state = req.body.state
   const code = req.body.code
   
   // vérification de la validité des données d'entrée
   if(typeof ecran === 'number' && isNaN(ecran) &&
     isInteger(ecran)){
     if(typeof price === 'number' && isNaN(price) &&
       isInteger(price)){
       if (
          typeof image !== 'string' || image === '' ||
          typeof name !== 'string' || name === '' ||
          typeof serie !== 'string' || serie === '' ||
          typeof processeur !== 'string' || processeur === '' ||
          typeof ram !== 'string' || ram === '' ||
          typeof typeRam !== 'string' || typeRam === '' ||
          typeof rom !== 'string' || rom === '' ||
          typeof typeRom !== 'string' || typeRom === '' ||
          typeof os !== 'string' || os === '' ||
          typeof serie !== 'string' || serie === '' ||
          typeof devise !== 'string' || devise === '' ||
          typeof graphicCardName !== 'string' || graphicCardName === '' ||
          typeof graphicSerie !== 'string' || graphicSerie === '' ||
          typeof graphicCardCapacity !== 'string' || graphicCardCapacity === '' ||
          typeof code !== 'string' ||
          typeof devise !== 'string' || devise === ''){
            res.status(400).json({ message: 'bad request' })
            return
       }
     }
   }
   var article = [{
     image : image,
     name : name,
     serie : serie,
     ecran : ecran,
     processeur : processeur,
     ram : ram,
     typeRam : typeRam,
     rom : rom,
     typeRom : typeRom,
     os : os,
     price : price,
     devise : devise,
     state: state,
     graphicCardName: graphicCardName,
     graphicCardSerie: graphicCardSerie,
     graphicCardCapacity: graphicCardCapacity
    }]
    articleIn = 1
    isArticleIn(article)
    if(articleIn == 1){
      connection.query(
      "INSERT INTO articles (image, name, serie, ecran," + 
      "processeur, ram, typeRam, rom, typeRom, os, price," +
      "devise, state, graphicCardName, graphicCardSerie, graphicCardCapacity) VALUES ?", 
      [article.map(article => [article.image, article.name, 
        article.serie, article.ecran, article.processeur, 
        article.ram, article.typeRam, article.rom, 
        article.typeRom, article.os, article.price, 
        article.devise, article.state, article.graphicCardName, 
        article.graphicCardSerie, article.graphicCardCapacity])], 
        function (err, result) {
        if (err) throw err;
        res.json(result)
        articleIn = 0
      });
    }
    else res.status(400).json({ message: 'bad request: article already in' })
 })
/*
* Cette fonction fait en sorte de valider que l'article demandé par l'utilisateur
* est valide. Elle est appliquée aux routes:
* - GET /article/:articleId
* - PUT /article/:articleId
* - DELETE /article/:articleId
* Comme ces trois routes ont un comportement similaire, on regroupe leurs
* fonctionnalités communes dans un middleware
*/
function isUserIn(user){
  connection.query("SELECT * FROM users", function (err, result, fields) {
    if (err) throw err;
    JSON.parse(JSON.stringify(result)).forEach(u => {
      if(u.tel == user.tel || u.mail == user.mail){
        userIn = -1
      }
      else userIn = 1
    })
  })
}
function isArticleIn(article){
  connection.query("SELECT * FROM articles", function (err, result, fields) {
    if (err) throw err;
    JSON.parse(JSON.stringify(result)).forEach(a => {
      if(a.name == article.name && 
        a.serie == article.serie &&
        a.graphicCardName == article.graphicCardName &&
        a.graphicCardSerie == article.graphicCardSerie &&
        a.graphicCardCapacity == article.graphicCardCapacity){
          articleIn = -1
          console.log("fsffdfsdfdsf :" + a.name)
      }
      else {articleIn = 1
      console.log("user not in: "+articleIn)}
    })
  })
}

 function parseArticle (req, res, next) {
   const articleId = parseInt(req.params.articleId)
   // si articleId n'est pas un nombre (NaN = Not A Number), alors on s'arrête
   if (isNaN(articleId)) {
     res.status(400).json({ message: 'articleId should be a number' })
     return
    }
   // on affecte req.articleId pour l'exploiter dans toutes les routes qui en ont besoin
   req.articleId = articleId
   
   const article = articles.find(a => a.id === req.articleId)
   if (!article) {
     res.status(404).json({ message: 'article ' + articleId + ' does not exist' })
     return
    }
    // on affecte req.article pour l'exploiter dans toutes les routes qui en ont besoin
    req.article = article
    next()
  }
  
  //En fonction d'une entrée d'articleId
  router.route('/article/:articleId')
  /**
  * Cette route envoie un article particulier
   */
  .get(parseArticle, (req, res) => {
    // req.article existe grâce au middleware parseArticle
    res.json(req.article)
  })


  
  router.delete('/article/:articleId', (req, res) => {
    var parametre = parseInt(req.params.articleId)
    connection.query('DELETE FROM articles WHERE id_article = ?', [[parametre]], 
    function (err, response) {
      if (err) throw err
      else{
        if(response.affectedRows) res.json(1)
        else res.json(-1)
      }
    })
  })
  
  module.exports = router
