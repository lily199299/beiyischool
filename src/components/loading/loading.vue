<template>
  <div>
    <Row class="rowStyle">
      <Col class="demo-spin-col" span="8">
      <Spin fix>
        <Icon type="load-b" size=45 class="demo-spin-icon-load" style="color: rgb(242,90,41);"></Icon>
        <div style="font-size: 20px;color: rgb(242,90,41);">Loading</div>
      </Spin>
      </Col>
    </Row>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" type="text/stylus" rel="stylesheet/stylus">
  .rowStyle
    width:100%
    height:500px
  .demo-spin-icon-load
    animation: ani-demo-spin 1s linear infinite;
  @keyframes ani-demo-spin
    from { transform: rotate(0deg);}
    50%  { transform: rotate(180deg);}
    to   { transform: rotate(360deg);}
  .demo-spin-col
    height: 100px
    position: absolute
    top: 0
    bottom: 0
    right: 0
    left: 0
    margin:auto
</style>
