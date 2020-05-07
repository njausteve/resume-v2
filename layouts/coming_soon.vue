<template>
  <div id="csisOb">
    <div class="mainContainer">
      <div class="hRpEGF">
        <div class="gKcPPy">
          <img class="sleeping-cat" src="~/../assets/images/njausteve.png" alt>
        </div>
        <div class="iwpLQK">
          <p>
            <span>This website is under construction</span>
          </p>
          <h2>
            <span>Something Big is Coming. We are Launching soon!</span>
          </h2>
          <p>Be the first to know when we launch</p>
          <div class="elevenstyle__NotifyButton-sc-1ymt0wl-7 cjwvqY">
            <div v-show="showEmailInput" class="ftsYsS field-wrapper">
              <input
                id="user_email"
                v-model="user_email"
                placeholder="Enter email address"
                type="email"
                autocomplete="off"
                required
                class="TextField__Input-sc-1qgjuys-4 fHarcA"
                value
              >
            </div>
            <button
              type="submit"
              class="buttonstyle__ButtonStyle-rnuphx-0 ggHLFe reusecore__button"
            >
              <span class="btn-text">
                <span>
                  Notify Me
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import initSketch from '~/assets/js/particles.js'

export default {
  data () {
    return {
      mountContainerSelector: '#csisOb',
      imagePath: 'https://image.ibb.co/f4nCHS/btcLogo.jpg',
      starsColor: ['#f5d100', '#51cc7f', '#0082f3'],
      backgroundColor: '#f8f9fa',
      showEmailInput: false,
      user_email: null
    }
  },
  mounted () {
    initSketch(this.$data)
  }
}
</script>

<style lang="scss" scoped>
$color-dark-blue: #202124;

* {
  box-sizing: border-box;
}

.njausteve-logo {
  max-width: 150px;
}

.sleeping-cat {
  @media (min-width: 500px) {
    max-width: 480px;
  }
}

a {
  -webkit-text-decoration-skip: objects;
  background-color: transparent;

  &:active,
  &:hover {
    outline-width: 0;
  }
}

img {
  border-style: none;
}

svg:not(:root) {
  overflow: hidden;
}

button {
  font: inherit;
  margin: 0;
  overflow: visible;
  text-transform: none;
}

[type="submit"],
button {
  -webkit-appearance: button;
}

[type="submit"]::-moz-focus-inner,
button::-moz-focus-inner {
  border-style: none;
  padding: 0;
}

[type="submit"]:-moz-focusring,
button:-moz-focusring {
  outline: 1px dotted ButtonText;
}

::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.9;
}

*,
:after,
:before {
  box-sizing: inherit;
}

img {
  margin: 0 0 1.45rem;
  max-width: 100%;
  padding: 0;
}

h2 {
  color: inherit;
  font-weight: 700;
  line-height: 1.1;
  margin: 0 0 1.45rem;
  padding: 0;
  text-rendering: optimizeLegibility;
  font-size: 1.62671rem;
}

p {
  margin: 0 0 1.45rem;
  padding: 0;

  :last-child {
    margin-bottom: 0;
  }
}

.ggHLFe {
  -webkit-box-align: center;
  -webkit-box-pack: center;
  align-items: center;
  background-color: rgb(2, 132, 137);
  border: 0px;
  border-radius: 3px;
  color: rgb(255, 255, 255);
  cursor: pointer;
  display: inline-flex;
  font-family: inherit;
  font-size: 16px;
  font-weight: 500;
  justify-content: center;
  min-height: 48px;
  min-width: 48px;
  padding: 8px 15px;
  text-decoration: none;
  text-transform: capitalize;
  transition: all 0.3s ease 0s;

  span.btn-text {
    padding-left: 4px;
    padding-right: 4px;
  }

  &:focus {
    outline: none;
  }
}

.mainContainer {
  margin: 0px auto;
  max-width: 1200px;
  width: 85%;
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
}

@media (min-width: 601px) {
  .mainContainer {
    width: 90%;
  }
}

@media (min-width: 993px) {
  .mainContainer {
    width: 80%;
  }
}

.qJGGM {
  -webkit-box-align: center;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  position: relative;
}

.fvcUgI {
  margin: 0px 9px;

  a {
    color: rgb(255, 255, 255);
    transition: all 0.15s ease-in-out 0s;

    &:hover {
      color: rgb(52, 68, 241);
    }
  }
}

.fuUQmM {
  padding-top: 40px;
  text-align: center;

  img {
    margin: 0px;
  }
}

@media (max-width: 1600px) {
  .fuUQmM {
    padding-top: 30px;
  }
}

#csisOb {
  -webkit-box-align: center;
  -webkit-box-pack: justify;
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  min-height: 100vh;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 0;
  z-index: 0;
}

.cmlmrJ {
  height: 100%;
  opacity: 0.85;
  position: absolute;
  width: 100%;
}

.gKcPPy {
  -webkit-box-align: center;
  -webkit-box-pack: center;
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  width: 50%;
}

@media (max-width: 1440px) {
  .gKcPPy {
    margin-bottom: 70px;
  }
}

@media (max-width: 1199px) {
  .gKcPPy {
    margin-bottom: 55px;
    margin-top: 0px;
    width: 100%;
  }
}

@media (max-width: 600px) {
  .gKcPPy {
    margin-bottom: 20px;
    width: 100%;
  }
}

.hRpEGF {
  -webkit-box-align: center;
  -webkit-box-pack: center;
  align-items: center;
  display: flex;
  justify-content: center;
  overflow: hidden;
  padding: 60px 0px;
  position: relative;
  width: 100%;
}

@media (max-width: 1199px) {
  .hRpEGF {
    flex-direction: column;
  }
}

@media (max-width: 1099px) {
  .hRpEGF {
    height: 100%;
    min-height: 65vh;
  }
}

.iwpLQK {
  -webkit-box-pack: center;
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 120px;
  width: 50%;

  p span {
    color: $color-dark-blue;
    font-family: "DM Sans";
    font-size: 18px;
    font-weight: 700;
    line-height: 33px;
    padding-left: 70px;
    position: relative;

    &::before {
      border-top: 2px solid rgb(0, 0, 0);
      content: "";
      display: block;
      left: 0px;
      position: absolute;
      top: 12px;
      width: 48px;
    }
  }

  h2 {
    color: $color-dark-blue;
    font-family: "DM Sans";
    font-size: 60px;
    font-weight: 700;
    letter-spacing: -0.5px;
    line-height: 1.35;
    margin-bottom: 30px;
    max-width: 520px;
    text-align: left;
  }
}

@media (max-width: 1199px) {
  .iwpLQK {
    -webkit-box-align: center;
    align-items: center;
    margin-left: 0px;
    width: 100%;
  }
}

@media (max-width: 600px) {
  .iwpLQK p span {
    font-size: 14px;
    padding-left: 50px;
  }
}

@media (max-width: 600px) {
  .iwpLQK p span::before {
    top: 9px;
    width: 36px;
  }
}

@media (max-width: 480px) {
  .iwpLQK p {
    margin-bottom: 10px;
  }
}

@media (max-width: 1440px) {
  .iwpLQK h2 {
    font-size: 48px;
    margin-bottom: 25px;
    max-width: 570px;
  }
}

@media (max-width: 1199px) {
  .iwpLQK h2 {
    font-size: 48px;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .iwpLQK h2 {
    font-size: 30px;
  }
}

@media (max-width: 480px) {
  .iwpLQK h2 {
    font-size: 20px;
    max-width: 100%;
  }
}

.cjwvqY {
  padding-top: 50px;

  button {
    background: transparent;
    color: $color-dark-blue;
    font-family: "DM Sans";
    font-size: 18px;
    font-weight: 700;
    line-height: 33px;
    padding-left: 0px;
    padding-right: 0px;
    position: relative;
    transition: all 0.2s ease-in-out 0s;

    &::before {
      bottom: 0px;
      content: "";
      height: 2px;
      opacity: 0;
      position: absolute;
      transition: all 0.75s ease-in-out 0s;
      width: 0px;
    }

    &::after {
      background-color: rgb(0, 0, 0);
      bottom: 0px;
      content: "";
      height: 2px;
      left: 0px;
      opacity: 0;
      position: absolute;
      transition: all 0.75s ease-in-out 0s;
      width: 0px;
    }

    &:hover {
      &::before,
      &::after {
        opacity: 1;
        width: 100%;
      }
    }

    span.btn-text {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
}

@media (max-width: 1440px) {
  .cjwvqY {
    padding-top: 15px;
  }
}

@media (max-width: 600px) {
  .cjwvqY {
    padding-top: 0px;
  }
}

@media (max-width: 480px) {
  .cjwvqY button {
    font-size: 16px;
  }
}

.cohnFa {
  padding-bottom: 40px;
  position: relative;

  .social_profiles {
    -webkit-box-pack: center;
    justify-content: center;

    .social_profile_item {
      -webkit-box-align: center;
      -webkit-box-pack: center;
      align-items: center;
      background-color: rgb(229, 229, 229);
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      height: 46px;
      justify-content: center;
      transition: all 0.5s ease 0s;
      width: 46px;

      a {
        color: rgb(0, 0, 0);
        font-size: 17px;
      }

      &:hover {
        background-color: rgb(0, 0, 0);

        a {
          color: rgb(255, 255, 255);
        }
      }
    }
  }

  p {
    color: rgb(142, 147, 154);
    font-family: Roboto;
    font-size: 14px;
    line-height: 2.357;
    margin-bottom: 0px;
    margin-top: 15px;
    text-align: center;
  }
}

@media (max-width: 1600px) {
  .cohnFa {
    padding-bottom: 30px;
  }
}

* {
  box-sizing: border-box;
}
input {
  font: inherit;
  margin: 0;
}
input {
  overflow: visible;
}
::-webkit-input-placeholder {
  color: inherit;
  opacity: 0.54;
}
*,
:after,
:before {
  box-sizing: inherit;
}
/*! CSS Used from: Embedded */
.isPYep form .field-wrapper {
  width: 100%;
}

@media (max-width: 600px) {
  .isPYep form .field-wrapper {
    width: 100%;
  }
}

input {
  background-color: transparent;
  border: 2px solid rgb(0, 0, 0);
  height: 48px;
  border-radius: 5px;
  width: 420px;
}

@media (max-width: 1440px) {
  .isPYep form .field-wrapper input {
    width: 310px;
  }
}

@media (max-width: 600px) {
  .isPYep form .field-wrapper input {
    width: 100%;
  }
}

.isPYep form .field-wrapper input:focus {
  outline: none;
}

.ftsYsS {
  position: relative;
}

@media (max-width: 600px) {
  .ftsYsS {
    width: 100%;
  }
}

.fHarcA {
  background-color: transparent;
  border: transparent;
  height: 48px;
  padding-left: 30px;
  padding-right: 30px;
  border: 2px solid rgb(0, 0, 0);
  height: 48px;
  border-radius: 5px;
  width: 380px;
}

@media (max-width: 600px) {
  .fHarcA {
    width: 100%;
  }
}
.fHarcA::-webkit-input-placeholder {
  font-size: 15px;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.87);
}
.fHarcA::placeholder {
  font-size: 15px;
  font-family: Roboto;
  color: rgba(0, 0, 0, 0.87);
}
.fHarcA:focus {
  outline: none;
}

@font-face {
  font-family: "Roboto";
  font-style: italic;
  font-weight: 400;
  src: local("Roboto Italic"), local("Roboto-Italic"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xFIzIXKMnyrYk.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}

@font-face {
  font-family: "Roboto";
  font-style: italic;
  font-weight: 400;
  src: local("Roboto Italic"), local("Roboto-Italic"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xMIzIXKMnyrYk.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

@font-face {
  font-family: "Roboto";
  font-style: italic;
  font-weight: 400;
  src: local("Roboto Italic"), local("Roboto-Italic"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xEIzIXKMnyrYk.woff2)
      format("woff2");
  unicode-range: U+1F00-1FFF;
}

@font-face {
  font-family: "Roboto";
  font-style: italic;
  font-weight: 400;
  src: local("Roboto Italic"), local("Roboto-Italic"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xLIzIXKMnyrYk.woff2)
      format("woff2");
  unicode-range: U+0370-03FF;
}

@font-face {
  font-family: "Roboto";
  font-style: italic;
  font-weight: 400;
  src: local("Roboto Italic"), local("Roboto-Italic"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xHIzIXKMnyrYk.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}

@font-face {
  font-family: "Roboto";
  font-style: italic;
  font-weight: 400;
  src: local("Roboto Italic"), local("Roboto-Italic"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xGIzIXKMnyrYk.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: "Roboto";
  font-style: italic;
  font-weight: 400;
  src: local("Roboto Italic"), local("Roboto-Italic"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOkCnqEu92Fr1Mu51xIIzIXKMny.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  src: local("Roboto Light"), local("Roboto-Light"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fCRc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  src: local("Roboto Light"), local("Roboto-Light"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fABc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  src: local("Roboto Light"), local("Roboto-Light"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fCBc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+1F00-1FFF;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  src: local("Roboto Light"), local("Roboto-Light"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBxc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0370-03FF;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  src: local("Roboto Light"), local("Roboto-Light"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fCxc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  src: local("Roboto Light"), local("Roboto-Light"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fChc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 300;
  src: local("Roboto Light"), local("Roboto-Light"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4AMP6lQ.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: local("Roboto"), local("Roboto-Regular"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu72xKKTU1Kvnz.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: local("Roboto"), local("Roboto-Regular"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu5mxKKTU1Kvnz.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: local("Roboto"), local("Roboto-Regular"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7mxKKTU1Kvnz.woff2)
      format("woff2");
  unicode-range: U+1F00-1FFF;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: local("Roboto"), local("Roboto-Regular"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4WxKKTU1Kvnz.woff2)
      format("woff2");
  unicode-range: U+0370-03FF;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: local("Roboto"), local("Roboto-Regular"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7WxKKTU1Kvnz.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: local("Roboto"), local("Roboto-Regular"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu7GxKKTU1Kvnz.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  src: local("Roboto"), local("Roboto-Regular"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOmCnqEu92Fr1Mu4mxKKTU1Kg.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  src: local("Roboto Medium"), local("Roboto-Medium"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fCRc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  src: local("Roboto Medium"), local("Roboto-Medium"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fABc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  src: local("Roboto Medium"), local("Roboto-Medium"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fCBc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+1F00-1FFF;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  src: local("Roboto Medium"), local("Roboto-Medium"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBxc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0370-03FF;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  src: local("Roboto Medium"), local("Roboto-Medium"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fCxc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  src: local("Roboto Medium"), local("Roboto-Medium"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fChc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 500;
  src: local("Roboto Medium"), local("Roboto-Medium"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmEU9fBBc4AMP6lQ.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  src: local("Roboto Bold"), local("Roboto-Bold"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCRc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F,
    U+FE2E-FE2F;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  src: local("Roboto Bold"), local("Roboto-Bold"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfABc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  src: local("Roboto Bold"), local("Roboto-Bold"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCBc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+1F00-1FFF;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  src: local("Roboto Bold"), local("Roboto-Bold"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBxc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0370-03FF;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  src: local("Roboto Bold"), local("Roboto-Bold"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfCxc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1,
    U+01AF-01B0, U+1EA0-1EF9, U+20AB;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  src: local("Roboto Bold"), local("Roboto-Bold"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfChc4AMP6lbBP.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: "Roboto";
  font-style: normal;
  font-weight: 700;
  src: local("Roboto Bold"), local("Roboto-Bold"),
    url(https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  src: local("DM Sans Regular"), local("DMSans-Regular"),
    url(https://fonts.gstatic.com/s/dmsans/v4/rP2Hp2ywxg089UriCZ2IHTWEBlwu8Q.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 400;
  src: local("DM Sans Regular"), local("DMSans-Regular"),
    url(https://fonts.gstatic.com/s/dmsans/v4/rP2Hp2ywxg089UriCZOIHTWEBlw.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  src: local("DM Sans Medium"), local("DMSans-Medium"),
    url(https://fonts.gstatic.com/s/dmsans/v4/rP2Cp2ywxg089UriAWCrCBamC3YU-CnE6Q.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 500;
  src: local("DM Sans Medium"), local("DMSans-Medium"),
    url(https://fonts.gstatic.com/s/dmsans/v4/rP2Cp2ywxg089UriAWCrCBimC3YU-Ck.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}

@font-face {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  src: local("DM Sans Bold"), local("DMSans-Bold"),
    url(https://fonts.gstatic.com/s/dmsans/v4/rP2Cp2ywxg089UriASitCBamC3YU-CnE6Q.woff2)
      format("woff2");
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB,
    U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}

@font-face {
  font-family: "DM Sans";
  font-style: normal;
  font-weight: 700;
  src: local("DM Sans Bold"), local("DMSans-Bold"),
    url(https://fonts.gstatic.com/s/dmsans/v4/rP2Cp2ywxg089UriASitCBimC3YU-Ck.woff2)
      format("woff2");
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA,
    U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215,
    U+FEFF, U+FFFD;
}
</style>
