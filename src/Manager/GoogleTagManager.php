<?php

/*
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\GoogleTagManagerBundle\Manager;

use Contao\System;
use HeimrichHannot\GoogleTagManagerBundle\Tag\DataLayerInterface;

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
        $dataLayer = [];

        foreach ($this->dataLayer as $dataLayer) {
            if (!$dataLayer->hasContent()) {
                continue;
            }

            $dataLayer[] = $dataLayer->getContent();
        }

        return $dataLayer;
    }

    public function getHeadScript(string $containerId, array $dataLayerValues = [])
    {
        return System::getContainer()->get('twig')->render('headScript', ['containerId' => $containerId, 'dataLayerValues' => $dataLayerValues]);
    }

    public function getBodyScript(string $containerId)
    {
        return System::getContainer()->get('twig')->render('bodyScript', ['containerId' => $containerId]);
    }

    public function getLink(string $class, string $link, string $linkText, array $values)
    {
        return System::getContainer()->get('twig')->render('link', ['class' => $class, 'link' => $link, 'linkText' => $linkText, 'values' => $values]);
    }
}
