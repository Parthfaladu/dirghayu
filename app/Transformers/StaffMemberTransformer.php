<?php

namespace App\Transformers;

use League\Fractal\TransformerAbstract;
use App\User;

class StaffMemberTransformer extends TransformerAbstract
{
	public function transform(User $user)
	{
		return [
	        "memberId" 			=> $user->id,
	        "email" 			=> $user->email,
	        "dob" 	 	 		=> $user->dob,
	        "gender" 	 		=> $user->gender,
	        "firstName" 		=> $user->first_name,
	        "lastName"  		=> $user->last_name,
	        "phone"   	 		=> $user->phone,
	        "address" 	 		=> $user->address,
	        "photoUrl"  		=> $user->photo_url,
	        "branchId"  		=> $user->branch_id,
	        "createdAt" 		=> $user->created_at,
	        "updatedAt" 		=> $user->updated_at,
	        "roleId"			=> $user->roles[0]->id,
	        "roleName"			=> $user->roles[0]->name,
	        
		];
	}
}