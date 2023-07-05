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
        Schema::create('pendonors', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('email');
            $table->string('tempat_lahir');
            $table->date('tanggal_lahir');
            $table->string('telp');
            $table->string('jenis_kelamin');
            $table->string('alamat')->nullable();
            $table->string('berat_badan')->nullable();
            $table->string('pekerjaan')->nullable();
            $table->string('tinggi_badan')->nullable();
            $table->string('riwayat_penyakit')->nullable();
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
        Schema::dropIfExists('pendonors');
    }
};