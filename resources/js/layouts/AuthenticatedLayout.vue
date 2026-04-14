<template>
    <div>
        <nav class="bg-white border-b border-gray-100">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <div class="shrink-0 flex items-center">
                            <Link :href="route('dashboard')" class="font-bold text-xl">
                                School Management
                            </Link>
                        </div>
                        <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                            <NavLink :href="route('dashboard')" :active="route().current('dashboard')">
                                Dashboard
                            </NavLink>
                            <NavLink :href="route('students.index')" :active="route().current('students.*')">
                                Students
                            </NavLink>
                            <NavLink :href="route('teachers.index')" :active="route().current('teachers.*')">
                                Teachers
                            </NavLink>
                            <NavLink :href="route('classes.index')" :active="route().current('classes.*')">
                                Classes
                            </NavLink>
                            <NavLink :href="route('subjects.index')" :active="route().current('subjects.*')">
                                Subjects
                            </NavLink>
                            <NavLink :href="route('exams.index')" :active="route().current('exams.*')">
                                Exams
                            </NavLink>
                            <NavLink :href="route('attendance.index')" :active="route().current('attendance.*')">
                                Attendance
                            </NavLink>
                            <NavLink :href="route('fees.index')" :active="route().current('fees.*')">
                                Fees
                            </NavLink>
                            <NavLink :href="route('timetable.index')" :active="route().current('timetable.*')">
                                Timetable
                            </NavLink>
                        </div>
                    </div>

                    <div class="hidden sm:flex sm:items-center sm:ml-6">
                        <div class="ml-3 relative">
                            <Dropdown align="right" width="48">
                                <template #trigger>
                                    <button class="flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                                        <div>{{ $page.props.auth.user.name }}</div>
                                        <div class="ml-1">
                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                            </svg>
                                        </div>
                                    </button>
                                </template>

                                <template #content>
                                    <DropdownLink :href="route('profile.edit')">Profile</DropdownLink>
                                    <DropdownLink :href="route('settings')">Settings</DropdownLink>
                                    <DropdownDivider />
                                    <form method="POST" @submit.prevent="logout">
                                        <DropdownLink as="button">Log Out</DropdownLink>
                                    </form>
                                </template>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import { Link, usePage, router } from '@inertiajs/vue3';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import DropdownDivider from '@/Components/DropdownDivider.vue';
import NavLink from '@/Components/NavLink.vue';

const logout = () => {
    router.post(route('logout'));
};
</script>