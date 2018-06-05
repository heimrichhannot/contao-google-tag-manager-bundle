<?php

/*
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\GoogleTagManagerBundle\Tests\DataLayer;

use Contao\TestCase\ContaoTestCase;
use HeimrichHannot\GoogleTagManagerBundle\DataLayer\DataLayer;
use HeimrichHannot\GoogleTagManagerBundle\Manager\GoogleTagManager;

class DataLayerTest extends ContaoTestCase
{
    public function testSetContent()
    {
        $tagManager = $this->createMock(GoogleTagManager::class);
        $tagManager->method('registerDataLayer');

        $dataLayer = new DataLayer($tagManager);
        $dataLayer->setContent(['test' => 'test']);

        $this->assertTrue($dataLayer->hasContent());
        $this->assertSame(['test' => 'test'], $dataLayer->getContent());
    }
}
