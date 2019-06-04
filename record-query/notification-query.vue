<template>
    <div>
        <Row>
            <Col span="24">
                <Card>
                    <div slot="title">
                        <!-- 查询选择 S -->
                        <!-- 日历选择 S -->
                        <Row :gutter="16">
                            <Col span="5">
                                <span>开始时间</span>
                                <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
                            </Col>
                            <Col span="5">
                                <span>结束时间</span>
                                <DatePicker type="date" placeholder="Select date" style="width: 200px"></DatePicker>
                            </Col>
                        </Row>
                        <!-- 日历选择 E -->
                        <br>

                        <div>
                            <Row :gutter="16">
                                <Col span="5">
                                    <span>二级渠道</span>
                                    <Select v-model="model1" style="width:200px">
                                        <Option v-for="item in data1.list" :value="item.subchannelparameter" :key="item.subchannelparameter">{{ item.subchannelparameter }}</Option>
                                    </Select>
                                </Col>
                                <Col span="5">
                                    <span>应用名称</span>
                                    <Select v-model="model1" style="width:200px">
                                        <Option v-for="item in data1.list" :value="item.nameofpreferential" :key="item.nameofpreferential">{{ item.nameofpreferential }}</Option>
                                    </Select>
                                </Col>
                                <Col span="5">
                                    <span>点击ID</span>
                                    <Input placeholder="请输入查询ID" style="width: 200px"/>
                                </Col>
                                <Col span="5">
                                    <span>通知结果</span>
                                    <Select v-model="model1" style="width:200px">
                                        <Option v-for="item in data1.list" :value="item.notictheresults" :key="item.notictheresults">{{ item.notictheresults }}</Option>
                                    </Select>
                                </Col>

                                <Col span="4">
                                    <Button @click="cha()" type="primary">查询</Button>
                                </Col>
                            </Row>
                        </div>
                    </div>
                    <!-- 查询选择 E -->
                    <div>
                        <Table :columns="columns1" :data="data1.list" :loading="data1.list == true ? true : false" :stripe="true"></Table>
                        <!-- <Table border :columns="columns1" :data="data1" :no-data-text="$t('noResult')"></Table> -->
                        <!-- <Page :total="100" show-sizer/> -->
                        <!-- 分页器 S -->
                        <h3>当前共查询{{data1.total}}</h3>
                        <Row>
                            <Page class-name="page" :current="1" :total="data1.list.length" :page-siez="pageSize" @on-change show-sizer show-elevator></Page>
                        </Row>
                        <!-- 分页器 E -->
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
    var data = require("./mock/mock.js");

    export default {
        data() {
            return {
                pageSize: 10,
                columns1: [
                    {
                        title: this.$t("clickId"),
                        key: "clickid"
                    },
                    {
                        title: this.$t("nameOfPreferential"),
                        key: "nameofpreferential"
                    },
                    {
                        title: this.$t("channelId"),
                        key: "channelid",
                        sortable: true
                    },
                    {
                        title: this.$t("channel"),
                        key: "channel"
                    },
                    {
                        title: this.$t("subchannelParameter"),
                        key: "subchannelparameter"
                    },
                    {
                        title: this.$t("noticeTheResults"),
                        key: "notictheresults"
                    },
                    {
                        title: this.$t("clickOnTheTime"),
                        key: "clickonthetime"
                    },
                    {
                        title: this.$t("noticeTheTime"),
                        key: "noticethetime"
                    }
                ],
                model1: "",
                data1: data.default
            };
        },
        methods: {
            cha() {
                alert(111);
            }
        },
        computed: {},

        //狗子函数测试
        created: function() {
            console.log(data.default);
            // console.log(data1.total)
        },
        computed: {}
    };
</script>

<style scoped lang='less'>
.btndiv {
    margin-bottom: 20px;
}
.theme_searchfield {
    width: 150px;
    margin-right: 5%;
}
.page {
    float: right;
    margin-top: 10px;
}
.user_field {
    width: 70%;
}
.mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1000;
}
.addspan {
    display: inline;
    cursor: pointer;
}
</style>