<template>
  <div id="app">
    <div class="logo">
      Powered by MenuResto
    </div>

    <div class="nav_menuresto">
      <div>
        <router-link to="accueil"> <p>Accueil</p></router-link>
      </div>
      <div class="pipe">|</div>
      <div>
        <router-link to="connexion"> <p>Connexion</p></router-link>
      </div>
    </div>

    <div class="nav_menuresto_botom">
      <div class="pagesLegale">
        <router-link to="pageLegaleMentions">
          <p>Mentions Légales</p></router-link
        >
      </div>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "app",
  components: {},
};
</script>

<style lang="scss">
#app {
  // width: 100%;

  a {
    font-weight: bold;
    color: black;
    text-decoration: none;

    &.router-link-exact-active {
      color: #52779c;
    }
  }

  .logo {
    width: 100%;
    background-color: black;
    color: white;
    text-align: center;
    font-family: "Dancing Script", cursive;
    font-size: 1.3rem;
    padding-top: 5px;
    padding-bottom: 5px;
  }

  .nav_menuresto {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1.2rem;
    box-shadow: #2c3e50 0px 0px 10px 3px;
    border-radius: 0px 0px 10px 10px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: black;
    align-items: baseline;

    p {
      color: white;
      font-size: 1rem;
    }

    .pipe {
      margin-left: 5px;
      margin-right: 5px;
      color: white;
    }
  }

  .nav_menuresto_botom {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 1.2rem;
    background-color: black;
    box-shadow: #2c3e50 0px 0px 10px 1px;
    padding-top: 10px;
    padding-bottom: 10px;
    position: fixed;
    bottom: 0;

    .pagesLegale p {
      color: white;
      font-size: 1rem;
    }
  }

  .pageVue {
    width: 100%;
    margin-top: 10px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  .pagesLegaleTexte {
    text-align: center;
  }

  .mentions {
    margin-top: 10px;
    text-align: center;
  }
}

.boutonAppli {
  width: 250px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  text-align: center;
  box-shadow: #2c3e50 0px 0px 5px 4px;
  border-radius: 10px;
  font-weight: bolder;
  font-size: 1.1rem;
}

input {
  margin: 10px 10px 10px 10px;
  text-align: center;
  font-size: 1.1rem;
  border-radius: 10px;
  padding: 20px 10px 20px 10px;
}

//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖

//*⛔⛔⛔ 👉 REST CSS 👈 ⛔⛔⛔

h1 {
  font-size: 1.5rem;
}

h2 {
  font-size: 1.3rem;
}

h3 {
  font-size: 1.2rem;
}

h4 {
  font-size: 1.2rem;
}

h5 {
  font-size: 1.1rem;
}

h6 {
  font-size: 1.1rem;
}

p {
  font-size: 1.1rem;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
html,
body,
div,
span,
applet,
object,
iframe,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  // font-size: 100%;
  // font: inherit;
  vertical-align: baseline;
  font-family: "Poppins", sans-serif;
}

/* Réinitialisation du rôle d'affichage HTML5 pour les navigateurs plus anciens */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

body {
  line-height: 1;
}

ol,
ul {
  list-style: none;
}

blockquote,
q {
  quotes: none;
}

blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}

table {
  border-collapse: collapse;
  border-spacing: 0;
}
//*➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖➖
</style>
