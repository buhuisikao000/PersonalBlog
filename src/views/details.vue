<template>
    <div id='details'>
        <h2>{{blog.title}}</h2>
        <p>{{blog.content}}</p>
        <p>作者：{{blog.author}}</p>
        <p>分类：</p>
        <ul>
            <li v-for='(category,index) in blog.categories' :key='index'>
                {{category}}
            </li>
        </ul>
        <button @click='handledelete'>删除</button>
        <router-link :to="'/edit/'+id" tag='button'>编辑</router-link>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return {
            id:this.$route.params.id,
            blog:{}
        }
    },
    mounted (){
        axios.get(`https://my-blog-f2b5d-default-rtdb.firebaseio.com/post/${this.id}.json`)
        .then(res=>{
            this.blog=res.data
        })
    },
    methods:{
        handledelete(){
            axios.delete(`https://my-blog-f2b5d-default-rtdb.firebaseio.com/post/${this.id}.json`)
            .then(()=>{
                this.$router.push('/show')
            })
        },
    }
}
</script>

<style lang='scss' scoped>
#details{
    box-sizing:border-box;
    max-width:800px;
    margin:0 auto;
    padding:20px;
    background:#eee;
    border:1px dotted #aaa;
    overflow:hidden;
    button{
        dispaly:block;
        margin:10px;
        background:crimson;
        color:#fff;
        border:0;
        padding:10px;
        border-radius:4px;
        font-size:14px;
        cursor:pointer;
        float:right;
    }
}

</style>