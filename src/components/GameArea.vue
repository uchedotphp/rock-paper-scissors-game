<template>
  <div class="my-16">
    <div class="flex flex-wrap">
      <!-- <div class="bg-blue-600 w-6/12"> -->
      <div class="mx-auto mt-5 mb-5">
        <div
          class="border-gameMobile border-paperGradient rounded-full p-8 bg-gray-400"
        >
          <button>
            <img
              src="./../assets/images/icon-paper.svg"
              alt=""
              srcset=""
              class="h-12"
            />
          </button>
        </div>
      </div>
      <!-- </div> -->
      <!-- <div class="bg-yellow-400 w-6/12"> -->
      <div class="mx-auto mt-5 mb-5">
        <div
          class="border-gameMobile border-scissorsGradientOne rounded-full p-8 bg-gray-400"
        >
          <button>
            <img
              src="./../assets/images/icon-scissors.svg"
              alt=""
              srcset=""
              class="h-12"
            />
          </button>
        </div>
      </div>
      <!-- </div> -->
      <div class="mx-auto mt-5 mb-5">
        <div
          class="border-gameMobile border-rockGradient rounded-full p-8 bg-gray-400"
        >
          <button>
            <img
              src="./../assets/images/icon-rock.svg"
              alt=""
              srcset=""
              class="h-12"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GameAreaComponent",
};
</script>

<style lang="scss" scoped></style>
