<template>
  <div class="connexion">
    <div class="login">
      <h1>Me connecter</h1>
      <input
        type="email"
        name="email"
        v-model="input.email"
        placeholder="Votre adresse mail"
      />
      <input
        type="password"
        name="password"
        v-model="input.password"
        placeholder="Votre mot de passe"
      />
      <button class="boutonAppli" type="button" v-on:click="login()">
        Connexion
      </button>
    </div>

    <div class="creerCompte">
      <router-link to="/inscription">
        <button class="boutonAppli">
          Créer mon compte
        </button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      input: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    async login() {
      //⇓⇓ URL de la requête⇓⇓.
      let url = "http://localhost:3000/api/user/connexion";

      const headers = new Headers();
      headers.append("Content-Type", "application/json; charset=utf-8");

      //⇓⇓ Paramètres de la requête⇓⇓.
      const parametresDeRequete = {
        method: "POST",
        body: JSON.stringify(this.input),
        headers: headers,
      };

      const success = await fetch(url, parametresDeRequete);

      if (success.status == 200) {
        console.log("=====> user logged 👍", success);
        const result = await success.json();
        console.log(result);
        window.localStorage.setItem("menuresto", JSON.stringify(result));
        this.$emit("authenticated", true);
        this.$router.push({ name: "monCompte" });
      }
    },
  },
};
</script>

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
