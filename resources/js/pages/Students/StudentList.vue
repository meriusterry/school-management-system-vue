<template>
  <div>
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-2xl font-semibold text-gray-900">Students</h1>
        <p class="mt-2 text-sm text-gray-700">List of all students enrolled in the school.</p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <router-link
          to="/students/add"
          class="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Add Student
        </router-link>
      </div>
    </div>
    
    <!-- Search -->
    <div class="mt-8">
      <div class="max-w-md">
        <input
          v-model="search"
          type="text"
          placeholder="Search students..."
          class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        />
      </div>
    </div>
    
    <!-- Students Table -->
    <div class="mt-8 flex flex-col">
      <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
          <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
            <table class="min-w-full divide-y divide-gray-300">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">Name</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Email</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Class</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Roll Number</th>
                  <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-6">Actions</th>
                </tr>
              </thead>
              <tbody class="divide-y divide-gray-200 bg-white">
                <tr v-for="student in filteredStudents" :key="student.id">
                  <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm sm:pl-6">
                    <div class="flex items-center">
                      <div class="h-10 w-10 flex-shrink-0">
                        <div class="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                          {{ student.avatar }}
                        </div>
                      </div>
                      <div class="ml-4">
                        <div class="font-medium text-gray-900">{{ student.name }}</div>
                      </div>
                    </div>
                  </td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ student.email }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ student.className }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{{ student.rollNumber }}</td>
                  <td class="whitespace-nowrap px-3 py-4 text-sm">
                    <span :class="student.status === 'Active' ? 'text-green-600' : 'text-red-600'">
                      {{ student.status }}
                    </span>
                  </td>
                  <td class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <router-link :to="`/students/${student.id}`" class="text-indigo-600 hover:text-indigo-900 mr-3">View</router-link>
                    <router-link :to="`/students/edit/${student.id}`" class="text-yellow-600 hover:text-yellow-900 mr-3">Edit</router-link>
                    <button @click="deleteStudent(student.id)" class="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { mockStudents } from '@/utils/mockData'

const search = ref('')
const students = ref(mockStudents)

const filteredStudents = computed(() => {
  if (!search.value) return students.value
  return students.value.filter(student => 
    student.name.toLowerCase().includes(search.value.toLowerCase()) ||
    student.email.toLowerCase().includes(search.value.toLowerCase())
  )
})

const deleteStudent = (id) => {
  if (confirm('Are you sure you want to delete this student?')) {
    students.value = students.value.filter(s => s.id !== id)
  }
}
</script>