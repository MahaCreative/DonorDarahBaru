<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\ProsesRegistrasiDonor;
use App\Models\RegistrasiDonor;
use App\Models\StokDarah;
use Illuminate\Http\Request;

class ProsesRegistrasiDonorController extends Controller
{
    public function index(Request $request){

        $proses = ProsesRegistrasiDonor::with(['registrasi' => function($query){
            $query->with('pendonor','gol_darah');
        }, 'petugas'])->get()->all();

        return inertia('Admin/Proses/ProsesDonor', ['proses' => $proses]);
    }
    public function store(Request $request){
        // dd($request->all());
        $request->validate([
            'status' => 'required',

            'tekanan_darah' => 'required',
        ]);
        $proses = ProsesRegistrasiDonor::create([
            'registrasi_donor_id' => $request->registrasi_id,
            'petugas_id' => $request->user()->id,
            'status' => $request->status,
            'jumlah_darah' => $request->status ==='berhasil' ?  $request->jumlah_darah : 0,
            'tekanan_darah' => $request->tekanan_darah,
            'keterangan' => $request->keterangan,
        ]);
        $regis = RegistrasiDonor::findOrFail($request->registrasi_id);
        $regis->update([
           'status_donor' => $request->status ==='berhasil' ? 'berhasil' : 'gagal'
       ]);
        $stok = StokDarah::findOrFail($regis->gol_darah_id);
        $stok->update([
            'stok' => $stok->stok + $request->jumlah_darah
        ]);
    }

    public function update(Request $request){}

    public function delete(Request $request){}
}
