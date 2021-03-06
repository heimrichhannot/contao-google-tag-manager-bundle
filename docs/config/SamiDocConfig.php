<?php
/**
 * Copyright (c) 2018 Heimrich & Hannot GmbH
 *
 * @license LGPL-3.0-or-later
 */

use Sami\Sami;
use Symfony\Component\Finder\Finder;

$iterator = Finder::create()->files()->name('*.php')->exclude('Resources')->exclude('ContaoManager')->exclude('HeimrichHannotContaoGoogleTagManagerBundle')->in('./src');
return new Sami($iterator, [
    'title'     => 'Contao Google Tag Manager Bundle',
    'build_dir' => __DIR__ . '/../build',
    'cache_dir' => __DIR__ . '/../cache',
]);