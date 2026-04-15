<template>
  <div>
    <div class="sm:flex sm:items-center">
      <div class="sm:flex-auto">
        <h1 class="text-2xl font-semibold text-gray-900">{{ isEdit ? 'Edit Student' : 'Add New Student' }}</h1>
        <p class="mt-2 text-sm text-gray-700">{{ isEdit ? 'Update student information.' : 'Enter student details to enroll.' }}</p>
      </div>
      <div class="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
        <router-link
          to="/students"
          class="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
        >
          Back to List
        </router-link>
      </div>
    </div>
    
    <div class="mt-8 bg-white shadow rounded-lg">
      <form @submit.prevent="submitForm" class="space-y-8 divide-y divide-gray-200">
        <div class="space-y-8 divide-y divide-gray-200">
          <!-- Personal Information -->
          <div class="pt-8">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
              <p class="mt-1 text-sm text-gray-500">Student's personal details.</p>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
                <input
                  v-model="form.name"
                  type="text"
                  id="name"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              <div class="sm:col-span-3">
                <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
                <input
                  v-model="form.email"
                  type="email"
                  id="email"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              <div class="sm:col-span-3">
                <label for="phone" class="block text-sm font-medium text-gray-700">Phone</label>
                <input
                  v-model="form.phone"
                  type="text"
                  id="phone"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              <div class="sm:col-span-3">
                <label for="gender" class="block text-sm font-medium text-gray-700">Gender</label>
                <select
                  v-model="form.gender"
                  id="gender"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div class="sm:col-span-3">
                <label for="dateOfBirth" class="block text-sm font-medium text-gray-700">Date of Birth</label>
                <input
                  v-model="form.dateOfBirth"
                  type="date"
                  id="dateOfBirth"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              <div class="sm:col-span-3">
                <label for="bloodGroup" class="block text-sm font-medium text-gray-700">Blood Group</label>
                <input
                  v-model="form.bloodGroup"
                  type="text"
                  id="bloodGroup"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              <div class="sm:col-span-6">
                <label for="address" class="block text-sm font-medium text-gray-700">Address</label>
                <textarea
                  v-model="form.address"
                  id="address"
                  rows="3"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                ></textarea>
              </div>
            </div>
          </div>
          
          <!-- Academic Information -->
          <div class="pt-8">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">Academic Information</h3>
              <p class="mt-1 text-sm text-gray-500">Student's academic details.</p>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-2">
                <label for="className" class="block text-sm font-medium text-gray-700">Class</label>
                <select
                  v-model="form.className"
                  id="className"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="">Select Class</option>
                  <option value="10A">Class 10A</option>
                  <option value="10B">Class 10B</option>
                  <option value="9A">Class 9A</option>
                  <option value="9B">Class 9B</option>
                </select>
              </div>
              
              <div class="sm:col-span-2">
                <label for="rollNumber" class="block text-sm font-medium text-gray-700">Roll Number</label>
                <input
                  v-model="form.rollNumber"
                  type="text"
                  id="rollNumber"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              <div class="sm:col-span-2">
                <label for="admissionDate" class="block text-sm font-medium text-gray-700">Admission Date</label>
                <input
                  v-model="form.admissionDate"
                  type="date"
                  id="admissionDate"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
          
          <!-- Parent Information -->
          <div class="pt-8">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">Parent Information</h3>
              <p class="mt-1 text-sm text-gray-500">Parents or guardians details.</p>
            </div>
            <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div class="sm:col-span-3">
                <label for="fatherName" class="block text-sm font-medium text-gray-700">Father's Name</label>
                <input
                  v-model="form.fatherName"
                  type="text"
                  id="fatherName"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              <div class="sm:col-span-3">
                <label for="fatherPhone" class="block text-sm font-medium text-gray-700">Father's Phone</label>
                <input
                  v-model="form.fatherPhone"
                  type="text"
                  id="fatherPhone"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              <div class="sm:col-span-3">
                <label for="motherName" class="block text-sm font-medium text-gray-700">Mother's Name</label>
                <input
                  v-model="form.motherName"
                  type="text"
                  id="motherName"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              <div class="sm:col-span-3">
                <label for="motherPhone" class="block text-sm font-medium text-gray-700">Mother's Phone</label>
                <input
                  v-model="form.motherPhone"
                  type="text"
                  id="motherPhone"
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
              
              <div class="sm:col-span-3">
                <label for="emergencyContact" class="block text-sm font-medium text-gray-700">Emergency Contact</label>
                <input
                  v-model="form.emergencyContact"
                  type="text"
                  id="emergencyContact"
                  required
                  class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div class="pt-5">
          <div class="flex justify-end">
            <router-link
              to="/students"
              class="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Cancel
            </router-link>
            <button
              type="submit"
              class="ml-3 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              {{ isEdit ? 'Update' : 'Save' }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { mockStudents } from '@/utils/mockData'

const route = useRoute()
const router = useRouter()
const isEdit = computed(() => route.params.id)

const form = ref({
  name: '',
  email: '',
  phone: '',
  gender: '',
  dateOfBirth: '',
  bloodGroup: '',
  address: '',
  className: '',
  rollNumber: '',
  admissionDate: '',
  fatherName: '',
  fatherPhone: '',
  motherName: '',
  motherPhone: '',
  emergencyContact: ''
})

onMounted(() => {
  if (isEdit.value) {
    const student = mockStudents.find(s => s.id === parseInt(route.params.id))
    if (student) {
      form.value = {
        name: student.name,
        email: student.email,
        phone: student.phone,
        gender: student.gender,
        dateOfBirth: student.dateOfBirth,
        bloodGroup: student.bloodGroup,
        address: student.address,
        className: student.className,
        rollNumber: student.rollNumber,
        admissionDate: student.admissionDate,
        fatherName: student.fatherName,
        fatherPhone: student.fatherPhone,
        motherName: student.motherName,
        motherPhone: student.motherPhone,
        emergencyContact: student.emergencyContact
      }
    }
  }
})

const submitForm = () => {
  // Here you would normally send to API
  console.log('Form submitted:', form.value)
  router.push('/students')
}
</script>