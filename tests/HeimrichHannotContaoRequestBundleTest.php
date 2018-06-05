<?php

/*
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\GoogleTagManagerBundle\Tests;

use HeimrichHannot\GoogleTagManagerBundle\DependencyInjection\GoogleTagManagerExtension;
use HeimrichHannot\GoogleTagManagerBundle\HeimrichHannotContaoGoogleTagManagerBundle;
use PHPUnit\Framework\TestCase;

class HeimrichHannotContaoRequestBundleTest extends TestCase
{
    public function testGetContainerExtension()
    {
        $bundle = new HeimrichHannotContaoGoogleTagManagerBundle();

        $this->assertInstanceOf(GoogleTagManagerExtension::class, $bundle->getContainerExtension());
    }
}
