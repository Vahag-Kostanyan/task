<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CrudController extends Controller
{
    public function create_student(Request $request) {
        $validator = Validator::make($request->all(), [
            "email" => "required|unique:users",
            "first_name" => "required|min:2|max:30",
            "last_name" => "required|min:2|max:30",
            "favorite_sport" => "required|min:2|max:30",
            "date_of_birth" => "required|date|max:30",
            "phone" => "required|min:9|max:14|unique:users",
        ]);

        if($validator->fails()){
            return[
                "status" => "error",
                "data" => $validator->errors()
            ];
        }


        dd(123);
    }

    public function edit_student() {
        dd(456);
    }
    public function get_student(){
        dd(789);
    }
}
