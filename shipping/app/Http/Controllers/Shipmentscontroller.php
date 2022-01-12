<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Shipment;

class Shipmentscontroller extends Controller
{
    //
    function create(Request $req){
        $ship= new Shipment();
        $ship->user_id=$req->user_id;
        $ship->waybill=$req->waybill;
        $ship->address=$req->address;
        $ship->phone=$req->phone;    
        $ship->save();
        return ('done');
    }

    function update(Request $req){
        $ship=Shipment::find($req->id);
        $ship->user_id=$req->user_id;
        $ship->waybill=$req->waybill;
        $ship->address=$req->address;
        $ship->phone=$req->phone;
        $ship->save();
        return ('edit done');
    }
    function view(){
      //  $ship=Shipments::all();
        $ship = Shipment::orderBy("created_at")->paginate(10)->get();
        $responsee = [
            'shipments' => $ship,        
        ];
        return response($responsee, 201);
    }

    function cancel($id){
        Shipment::destroy($id);
        return("deleted");
    }


}
