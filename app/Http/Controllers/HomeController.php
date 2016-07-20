<?php

namespace App\Http\Controllers;

use Mail;
use Response;
use App\Order;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function order(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'phone' => 'required_without:email',
            'email' => 'email|required_without:phone',
        ]);

        if ($validator->fails()) {
            return Response::json($validator->errors()->all(), 400);
        }

        Mail::send('emails.order', ['request' => $request], function ($m) use ($request) {
            $m->to(env('MAIL_TO', 'i.i.babko@gmail.com'))->subject('Заказ');
        });

        Order::create($request->only('phone', 'email'));

        return Response::json([], 200);
    }

    public function email(Request $request)
    {
        $validator = \Validator::make($request->all(), [
            'email' => 'required|email',
            'message' => 'required',
        ]);

        if ($validator->fails()) {
            return Response::json($validator->errors()->all(), 400);
        }

        Mail::send('emails.feedback', ['request' => $request], function ($m) use ($request) {
            $m->from($request->email, 'Piknichok.ml');
            $m->to(env('MAIL_TO', 'i.i.babko@gmail.com'))->subject('Письмо от клиента');
        });

        return Response::json([], 200);
    }
}
