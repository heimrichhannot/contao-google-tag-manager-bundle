<?php

/*
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\GoogleTagManagerBundle\EventListener;

use HeimrichHannot\GoogleTagManagerBundle\Manager\GoogleTagManager;

class InsertTagsListener
{
    /**
     * supported google tag manager insert tags.
     *
     * @var array
     */
    private $supportedTags = ['googletagmanagerhead', 'googletagmanagerbody'];

    /**
     * @var GoogleTagManager
     */
    private $tagManager;

    /**
     * InsertTagsListener constructor.
     *
     * @param GoogleTagManager $tagManager
     */
    public function __construct(GoogleTagManager $tagManager)
    {
        $this->tagManager = $tagManager;
    }

    /**
     * @param $tag
     *
     * @return bool|string
     */
    public function onReplaceInsertTags($tag)
    {
        $elements = explode('::', $tag);
        $key = strtolower($elements[0]);

        return $this->replaceGoogleTagManagerInsertTag($key, $elements[1]);
    }

    /**
     * @param string $insertTag
     * @param string $containerId
     *
     * @return string
     */
    private function replaceGoogleTagManagerInsertTag(string $insertTag, string $containerId)
    {
        switch ($insertTag) {
            case 'googletagmanagerhead':
                return $this->tagManager->getHeadScript($containerId, $this->tagManager->getDataLayers());
                break;
            case 'googletagmanagerbody':
                return $this->tagManager->getBodyScript($containerId);
                break;
        }

        return false;
    }
}
