<template>
    <v-row align="center" justify="center">
        <v-col cols="10">
        <PostSingle :post_id="this.$route.params.id"/>
        <CommentSection :comments="comments"/>
        </v-col>
    </v-row>
</template>

<script>
import PostSingle from '../components/PostSingle'
import CommentSection from '../components/CommentSection'
import Api from '../services/Api'

export default {
    name: 'Post',
    data() {
        return {
            comments: ''
        }
    },
    components: {
        PostSingle,
        CommentSection
    },
    created() {
        Api().get('posts/' + this.$route.params.id + "/comments")
        .then(res => this.comments = res.data)
        .catch(err => console.log(err))
    }
}
</script>