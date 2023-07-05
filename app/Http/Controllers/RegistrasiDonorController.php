<?php

namespace App\Http\Controllers;

use App\Models\RegistrasiDonor;
use Carbon\Carbon;
use Illuminate\Http\Request;

class RegistrasiDonorController extends Controller
{


    public function query($dari, $sampai, $search){
        // Mendapatkan tanggal awal bulan ini

        if($search!== ''){

            return $registrasiDonor = RegistrasiDonor::with('pendonor', 'gol_darah', 'proses', 'petugas')
            ->whereHas('pendonor', function ($query) use ($search) {
                $query->where('nama', 'LIKE', '%' . $search . '%');
            })->latest()->get();
        }else{
            return $registrasiDonor = RegistrasiDonor::with('pendonor', 'gol_darah', 'proses', 'petugas')->whereBetween('created_at', [$dari, $sampai])
            ->latest()->get();
        }

    }

    public function index(Request $request){

        $registrasiDonor = $this->query($request->dari, $request->sampai, $request->search);
        // dd($registrasiDonor);
        $sukarela = RegistrasiDonor::where('Jenis_donor_darah', 'sukarela')->count();
        $pengganti = RegistrasiDonor::where('Jenis_donor_darah', 'pengganti')->count();
        $bayaran = RegistrasiDonor::where('Jenis_donor_darah', 'bayaran')->count();

        return inertia('Admin/Registrasi/RegistrasiPendonor', ['registrasi' => $registrasiDonor,

        'sukarela' => $sukarela, 'bayaran' => $bayaran, 'pengganti' => $pengganti]);
    }
}