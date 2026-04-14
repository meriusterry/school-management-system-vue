<template>
    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Add New Student</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <div class="p-6">
                        <form @submit.prevent="submitForm">
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <!-- Personal Information -->
                                <div class="col-span-2">
                                    <h3 class="text-lg font-medium mb-4">Personal Information</h3>
                                </div>
                                
                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Full Name</label>
                                    <input v-model="form.name" type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                    <p v-if="errors.name" class="text-red-600 text-sm mt-1">{{ errors.name }}</p>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Email</label>
                                    <input v-model="form.email" type="email" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                    <p v-if="errors.email" class="text-red-600 text-sm mt-1">{{ errors.email }}</p>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Phone</label>
                                    <input v-model="form.phone" type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                    <p v-if="errors.phone" class="text-red-600 text-sm mt-1">{{ errors.phone }}</p>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Date of Birth</label>
                                    <input v-model="form.date_of_birth" type="date" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Gender</label>
                                    <select v-model="form.gender" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                </div>

                                <div class="col-span-2">
                                    <label class="block text-sm font-medium text-gray-700">Address</label>
                                    <textarea v-model="form.address" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"></textarea>
                                </div>

                                <!-- Academic Information -->
                                <div class="col-span-2 mt-4">
                                    <h3 class="text-lg font-medium mb-4">Academic Information</h3>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Class</label>
                                    <select v-model="form.class_id" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                        <option value="">Select Class</option>
                                        <option v-for="classItem in classes" :key="classItem.id" :value="classItem.id">
                                            {{ classItem.name }}-{{ classItem.section }}
                                        </option>
                                    </select>
                                    <p v-if="errors.class_id" class="text-red-600 text-sm mt-1">{{ errors.class_id }}</p>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Roll Number</label>
                                    <input v-model="form.roll_number" type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Admission Date</label>
                                    <input v-model="form.admission_date" type="date" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Academic Year</label>
                                    <input v-model="form.academic_year" type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                </div>

                                <!-- Parent Information -->
                                <div class="col-span-2 mt-4">
                                    <h3 class="text-lg font-medium mb-4">Parent Information</h3>
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Father's Name</label>
                                    <input v-model="form.father_name" type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Father's Phone</label>
                                    <input v-model="form.father_phone" type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Mother's Name</label>
                                    <input v-model="form.mother_name" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Mother's Phone</label>
                                    <input v-model="form.mother_phone" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Emergency Contact</label>
                                    <input v-model="form.emergency_contact" type="text" required class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                </div>

                                <div>
                                    <label class="block text-sm font-medium text-gray-700">Blood Group</label>
                                    <input v-model="form.blood_group" type="text" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                                </div>
                            </div>

                            <div class="mt-6 flex justify-end">
                                <Link :href="route('students.index')" class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2">
                                    Cancel
                                </Link>
                                <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                    Create Student
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { router } from '@inertiajs/vue3';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';

const form = ref({
    name: '',
    email: '',
    phone: '',
    address: '',
    date_of_birth: '',
    gender: '',
    father_name: '',
    father_phone: '',
    mother_name: '',
    mother_phone: '',
    emergency_contact: '',
    blood_group: '',
    admission_date: '',
    class_id: '',
    roll_number: '',
    academic_year: new Date().getFullYear().toString(),
});

const errors = ref({});
const classes = ref([]);

onMounted(() => {
    loadClasses();
});

const loadClasses = () => {
    axios.get('/api/classes').then(response => {
        classes.value = response.data.data;
    }).catch(error => {
        console.error('Error loading classes:', error);
    });
};

const submitForm = () => {
    axios.post('/api/students', form.value).then(() => {
        router.visit(route('students.index'));
    }).catch(error => {
        if (error.response && error.response.data.errors) {
            errors.value = error.response.data.errors;
        }
    });
};
</script>