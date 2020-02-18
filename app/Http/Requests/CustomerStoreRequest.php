<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CustomerStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            "firstName"     => "required",
            "lastName"      => "required",
            "gender"        => "required",
            "phone"         => "required",
            "address"       => "required",
            "packageId"     => "required",
            "staffMemberId" => "required",
            "amount"        => "required",
            "startDate"     => "required",
            "duration"      => "required",
            "trailDays"     => "required",
            "email"         => "required|email",
            "password"      => "required|min:6"
        ];
    }
}
