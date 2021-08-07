<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\ClientPage;
use Inertia\Inertia;

class ClientPageController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, $slug = '/')
    {
        // $page = ClientPage::whereSlug($slug)->first();

        seo()->title('Erkade');
        seo()->description('Description of Erkade');
        seo()->add(
            \romanzipp\Seo\Structs\Link::make()
                ->attr('rel', 'icon')
                ->attr('href', 'https://www.deprakoso.site/img/logo.png')
        );

        // return Inertia::render('ClientPage/App',['page_attr' => $page]);
        // ->with('page', $page);
        return Inertia::render('ClientPage/Routes');

        // return View::make('pages.index')->with('page', $page);
    }
}
