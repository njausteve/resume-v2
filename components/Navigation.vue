<template>
  <header
    class="bg-white flex flex-wrap items-center px-4 xs:px-6 lg:px-16 py-4 lg:py-6 sm:max-w-screen-sm lg:max-w-screen-lg xl:max-w-screen-xl mx-auto"
  >
    <div class="flex-1 flex justify-between items-center">
      <a href="#" class="text-lg font-mont font-semibold outline-none logo">Stephen Njau</a>
    </div>
    <div
      @click="isOpen = !isOpen"
      :class="isOpen ? 'cancel-icon' : ''"
      class="lg:hidden model-2 transition-all duration-300 flex items-center"
    >
      <div class="menu w-8 relative mx-auto divide-transparent cursor-pointer">
        <div class="bar rounded-lg block h-1 w-8 bg-black my-1" />
        <div class="bar rounded-lg block h-1 w-8 bg-black my-1" />
        <div class="bar rounded-lg block h-1 w-8 bg-black my-1" />
      </div>
    </div>

    <div
      class="hidden lg:flex lg:items-center lg:w-auto w-full transition-all duration-400 ease-in-out"
    >
      <nav>
        <ul class="lg:flex items-center justify-between text-base pt-4 lg:pt-0 text-black">
          <li>
            <a
              class="lg:p-4 pt-3 pb-1 px-0 block border-b-2 transition ease-in-out border-transparent hover:text-gray-700"
              href="#"
            >About</a>
          </li>
          <li>
            <a
              class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-gray-700"
              href="#"
            >Work</a>
          </li>
          <li>
            <a
              class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-gray-700"
              href="#"
            >Blog</a>
          </li>
          <li>
            <a
              class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:bg lg:mb-0 mb-2 hover:text-gray-700"
              href="#"
            >Support</a>
          </li>
        </ul>
      </nav>
      <div class="text-center lg:pl-3">
        <a
          href="#"
          class="pointer-cursor text-white text-xs font-sans rounded-full py-3 px-10 font-medium tracking-widest text-center uppercase no-underline"
          style="background-color: #ff5733; box-shadow: 0 10px 27px 10px rgba(255,87,51,.2);"
        >HIRE ME</a>
      </div>
    </div>
    <transition name="fade">
      <div
        v-if="isOpen"
        class="lg:flex lg:items-center lg:w-auto w-full transition-all duration-400 ease-in-out"
      >
        <nav>
          <ul class="lg:flex items-center justify-between text-base pt-4 lg:pt-0 text-black">
            <li>
              <a
                class="lg:p-4 pt-3 pb-1 px-0 block border-b-2 transition ease-in-out border-transparent hover:text-gray-700 outline-none"
                href="#"
              >About</a>
            </li>
            <li>
              <a
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-gray-700 outline-none"
                href="#"
              >Work</a>
            </li>
            <li>
              <a
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:text-gray-700 outline-none"
                href="#"
              >Blog</a>
            </li>
            <li>
              <a
                class="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:bg lg:mb-0 mb-2 hover:text-gray-700 outline-none"
                href="#"
              >Support</a>
            </li>
          </ul>
        </nav>
        <div class="text-center lg:pl-3">
          <a
            href="#"
            class="pointer-cursor text-white text-xs font-sans rounded-full py-3 px-10 font-medium tracking-widest text-center uppercase no-underline outline-none"
            style="background-color: #ff5733; box-shadow: 0 10px 27px 10px rgba(255,87,51,.2);"
          >HIRE ME</a>
        </div>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false
    }
  }
}
</script>

<style lang="scss">

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to{
  opacity: 0;
}

.model-2 {
  &.cancel-icon {
    .bar {
      &:nth-of-type(1) {
        transform: translateY(10px) rotate(45deg);
        animation: rotateR 0.7s cubic-bezier(0.5, 0.2, 0.2, 1);
      }

      &:nth-of-type(2) {
        opacity: 0;
        animation: fade 0.7s cubic-bezier(0.1, 0.8, 0.1, 1);
      }

      &:nth-of-type(3) {
        transform: translateY(-6px) rotate(-45deg);
        animation: rotateL 0.7s cubic-bezier(0.5, 0.2, 0.2, 1);
      }
    }
  }
}

@keyframes rotateR {
  from {
    transform: translateY(0px) rotate(0);
  }
  to {
    transform: translateY(10px) rotate(45deg);
  }
}

@keyframes rotateL {
  from {
    transform: translateY(0px) rotate(0);
  }
  to {
    transform: translateY(-6px) rotate(-45deg);
  }
}

@keyframes fade {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
