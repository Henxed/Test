<template>
  <app-layout :title="news.title">

  <div class="rounded-2xl bg-gray-200 text-slate-900 p-6 max-w-screen-md mx-auto" v-if="news">
    <div class="text-2xl mb-4 ">{{ news.title }}</div>
    <div class="text-lg text-justify">{{ news.description }}</div>

    <div class="flex text-gray-500 mt-5">
      <div class="mr-4">Published: {{ news.updated_at }}</div>
      <div class="mr-4">Author: {{ news.user ? news.user.name : 'No author' }}</div>

      <router-link :to="`/news/${news.id}/edit`" class="bg-indigo-300 hover:bg-indigo-400 cursor-pointer text-white px-4 py-1 h-8 flex item-center rounded-full ml-auto">
        Edit
      </router-link>
    </div>
  </div>
<div class="rounded-2xl bg-gray-200 text-slate-900 p-6 max-w-screen-md mx-auto" v-else>
    <div class="mb-4 h-8 w-72 rounded-xl bg-gray-400 animate-pulse"></div>
    <div class="flex flex-1 flex-col gap-3">
        <div class="bg-gray-400 w-full animate-pulse h-3 rounded-2xl">
        </div>
        <div class="bg-gray-400 w-full animate-pulse h-3 rounded-2xl">
        </div>
        <div class="bg-gray-400 w-full animate-pulse h-3 rounded-2xl">
        </div>
        <div class="bg-gray-400 w-full animate-pulse h-3 rounded-2xl">
        </div>
        <div class="bg-gray-400 w-full animate-pulse h-3 rounded-2xl">
        </div>
    </div>

    <div class="flex text-gray-500 mt-5">
      <div class="mr-4 bg-gray-400 w-32 animate-pulse h-3 rounded-2xl"></div>
      <div class="mr-4 bg-gray-400 w-32 animate-pulse h-3 rounded-2xl"></div>

      <div class="bg-gray-400 w-12 animate-pulse h-3 rounded-2xl ml-auto"></div>
    </div>
  </div>

  </app-layout>
</template>

<script>
import AppLayout from '@/layouts/AppLayout';
export default {
  components: {
    AppLayout,
  },
  data() {
    return {
      news: []
    }
  },
  created(){
    this.getNews()
  },
  methods: {
    getNews: async function(){
      await this.axios.get(`/news/${this.$route.params.id}`).then((res) => {
        this.news = res.data
      }).catch( () => {
        this.$router.push(`/error`)
      })
    },
  }
}
</script>
