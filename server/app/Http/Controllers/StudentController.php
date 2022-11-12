<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class StudentController extends Controller
{
    public function create_student(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "email" => "required|unique:student",
            "first_name" => "required|min:2|max:30",
            "last_name" => "required|min:2|max:30",
            "favorite_sport" => "required|min:2|max:30",
            "date_of_birth" => "required|date|max:30",
            "phone" => "required|min:8|max:14|regex:/^[0-9]+$/|unique:student",
        ]);

        if ($validator->fails()) {
            return [
                "status" => "error",
                "data" => $validator->errors()
            ];
        }

        Student::create($request->all());

        return response()->json([
            'status' => "ok",
        ]);
    }

    public function edit_student(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "email" => "required",
            "first_name" => "required|min:2|max:30",
            "last_name" => "required|min:2|max:30",
            "favorite_sport" => "required|min:2|max:30",
            "date_of_birth" => "required|date|max:30",
            "phone" => "required|min:8|max:14",
        ]);

        if ($validator->fails()) {
            return [
                "status" => "error",
                "data" => $validator->errors()
            ];
        }

        $students = Student::where("id", "!=", $request->input("id"))->get();

        foreach($students as $student){
            if($student->email == $request->input("email")){
                return response()->json([
                    "status" => "error",
                    "data" => [
                        "email" => ["email must be unique"]
                    ] 
                ]);
            }elseif($student->phone == $request->input("phone")){
                return response()->json([
                    "status" => "error", 
                    "data" => [
                        "phone" => ["phone must be unique"]
                    ]
                ]);
            }
        }

        $student = Student::where("id", $request->input("id"))->updated($request->all());

        return response()->json([
            "status" => "ok",
            "student" => $student
        ]);
    }
    public function get_student()
    {
        $students = Student::where("status", Student::ACTIVE)->get();

        return response()->json([
            "status" => "ok",
            "data" => $students
        ]);
    }

    public function delete_student(Request $request){
        Student::where("id", $request->input("id"))->updated([
            "status" => Student::INACTIVE
        ]);

        return response()->json([
            "status" => "ok",
            "data" => "student successfuly delated"
        ]);
    }
}
