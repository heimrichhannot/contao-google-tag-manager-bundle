<?php

/*
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

namespace HeimrichHannot\GoogleTagManagerBundle\DataLayer;

interface DataLayerInterface
{
    /**
     * Set the tag content value.
     *
     * @param array
     */
    public function setContent(array $content);

    /**
     * Get the tag content value.
     *
     * @return array
     */
    public function getContent();

    /**
     * Check if content is set.
     *
     * @return bool
     */
    public function hasContent();
}
