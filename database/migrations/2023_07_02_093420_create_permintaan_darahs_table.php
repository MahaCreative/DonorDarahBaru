<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('permintaan_darahs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('petugas_id')->nullable()->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('gol_darah_id')
            ->references('id')->on('gol_darahs')
            ->onUpdate('restrict')->onDelete('cascade');
            $table->string('kode_registrasi');
            $table->string('nama');
            $table->date('tanggal_lahir');
            $table->integer('jumlah_permintaan');
            $table->string('status_permintaan')->default('menunggu verifikasi');
            $table->string('keterangan')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('permintaan_darahs');
    }
};