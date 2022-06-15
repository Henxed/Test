<template>
  <app-layout title="New Post">
    <form @submit.prevent="submit" class="mx-auto max-w-screen-sm" >
    <div class="text-2xl text-center">New Post</div>
      <div class="flex flex-wrap w-full bg-gray-100 rounded-xl p-6">
        <text-input v-model="form.title" :error="errors.title" class="w-full" label="Title post" />
        <textarea-input v-model="form.description" :error="errors.description" class=" w-full" label="Description" />

        <loading-button :loading="processing" class="btn-green mx-auto w-full max-w-xs mt-6" type="submit">Add post</loading-button>
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
  methods: {
    submit: function(){
      this.processing = !this.processing

        this.axios.post('/news', this.form).then(() => {
          this.$toast.success('Post added')
          this.processing = !this.processing

          this.form.title = ''
          this.form.description = ''
        }).catch( (error) => {
          this.processing = !this.processing
          this.$toast.error(error.response.data.message)
          this.errors = error.response.data.errors
        })

    }
  },
}
</script>

