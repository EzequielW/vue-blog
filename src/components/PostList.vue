<template>
    <div>    
        <div v-for="post in posts" v-bind:key="post._id">
            <PostItem v-bind:post="post"/>
        </div>
    </div>
</template>

<script>
import PostItem from './PostItem'

export default {
    name: 'PostList',
    components: {
        PostItem
    },
    props: ['posts']
}
</script>

<style scoped>
    a {
        text-decoration: none;
    }
</style>