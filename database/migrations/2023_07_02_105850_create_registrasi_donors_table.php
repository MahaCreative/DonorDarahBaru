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
        Schema::create('registrasi_donors', function (Blueprint $table) {
            $table->id();
            $table->string('kode_registrasi');
            $table->foreignId('pendonor_id')->references('id')->on('pendonors')->onDelete('cascade')->onUpdate('cascade');
            $table->date('tanggal_donor_darah');
            $table->time('jam_donor_darah');
            $table->string('Jenis_donor_darah');
            $table->string('status_donor')->default('order');
            $table->string('keterangan')->nullable();
            $table->foreignId('petugas_id')->nullable()->references('id')->on('users')->onDelete('cascade')->onUpdate('cascade');
            $table->foreignId('gol_darah_id')
            ->references('id')->on('gol_darahs')
            ->onUpdate('restrict')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('registrasi_donors');
    }
};