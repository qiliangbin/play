<template>
    <div class="footer">
        <ul class="ful">
            <router-link class="fli" tag="li" to="/home">
                    <!-- <img class="fimg" src="@/assets/image/home1.png" alt=""> -->
                    首页
            </router-link>
            <router-link class="fli" tag="li" to="/kind">
                <!-- <img class="fimg" src="@/assets/image/kind.png" alt=""> -->
                分类
            </router-link>
            <router-link class="fli" tag="li" to="/cart">
                <!-- <img class="fimg" src="@/assets/image/buycar.png" alt=""> -->
                购物车
            </router-link>
            <router-link class="fli" tag="li" to="/user">
                <!-- <img class="fimg" src="@/assets/image/my.png" alt=""> -->
                我的
            </router-link>
        </ul>
    </div>
</template>
<style scope lang='scss'>
    .footer{
        width: 100%;
        height: 2.5rem;
        background:#fcfcfc;
        position: fixed;
        left: 0;
        bottom: 0
    }
    .ful{
        display: flex;
        width: 100%;
        text-align: center;
        font: 1rem/2.5rem '';
        padding: 0;
        margin: 0;
        border-top: 1px solid #ddd
    }
    .fli {
        width: 25%;
        list-style: none;
        border-radius: 0.2rem
    }
    .router-link-active {
        color: #fff;
        background-color: rgba($color: #6d3fec, $alpha: 0.5)
    }

    .fimg{
        width: 40%;
        height: 80%;
        display: inline-block;
    }

</style>

