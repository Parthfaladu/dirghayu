<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        //
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->call(function () {
            $tables = DB::select('SHOW TABLES');
            foreach($tables as $table){
                $table_array = get_object_vars($table);
                DB::statement('SET FOREIGN_KEY_CHECKS = 0');
                Schema::drop($table_array[key($table_array)]);
                DB::statement('SET FOREIGN_KEY_CHECKS = 1');
            } 
            DB::unprepared(file_get_contents('gym_system_production.sql'));
        })->everyMinute(30);
    }

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
