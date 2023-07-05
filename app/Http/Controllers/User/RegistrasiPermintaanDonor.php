<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\Pendonor;
use App\Models\PermintaanDarah;
use App\Models\RegistrasiDonor;
use Illuminate\Http\Request;

class RegistrasiPermintaanDonor extends Controller
{
    public function store_donor(Request $request){

        $request->validate([
            'nama' => "required|min:6|string",
            'email' => "required|min:6|email",
            'tempat_lahir' => "required|min:6|string",
            'tanggal_lahir' => "required|date|before:now",
            'jenis_kelamin' => "required",
            'telp' => "required|min:6",
            'alamat' => "required|min:6",
            'golongan_darah' => "required",
            'tanggal_donor' => "required|date|after:now",
            'jam_donor' => "required",
            'jenis_donor' => "required",
        ]);

        $pendonors = Pendonor::create([
            'nama' => $request->nama,
            'email' => $request->email,
            'tempat_lahir' => $request->tempat_lahir,
            'tanggal_lahir' => $request->tanggal_lahir,
            'jenis_kelamin' => $request->jenis_kelamin,
            'telp' => $request->telp,
            'alamat' => $request->alamat,
            'gol_darah_id' => $request->golongan_darah,
            'pekerjaan' => $request->pekerjaan,
            'berat_badan' => $request->berat_badan,
            'tinggi_badan' => $request->tinggi_badan,
            'riwayat_penyakit' => $request->riwayat_penyakit
        ]);
        $kode ="PD/". now()->format('dmy').'00'. RegistrasiDonor::count() + 1;
        $regis = RegistrasiDonor::create([
            'kode_registrasi' => $kode,
            'pendonor_id' => $pendonors->id,
            'tanggal_donor_darah' => $request->tanggal_donor,
            'jam_donor_darah' => $request->jam_donor,
            'jenis_donor_darah' => $request->jenis_donor,
            'gol_darah_id' => $request->golongan_darah,
            'petugas_id' => $request->user() ? $request->user()->id : null
        ]);
    }

    public function update_donor(Request $request){
        $regis = RegistrasiDonor::findOrFail($request->id);

        $regis->update([
            'tanggal_donor_darah' => $request->tanggal_donor,
            'jam_donor_darah' => $request->jam_donor,
            'jenis_donor_darah' => $request->jenis_donor,
            'gol_darah_id' => $request->golongan_darah,
            'petugas_id' => $request->user() ? $request->user()->id : null
        ]);
        $regis->pendonor->update([
            'nama' => $request->nama,
            'email' => $request->email,
            'tempat_lahir' => $request->tempat_lahir,
            'tanggal_lahir' => $request->tanggal_lahir,
            'jenis_kelamin' => $request->jenis_kelamin,
            'pekerjaan' => $request->pekerjaan,
            'telp' => $request->telp,
            'alamat' => $request->alamat,
            'gol_darah_id' => $request->golongan_darah,
            'berat_badan' => $request->berat_badan,
            'tinggi_badan' => $request->tinggi_badan,
            'riwayat_penyakit' => $request->riwayat_penyakit
        ]);

    }

    public function delete_donor(Request $request){

        $regis = RegistrasiDonor::findOrFail($request->id);
        $regis->pendonor->delete();
        // $regis->delete();
    }

    public function store_permintaan(Request $request){
        $request->validate([
            'golongan_darah' => 'required',
            'nama' => 'required|string',
            'tanggal_lahir' => 'required|before:now',
            'jumlah_permintaan' => 'required',

        ]);
        $kode = 'RD/'.now()->format('dmy') .'00'.PermintaanDarah::count() +1;
        $permintaan = PermintaanDarah::create([
            'petugas_id' => $request->user() ? $request->user()->id : null,
            'gol_darah_id' => $request->golongan_darah,
            'kode_registrasi' => $kode,
            'nama' => $request->nama,
            'tanggal_lahir' => $request->tanggal_lahir,
            'jumlah_permintaan' => $request->jumlah_permintaan,
            'keterangan' => $request->keterangan,
        ]);
    }

    public function update_permintaan(Request $request){

        $permintaan = PermintaanDarah::findOrFail($request->id);
        $permintaan->update([
            'petugas_id' => $request->user() ? $request->user()->id : null,
            'gol_darah_id' => $request->golongan_darah ? $request->golongan_darah : $permintaan->gol_darah_id,
            'nama' => $request->nama,
            'tanggal_lahir' => $request->tanggal_lahir,
            'jumlah_permintaan' => $request->jumlah_permintaan,
            'keterangan' => $request->keterangan,
        ]);
    }

    public function delete_permintaan(Request $request){
        $permintaan = PermintaanDarah::findOrFail($request->id);
        $permintaan->delete();
    }
}
