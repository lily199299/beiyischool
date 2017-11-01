<template>
    <div>
      <Modal v-model="showTip" class-name="vertical-center-modal"  :closable="false" :mask-closable="false">
        <div style="width: 100%;font-size: 13px;text-align: center">功能即将开放，敬请期待</div>
        <div slot="footer" style="text-align: center;">
          <span style="flex: 1;text-align:center;background-color: #fff;border: 0;" @click="yesknow">知道了</span>
        </div>
      </Modal>
    </div>
</template>

<script>
    export default {}
</script>

<style scoped>

</style>
