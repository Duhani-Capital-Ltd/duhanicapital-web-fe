<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('index', [
        'apiKey' => env('VITE_API_KEY'),
        'baseUrl' => env('VITE_BASE_URL'),
        'loginVersion' => env('VITE_BASE_LOGIN_VERSION')
    ]);
});
Route::get('/account/demo', function () {
    return Inertia::render(component: 'account-demo');
});
Route::get('/account/micro-standard', action: function () {
    return Inertia::render(component: 'account-standard');
});
Route::get('/account/professional-low-spread', action: function () {
    return Inertia::render(component: 'account-professional');
});
Route::get('/blog', action: function () {
    return Inertia::render(component: 'blog');
});
Route::get(uri: '/about', action: function () {
    return Inertia::render(component: 'about');
});


Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
