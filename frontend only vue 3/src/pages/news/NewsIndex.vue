<template>
  <app-layout title="News">

      <div class="flex w-1/2 mx-auto">
        <router-link :to="`/news/create`" class="bg-emerald-500 hover:bg-emerald-600 cursor-pointer text-white px-4 py-1 h-8 flex item-center rounded-full ml-auto">
          Add Post
        </router-link>
      </div>

      <div v-if="news.data">
            <article v-for="item in news.data" :key="item.id" class="bg-white w-1/2 mx-auto p-2 sm:p-4 mb-4 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
                <div class="sm:w-72 rounded-xl bg-gray-200 animate-pulse flex items-center justify-center">
                  random img
                </div>
                <div class="flex flex-col flex-1 gap-5 sm:p-2">
                    <div class="flex flex-1 flex-col gap-3">
                        <div class="text-xl w-full">
                          {{ item.title }}
                        </div>
                        <div class="overflow">
                          {{ truncate(item.description, 300, '...') }}
                        </div>
                    </div>
                    <div class="mt-auto flex gap-3">
                        <div class="text-gray-400">
                          Author: {{ item.user ? item.user.name : 'No author' }}
                        </div>
                        <router-link :to="`/news/${item.id}`" class="bg-indigo-500 hover:bg-indigo-600 cursor-pointer text-white px-4 py-1 h-8 flex item-center rounded-full ml-auto">
                          Read...
                        </router-link>
                    </div>
                </div>
            </article>
            <div class="h-32 flex justify-center items-center" v-if="isLoad">
                <svg class="mr-3 h-5 w-5 animate-spin text-slate-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
            </div>

            <div @click.prevent="loadDataFromServer" class="mx-auto my-2 px-3 py-1 text-xs max-w-max cursor-pointer text-center bg-slate-200 hover:bg-slate-300 dark:bg-slate-500 dark:hover:bg-slate-600 rounded-full" v-if="news.total > news.data.length && isLoadBtn">Show more...</div>

      </div>

      <div v-else>
        <div class="bg-white w-1/2 mx-auto p-2 sm:p-4 sm:h-64 rounded-2xl shadow-lg flex flex-col sm:flex-row gap-5 select-none ">
          <div class="h-52 sm:h-full sm:w-72 rounded-xl bg-gray-200 animate-pulse">
          </div>
          <div class="flex flex-col flex-1 gap-5 sm:p-2">
              <div class="flex flex-1 flex-col gap-3">
                  <div class="bg-gray-200 w-full animate-pulse h-14 rounded-2xl">
                  </div>
                  <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
                  </div>
                  <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
                  </div>
                  <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
                  </div>
                  <div class="bg-gray-200 w-full animate-pulse h-3 rounded-2xl">
                  </div>
              </div>
              <div class="mt-auto flex gap-3">
                  <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full">
                  </div>
                  <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full">
                  </div>
                  <div class="bg-gray-200 w-20 h-8 animate-pulse rounded-full ml-auto">
                  </div>
              </div>
          </div>
      </div>
      </div>

  </app-layout>
</template>

<script>
import AppLayout from '@/layouts/AppLayout';

export default {
  components: {
    AppLayout
  },
  data() {
    return {
      news: [],
      isLoad: false,
      isLoadBtn: true,
      page: 2,
    }
  },
  created(){
    this.getNews()
  },
  methods: {
    getNews: async function(){
      await this.axios.get('/news', {
        params: {
          page: parseInt(this.$route.query.page || '1') || 1
        }
      }).then((res) => {
        this.news = res.data
      })
    },
    loadDataFromServer: function ()  {
        this.isLoad = !this.isLoad

        this.axios.get('/news', {
          params: {
            page : this.page
          }
        }).then(response => {
            this.isLoad = !this.isLoad
            this.news.data.push(...response.data.data)

            if(response.last_page < this.page){
                this.isLoadBtn = !this.isLoadBtn
            }
        });
        this.page++;
    },
     truncate: function (text, length, suffix) {
        if (text.length > length) {
            return text.substring(0, length) + suffix;
        } else {
            return text;
        }
    },
  },
}
</script>
