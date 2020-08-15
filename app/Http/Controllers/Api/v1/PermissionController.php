<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Spatie\Permission\Models\{Permission, Role};
use App\Http\Requests\RolePermissionUpdateRequest;

class PermissionController extends Controller
{
    public function getAllRolePermission()
    {
        $allRole = Role::with('permissions')->where('name', '!=', 'super_admin')->get();

        return response()->json(["status" => "success", "data" => $allRole]);
    }
    
    public function getAllPermission()
    {
        $allPermission = Permission::get();

        return response()->json(["status" => "success", "data" => $allPermission]);
    }

    public function updateRolePermission(RolePermissionUpdateRequest $request)
    {
        $managerRole = Role::where("name", "manager")->first();
        $managerPermissions = Permission::whereIn("id", $request->get("manager"))->get();
        $managerRole->syncPermissions($managerPermissions);

        $staffRole = Role::where("name", "staff")->first();
        $staffPermissions = Permission::whereIn("id", $request->get("staff"))->get();
        $staffRole->syncPermissions($staffPermissions);

        $customerRole = Role::where("name", "customer")->first();
        $customerPermissions = Permission::whereIn("id", $request->get("customer"))->get();
        $customerRole->syncPermissions($customerPermissions);
        
        return response()->json(["status" => "success", "message" => "Successfully permissions updated."]);
    }
}