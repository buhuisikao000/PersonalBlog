<template>
    <div id='add-blog'>
        <form v-if='!submited'>
            <h2>编辑博客</h2>
            <label>标题</label>
            <input type="text" v-model='blog.title' required>
            <label>内容</label>
            <textarea v-model='blog.content'></textarea>
            <div id='checkboxes'>
                <input type='checkbox' value='HTML5' v-model='blog.categories'>
                <label>HTML5</label>
                <input type='checkbox' value='CSS3' v-model='blog.categories'>
                <label>CSS3</label>
                <input type='checkbox' value='JavaScript' v-model='blog.categories'>
                <label>JavaScript</label>
                <input type='checkbox' value='Vue.js' v-model='blog.categories'>
                <label>Vue.js</label>
            </div>
            <label>作者</label>
            <input type="text" v-model="blog.author">
            <button @click.prevent='handleUpload'>编辑完成</button>
        </form>
        <div v-else>
            <h3>您的博客修改成功！</h3>
        </div>
        <hr>
        <div id='preview'>
            <h3>博客总览</h3>
            <p>博客标题：{{blog.title}}</p>
            <p>博客内容：</p>
            <p>{{blog.content}}</p>
            <p>博客分类：</p>
            <ul>
                <li v-for='data in blog.categories' :key='data'>{{data}}</li>
            </ul>
            <p>作者：{{blog.author}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default{
    data(){
        return{
            id:this.$route.params.id,
            blog:{},
            authors:['Chensi','Sylar'],
            submited:false
        }
    },
    methods:{
        handleUpload (){
            axios.put(`https://my-blog-f2b5d-default-rtdb.firebaseio.com/post/${this.id}.json`,this.blog)
            .then(()=>{
                this.submited=true
            })
        },
    },
    mounted(){
       axios.get(`https://my-blog-f2b5d-default-rtdb.firebaseio.com/post/${this.id}.json`)
        .then(res=>{
            this.blog=res.data
        })
    }
}       
    
</script>

<style lang='scss' scoped>
#add-blog{
    margin:20px auto;
    max-width:600px;
    padding:20px;
    label{
        display:block;
        margin:20px 0 10px;
    }
    textarea{
        height:200px;
    }
    input[type='text'],textarea,select{
        display:block;
        width:100%;
    }
    #checkboxes{
        label{
            display:inline-block;
            margin-top:0;
        }
        input{
            display:inline-block;
            margin-right:10px;
        }
    }
    button{
        dispaly:block;
        margin:20px 0;
        background:crimson;
        color:#fff;
        border:0;
        padding:14px;
        border-radius:4px;
        font-size:18px;
        cursor:pointer;
    }
    #preview{
        padding:10px 20px;
        border:1px dotted #ccc;
        margin:30px 0;
    }
    h3{
        margin-top:10px;
    }

}
</style>