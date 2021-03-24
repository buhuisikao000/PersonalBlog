<template>
  <div id="show-blog" :key='blogs.length'>
    <h1>博客总览</h1>
    <input type='text' v-model='search' placeholder='搜索'>
    <div v-for='blog in filterBlogs' :key='blog.id' class='single-blog'
    @click='pageChange(blog.id)'>
        <h2 v-rainbow>{{blog.title|toUppercase}}</h2>
        <article>
            {{blog.content|snippet}}
        </article>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default{
    data (){
        return{
            blogs:[],
            search:''
        }
    },
    mounted(){
        axios.get('https://my-blog-f2b5d-default-rtdb.firebaseio.com/post.json')
        .then(res=>{
            let arr=[]
            for (let key in res.data){
                res.data[key].id=key
                arr.push(res.data[key])
            }
            this.blogs=arr
        })
    },
    methods:{
        pageChange(id){
          this.$router.push(`/details/${id}`)
        }
    },
    computed:{
        filterBlogs (){
            return this.blogs.filter(item=>item.title.includes(this.search))
        }
    },
    //局部定义过滤器
    filters:{
        toUppercase(val){
            return val.toUpperCase()
        },
        snippet(val){
            return val.slice(0,100)+'...'
        }
    }, 
    //局部定义指令
    directives:{
        rainbow:{
            bind(e){
                e.style.color='#'+Math.random().toString(16).slice(2,8)
            }
        }
    },
}
</script>

<style lang="scss">
#show-blog{
    max-width:800px;
    margin:0 auto;
    .single-blog{
        padding:20px;
        margin:20px 0;
        background:#eee;
        border:1px dotted #aaa;
    }
    input[type='text']{
        padding:8px;
        width:100%;
        box-sizing:border-box;
    }
}
</style>