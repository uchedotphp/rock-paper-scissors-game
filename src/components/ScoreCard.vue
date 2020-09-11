<template>
  <div
    class="border-4 rounded-lg border-headerOutline pl-5 pr-3 py-5 md:pl-8 md:pr-6 grid grid-cols-2 uppercase"
  >
    <p
      class="flex items-center font-bold text-xl md:text-5xl md:leading-none leading-4"
    >
      rock <br />
      paper <br />
      scissors
    </p>
    <div
      class="bg-white rounded-md justify-self-end text-center px-8 py-4 md:px-12 uppercase"
    >
      <p class="text-scoreText text-sm md:text-lg font-semibold">
        score
      </p>
      <p class="text-darkText text-5xl font-bold leading-none md:text-6xl">
        12
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScoreCardComponent",
};
</script>

<style lang="scss" scoped></style>
