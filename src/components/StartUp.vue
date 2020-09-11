<template>
  <div class="container mx-auto">
    <div class="px-6 h-screen text-white grid grid-cols-1 content-center">
      <div
        class="border-4 rounded-lg border-headerOutline p-5 grid grid-cols-2 uppercase"
      >
        <p class="flex items-center">
          rock <br />
          paper <br />
          scissors
        </p>
        <div
          class="bg-white rounded-md justify-self-end text-center px-8 py-2 uppercase"
        >
          <p class="text-scoreText text-sm font-semibold">
            score
          </p>
          <p class="text-darkText text-4xl font-bold">
            12
          </p>
        </div>
      </div>

      <p class="bg-black">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
        distinctio consectetur aperiam quas ipsa similique doloribus corrupti,
        explicabo itaque minima fuga cumque harum adipisci sed laboriosam
        repellat impedit, quod aliquid.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "StartUpComponent",
};
</script>

<style lang="scss" scoped></style>
