<template>
  <div class="mx-auto md:mx-0 md:flex md:justify-end">
    <button
      @click="openRulesModal = true"
      type="button"
      class="bg-transparent border-2 border-gray-500 px-8 py-2 rounded-md uppercase"
    >
      rules
    </button>
    <el-button :plain="true" @click="open">Show message</el-button>

    <!-- <el-dialog
      class="h-full"
      :visible.sync="openRulesModal"
      center
      fullscreen
      custom-class="md:bg-transparent"
      :show-close="show"
    >
      <div
        class="grid grid-cols-1 container mx-auto py-10 md:bg-white md:w-7/12 md:flex md:mt-56 md:rounded-lg"
      >
        <h1 class="uppercase font-bold mx-auto text-darkText text-3xl">
          rules
        </h1>
        <img
          class="mx-auto my-24"
          src="./../assets/images/image-rules.svg"
          alt="rules of rock, paper, scissors"
          srcset=""
        />
        <span slot="footer" class="dialog-footer mx-auto my-10">
          <button
            type="button"
            class="text-3xl text-gray-600"
            @click="openRulesModal = false"
          >
            X
          </button>
        </span>
      </div>
    </el-dialog> -->

    <el-dialog
      title="Warning"
      :visible.sync="openRulesModal"
      width="30%"
      center
    >
      <span
        >It should be noted that the content will not be aligned in center by
        default</span
      >
      <span slot="footer" class="dialog-footer">
        <el-button @click="openRulesModal = false">Cancel</el-button>
        <el-button type="primary" @click="openRulesModal = false"
          >Confirm</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "RulesModalComponent",
  data() {
    return {
      show: false,
      openRulesModal: false,
    };
  },
  methods: {
    open() {
      this.$message("This is a message.");
    },

    openVn() {
      const h = this.$createElement;
      this.$message({
        message: h("p", null, [
          h("span", null, "Message can be "),
          h("i", { style: "color: teal" }, "VNode"),
        ]),
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
