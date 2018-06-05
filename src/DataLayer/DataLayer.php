<?php

/*
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\GoogleTagManager\DataLayer;

use HeimrichHannot\GoogleTagManagerBundle\Manager\GoogleTagManager;
use HeimrichHannot\GoogleTagManagerBundle\Tag\DataLayerInterface;

class DataLayer implements DataLayerInterface
{
    /**
     * The tag value.
     *
     * @var array
     */
    protected $content;

    /**
     * @var GoogleTagManager
     */
    protected $manager;

    /**
     * initialize the object.
     *
     * @param GoogleTagManager $manager
     */
    public function __construct(GoogleTagManager $manager)
    {
        $this->manager = $manager;
        $this->manager->registerDataLayer($this);
    }

    /**
     * The tag content value.
     *
     * @param array
     */
    public function setContent(array $content)
    {
        $this->content = $content;
    }

    /**
     * Check if content is set.
     *
     * @return bool
     */
    public function hasContent()
    {
        return empty($this->getContent());
    }

    /**
     * Get the tag content value.
     *
     * @return array
     */
    public function getContent(): array
    {
        return $this->content;
    }
}
