<?php

namespace App\Http\Middleware;

use App\Models\GolDarah;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     */
    public function version(Request $request): string|null
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @return array<string, mixed>
     */
    public function share(Request $request): array
    {
        $gol = GolDarah::all();
        $dari = Carbon::now()->startOfMonth()->format('Y-m-d');

                // Mendapatkan tanggal akhir bulan ini
        $sampai = Carbon::now()->endOfMonth()->format('Y-m-d');
        return array_merge(parent::share($request), [
            'auth' => [
                'user' => $request->user(),
            ],
            'golongan' => $gol,
            'dari' => $dari,
            'sampai' => $sampai,
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}