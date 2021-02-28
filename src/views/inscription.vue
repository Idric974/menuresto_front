<template>
  <!-- 👉 views connexion 👈-->

  <div class="pageVue ">
    <div class="entete">
      <h2>
        Inscription
      </h2>
      <br />
      <p>
        Pour créer votre compte, veuillez compléter le formulaire ci-dessous.
      </p>
    </div>

    <!--✅ 👉 Formulaire de création d'un compte-->
    <div class="formulaire">
      <form class="formSetUp" @submit.prevent="validerInscription">
        <input
          name="email"
          validation="required|email"
          type="text"
          placeholder="Votre adresse email"
          v-model="email"
        />

        <input
          name="password"
          validation="required"
          type="text"
          placeholder="Votre mot de passe"
          v-model="password"
        />

        <input
          name="firstname"
          validation="required"
          type="text"
          placeholder="Votre Prénom"
          v-model="firstname"
        />

        <input
          name="name"
          validation="required"
          placeholder="Votre Nom"
          v-model="name"
        />

        <button class="boutonAppli" type="submit">
          Valider
        </button>
      </form>
    </div>
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
    <!-- <h3>{{ email }}</h3>
    <h3>{{ password }}</h3>
    <h3>{{ firstname }}</h3>
    <h3>{{ name }}</h3> -->
  </div>
</template>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️

<script>
export default {
  name: "pageVue",
  data() {
    return {
      email: "",
      password: "",
      firstname: "",
      name: "",
    };
  },
  methods: {
    validerInscription() {
      //*✅👉 Récupération des informations du formulaire.
      const formValues = {
        email: this.email,
        password: this.password,
        firstname: this.firstname,
        name: this.name,
      };
      console.log(formValues);
      //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

      //*✅👉 URL où poster la requete.
      let url = "http://localhost:3000/api/userRoute/inscription";
      //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

      //*✅👉 headers de la requete.
      const headers = new Headers();
      headers.append("Content-Type", "application/json; charset=utf-8");
      //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

      //*✅👉 Paramètres de la requête
      const parametresDeRequete = {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: headers,
      };
      console.log(parametresDeRequete);
      //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

      //*✅👉 La requête fetch
      fetch(url, parametresDeRequete)
        .then((success) => {
          if (success.status == 201) {
            console.log(
              "✔️✔️✔️ 😃 ➖➖➖➖➖➖ ►  Utilisateur crée 👍",
              success
            );
            this.$router.push("/accueil");
          }
        })
        .catch((error) => {
          console.log(error);
        });
      //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
    },
  },
};
</script>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️

<style lang="scss" scoped>
.formSetUp {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: black 0px 0px 5px 0px;
  border-radius: 10px;
  background-color: rgba(241, 241, 241, 0.8);
  padding-top: 10px;
}

.entete {
  text-align: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
}
</style>
