<template>
    <div class="special">
        <div class="row">
            <div class="list_title">
                <div class="left">系列专题<span>{{search_title}}</span></div>
                <div class="right">
                    <router-link to="/special">全部</router-link>
                    /
                    <router-link to="/special/?s=type0">前端专题</router-link>
                    /
                    <router-link to="/special/?s=type1">后端专题</router-link>
                    /
                    <router-link to="/special/?s=type2">工具专题</router-link>
                </div>
            </div>
            <div class="list">
                <ul>
                    <li v-for="v in special_all" v-bind:key="v.id">
                        <div class="box">
                            <router-link :to='"/special/detail/"+v.id' class="img"><img :src="v.img|imgAddPath" :title="v.title"></router-link>
                            <div class="content">
                                <p>
                                    <router-link  :to='"/special/detail/"+v.id' :title="v.title" class="title">{{v.title}}</router-link>
                                </p>
                                <p>
                                    <router-link :to='"/special/?s=type"+v.type' class="kind">{{specialToStr(v.type)}}</router-link><em class="num"><span>{{v.click}}</span>人气</em><em class="time">{{v.addtime|formatTime("YMD")}}</em>
                                </p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'special',
    created(){
        this.$store.dispatch("getSpecialAll",{s:this.$route.query.s});

    },
    mounted(){
        
    },
    computed:{
        special_all(){
            return this.$store.getters.specialAll;
        },
        search_title(){
            let str="";
            if(this.$route.query.s=="type0"){
                str="前端专题";
            }
            else if(this.$route.query.s=="type1"){
                str="后端专题";
            }
            else if(this.$route.query.s=="type2"){
                str="工具专题";
            }
            else{
                str="全部";
            }
            return str;
        }
    },
    watch:{
        '$route'(to,from){
            this.getSpecialAllByType();
        }
    },
    methods:{
        getSpecialAllByType(){
            this.$store.dispatch("getSpecialAll",{s:this.$route.query.s});
        },
        specialToStr(type){
            return this.$store.getters.specialType[type]
        },
    }
}
</script>
<style scoped>

</style>
