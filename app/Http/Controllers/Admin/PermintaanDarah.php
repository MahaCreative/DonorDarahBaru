<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\GolDarah;
use App\Models\PermintaanDarah as ModelsPermintaanDarah;
use App\Models\ProsesPermintaanDarah;
use App\Models\StokDarah;
use Illuminate\Http\Request;

class PermintaanDarah extends Controller
{
    public function index(Request $request){
        $permintaan = ModelsPermintaanDarah::with('gol_dar', 'petugas')->latest()->get();

        return inertia('Admin/Permintaan/PermintaanDarah', compact('permintaan'));
    }

    public function storeProses(Request $request){


        $stok = StokDarah::where('darah_id', '=', $request->gol_darah_id)->first();
        $permintaan = ModelsPermintaanDarah::findOrFail($request->id);
        if($stok->stok - $request->jumlah_permintaan >= 0){
            $kode = ProsesPermintaanDarah::count() + 1;
            $proses = ProsesPermintaanDarah::create([
                'petugas_id' => $request->user()->id,
                'kode_proses_permintaan' => $kode,
                'permintaan_darah_id' => $permintaan->id,
                'gol_darah_id' => $request->gol_darah_id
            ]);
            $stok->update([
                'stok' => $stok->stok - $request->jumlah_permintaan
            ]);
            $permintaan->update([
                'status_permintaan' => 'berhasil'
            ]);
        }else{
           $permintaan->update([
                'status_permintaan' => 'gagal'
            ]);
        }
    }
}
