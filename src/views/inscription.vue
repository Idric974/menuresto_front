<template>
  <!-- 👉 views Signup 👈-->

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

    <!---------------------------------------------------------------------->
    <div class="formulaire">
      <Form
        class="formSetUp"
        @submit.prevent="handleSubmit"
        v-model="formValues"
      >
        <Input
          name="email"
          validation="required|email"
          type="text"
          placeholder="Votre adresse email"
        />

        <Input
          name="password"
          validation="required"
          type="text"
          placeholder="Votre mot de passe"
        />

        <Input
          name="firstname"
          validation="required"
          type="text"
          placeholder="Votre Prénom"
        />

        <Input name="name" validation="required" placeholder="Votre Nom" />

        <Input class="boutonAppli" type="submit" label="Valider" />
      </Form>
    </div>
    <h3>{{ formValues }}</h3>
  </div>
</template>

<script>
export default {
  name: "pageVue",
  data: () => ({
    formValues: {},
  }),
  methods: {
    handleSubmit() {
      console.log(this.formValues);

      let formValues = this.formValues;

      //⇓⇓ URL de la requête⇓⇓.
      let url = "http://localhost:3000/api/userRoute/inscription";

      const headers = new Headers();
      headers.append("Content-Type", "application/json; charset=utf-8");

      //⇓⇓ Paramètres de la requête⇓⇓.
      const parametresDeRequete = {
        method: "POST",
        body: JSON.stringify(formValues),
        headers: headers,
      };

      console.log(parametresDeRequete);

      fetch(url, parametresDeRequete)
        .then((success) => {
          if (success.status == 201) {
            console.log("=====> user created 👍", success);
            this.$router.push("/");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

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
