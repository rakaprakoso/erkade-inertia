<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class DashboardController extends Controller
{
    public function __invoke()
    {
        seo()->title('Erkade');
        seo()->description('Description of Erkade');
        seo()->add(
            \romanzipp\Seo\Structs\Link::make()
                ->attr('rel', 'icon')
                ->attr('href', 'https://www.deprakoso.site/img/logo.png')
        );

        return Inertia::render('Dashboard/Index');
    }
}
