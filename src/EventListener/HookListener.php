<?php

/*
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\GoogleTagManagerBundle\EventListener;

use Contao\Config;
use Contao\LayoutModel;
use Contao\PageModel;
use Contao\PageRegular;

class HookListener
{
    /**
     * Modify the page object.
     *
     * @param PageModel   $page
     * @param LayoutModel $layout
     * @param PageRegular $pageRegular
     */
    public function generatePage(PageModel $page, LayoutModel $layout, PageRegular $pageRegular)
    {
        $containerId = '';

        if (null !== Config::get('googleTagManagerContainerId')) {
            $containerId = Config::get('googleTagManagerContainerId');
        }

        $pageRegular->Template->googleTagManagerHead = '{{googletagmanagerhead::'.$containerId.'|uncached}}';
        $pageRegular->Template->googleTagManagerBody = '{{googletagmanagerbody::'.$containerId.'|uncached}}';
    }
}
