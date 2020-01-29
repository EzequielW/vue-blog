<template>
    <v-row align="center" justify="center">
        <v-col cols="10">
            <v-card elevation="0">
                <v-container>
                    <v-card-subtitle>{{date}}</v-card-subtitle>
                    <v-card-title class="justify-center single-post-title">{{title}}</v-card-title>
                    <v-card-text>
                        <div v-html="content"></div>
                    </v-card-text>
                </v-container>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import Api from '../services/Api'

export default {
    name: 'PostSingle',
    data() {
        return {
            title: '',
            content: '',
            date: ''
        }
    },
    created() {
        console.log(this.content)
        Api().get('/posts/' + this.$route.params.id)
            .then(res => {
                this.title = res.data.title
                this.content = res.data.content
                this.date = res.data.date
                console.log(res)
            })
            .catch(err => console.log(err))
    }
}
</script>

<style scoped>
    .single-post-title{
        margin-bottom: 4%;
    }
</style>