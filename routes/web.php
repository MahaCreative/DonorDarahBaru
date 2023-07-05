<?php

use App\Http\Controllers\Admin\DashboardController;
use App\Http\Controllers\Admin\PermintaanDarah;
use App\Http\Controllers\Admin\ProsesRegistrasiDonorController;
use App\Http\Controllers\LoginAdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\RegistrasiDonorController;
use App\Http\Controllers\User\RegistrasiPermintaanDonor;
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
Route::get('/', function (){
    return inertia('User/Home');
})->name('home');
Route::get('syarat-donor', function (){
    return inertia('User/SyaratDonor');
})->name('syarat-donor');

Route::post('store-permintaan-donor', [RegistrasiPermintaanDonor::class, 'store_donor'])->name('user.permintaan_donor');
Route::patch('store-permintaan-donor', [RegistrasiPermintaanDonor::class, 'update_donor']);
Route::delete('delete-permintaan-donor', [RegistrasiPermintaanDonor::class, 'delete_donor'])->name('user.permintaan_donor_delete');;

Route::post('store-permintaan-darah', [RegistrasiPermintaanDonor::class, 'store_permintaan'])->name('user.permintaan_darah');
Route::patch('store-permintaan-darah', [RegistrasiPermintaanDonor::class, 'update_permintaan']);
Route::delete('delete-permintaan-darah', [RegistrasiPermintaanDonor::class, 'delete_permintaan'])->name('user.permintaan_darah_delete');

// Admin Controller

Route::get('login', [LoginAdminController::class, 'index'])->name('login');
Route::post('login', [LoginAdminController::class, 'store']);

Route::get('dashboard', [DashboardController::class, 'index'])->name('dashboard');

Route::get('registrasi-donor', [RegistrasiDonorController::class, 'index'])->name('registrasi-donor');
Route::get('proses-registrasi-donor', [ProsesRegistrasiDonorController::class, 'index'])->name('proses-registrasi-donor');
Route::post('proses-registrasi-donor', [ProsesRegistrasiDonorController::class, 'store']);

Route::get('permintaan-darah', [PermintaanDarah::class, 'index'])->name('permintaan-darah');
Route::post('permintaan-darah', [PermintaanDarah::class, 'storeProses'])->name('proses-permintaan-darah');
