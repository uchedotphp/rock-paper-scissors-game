<template>
  <div class="container mx-auto">
    <div class="px-6 h-screen text-white grid grid-cols-1 content-center">
      <ScoreCard />
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
import ScoreCard from "@/components/ScoreCard";
export default {
  name: "StartUpComponent",
  components: {
    ScoreCard,
  },
};
</script>

<style lang="scss" scoped></style>
