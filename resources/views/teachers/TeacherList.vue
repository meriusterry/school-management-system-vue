<template>
  <div>
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-2xl font-semibold text-gray-900">Teachers</h1>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <router-link to="/teachers/add" class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
          Add Teacher
        </router-link>
      </div>
    </div>
    
    <div class="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <div v-for="teacher in teachers" :key="teacher.id" class="bg-white shadow rounded-lg p-6">
        <div class="flex items-center">
          <div class="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-lg font-bold">
            {{ teacher.avatar || teacher.name.charAt(0) }}
          </div>
          <div class="ml-4">
            <h3 class="text-lg font-medium text-gray-900">{{ teacher.name }}</h3>
            <p class="text-sm text-gray-500">{{ teacher.subject }} Teacher</p>
          </div>
        </div>
        <div class="mt-4">
          <p class="text-sm text-gray-600">Email: {{ teacher.email }}</p>
          <p class="text-sm text-gray-600">Phone: {{ teacher.phone }}</p>
          <p class="text-sm text-gray-600">Qualification: {{ teacher.qualification }}</p>
        </div>
        <div class="mt-4 flex justify-between">
          <button class="text-indigo-600 hover:text-indigo-900">View Details</button>
          <button class="text-yellow-600 hover:text-yellow-900">Edit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mockTeachers } from '@/utils/mockData'

const teachers = ref(mockTeachers)
</script>