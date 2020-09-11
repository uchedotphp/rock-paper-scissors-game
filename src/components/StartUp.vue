<template>
  <div class="container mx-auto">
    <div
      class="px-6 md:px-64 h-screen text-white grid grid-cols-1 content-center"
    >
      <ScoreCard />

      <GameArea />

      <RulesModal />
    </div>
  </div>
</template>

<script>
import ScoreCard from "@/components/ScoreCard";
import GameArea from "@/components/GameArea";
import RulesModal from "@/components/RulesModal";
export default {
  name: "StartUpComponent",
  components: {
    ScoreCard,
    GameArea,
    RulesModal,
  },
};
</script>

<style lang="scss" scoped></style>
