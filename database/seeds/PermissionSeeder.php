<?php

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PermissionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        // create permissions
        Permission::create(['name' => 'add__package','guard_name' => 'web']);
        Permission::create(['name' => 'update__package','guard_name' => 'web']);
        Permission::create(['name' => 'view__package','guard_name' => 'web']);
        Permission::create(['name' => 'delete__package','guard_name' => 'web']);
        Permission::create(['name' => 'add__product','guard_name' => 'web']);
        Permission::create(['name' => 'update__product','guard_name' => 'web']);
        Permission::create(['name' => 'view__product','guard_name' => 'web']);
        Permission::create(['name' => 'delete__product','guard_name' => 'web']);
        Permission::create(['name' => 'add__product_sell','guard_name' => 'web']);
        Permission::create(['name' => 'update__product_sell','guard_name' => 'web']);
        Permission::create(['name' => 'view__product_sell','guard_name' => 'web']);
        Permission::create(['name' => 'delete__product_sell','guard_name' => 'web']);
        Permission::create(['name' => 'add__staff_member','guard_name' => 'web']);
        Permission::create(['name' => 'update__staff_member','guard_name' => 'web']);
        Permission::create(['name' => 'view__staff_member','guard_name' => 'web']);
        Permission::create(['name' => 'delete__staff_member','guard_name' => 'web']);
        Permission::create(['name' => 'add__payment','guard_name' => 'web']);
        Permission::create(['name' => 'update__payment','guard_name' => 'web']);
        Permission::create(['name' => 'view__payment','guard_name' => 'web']);
        Permission::create(['name' => 'delete__payment','guard_name' => 'web']);
        Permission::create(['name' => 'add__enquiry','guard_name' => 'web']);
        Permission::create(['name' => 'update__enquiry','guard_name' => 'web']);
        Permission::create(['name' => 'view__enquiry','guard_name' => 'web']);
        Permission::create(['name' => 'delete__enquiry','guard_name' => 'web']);
        Permission::create(['name' => 'add__customer','guard_name' => 'web']);
        Permission::create(['name' => 'update__customer','guard_name' => 'web']);
        Permission::create(['name' => 'view__customer','guard_name' => 'web']);
        Permission::create(['name' => 'delete__customer','guard_name' => 'web']);
        Permission::create(['name' => 'add__subscription','guard_name' => 'web']);
        Permission::create(['name' => 'update__subscription','guard_name' => 'web']);
        Permission::create(['name' => 'view__subscription','guard_name' => 'web']);
        Permission::create(['name' => 'delete__subscription','guard_name' => 'web']);
        Permission::create(['name' => 'add__notice','guard_name' => 'web']);
        Permission::create(['name' => 'update__notice','guard_name' => 'web']);
        Permission::create(['name' => 'view__notice','guard_name' => 'web']);
        Permission::create(['name' => 'delete__notice','guard_name' => 'web']);
        Permission::create(['name' => 'add__expense','guard_name' => 'web']);
        Permission::create(['name' => 'update__expense','guard_name' => 'web']);
        Permission::create(['name' => 'view__expense','guard_name' => 'web']);
        Permission::create(['name' => 'delete__expense','guard_name' => 'web']);
        Permission::create(['name' => 'add__invoice','guard_name' => 'web']);
        Permission::create(['name' => 'update__invoice','guard_name' => 'web']);
        Permission::create(['name' => 'view__invoice','guard_name' => 'web']);
        Permission::create(['name' => 'delete__invoice','guard_name' => 'web']);
        Permission::create(['name' => 'permission_manage','guard_name' => 'web']);

        // create roles and assign created permissions

        // this can be done as separate statements
        $role = Role::create(['name' => 'super_admin','guard_name' => 'web'])->givePermissionTo(Permission::all());
        $role = Role::create(['name' => 'manager','guard_name' => 'web'])->givePermissionTo(['add__package','update__package','view__package','delete__package','add__product','update__product','view__product','delete__product','add__product_sell','add__product_sell', 'update__product_sell', 'view__product_sell', 'add__staff_member', 'view__staff_member', 'add__payment', 'update__payment', 'view__payment', 'add__enquiry', 'update__enquiry', 'view__enquiry', 'delete__enquiry', 'add__customer', 'update__customer', 'view__customer', 'add__subscription', 'view__subscription', 'add__notice', 'update__notice', 'view__notice', 'delete__notice', 'add__expense', 'update__expense', 'view__expense', 'add__invoice', 'update__invoice', 'view__invoice']);
        $role = Role::create(['name' => 'staff','guard_name' => 'web'])->givePermissionTo(['view__package', 'add__product', 'view__product', 'add__product_sell', 'update__product_sell', 'view__product_sell', 'add__payment', 'view__payment', 'add__enquiry', 'update__enquiry', 'view__enquiry', 'delete__enquiry', 'add__customer', 'update__customer', 'view__customer', 'add__subscription', 'view__subscription', 'view__notice', 'add__invoice', 'update__invoice', 'view__invoice',]);
        $role = Role::create(['name' => 'customer','guard_name' => 'web'])->givePermissionTo(['view__product', 'view__product_sell', 'view__payment', 'view__subscription', 'view__notice', 'view__invoice',]);


        // or may be done by chaining
        // $role = Role::create(['name' => 'moderator'])
        //     ->givePermissionTo(['publish articles', 'unpublish articles']);

        // $role = Role::create(['name' => 'super-admin']);
        // $role->givePermissionTo(Permission::all());

        
    }
}  