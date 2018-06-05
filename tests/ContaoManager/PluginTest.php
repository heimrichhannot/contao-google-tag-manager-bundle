<?php

/*
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\GoogleTagManagerBundle\Tests\ContaoManager;

use Contao\CoreBundle\ContaoCoreBundle;
use Contao\ManagerPlugin\Bundle\Config\BundleConfig;
use Contao\ManagerPlugin\Bundle\Parser\DelegatingParser;
use Contao\TestCase\ContaoTestCase;
use HeimrichHannot\GoogleTagManagerBundle\ContaoManager\Plugin;
use HeimrichHannot\GoogleTagManagerBundle\HeimrichHannotContaoGoogleTagManagerBundle;

/**
 * Test the plugin class
 * Class PluginTest.
 */
class PluginTest extends ContaoTestCase
{
    /**
     * Tests the object instantiation.
     */
    public function testInstantiation()
    {
        static::assertInstanceOf(Plugin::class, new Plugin());
    }

    /**
     * Tests the bundle contao invocation.
     */
    public function testGetBundles()
    {
        $plugin = new Plugin();

        /** @var BundleConfig[] $bundles */
        $bundles = $plugin->getBundles(new DelegatingParser());

        static::assertCount(1, $bundles);
        static::assertInstanceOf(BundleConfig::class, $bundles[0]);
        static::assertSame(HeimrichHannotContaoGoogleTagManagerBundle::class, $bundles[0]->getName());
        static::assertSame([ContaoCoreBundle::class], $bundles[0]->getLoadAfter());
    }
}
