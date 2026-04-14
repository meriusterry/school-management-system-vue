<template>
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <!-- Stats Cards -->
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                    <div v-for="stat in stats" :key="stat.title" class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="p-6">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <component :is="stat.icon" class="h-8 w-8 text-gray-400" />
                                </div>
                                <div class="ml-4">
                                    <div class="text-sm font-medium text-gray-500">{{ stat.title }}</div>
                                    <div class="text-lg font-semibold text-gray-900">{{ stat.value }}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Charts -->
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="p-6">
                            <h3 class="text-lg font-medium mb-4">Attendance Overview</h3>
                            <canvas ref="attendanceChart"></canvas>
                        </div>
                    </div>

                    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div class="p-6">
                            <h3 class="text-lg font-medium mb-4">Fee Collection</h3>
                            <canvas ref="feeChart"></canvas>
                        </div>
                    </div>
                </div>

                <!-- Recent Activities -->
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6">
                        <h3 class="text-lg font-medium mb-4">Recent Activities</h3>
                        <div class="space-y-4">
                            <div v-for="activity in activities" :key="activity.id" class="border-b pb-3">
                                <p class="text-sm text-gray-600">{{ activity.message }}</p>
                                <p class="text-xs text-gray-400">{{ activity.time }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { usePage } from '@inertiajs/vue3';
import Chart from 'chart.js/auto';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Users, UserCheck, BookOpen, DollarSign } from 'lucide-vue-next';

const stats = ref([
    { title: 'Total Students', value: 0, icon: Users },
    { title: 'Total Teachers', value: 0, icon: UserCheck },
    { title: 'Total Classes', value: 0, icon: BookOpen },
    { title: 'Revenue', value: '$0', icon: DollarSign },
]);

const activities = ref([]);
const attendanceChart = ref(null);
const feeChart = ref(null);

onMounted(async () => {
    await loadDashboardData();
    await loadCharts();
});

const loadDashboardData = async () => {
    try {
        const response = await axios.get('/api/dashboard/stats');
        stats.value[0].value = response.data.total_students;
        stats.value[1].value = response.data.total_teachers;
        stats.value[2].value = response.data.total_classes;
        stats.value[3].value = `$${response.data.total_fees_collected}`;
        activities.value = response.data.recent_activities;
    } catch (error) {
        console.error('Error loading dashboard data:', error);
    }
};

const loadCharts = async () => {
    try {
        const response = await axios.get('/api/dashboard/charts');
        
        // Attendance Chart
        new Chart(attendanceChart.value, {
            type: 'line',
            data: {
                labels: response.data.attendance.map(item => `Month ${item.month}`),
                datasets: [
                    {
                        label: 'Present',
                        data: response.data.attendance.map(item => item.present),
                        borderColor: 'rgb(59, 130, 246)',
                        tension: 0.1
                    },
                    {
                        label: 'Absent',
                        data: response.data.attendance.map(item => item.absent),
                        borderColor: 'rgb(239, 68, 68)',
                        tension: 0.1
                    }
                ]
            }
        });
        
        // Fee Chart
        new Chart(feeChart.value, {
            type: 'bar',
            data: {
                labels: response.data.fee_collection.map(item => `Month ${item.month}`),
                datasets: [{
                    label: 'Collected',
                    data: response.data.fee_collection.map(item => item.collected),
                    backgroundColor: 'rgb(34, 197, 94)'
                }]
            }
        });
    } catch (error) {
        console.error('Error loading charts:', error);
    }
};
</script>