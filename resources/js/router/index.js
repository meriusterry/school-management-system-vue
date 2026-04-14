import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '../Pages/Dashboard.vue';
import StudentsIndex from '../Pages/Students/Index.vue';
import StudentsCreate from '../Pages/Students/Create.vue';
import StudentsEdit from '../Pages/Students/Edit.vue';
import StudentsShow from '../Pages/Students/Show.vue';
import TeachersIndex from '../Pages/Teachers/Index.vue';
import ClassesIndex from '../Pages/Classes/Index.vue';
import SubjectsIndex from '../Pages/Subjects/Index.vue';
import ExamsIndex from '../Pages/Exams/Index.vue';
import AttendanceIndex from '../Pages/Attendance/Index.vue';
import FeesIndex from '../Pages/Fees/Index.vue';
import TimetableIndex from '../Pages/Timetable/Index.vue';

const routes = [
    { path: '/', component: Dashboard, name: 'dashboard' },
    { path: '/students', component: StudentsIndex, name: 'students.index' },
    { path: '/students/create', component: StudentsCreate, name: 'students.create' },
    { path: '/students/:id/edit', component: StudentsEdit, name: 'students.edit' },
    { path: '/students/:id', component: StudentsShow, name: 'students.show' },
    { path: '/teachers', component: TeachersIndex, name: 'teachers.index' },
    { path: '/classes', component: ClassesIndex, name: 'classes.index' },
    { path: '/subjects', component: SubjectsIndex, name: 'subjects.index' },
    { path: '/exams', component: ExamsIndex, name: 'exams.index' },
    { path: '/attendance', component: AttendanceIndex, name: 'attendance.index' },
    { path: '/fees', component: FeesIndex, name: 'fees.index' },
    { path: '/timetable', component: TimetableIndex, name: 'timetable.index' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token');
    if (!token && to.name !== 'login') {
        next({ name: 'login' });
    } else {
        next();
    }
});

export default router;