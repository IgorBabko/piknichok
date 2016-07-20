<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index()
    {
        return view('index');
    }

    public function order(Request $request)
    {
        $this->validate([
            'email' => 'email'
        ]);

        Order::create($request->only('name', 'email'));
    }

    public function email(Request $request)
    {
        Mail::send('emails.webinar', [], function ($m) use ($request) {
            $m->from();
            $m->to(env('MAIL_TO', 'i.i.babko@gmail.com'))->subject('Piknichok');
        });
    }
}
