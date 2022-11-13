<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{

    protected $table = "student";
    
    protected $fillable = [
        "first_name",
        "last_name",
        "email",
        "phone",
        "favorite_sport",
        "date_of_birth",
        "status"
    ];
    use HasFactory;
}
