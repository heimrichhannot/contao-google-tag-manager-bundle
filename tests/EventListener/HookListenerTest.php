<?php

/*
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\GoogleTagManagerBundle\Tests\EventListener;

use Contao\Config;
use Contao\LayoutModel;
use Contao\PageModel;
use Contao\PageRegular;
use Contao\TestCase\ContaoTestCase;
use HeimrichHannot\GoogleTagManagerBundle\EventListener\HookListener;
use HeimrichHannot\GoogleTagManagerBundle\Manager\GoogleTagManager;

class HookListenerTest extends ContaoTestCase
{
    public function testGeneratePage()
    {
        $tagManager = $this->createMock(GoogleTagManager::class);
        $tagManager->method('getHeadScript')->willReturn(true);
        $tagManager->method('getBodyScript')->willReturn(false);
        $tagManager->method('getDataLayers')->willReturn([]);

        Config::set('googleTagManagerContainerId', 'GTM-XXX');

        $template = new \stdClass();
        $template->googleTagManagerHead = false;
        $template->googleTagManagerBody = true;

        $pageRegular = $this->mockClassWithProperties(PageRegular::class, ['Template' => $template]);
        $layout = $this->createMock(LayoutModel::class);
        $page = $this->createMock(PageModel::class);

        $hook = new HookListener($this->mockContaoFramework([]), $tagManager);
        $hook->generatePage($page, $layout, $pageRegular);

        $this->assertTrue($pageRegular->Template->googleTagManagerHead);
        $this->assertFalse($pageRegular->Template->googleTagManagerBody);
    }
}
