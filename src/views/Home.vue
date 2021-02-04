<template>
  <div class="container">
    <div class="container_layout">
      <div class="content_card">
        <div class="card_body">
          <div class="post_list">
            <div class="touxiang">
              <img src="/images/touxiang.jpg" alt="" />
            </div>
            <div class="body">
              <h2 class="post_title">
                帖子的标题帖子的标题帖子的标题帖子的标题
              </h2>
              <div class="meta_info">
                <span>林大猪</span>
                <span>2021年1月2创建</span>
                <span>nancy</span>
                <span>最后回复于</span>
                <span>19:00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="sider">
        <div class="release">
          <button type="button" class="btn">
            <div class="center">
              <img src="/images/release.png" alt="" class="fabu" />
              <span>发布新帖</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
</script>
<style lang="scss" scoped>
.container {
  max-width: 1180px;
  margin: 0 auto;
  .container_layout {
    flex-wrap: nowrap;
    margin-top: 20px;
    min-height: calc(100vh - 70px - 170px);
  }
  .content_card {
    float: left;
    width: calc(100% - 340px);
    margin: 0 0 20px 0;
    border-radius: 4px;
    margin-bottom: 20px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: 'tnum';
    position: relative;
    background: #fff;
    transition: all 0.3s;
    border-bottom: 1px solid #f7f7f7;
  }
  .card_body {
    border-bottom: 1px solid #f7f7f7;
    display: flex;
    padding: 10px 0;
    align-items: center;
  }
  .post_list {
    display: flex;
    padding: 10px 0;
    align-items: center;
  }
  .touxiang {
    text-align: left;
    margin-left: 25px;
    img {
      vertical-align: middle;
      border-style: none;
      width: 65px;
      height: 65px;
      border: 1px solid #ddd;
      border-radius: 50%;
    }
  }
  .body {
    flex: 1;
    overflow: hidden;
    margin-left: 40px;
    .post_title {
      font-size: 16px;
      line-height: 22px;
      margin-bottom: 5px;
      hyphens: auto;
    }
    .meta_info {
      display: flex;
      justify-content: space-around;
      font-size: 12px;
      line-height: 1.8;
      color: #9b9b9b;
    }
  }
  .sider {
    float: right;
    width: 320px;
    border-radius: 4px;
    margin-bottom: 20px;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5;
    list-style: none;
    font-feature-settings: 'tnum';
    position: relative;
    background: #fff;
    transition: all 0.3s;
    .release {
      padding: 20px;
      zoom: 1;
    }
    .center {
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .btn {
      width: 100%;
      position: relative;
      display: inline-block;
      font-weight: 400;
      font-size: 16px;
      white-space: nowrap;
      text-align: center;
      border: 1px solid transparent;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
      user-select: none;
      touch-action: manipulation;
      height: 44px;
      padding: 0 32px;
      border-radius: 4px;
      color: #fff;
      background-color: #4ca9ff;
      border-color: #4ca9ff;
      text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
      box-shadow: 0 2px 0 rgb(0 0 0 / 5%);
      background: #4ca9ff;
    }
    .fabu {
      width: 20px;
      height: 20px;
      margin-right: 8px;
      display: inline-block;
      color: inherit;
      font-style: normal;
      text-align: center;
    }
  }
}
</style>
