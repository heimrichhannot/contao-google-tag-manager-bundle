<?php

/*
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\GoogleTagManagerBundle\EventListener;

use Contao\Config;
use Contao\CoreBundle\Framework\ContaoFrameworkInterface;
use Contao\LayoutModel;
use Contao\PageModel;
use Contao\PageRegular;
use HeimrichHannot\GoogleTagManagerBundle\Manager\GoogleTagManager;

class HookListener
{
    /**
     * @var ContaoFrameworkInterface
     */
    private $framework;

    /**
     * @var GoogleTagManager
     */
    private $tagManager;

    /**
     * Constructor.
     *
     * @param ContaoFrameworkInterface $framework
     */
    public function __construct(ContaoFrameworkInterface $framework, GoogleTagManager $tagManager)
    {
        $this->framework = $framework;
        $this->tagManager = $tagManager;
    }

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

        $pageRegular->Template->googleTagManagerHead = $this->tagManager->getHeadScript($containerId, $this->tagManager->getDataLayers());
        $pageRegular->Template->googleTagManagerBody = $this->tagManager->getBodyScript($containerId);
    }
}
