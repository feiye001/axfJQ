<template>
<div>
   <div class="maekethand">
      <div><span><a href="">物美超市(天园鑫荣店) 三旗百汇...</a></span></div>
      <a href="">搜索</a>
    </div>

    <div class="main">
      <div class="main_one">
        <ul >
          <li v-for="(item,index) in marketdatas.data.categories"@click="getId($event,index)">
          <span class="classNa"></span>
         {{item.name}}
          </li>
        </ul>
      </div>
      <div class="main_two">
        <div>
          <span>全部分类</span>
          <span>综合排序</span>
        </div>
        <ol id="merList">
            <li v-for="item in marketList.pro">
              <dl>
                <dt><img :src="item.img"/></dt>
                <dd>
                  <span>{{item.name}}</span><br/>
                  <span>精选</span><br/>
                  <span>{{item.specifics}}</span><br/>
                  <span>￥{{item.market_price}}</span>
                  <span></span>
                  <span>2</span>
                  <span class="addcar"></span>
                </dd>
              </dl>
            </li>
        </ol>
      </div>
    </div>


      
</div>
</template>

<script>
require("../../static/Market.css")
export default {
  name: 'Market',
  data :function() {
    return {
          marketdatas:{},
          marketList:{}
    }
  },
  mounted:function(){
      this.$http.get("../../static/market.json").then(function(res){
        this.marketdatas=res.data;
        this.marketList=res.data.data.products[104749];
      })
  },
  methods:{
    getId : function(e,index){
    this.$http.get("../../static/market.json").then(function(res){
      var numList = res.data.data.categories[index].id;
      this.marketList=res.data.data.products[numList];

      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>

