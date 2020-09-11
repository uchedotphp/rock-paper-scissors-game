<template>
  <div class="container mx-auto">
    <div class="px-6 h-screen text-white grid grid-cols-1 content-center">
      <ScoreCard />
      <p class="bg-black my-24">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione
        distinctio consectetur aperiam quas ipsa similique doloribus corrupti,
        explicabo itaque minima fuga cumque harum adipisci sed laboriosam
        repellat impedit, quod aliquid.
      </p>

      <RulesModal />
    </div>
  </div>
</template>

<script>
import ScoreCard from "@/components/ScoreCard";
import RulesModal from "@/components/RulesModal";
export default {
  name: "StartUpComponent",
  components: {
    ScoreCard,
    RulesModal,
  },
  methods: {
    openRulesModal() {
      this.$alert(
        "<strong>This is <i>HTML</i> string</strong>",
        "HTML String",
        {
          dangerouslyUseHTMLString: true,
        }
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>
