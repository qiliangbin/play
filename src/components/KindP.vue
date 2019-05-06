<template>
    <div class="kindp">

    </div>
</template>

<script>
import api from '@/api/home'
export default {
    data() {
        return{}
    },
    created() {
        api.requestMovie(id).then(data => {
            console.log(data.data)
        })
    }
}
</script>
