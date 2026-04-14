<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

Route::middleware(['auth:sanctum'])->group(function () {
    Route::get('/students', function () {
        return Inertia::render('Students/Index');
    })->name('students.index');
    
    Route::get('/students/create', function () {
        return Inertia::render('Students/Create');
    })->name('students.create');
    
    Route::get('/students/{id}/edit', function ($id) {
        return Inertia::render('Students/Edit', ['id' => $id]);
    })->name('students.edit');
    
    Route::get('/teachers', function () {
        return Inertia::render('Teachers/Index');
    })->name('teachers.index');
    
    Route::get('/classes', function () {
        return Inertia::render('Classes/Index');
    })->name('classes.index');
    
    Route::get('/subjects', function () {
        return Inertia::render('Subjects/Index');
    })->name('subjects.index');
    
    Route::get('/exams', function () {
        return Inertia::render('Exams/Index');
    })->name('exams.index');
    
    Route::get('/attendance', function () {
        return Inertia::render('Attendance/Index');
    })->name('attendance.index');
    
    Route::get('/fees', function () {
        return Inertia::render('Fees/Index');
    })->name('fees.index');
    
    Route::get('/timetable', function () {
        return Inertia::render('Timetable/Index');
    })->name('timetable.index');
    
    Route::get('/settings', function () {
        return Inertia::render('Settings');
    })->name('settings');
});

require __DIR__.'/auth.php';