
<template>
    <div class="maintenance-recommend">
        <header class='header'>
            <div class='top flex'>
                <div class='title flex'>
                    <span class='font-15' v-text="data.car.brand+'-'+data.car.models">长安福特-经典福克斯</span>
                    <i class='iconfont icon-arrowR font-10'></i>
                </div>
                <div class='feedback' @click='feedback()'>
                    <i class='iconfont icon-woshenpideline_ font-16'></i>
                    <span class='font-8'>反馈</span>
                </div>
            </div>
            <div class='nav'>
                <div class='cycle' @click='gopage(1)'>
                    <i class='iconfont icon-rililine_ font-13'></i>
                    <span class='font-14'>保养周期</span>
                </div>
                <div class='config' @click='gopage(2)'>
                    <i class='iconfont icon-kepai-peizhi font-13'></i>
                    <span class='font-14'>车辆配置</span>
                </div>
            </div>
            <div class='search flex'>
                <div class='tip'>
                    <i class='iconfont icon-kepai-gongli font-13'></i>
                    <span class='color-gray5 font-14'>当前里程数(KM)</span>
                </div>
                <div class='int flex'>
                    <input class='color-gray5 font-14' type="text" placeholder='请输入'>
                    <span class='font-13'>确认</span>
                </div>
            </div>
        </header>
        <div class='main'>
            <section class='recommend'>
                <header class='flex'>
                    <div class='title font-18 color-gray2'>机油推荐</div>
                    <div class='type font-12 color-gray9'>(机油加注量:
                        <span>3L</span>
                        )</div>
                </header>
                <div class='content flex'>
                    <div class='item'>
                        <img
                            :src="data.engineOil.lowerImage" alt="">
                        <p class='font-12 color-gray2' v-text='data.engineOil.lower'>超凡喜力5W-40全合成汽车润滑油</p>
                    </div>
                    <div class='item'>
                        <img
                            :src="data.engineOil.highImage" alt="">
                        <p class='font-12 color-gray2'><span class='chiji font-10 flex'>最佳</span>{{data.engineOil.lower}}</p>
                    </div>
                </div>
            </section>
            <section class='other-commehernd'>
                <header class='flex'>
                    <div class='title font-18 color-gray2'>其他保养项目推荐</div>
                </header>
                <div class='content'>
                    <div class='item ' v-for="item in data.other">
                        <div class='preview flex'>
                            <div class='left'>
                                <p class='font-14 color-gray2' v-text='item.name'>火花塞</p>
                                <p class='describe font-12 color-gray9'>超凡喜力5W-40全合成汽车润滑油</p>
                            </div>
                            <i class='iconfont icon-arrowB font-12'></i>
                        </div>
                    </div>
                    <div class='item '>
                        <div class='preview flex'>
                            <div class='left'>
                                <p class='font-14 color-gray2'>火花塞</p>
                                <p class='describe font-12 color-gray9'>超凡喜力5W-40全合成汽车润滑油</p>
                            </div>
                            <i class='iconfont icon-arrowB font-12'></i>
                        </div>
                        <div class='detail'>

                        </div>
                    </div>
                    <div class='item '>
                        <div class='preview flex last-no-bd'>
                            <div class='left'>
                                <p class='font-14 color-gray2'>火花塞</p>
                                <p class='describe font-12 color-gray9'>超凡喜力5W-40全合成汽车润滑油</p>
                            </div>
                            <i class='iconfont icon-arrowB font-12'></i>
                        </div>
                        <div class='detail'>
                            <div class='detail-item'>
                                <div class='brand'>
                                    <img src="" alt="">
                                    <span class='font-13 color-gray5'>电装</span>
                                </div>
                                <div class='brand-item'>
                                    <p class='flex'>
                                        <span class='font-14 color-gray2'>专攻以铂金</span>
                                        <span class='font-12 color-gray9'>K20R-U</span>
                                    </p>
                                </div>
                            </div>
                            <div class='detail-item'>
                                <div class='brand'>

                                    <img src="" alt="">
                                    <span class='font-13 color-gray5'>电装</span>
                                </div>
                                <div class='brand-item '>
                                    <p class='flex'>
                                        <span class='font-14 color-gray2'>专攻以铂金</span>
                                        <span class='font-12 color-gray9'>K20R-U</span>
                                    </p>

                                </div>
                                <div class='brand-item '>
                                    <p class='flex'>
                                        <span class='font-14 color-gray2'>专攻以铂金</span>
                                        <span class='font-12 color-gray9'>K20R-U</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    </div>
</template>

<script>

    export default {
        name: 'maintenance-recommend',
        data() {
            return {
                isActive:false,
                recommendData:'',
                data:''
            }
        },
        created() {
            //页面创建完成后
            //自定义标题
            this.page.setTitle("保养推荐");
            var self=this
            var data={
                "success": true,
                "result_code": 0,
                "message": "请求成功",
                "response": {
                    "levelId": "CSV0314A0001",
                    "car": {
                        "brand": "大众",
                        "models": "POLO"
                    },
                    "engineOil": {
                        "filling": "3.2",
                        "lower": "壳牌喜力HX6 10W-40",
                        "high": "壳牌喜力HX7 5W-40",
                        "lowerImage": "https://keepup-part.vchangyi.com/images\\engineOil/HX6-10W-40-4L.jpg",
                        "highImage": "https://keepup-part.vchangyi.com/images\\engineOil/HX7-5W-40-4L.jpg"
                    },
                    "other": {
                        "wiper": {
                            "name": "雨刮",
                            "text": "",
                            "data": {
                                "main": [
                                    {
                                        "brandName": "海拉(HELLA)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/海拉(HELLA).jpg",
                                        "child": [
                                            {
                                                "size": "21",
                                                "interface": "U型"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "博世(BOSCH)-神翼(双支装)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/博世(BOSCH).jpg",
                                        "child": [
                                            {
                                                "size": "21",
                                                "interface": "U型"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "博世(BOSCH)-神翼(单支装)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/博世(BOSCH).jpg",
                                        "child": [
                                            {
                                                "size": "21",
                                                "interface": "U型"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "博世(BOSCH)-风翼简版无骨(单支装)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/博世(BOSCH).jpg",
                                        "child": [
                                            {
                                                "size": "21",
                                                "interface": "U型"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "博世(BOSCH)-火翼(单支装)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/博世(BOSCH).jpg",
                                        "child": [
                                            {
                                                "size": "21",
                                                "interface": "U型"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "法雷奥(VALEO)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/法雷奥(VALEO).jpg",
                                        "child": [
                                            {
                                                "size": "21",
                                                "interface": "U型"
                                            }
                                        ]
                                    }
                                ],
                                "vice": [
                                    {
                                        "brandName": "海拉(HELLA)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/海拉(HELLA).jpg",
                                        "child": [
                                            {
                                                "size": "19",
                                                "interface": "U型"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "博世(BOSCH)-神翼(双支装)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/博世(BOSCH).jpg",
                                        "child": [
                                            {
                                                "size": "19"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "博世(BOSCH)-神翼(单支装)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/博世(BOSCH).jpg",
                                        "child": [
                                            {
                                                "size": "19"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "博世(BOSCH)-风翼简版无骨(单支装)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/博世(BOSCH).jpg",
                                        "child": [
                                            {
                                                "size": "19"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "博世(BOSCH)-火翼(单支装)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/博世(BOSCH).jpg",
                                        "child": [
                                            {
                                                "size": "19"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "法雷奥(VALEO)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/法雷奥(VALEO).jpg",
                                        "child": [
                                            {
                                                "size": "18"
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        "sparkplug": {
                            "name": "火花塞",
                            "text": "30000KM或24个月/次",
                            "data": [
                                {
                                    "brandName": "电装(DENSO)",
                                    "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/电装(DENSO).jpg",
                                    "child": [
                                        {
                                            "first": "普通镍合金",
                                            "second": "K20R-U"
                                        },
                                        {
                                            "first": "TT双针白金",
                                            "second": "PK20TT"
                                        },
                                        {
                                            "first": "铱金",
                                            "second": "IK20"
                                        },
                                        {
                                            "first": "铱铂金",
                                            "second": "VK20"
                                        },
                                        {
                                            "first": "三极铱铂金",
                                            "second": "VKB20"
                                        },
                                        {
                                            "first": "双铱金",
                                            "second": "VFK20F"
                                        },
                                        {
                                            "first": "TT双铱金",
                                            "second": "IK20TT"
                                        }
                                    ]
                                },
                                {
                                    "brandName": "博世(BOSCH)",
                                    "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/博世(BOSCH).jpg",
                                    "child": [
                                        {
                                            "first": "迅能",
                                            "second": "0 242 235 666"
                                        },
                                        {
                                            "first": "超能",
                                            "second": "0 242 236 618"
                                        },
                                        {
                                            "first": "锐能",
                                            "second": ""
                                        }
                                    ]
                                }
                            ]
                        },
                        "brakeDisc": {
                            "name": "刹车盘",
                            "text": "检查厚度及磨损情况，必要时更换",
                            "data": {
                                "main": [
                                    {
                                        "brandName": "博世(BOSCH)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/博世(BOSCH).jpg",
                                        "child": [
                                            {
                                                "model": "0 986 AB6 824"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "天合(TRW)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/天合(TRW).jpg",
                                        "child": [
                                            {
                                                "model": "DF2803"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "菲罗多(FERODO)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/菲罗多(FERODO).jpg",
                                        "child": [
                                            {
                                                "model": "DDF927"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "泰明顿(TEXTAR)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/泰明顿(TEXTAR).jpg",
                                        "child": [
                                            {
                                                "model": "92082203"
                                            }
                                        ]
                                    }
                                ],
                                "vice": [
                                    {
                                        "brandName": "博世(BOSCH)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/博世(BOSCH).jpg",
                                        "child": [
                                            {
                                                "model": "0 986 AB6 871"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "天合(TRW)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/天合(TRW).jpg",
                                        "child": [
                                            {
                                                "model": "DF2805"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "菲罗多(FERODO)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/菲罗多(FERODO).jpg",
                                        "child": [
                                            {
                                                "model": "DDF929"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "泰明顿(TEXTAR)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/泰明顿(TEXTAR).jpg",
                                        "child": [
                                            {
                                                "model": "92082503"
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        "brakePads": {
                            "name": "刹车片",
                            "text": "检查厚度及磨损情况，必要时更换",
                            "data": {
                                "main": [
                                    {
                                        "brandName": "博世(BOSCH)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/博世(BOSCH).jpg",
                                        "child": [
                                            {
                                                "model": "0 986 AB1 185"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "天合(TRW)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/天合(TRW).jpg",
                                        "child": [
                                            {
                                                "model": "GDB1984"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "菲罗多(FERODO)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/菲罗多(FERODO).jpg",
                                        "child": [
                                            {
                                                "model": "FDB1094"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "泰明顿(TEXTAR)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/泰明顿(TEXTAR).jpg",
                                        "child": [
                                            {
                                                "model": "D1:2313181;D2:2313105"
                                            }
                                        ]
                                    }
                                ],
                                "vice": [
                                    {
                                        "brandName": "博世(BOSCH)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/博世(BOSCH).jpg",
                                        "child": [
                                            {
                                                "model": "0 986 AB1 178"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "天合(TRW)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/天合(TRW).jpg",
                                        "child": [
                                            {
                                                "model": "GDB1330"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "菲罗多(FERODO)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/菲罗多(FERODO).jpg",
                                        "child": [
                                            {
                                                "model": "FDB541"
                                            }
                                        ]
                                    },
                                    {
                                        "brandName": "泰明顿(TEXTAR)",
                                        "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/泰明顿(TEXTAR).jpg",
                                        "child": [
                                            {
                                                "model": "D1:2355481;D2:2355412"
                                            }
                                        ]
                                    }
                                ]
                            }
                        },
                        "oilFilter": {
                            "name": "机油过滤器",
                            "text": "7500KM或6个月/次",
                            "data": [
                                {
                                    "brandName": "曼牌(MANN)",
                                    "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/曼牌(MANN).jpg",
                                    "child": [
                                        {
                                            "model": "W 712/52"
                                        }
                                    ]
                                },
                                {
                                    "brandName": "马勒(MAHLE)",
                                    "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/马勒(MAHLE).jpg",
                                    "child": [
                                        {
                                            "model": "OC 515"
                                        }
                                    ]
                                },
                                {
                                    "brandName": "博世(BOSCH)",
                                    "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/博世(BOSCH).jpg",
                                    "child": [
                                        {
                                            "model": "0986AF0302"
                                        }
                                    ]
                                },
                                {
                                    "brandName": "索菲玛(SOFIMA)",
                                    "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/索菲玛(SOFIMA).jpg",
                                    "child": [
                                        {
                                            "model": "S1310R"
                                        }
                                    ]
                                }
                            ]
                        },
                        "airFilter": {
                            "name": "空气过滤器",
                            "text": "15000KM或12个月/次",
                            "data": [
                                {
                                    "brandName": "曼牌(MANN)",
                                    "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/曼牌(MANN).jpg",
                                    "child": [
                                        {
                                            "model": "C 2998/5 x"
                                        }
                                    ]
                                },
                                {
                                    "brandName": "马勒(MAHLE)",
                                    "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/马勒(MAHLE).jpg",
                                    "child": [
                                        {
                                            "model": "LX 1721"
                                        }
                                    ]
                                },
                                {
                                    "brandName": "博世(BOSCH)",
                                    "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/博世(BOSCH).jpg",
                                    "child": [
                                        {
                                            "model": "0986AF2279"
                                        }
                                    ]
                                },
                                {
                                    "brandName": "索菲玛(SOFIMA)",
                                    "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/索菲玛(SOFIMA).jpg",
                                    "child": [
                                        {
                                            "model": "S0606A"
                                        }
                                    ]
                                }
                            ]
                        },
                        "conditionerFilter": {
                            "name": "空调过滤器",
                            "text": "15000KM或12个月/次",
                            "data": []
                        },
                        "fuelFilter": {
                            "name": "燃油过滤器",
                            "text": "60000KM或48个月/次",
                            "data": [
                                {
                                    "brandName": "曼牌(MANN)",
                                    "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/曼牌(MANN).jpg",
                                    "child": [
                                        {
                                            "model": "WK 69/1"
                                        }
                                    ]
                                },
                                {
                                    "brandName": "马勒(MAHLE)",
                                    "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/马勒(MAHLE).jpg",
                                    "child": [
                                        {
                                            "model": "KL 755"
                                        }
                                    ]
                                },
                                {
                                    "brandName": "博世(BOSCH)",
                                    "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/博世(BOSCH).jpg",
                                    "child": [
                                        {
                                            "model": "0986AF8260"
                                        }
                                    ]
                                },
                                {
                                    "brandName": "索菲玛(SOFIMA)",
                                    "brandLogo": "https://keepup-part.vchangyi.com/images/partsBrandLogo/索菲玛(SOFIMA).jpg",
                                    "child": [
                                        {
                                            "model": "S1832B"
                                        }
                                    ]
                                }
                            ]
                        }
                    }
                },
                "version": "v1",
                "servertime": 1506323305
            }
            self.data=data.response
            if(self.$router.currentRoute.query.recommendData){
                self.recommendData=self.$router.currentRoute.query.recommendData;
                self.levelId=self.recommendData;
            }
            if(self.$router.currentRoute.query.levelId){
                self.levelId=self.$router.currentRoute.query.levelId
            }

            console.log(self.recommendData)
        },
        watch: {
            //监听动态路由
        },
        methods: {
            //页面方法
            gopage(type){
                if(type==1){
                    this.$router.push({path:'/maintenance/maintenance-cycle',query: {id:"1"}});
                }else{
                    this.$router.push({path:'/maintenance/maintenance-config',query: {levelId:this.levelId}});
                }
            },
            //反馈
            feedback(){
                this.$router.push({path:'/maintenance/maintenance-feedback',query: {id:"1"}});
            }

        },
        components:{
        }
    }
</script>

<style lang="less" scoped>
    @import "./../../../../css/page/maintenance/recommend";
</style>