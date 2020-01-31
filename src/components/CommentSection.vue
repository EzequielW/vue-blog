<template>
    <div>
        <div v-for="comment in comments" :key="comment._id">
            <CommentItem :comment="comment" />
        </div>   
    </div>
</template>

<script>
import CommentItem from './CommentItem'

export default {
    name:'CommentSection',
    props: ['comments'],
    components: {
        CommentItem
    }
}
</script>