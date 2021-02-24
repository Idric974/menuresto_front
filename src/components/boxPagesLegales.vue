<template>
  <div class="pageVue">
    <div class="boxPagesLegales">
      <router-link to="pageLegalementions"
        ><div class="boutonAppli">
          Mentions Légales
        </div></router-link
      >
      <router-link to="pageLegaleCgu">
        <div class="boutonAppli">
          Conditions générales d'utilisation
        </div></router-link
      >

      <router-link to="pageLegaleConfidentialite">
        <div class="boutonAppli">
          Politique de confidentialité
        </div></router-link
      >

      <router-link to="pageLegaleCookies">
        <div class="boutonAppli">
          Déclaration des cookies
        </div></router-link
      >

      <br />
      <hr />
    </div>
  </div>
</template>

<script>
export default {
  name: "boxPagesLegales",
};
</script>

<style lang="scss" scoped></style>
