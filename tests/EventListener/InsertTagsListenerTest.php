<?php

/*
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\GoogleTagManagerBundle\Tests\EventListener;

use Contao\TestCase\ContaoTestCase;
use HeimrichHannot\GoogleTagManagerBundle\EventListener\InsertTagsListener;
use HeimrichHannot\GoogleTagManagerBundle\Manager\GoogleTagManager;

class InsertTagsListenerTest extends ContaoTestCase
{
    public function testOnReplaceInsertTags()
    {
        $tagManager = $this->createMock(GoogleTagManager::class);
        $tagManager->method('getHeadScript')->willReturn(true);
        $tagManager->method('getBodyScript')->willReturn(false);
        $tagManager->method('getDataLayers')->willReturn([]);

        $insertTagListener = new InsertTagsListener($tagManager);

        $this->assertTrue($insertTagListener->onReplaceInsertTags('googletagmanagerhead::GTM-XXX|uncached'));
        $this->assertFalse($insertTagListener->onReplaceInsertTags('{{googletagmanagerbody::GTM-XXX|uncached}}'));
        $this->assertFalse($insertTagListener->onReplaceInsertTags('googletagmanagerbody::GTM-XXX'));
    }
}
