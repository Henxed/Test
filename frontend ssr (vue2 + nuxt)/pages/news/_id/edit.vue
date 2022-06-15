<template>
  <app-layout title="New Post">
    <form @submit.prevent="submit" class="mx-auto max-w-screen-sm" >
    <div class="text-2xl text-center">Edit Post</div>
      <div class="flex flex-wrap w-full bg-gray-100 rounded-xl p-6">
        <text-input v-model="form.title" :error="errors.title" class="w-full" label="Title post" />
        <textarea-input v-model="form.description" :error="errors.description" class=" w-full" label="Description" />

        <div class="text-center w-full mt-6">
          <loading-button :loading="processing" class="btn-green mx-auto w-full max-w-xs" type="submit">Update post</loading-button>
          <button @click.prevent="destroy" tabindex="-1" type="button" class="text-red-600 hover:underline mt-6">Delete post</button>
        </div>

    </div>
    </form>
  </app-layout >
</template>


<script>
import AppLayout from '@/layouts/AppLayout';
import TextInput from '@/components/TextInput';
import TextareaInput from '@/components/TextareaInput';
import LoadingButton from '@/components/LoadingButton'

export default {
  components: {
    AppLayout,
    TextInput,
    TextareaInput,
    LoadingButton
  },
  data() {
    return {
      errors: [],
      processing: false,
      form: {
        title: '',
        description: '',
      }
    }
  },
  created(){
    this.getNews()
  },
  methods: {
    submit: function(){
      this.processing = !this.processing

      try {
        this.$axios.$put(`/news/${this.$route.params.id}`, this.form).then((res) => {
          this.$toast.success('Post updated')
          this.processing = !this.processing
        }).catch( (error) => {
          this.processing = !this.processing
          this.$toast.error(error.response.data.message)
          this.errors = error.response.data.errors
        })
      } catch (error) {}

    },
    getNews: async function()  {
      await this.$axios.$get(`/news/${this.$route.params.id}`).then((res) => {
        this.form.title = res.title
        this.form.description = res.description
      }).catch((e) => {
          this.$nuxt.error({ statusCode: 404 })
        })
    },
    destroy() {
        if (confirm('Are you sure you want to delete this post?')) {

          this.$axios.$delete(`/news/${this.$route.params.id}`).then((res) => {
            this.$toast.success('Post deleted')
            this.$router.push(`/news`)
          })
        }
    },
  },
}
</script>

