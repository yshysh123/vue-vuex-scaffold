<template>
  <div>
    <div class="skeleton">
      <header></header>
      <div class="sider"></div>
      <div class="skeleton_con">
        <div class="skeleton-head"></div>
        <div class="skeleton-body">
          <div class="skeleton-title"></div>
          <div class="skeleton-content"></div>
        </div>
      </div>
      <div class="skeleton_con">
        <div class="skeleton-head"></div>
        <div class="skeleton-body">
          <div class="skeleton-title"></div>
          <div class="skeleton-content"></div>
        </div>
      </div>
      <div class="skeleton_con">
        <div class="skeleton-head"></div>
        <div class="skeleton-body">
          <div class="skeleton-title"></div>
          <div class="skeleton-content"></div>
        </div>
      </div>
      <div class="skeleton_con">
        <div class="skeleton-head"></div>
        <div class="skeleton-body">
          <div class="skeleton-title"></div>
          <div class="skeleton-content"></div>
        </div>
      </div>
      <div class="skeleton_con">
        <div class="skeleton-head"></div>
        <div class="skeleton-body">
          <div class="skeleton-title"></div>
          <div class="skeleton-content"></div>
        </div>
      </div>
      <!-- <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg==">
      <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTA4MCAyNjEiPjxkZWZzPjxwYXRoIGlkPSJiIiBkPSJNMCAwaDEwODB2MjYwSDB6Ii8+PGZpbHRlciBpZD0iYSIgd2lkdGg9IjIwMCUiIGhlaWdodD0iMjAwJSIgeD0iLTUwJSIgeT0iLTUwJSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94Ij48ZmVPZmZzZXQgZHk9Ii0xIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlQ29sb3JNYXRyaXggaW49InNoYWRvd09mZnNldE91dGVyMSIgdmFsdWVzPSIwIDAgMCAwIDAuOTMzMzMzMzMzIDAgMCAwIDAgMC45MzMzMzMzMzMgMCAwIDAgMCAwLjkzMzMzMzMzMyAwIDAgMCAxIDAiLz48L2ZpbHRlcj48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEpIj48dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz48dXNlIGZpbGw9IiNGRkYiIHhsaW5rOmhyZWY9IiNiIi8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCA0NGg1MzN2NDZIMjMweiIvPjxyZWN0IHdpZHRoPSIxNzIiIGhlaWdodD0iMTcyIiB4PSIzMCIgeT0iNDQiIGZpbGw9IiNGNkY2RjYiIHJ4PSI0Ii8+PHBhdGggZmlsbD0iI0Y2RjZGNiIgZD0iTTIzMCAxMThoMzY5djMwSDIzMHpNMjMwIDE4MmgzMjN2MzBIMjMwek04MTIgMTE1aDIzOHYzOUg4MTJ6TTgwOCAxODRoMjQydjMwSDgwOHpNOTE3IDQ4aDEzM3YzN0g5MTd6Ii8+PC9nPjwvc3ZnPg=="> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'skeleton',
}
</script>

<style scoped lang="less" type="text/css">
.skeleton {
  padding: 80px 0 0 220px;
  position: relative;
  header {
    position: fixed;
    z-index: 2000;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    min-width: 800px;
    height: 60px;
    font-size: 22px;
    line-height: 60px;
    color: #fff;
    background: #393939;
  }
  .sider {
    position: fixed;
    z-index: 2000;
    top: 60px;
    bottom: 0;
    left: 0;
    height: 100%;
    width: 200px;
    display: block;
    background: #393939;
  }
  .skeleton_con {
    position: fixed;
    top: 70px;
    left: 220px;
    overflow: hidden;
    width: calc(100% - 220px);
    .skeleton-head,
    .skeleton-title,
    .skeleton-content {
      background: -webkit-gradient(
        linear,
        left top,
        right top,
        color-stop(25%, #f2f2f2),
        color-stop(37%, #e6e6e6),
        color-stop(63%, #f2f2f2)
      );
      background: -webkit-linear-gradient(
        left,
        #f2f2f2 25%,
        #e6e6e6 37%,
        #f2f2f2 63%
      );
      background: linear-gradient(90deg, #f2f2f2 25%, #e6e6e6 37%, #f2f2f2 63%);
      -webkit-animation: ant-skeleton-loading 1.4s ease infinite;
      animation: ant-skeleton-loading 1.4s ease infinite;
      background-size: 400% 100%;
    }
    @-webkit-keyframes ant-skeleton-loading {
      0% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }
    @keyframes ant-skeleton-loading {
      0% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0 50%;
      }
    }

    .skeleton-head {
      width: 40px;
      height: 40px;
      float: left;
      border-radius: 50%;
    }
    .skeleton-body {
      margin-left: 50px;
    }
    .skeleton-title {
      width: calc(100% - 30px);
      height: 60px;
    }
    .skeleton-content {
      width: calc(100% - 300px);
      height: 30px;
      margin-top: 10px;
    }
  }
  .skeleton_con:nth-of-type(2) {
    position: fixed;
    top: 200px;
    left: 220px;
    overflow: hidden;
    width: calc(100% - 220px);
  }
  .skeleton_con:nth-of-type(3) {
    position: fixed;
    top: 330px;
    left: 220px;
    overflow: hidden;
    width: calc(100% - 220px);
  }
  .skeleton_con:nth-of-type(4) {
    position: fixed;
    top: 460px;
    left: 220px;
    overflow: hidden;
    width: calc(100% - 220px);
  }
  .skeleton_con:nth-of-type(5) {
    position: fixed;
    top: 590px;
    left: 220px;
    overflow: hidden;
    width: calc(100% - 220px);
  }
  // img:nth-of-type(1) {
  //   position: fixed;
  //   top: 70px;
  //   left: 220px;
  //   width: calc(100% - 220px);
  // }
  // img:nth-of-type(2) {
  //   position: fixed;
  //   top: 370px;
  //   left: 220px;
  //   width: calc(100% - 220px);
  // }
}
</style>
