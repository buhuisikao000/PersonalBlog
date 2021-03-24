<template>
  <nav>
    <router-link to='/show' tag='div' activeClass='activeclass'>博客</router-link>
    <router-link to='/add' tag='div' activeClass='activeclass'>写博客</router-link>
  </nav>
</template>

<style lang="scss" scoped>
*{
  nav{
    height:80px;
    max-width:800px;
    margin:0 auto;
    background:crimson;
    display:flex;
    justify-content: center;
    align-items: center;
    margin-bottom:30px;
    div{
      margin:20px 0;
      width:100px;
      background:crimson;
      color:#fff;
      border:0;
      padding:14px;
      border-radius:4px;
      font-size:18px;
      cursor:pointer;
      text-align:center;
    }
    .activeclass{
      background:rgba(255, 255, 255, 0.8);
      color:#444;
    }
  }
}
</style>