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
            "email" => "required|email|unique:student",
            "first_name" => "required|min:2|max:30",
            "last_name" => "required|min:2|max:30",
            "favorite_sport" => "required|min:2|max:30",
            "date_of_birth" => "required|date|max:30",
            "phone" => "required|min:8|max:9|regex:/^[0-9]+$/|unique:student",
        ]);

        if ($validator->fails()) {
            return [
                "status" => "error",
                "data" => $validator->errors()
            ];
        }

        if ($request->input("date_of_birth") > "2004-12-31" || $request->input("date_of_birth") < "1972-01-01") {
            return response()->json([
                "status" => "error",
                "data" => [
                    "date_of_birth" => ["the student can be between 18 and 50 years old"]
                ]
            ]);
        }

        Student::create($request->all());

        return response()->json([
            'status' => "ok",
            "success" => "user successfuly created"
        ]);
    }

    public function edit_student(Request $request)
    {
        $validator = Validator::make($request->all(), [
            "email" => "required|email",
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


        if ($request->input("date_of_birth") > "2004-12-31" || $request->input("date_of_birth") < "1972-01-01") {
            return response()->json([
                "status" => "error",
                "data" => [
                    "date_of_birth" => ["the student can be between 18 and 50 years old"]
                ]
            ]);
        }

        $students = Student::where("id", "!=", $request->input("id"))->get();

        foreach ($students as $student) {
            if ($student->email == $request->input("email")) {
                return response()->json([
                    "status" => "error",
                    "data" => [
                        "email" => ["The email has already been taken."]
                    ]
                ]);
            } elseif ($student->phone == $request->input("phone")) {
                return response()->json([
                    "status" => "error",
                    "data" => [
                        "phone" => ["The phone has already been taken."]
                    ]
                ]);
            }
        }

        

        $student = Student::where("id", $request->input("id"))->first();

        $student->first_name = $request->input("first_name");
        $student->last_name = $request->input("last_name");
        

        if($student->save()){
            return response()->json([
                "status" => "ok",
                "student" => $student,
                "success" => "user updated successfuly"
            ]);
        }
    }
    public function get_students()
    {
        $students = Student::all();

        return response()->json([
            "status" => "ok",
            "data" => $students
        ]);
    }

    public function delete_student($id)
    {
        $student = Student::find($id)->delete();

        return response()->json([
            "status" => "ok",
            "id" => $id
        ]);
    }

    public function get_student($id)
    {
        $student = Student::where("id", $id)->first();

        return response()->json([
            "status" => "ok",
            "data" => $student
        ]);
    }
}
