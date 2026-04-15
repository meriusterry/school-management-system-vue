<template>
  <div>
    <h1 class="text-2xl font-semibold text-gray-900">Dashboard</h1>
    
    <!-- Stats Grid -->
    <div class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      <div v-for="stat in stats" :key="stat.name" class="bg-white overflow-hidden shadow rounded-lg">
        <div class="p-5">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <component :is="stat.icon" class="h-6 w-6 text-gray-400" />
            </div>
            <div class="ml-5 w-0 flex-1">
              <dl>
                <dt class="text-sm font-medium text-gray-500 truncate">{{ stat.name }}</dt>
                <dd class="text-lg font-medium text-gray-900">{{ stat.value }}</dd>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Charts -->
    <div class="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
      <div class="bg-white shadow rounded-lg p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">Attendance Overview</h3>
        <canvas ref="attendanceChart"></canvas>
      </div>
      
      <div class="bg-white shadow rounded-lg p-6">
        <h3 class="text-lg font-medium text-gray-900 mb-4">Fee Collection</h3>
        <canvas ref="feeChart"></canvas>
      </div>
    </div>

    <!-- Recent Activities -->
    <div class="mt-8 bg-white shadow rounded-lg">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">Recent Activities</h3>
      </div>
      <div class="border-t border-gray-200">
        <ul role="list" class="divide-y divide-gray-200">
          <li v-for="activity in recentActivities" :key="activity.id" class="px-4 py-4 sm:px-6">
            <div class="flex items-center justify-between">
              <p class="text-sm font-medium text-indigo-600 truncate">{{ activity.title }}</p>
              <div class="ml-2 flex-shrink-0 flex">
                <p class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                  {{ activity.time }}
                </p>
              </div>
            </div>
            <div class="mt-2 sm:flex sm:justify-between">
              <div class="sm:flex">
                <p class="flex items-center text-sm text-gray-500">
                  {{ activity.description }}
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import Chart from 'chart.js/auto'
import { 
  UsersIcon, 
  AcademicCapIcon, 
  BookOpenIcon, 
  CurrencyDollarIcon 
} from '@heroicons/vue/24/outline'
import { dashboardStats, chartData } from '@/utils/mockData'

const stats = ref([
  { name: 'Total Students', value: dashboardStats.totalStudents, icon: UsersIcon },
  { name: 'Total Teachers', value: dashboardStats.totalTeachers, icon: AcademicCapIcon },
  { name: 'Total Classes', value: dashboardStats.totalClasses, icon: BookOpenIcon },
  { name: 'Revenue', value: `$${dashboardStats.totalRevenue}`, icon: CurrencyDollarIcon }
])

const recentActivities = ref([
  { id: 1, title: 'New Student Enrolled', description: 'John Doe joined Class 10A', time: '5 minutes ago' },
  { id: 2, title: 'Exam Results Published', description: 'Mid-term results for Class 10 published', time: '1 hour ago' },
  { id: 3, title: 'Fee Payment Received', description: 'Payment of $500 received from Jane Smith', time: '2 hours ago' },
  { id: 4, title: 'Teacher Meeting', description: 'Staff meeting scheduled for tomorrow', time: '3 hours ago' }
])

const attendanceChart = ref(null)
const feeChart = ref(null)

onMounted(() => {
  // Attendance Chart
  new Chart(attendanceChart.value, {
    type: 'line',
    data: {
      labels: chartData.attendance.map(item => item.month),
      datasets: [
        {
          label: 'Present',
          data: chartData.attendance.map(item => item.present),
          borderColor: 'rgb(59, 130, 246)',
          backgroundColor: 'rgba(59, 130, 246, 0.1)',
          tension: 0.1
        },
        {
          label: 'Absent',
          data: chartData.attendance.map(item => item.absent),
          borderColor: 'rgb(239, 68, 68)',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          tension: 0.1
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true
    }
  })
  
  // Fee Chart
  new Chart(feeChart.value, {
    type: 'bar',
    data: {
      labels: chartData.fees.map(item => item.month),
      datasets: [
        {
          label: 'Collected',
          data: chartData.fees.map(item => item.collected),
          backgroundColor: 'rgb(34, 197, 94)'
        },
        {
          label: 'Pending',
          data: chartData.fees.map(item => item.pending),
          backgroundColor: 'rgb(239, 68, 68)'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true
    }
  })
})
</script>