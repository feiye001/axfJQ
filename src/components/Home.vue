<template>
<div>
   <div class="hand">
    <div>
      <span>
        <a>物美超市(天园鑫荣店) 三旗百汇...</a>
      </span>
    </div>
    <a>搜索</a>
  </div>
  <div class="title" id="toubu">
    <dl v-for="item in homedatas.data.actInfo[1].act_rows">
      <dt><img :src="item.activity.img"/></dt>
      <dd>{{ item.activity.name }}</dd>
    </dl>
  </div>
  <div class="gduan"></div>
  <div class="main_three">
    <span v-for="item in homedatas.data.actInfo[3].act_rows">
      <img :src="item.activity.img"/>
    </span>
  </div>
  <div class="gduan"></div>
  <div class="main_four">
      <img :src="homedatas.data.actInfo[4].act_rows[0].act_rows[0].chead_detail.img"/>
  </div>
  <div class="main_five">
      <span v-for="item in homedatas.data.actInfo[4].act_rows[1].act_rows">
        <img :src="item.cactivity_detail.img"/>
      </span>
  </div>
  <div class="title two" id="sixData">
    <dl v-for="item in homedatas.data.actInfo[4].act_rows[2].act_rows">
      <dt>
        <img :src="item.cicons_detail.img"/>
      </dt>
      <dd>{{item.cicons_detail.name}}
      </dd>
    </dl>
  </div>
  <div class="main_seven">
      <div>
        <span v-for="item in homedatas.data.actInfo[4].act_rows[3].act_rows">
          <img :src="item.activity.img"/>
        </span>
     </div>
  </div>
  <div class="gduan"></div>


  <div id="mian_eight"v-for="item in homedatas.data.actInfo[5].act_rows">
  
    <div class="main_eight_one">
      <span><a></a>{{item.category_detail.name}}</span>
      <span>更多&nbsp;&nbsp;&nbsp;</span>
    </div>
    <div class="main_eight_two">
      <span><img :src="item.activity.img"/></span>
    </div>
    <div class="main_eight_three">
      <div class="main_out1" v-for="n in item.category_detail.goods">
        <span class="main_in1"><img :src="n.img"/></span>
        <span class="main_in2">{{n.name}}</span>
        <span class="main_in3"><a>精选</a></span>
        <span class="main_in4"><a>{{n.specifics}}</a><br/><a>{{n.market_price}}&nbsp;&nbsp;&nbsp;&nbsp;<i>{{n.partner_price}}</i>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a></span>
        <b class="addcar"></b>
      </div>
    </div>
  
</div>
<div class="gduan"></div>
<div class="gduan"></div>

</div>
</template>

<script>
require("../../static/Home.css")
export default {
  name: 'Home',
  data :function() {
    return {
      homedatas:{}
    }
  },
  mounted:function(){
   this.$http.get("../../static/index.json").then(function(res){
     
      this.homedatas=res.data;
   })
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
