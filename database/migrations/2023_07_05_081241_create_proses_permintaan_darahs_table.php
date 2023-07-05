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
        Schema::create('proses_permintaan_darahs', function (Blueprint $table) {
            $table->id();
            $table->foreignId('petugas_id')->references('id')->on('permintaan_darahs')->onUpdate('cascade')->onDelete('cascade');
            $table->string('kode_proses_permintaan');
            $table->string('permintaan_darah_id');
            $table->foreignId('gol_darah_id')->references('id')->on('gol_darahs')->onUpdate('cascade')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('proses_permintaan_darahs');
    }
};
