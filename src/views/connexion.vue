<template>
  <!-- 👉 views inscription idric👈-->

  <div class="connexion">
    <div class="login">
      <h1>Me connecter</h1>
      <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

      <!--✅ 👉 Formulaire de connexion-->
      <form @submit.prevent="validerConnexion">
        <input
          type="email"
          name="email"
          placeholder="Votre adresse mail"
          validation="required|email"
          v-model="email"
        />

        <input
          type="password"
          name="password"
          placeholder="Votre mot de passe"
          validation="required"
          v-model="password"
        />

        <button class="boutonAppli" type="submit">
          Me connecter
        </button>
      </form>
    </div>
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->

    <!--✅ 👉 Bouton vers formulaire création d’un compte-->
    <div class="creerCompte">
      <router-link to="/inscription">
        <button class="boutonAppli">
          Créer mon compte
        </button></router-link
      >
    </div>
    <!--➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖-->
    <!-- <h3>{{ email }}</h3>
    <h3>{{ password }}</h3> -->
  </div>
</template>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️

<script>
export default {
  name: "connexion",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async validerConnexion() {
      //*✅👉 Récupération des informations du formulaire.
      const formValues = {
        email: this.email,
        password: this.password,
      };
      console.log("✔️✔️✔️ 😃➖➖► Information de connexion", formValues);
      //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

      //*✅👉 URL où poster la requete.
      let url = "http://localhost:3000/api/userRoute/connexion";

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
      console.log(
        "✔️✔️✔️ 😃➖➖► Paramètres de la requête",
        parametresDeRequete
      );
      //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

      //*✅👉 La requête fetch
      // const success = await fetch(url, parametresDeRequete);
      // if (success.status == 200) {
      //   console.log("✔️✔️✔️ 😃➖➖► Utilisateur connecté 👍", success);
      //   const result = await success.json();
      //   console.log(result);
      //   window.localStorage.setItem("menuresto", JSON.stringify(result));
      //   this.$emit("authenticated", true);
      //   this.$router.push({ name: "accueil" });
      // }

      fetch(url, parametresDeRequete)
        .then(function(response) {
          if (response.status !== 200) {
            console.log(
              "On dirait qu'il y a eu un problème. Code d'état: " +
                response.status
            );
            return;
          }

          //*✅👉 Examinez le texte de la réponse
          response.json().then(function(data) {
            console.log(data);
          });
        })
        .catch(function(err) {
          console.log("Fetch Error :-S", err);
        });

      //*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
    },
  },
};
</script>

//*✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️➖➖✂️

<style scoped lang="scss">
.connexion {
  width: 95%;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: black 0px 0px 5px 0px;
  border-radius: 10px;
  background-color: rgba(241, 241, 241, 0.8);

  .login {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
  }

  @media screen and (min-width: 742px) and (max-width: 991px) {
    width: 80%;
  }

  @media screen and (min-width: 739px) {
    width: 50%;
  }
}

.creerCompte {
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
}
</style>
