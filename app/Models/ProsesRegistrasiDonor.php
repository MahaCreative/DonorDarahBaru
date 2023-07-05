<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProsesRegistrasiDonor extends Model
{
    use HasFactory;
    protected $guarded = [];
    public function registrasi(){
        return $this->belongsTo(RegistrasiDonor::class, 'registrasi_donor_id', 'id');
    }
    public function petugas(){
        return $this->belongsTo(User::class, 'petugas_id', 'id');
    }
}