<template>
  <div
    class="border-4 rounded-lg border-headerOutline p-5 grid grid-cols-2 uppercase"
  >
    <p class="flex items-center font-bold text-xl leading-4">
      rock <br />
      paper <br />
      scissors
    </p>
    <div
      class="bg-white rounded-md justify-self-end text-center px-8 py-3 uppercase"
    >
      <p class="text-scoreText text-sm font-semibold">
        score
      </p>
      <p class="text-darkText text-5xl font-bold leading-none">
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
