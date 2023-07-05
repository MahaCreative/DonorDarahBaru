<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PermintaanDarah extends Model
{
    use HasFactory;
    protected $guarded =[];

    public function petugas(){
        return $this->belongsTo(User::class, 'petugas_id','id');
    }
    public function gol_dar(){
        return $this->belongsTo(GolDarah::class, 'gol_darah_id','id');
    }
}
