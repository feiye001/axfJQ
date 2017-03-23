<template>
<div id="mine_h">
<div class="cart_header">
  购物车
</div>
<div class="cart_con">
<div class="cart_info">
    <table>
      <tbody>
        <tr>
          <th>收&ensp;货&ensp;人</th>
          <td>少儿&nbsp;女士</td>
          <td rowspan="3" class="more">修改</td>
        </tr>
        <tr>
          <th>电&emsp;&emsp;话</th>
          <td>15200000000</td>
        </tr>
        <tr>
          <th>收货地址</th>
          <td>北京市昌平区太平庄北街辅路 物美大卖场</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="cart_market">
    <div class="cart_m_cou">
      <div class="mar"><span></span>闪送超市</div>
      <p>￥0起送，22:00前满￥30免运费，22:00后满￥69免运费</p>
      <div class="block">凑单专区</div>
    </div>
    <div class="cart_m_time ca">
      <p>收货时间&nbsp;&nbsp;<span class="option">一小时送达</span><span class="can">可预订</span></p>
    </div>
    <div class="cart_m_remark ca">
      收货备注
      <input type="text" placeholder="可输入100字以内特殊要求内容">
    </div>
  </div>

  <div class="cart_list">
    <ul>
      <li>
        <div class="li_has"></div>
        <img class="li_img lazy" src="http://img01.bqstatic.com/upload/goods/201/602/2309/20160223093221_476028.jpg">
        <div class="li_info">
          <div class="text info">味全每日c橙汁</div>
          <div class="pri info">￥6.5</div>
        </div>
        <div class="mod">
          <span class="reduce"></span>
          <span class="num">1</span><span class="add"></span>
        </div>
      </li>

    </ul>
  </div>

  <div class="cart_sum">
    <div class="li_has"></div>
    全选
    <div class="sum_pri">共：<span>￥13.0</span></div>
    <div class="sum_btn">选好了</div>
  </div>
</div>

  </div>

</template>

<script>
require("../../static/Cart.css")
export default {
  name: 'Cart',
  data :function() {
    return {
     
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
