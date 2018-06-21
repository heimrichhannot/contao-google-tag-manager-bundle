<?php

/*
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\GoogleTagManagerBundle\Tests\Manager;

use Contao\System;
use Contao\TestCase\ContaoTestCase;
use HeimrichHannot\GoogleTagManagerBundle\DataLayer\DataLayer;
use HeimrichHannot\GoogleTagManagerBundle\Manager\GoogleTagManager;

class GoogleTagManagerTest extends ContaoTestCase
{
    /**
     * {@inheritdoc}
     */
    public function setUp(): void
    {
        parent::setUp();

        if (!defined('TL_ROOT')) {
            \define('TL_ROOT', __DIR__);
        }

        $fs = new \Symfony\Component\Filesystem\Filesystem();
        $fs->mkdir($this->getTempDir().'/var/cache/');

        $container = $this->mockContainer();

        // twig
        $loader = new \Twig_Loader_Filesystem(__DIR__.'/../../src/Resources/views/');
        $loader->addPath(__DIR__.'/../../src/Resources/views/', 'HeimrichHannotContaoGoogleTagManager');
        $twig = new \Twig_Environment($loader, ['cache' => $this->getTempDir().'/var/cache/']);
        $container->set('twig', $twig);

        System::setContainer($container);
    }

    public function testRegisterDataLayer()
    {
        $tagManager = new GoogleTagManager();

        $dataLayer = new DataLayer($tagManager);

        $dataLayer->setContent([]);
        $this->assertSame([], $tagManager->getDataLayers());

        $dataLayer->setContent(['test' => 'test']);
        $this->assertSame(['test' => 'test'], $tagManager->getDataLayers());
    }

    public function testGetHeadScript()
    {
        $tagManager = new GoogleTagManager();

        $this->assertSame('<!-- Google Tag Manager -->
    dataLayer = [
    {
            \'test\': \'test\',
        }];

(function(w, d, s, l, i) {
w[l] = w[l] || [];
w[l].push({
\'gtm.start\':
new Date().getTime(), event: \'gtm.js\',
});
var f = d.getElementsByTagName(s)[0],
j = d.createElement(s), dl = l != \'dataLayer\' ? \'&l=\' + l : \'\';
j.async = true;
j.src =
\'https://www.googletagmanager.com/gtm.js?id=\' + i + dl;
f.parentNode.insertBefore(j, f);
})(window, document, \'script\', \'dataLayer\', \'GTM-XXX\');
<!-- End Google Tag Manager -->', $tagManager->getHeadScript('GTM-XXX', ['test' => 'test']));
    }

    public function testGetBodyScript()
    {
        $tagManager = new GoogleTagManager();

        $this->assertSame('<!-- Google Tag Manager (noscript) -->
<noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXX"
            height="0" width="0" style="display:none;visibility:hidden">
    </iframe>
</noscript>
<!-- End Google Tag Manager (noscript) -->', $tagManager->getBodyScript('GTM-XXX'));
    }

    public function testGetLink()
    {
        $tagManager = new GoogleTagManager();

        $this->assertSame('<a href="href" class="link"
   onclick="dataLayer.push({
              \'test\': \'test\',
   });">
    text</a>', $tagManager->getLink('link', 'href', 'text', ['test' => 'test']));
    }
}
