<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\ClientPage;

class APIClientPageController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $slug = $request->slug!=='undefined' ? $request->slug : '/';
        $page = ClientPage::whereSlug($slug)->first();
        return response()->json($page, 200);
    }
}
