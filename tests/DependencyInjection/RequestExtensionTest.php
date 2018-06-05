<?php

/*
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\GoogleTagManagerBundle\Tests\DependencyInjection;

use Contao\TestCase\ContaoTestCase;
use HeimrichHannot\GoogleTagManagerBundle\DependencyInjection\GoogleTagManagerExtension;
use Symfony\Component\DependencyInjection\ContainerBuilder;
use Symfony\Component\DependencyInjection\ParameterBag\ParameterBag;

class RequestExtensionTest extends ContaoTestCase
{
    /**
     * {@inheritdoc}
     */
    protected function setUp()
    {
        parent::setUp();
        $container = new ContainerBuilder(new ParameterBag(['kernel.debug' => false]));
        $extension = new GoogleTagManagerExtension();
        $extension->load([], $container);
    }

    /**
     * Tests the object instantiation.
     */
    public function testCanBeInstantiated()
    {
        $extension = new GoogleTagManagerExtension();
        $this->assertInstanceOf(GoogleTagManagerExtension::class, $extension);
    }
}
