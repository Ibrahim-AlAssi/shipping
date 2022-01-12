<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Users;
use Illuminate\Support\Facades\hash;

class Usercontroller extends Controller
{
    function login(Request $req){
        $user=  Users::where(['email'=>$req->email])->first();
        if(!$user ||!Hash::check($req->password,$user->password)){
             return"email or password not match";
        }
        else{ 
            $req->session()->put('user',$user);
            return ('welcome');
        }
     }

     function SignUp(Request $req){
        $user= new Users;
        $user->name=$req->name;
        $user->email=$req->email;
        $user->password=Hash::make($req->password);
        $user->save();
        return ('datasaved');
    }


    
}
