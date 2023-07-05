<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RegistrasiDonor extends Model
{
    use HasFactory;
    protected $guarded =[];
    public function pendonor (){
        return $this->hasOne(Pendonor::class, 'id', 'pendonor_id');
    }
    public function gol_darah(){
        return $this->belongsTo(GolDarah::class);
    }
    public function proses(){
        return $this->belongsTo(ProsesRegistrasiDonor::class, 'id', 'registrasi_donor_id' );
    }

    public function petugas(){
        return $this->belongsTo(User::class, 'petugas_id', 'id' );
    }
}