<template>
  <div class="page-container">
    <fm-breadcrumb :items="breadItems" />
    <el-main class="page-content">
      <!--查询条件-->
      <div class="choose-multiple">
        <!--选择项目或输入姓名/身份证-->
        <div class="select-search">
          <!--选择查询的项目-->
          <div class="select">
            <span class="site-name">项目名称</span>
            <el-select
              v-model="site"
              filterable
              placeholder="全部项目"
              size="mini"
            >
              <el-option
                v-for="(site, index) in sites"
                :key="index"
                :label="site.getName()"
                :value="site.getOid()"
              >
              </el-option>
            </el-select>
          </div>
          <!--输入要查询的姓名或身份证-->
          <div class="search">
            <el-input
              placeholder="姓名/身份证"
              v-model="nameOrId"
              size="mini"
              clearable
            >
              <el-button slot="append" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </div>
        <!--工种选择-->
        <fm-radio-list
          :title="professionList.title"
          :items="professionList.items"
          :value="professionSelected"
          @change="professionChanged"
        />
        <!--年龄选择-->
        <fm-age-select-range @selected="ageSelected" />
        <!--其他选择-->
        <div class="other-selector">
          <fm-radio-three
            :title="teamLeader.title"
            :items="teamLeader.items"
            :value="teamLeaderSelected"
            @change="teamLeaderChanged"
          />
          <fm-radio-three
            :title="sex.title"
            :items="sex.items"
            :value="sexSelected"
            @change="sexChanged"
          />
          <fm-radio-three
            :title="nation.title"
            :items="nation.items"
            :value="nationSelected"
            @change="nationChanged"
          />
        </div>
      </div>
      <!--查询出的数据表格-->
      <el-table :data="tableData" stripe height="calc(100% - 216px)">
        <el-table-column label="头像">
          <template slot-scope="scope">
            <el-image
              style="width: 40px; height: 40px"
              :src="scope.row.avatar"
              fit="fill"
            ></el-image>
          </template>
        </el-table-column>
        <el-table-column prop="name" label="姓名"> </el-table-column>
        <el-table-column prop="sex" label="性别"> </el-table-column>
        <el-table-column prop="nation" label="民族"> </el-table-column>
        <el-table-column prop="birthday" label="出生日期"> </el-table-column>
        <el-table-column prop="idCard" label="身份证" min-width="170px"> </el-table-column>
        <el-table-column prop="site" label="项目"> </el-table-column>
        <el-table-column prop="company" label="单位"> </el-table-column>
        <el-table-column prop="team" label="班组"> </el-table-column>
        <el-table-column prop="profession" label="工种"> </el-table-column>
        <el-table-column prop="isTeamLeader" label="班组长"> </el-table-column>
      </el-table>
    </el-main>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { AppModule } from "@/store/modules/app";
import FmBreadcrumb from "@/components/FmBreadcrumb/index.vue";
import FmRadioList from "@/components/FmRadioList/index.vue";
import FmRangeSelect from "@/components/FmRangeSelect/index.vue";
import FmAgeSelectRange from "@/components/FmAgeSelectRange/index.vue";
import FmRadioThree from "@/components/FmRadioThree/index.vue";

@Component({
  components: {
    FmRadioThree,
    FmAgeSelectRange,
    FmRangeSelect,
    FmBreadcrumb,
    FmRadioList
  }
})
export default class extends Vue {
  breadItems = [{ name: "劳务管理", path: "" }, { name: "人员查询", path: "" }];

  /*当前公司的所有工地列表*/
  get sites() {
    this.site = "";
    return AppModule.siteList;
  }

  /*选择的项目(即工地)*/
  site = "";
  /*当前输入的姓名或身份证*/
  nameOrId = "";
  /*当前选中的工种*/
  professionSelected = { name: "不限", id: "0" };
  professionChanged(val) {
    console.log(val, " professionChanged");
    this.professionSelected = val;
  }
  /*工种列表*/
  professionList = {
    title: "工种",
    items: [
      { name: "不限", id: "0" },
      { name: "土方", id: "1" },
      { name: "砖工", id: "2" },
      { name: "混凝土", id: "3" },
      { name: "抹灰", id: "4" },
      { name: "防水", id: "5" },
      { name: "钢筋", id: "6" },
      { name: "模板", id: "7" },
      { name: "架子", id: "8" },
      { name: "焊工", id: "9" },
      { name: "小工", id: "10" },
      { name: "塔吊", id: "11" },
      { name: "施工电梯", id: "12" },
      { name: "信号工", id: "13" },
      { name: "物料提升", id: "14" },
      { name: "龙门吊", id: "15" },
      { name: "管理人员", id: "16" },
      { name: "防护与栏杆", id: "17" },
      { name: "架子", id: "18" },
      { name: "保温", id: "19" },
      { name: "小工", id: "20" },
      { name: "门窗百叶", id: "21" },
      { name: "地基与基础工程", id: "22" },
      { name: "建筑装饰装修", id: "23" },
      { name: "建筑幕墙", id: "24" },
      { name: "钢结构工程", id: "25" },
      { name: "电梯安装", id: "26" },
      { name: "消防设施", id: "27" },
      { name: "特种专业工程", id: "28" },
      { name: "起重设备安装", id: "29" }
    ]
  };

  /*当前选中的年龄段*/
  ageSelected(val) {
    console.log(val, " hello ==========");
  }
  /*班组长选择*/
  teamLeader = {
    title: "班组长:",
    items: [
      { name: "不限", id: "0", value: 0 },
      { name: "是", id: "1", value: 1 },
      { name: "否", id: "2", value: 2 }
    ]
  };
  teamLeaderSelected = { name: "不限", id: "0", value: 0 };
  teamLeaderChanged(val) {
    console.log(val, " teamLeaderChanged ");
    this.teamLeaderSelected = val;
  }
  /*性别选择*/
  sex = {
    title: "性别:",
    items: [
      { name: "不限", id: "0", value: 0 },
      { name: "男", id: "1", value: 1 },
      { name: "女", id: "2", value: 2 }
    ]
  };
  sexSelected = { name: "不限", id: "0", value: 0 };
  sexChanged(val) {
    console.log(val, " sexChanged ");
    this.sexSelected = val;
  }
  /*民族选择*/
  nation = {
    title: "民族:",
    items: [
      { name: "不限", id: "0", value: 0 },
      { name: "汉族", id: "1", value: 1 },
      { name: "少数民族", id: "2", value: 2 }
    ]
  };
  nationSelected = { name: "不限", id: "0", value: 0 };
  nationChanged(val) {
    console.log(val, " nationChanged ");
    this.nationSelected = val;
  }

  tableData = [
    {
      avatar: "",
      name: "吴小仔",
      sex: "男",
      nation: "彝族",
      birthday: "1986-05-22",
      idCard: "123345857467******",
      site: "所属项目工地",
      company: "五冶2公司",
      team: "水泥工",
      profession: "水泥施工",
      isTeamLeader: "是"
    },
    {
      avatar: "",
      name: "吴小仔",
      sex: "男",
      nation: "彝族",
      birthday: "1986-05-22",
      idCard: "123345857467******",
      site: "所属项目工地",
      company: "五冶2公司",
      team: "水泥工",
      profession: "水泥施工",
      isTeamLeader: "是"
    },
    {
      avatar: "",
      name: "吴小仔",
      sex: "男",
      nation: "彝族",
      birthday: "1986-05-22",
      idCard: "123345857467******",
      site: "所属项目工地",
      company: "五冶2公司",
      team: "水泥工",
      profession: "水泥施工",
      isTeamLeader: "是"
    },
    {
      avatar: "",
      name: "吴小仔",
      sex: "男",
      nation: "彝族",
      birthday: "1986-05-22",
      idCard: "123345857467******",
      site: "所属项目工地",
      company: "五冶2公司",
      team: "水泥工",
      profession: "水泥施工",
      isTeamLeader: "是"
    },
    {
      avatar: "",
      name: "吴小仔",
      sex: "男",
      nation: "彝族",
      birthday: "1986-05-22",
      idCard: "123345857467******",
      site: "所属项目工地",
      company: "五冶2公司",
      team: "水泥工",
      profession: "水泥施工",
      isTeamLeader: "是"
    },
    {
      avatar: "",
      name: "吴小仔",
      sex: "男",
      nation: "彝族",
      birthday: "1986-05-22",
      idCard: "123345857467******",
      site: "所属项目工地",
      company: "五冶2公司",
      team: "水泥工",
      profession: "水泥施工",
      isTeamLeader: "是"
    },
    {
      avatar: "",
      name: "吴小仔",
      sex: "男",
      nation: "彝族",
      birthday: "1986-05-22",
      idCard: "123345857467******",
      site: "所属项目工地",
      company: "五冶2公司",
      team: "水泥工",
      profession: "水泥施工",
      isTeamLeader: "是"
    },
    {
      avatar: "",
      name: "吴小仔",
      sex: "男",
      nation: "彝族",
      birthday: "1986-05-22",
      idCard: "123345857467******",
      site: "所属项目工地",
      company: "五冶2公司",
      team: "水泥工",
      profession: "水泥施工",
      isTeamLeader: "是"
    },
    {
      avatar: "",
      name: "吴小仔",
      sex: "男",
      nation: "彝族",
      birthday: "1986-05-22",
      idCard: "123345857467******",
      site: "所属项目工地",
      company: "五冶2公司",
      team: "水泥工",
      profession: "水泥施工",
      isTeamLeader: "是"
    },
    {
      avatar: "",
      name: "吴小仔",
      sex: "男",
      nation: "彝族",
      birthday: "1986-05-22",
      idCard: "123345857467******",
      site: "所属项目工地",
      company: "五冶2公司",
      team: "水泥工",
      profession: "水泥施工",
      isTeamLeader: "是"
    }
  ];
}
</script>

<style scoped lang="stylus">
.choose-multiple
  width 70%
  margin-bottom 12px
.select-search
  display flex
  justify-content space-between
  margin-bottom 12px
  .site-name
    display inline-block
    padding 0 32px 0 12px
    font-weight 400
.other-selector
  padding-left 12px
  display flex
  justify-content space-between
  align-items center
</style>
