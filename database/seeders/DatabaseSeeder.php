<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // \App\Models\User::factory(10)->create();

        \App\Models\User::factory()->create([
            'name' => 'admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('password')
        ]);
        DB::table('gol_darahs')->insert(
            [
            ['golongan_darah' =>'A'],
            ['golongan_darah' =>'A+'],
            ['golongan_darah' =>'B'],
            ['golongan_darah' =>'B+'],
            ['golongan_darah' =>'AB'],
            ['golongan_darah' =>'AB+'],
            ['golongan_darah' =>'O'],
            ['golongan_darah' =>'O+'],
        ]
            );

            DB::table('stok_darahs')->insert([
                ['darah_id' => 1,
                'stok' => 0
            ],
                ['darah_id' => 2,
                'stok' => 0
            ],
                ['darah_id' => 3,
                'stok' => 0
            ],
                ['darah_id' => 4,
                'stok' => 0
            ],
                ['darah_id' => 5,
                'stok' => 0
            ],
                ['darah_id' => 6,
                'stok' => 0
            ],
                ['darah_id' => 7,
                'stok' => 0
            ],
                ['darah_id' => 8,
                'stok' => 0
            ],
        ]);
    }
}