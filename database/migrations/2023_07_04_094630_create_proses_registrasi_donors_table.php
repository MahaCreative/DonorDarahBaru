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
        Schema::create('proses_registrasi_donors', function (Blueprint $table) {
            $table->id();
            $table->foreignId('registrasi_donor_id')->references('id')->on('registrasi_donors')->onUpdate('cascade')->onDelete('cascade');
            $table->foreignId('petugas_id')->references('id')->on('users')->onUpdate('cascade')->onDelete('cascade');            $table->timestamps();
            $table->string('jumlah_darah');
            $table->string('tekanan_darah');
            $table->string('keterangan');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proses_registrasi_donors');
    }
};
