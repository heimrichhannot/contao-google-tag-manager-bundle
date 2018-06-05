<?php

/*
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\GoogleTagManagerBundle\Manager;

use Contao\System;
use HeimrichHannot\GoogleTagManagerBundle\DataLayer\DataLayerInterface;

class GoogleTagManager
{
    /**
     * @var DataLayerInterface[]
     */
    private $dataLayer = [];

    public function registerDataLayer(DataLayerInterface $dataLayer)
    {
        $this->dataLayer[get_class($dataLayer)] = $dataLayer;
    }

    /**
     * Get the generated tags as array.
     *
     * @return array
     */
    public function getDataLayers()
    {
        $dataLayers = [];

        foreach ($this->dataLayer as $dataLayer) {
            if (!$dataLayer->hasContent()) {
                continue;
            }

            $dataLayers = array_merge($dataLayers, $dataLayer->getContent());
        }

        return $dataLayers;
    }

    public function getHeadScript(string $containerId, array $dataLayerValues = [])
    {
        return System::getContainer()->get('twig')->render('@HeimrichHannotContaoGoogleTagManager/headScript.html.twig', ['containerId' => $containerId, 'dataLayerValues' => $dataLayerValues]);
    }

    public function getBodyScript(string $containerId)
    {
        return System::getContainer()->get('twig')->render('@HeimrichHannotContaoGoogleTagManager/bodyScript.html.twig', ['containerId' => $containerId]);
    }

    public function getLink(string $class, string $link, string $linkText, array $values)
    {
        return System::getContainer()->get('twig')->render('@HeimrichHannotContaoGoogleTagManager/link.html.twig', ['class' => $class, 'link' => $link, 'linkText' => $linkText, 'values' => $values]);
    }
}
