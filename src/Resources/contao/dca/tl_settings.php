<?php

$dc = &$GLOBALS['TL_DCA']['tl_settings'];

/**
 * Palettes
 */
$dc['palettes']['default'] = str_replace('{chmod_legend', '{googleTagManagerContainerId_legend},googleTagManagerContainerId;{chmod_legend', $dc['palettes']['default']);

/**
 * Fields
 */
$arrFields = [
    'googleTagManagerContainerId' => [
        'label'     => &$GLOBALS['TL_LANG']['tl_settings']['googleTagManagerContainerId'],
        'exclude'   => true,
        'inputType' => 'text',
        'eval'      => ['mandatory' => false],
        'sql'       => "varchar(64) NOT NULL default ''",
    ],
];

$dc['fields'] = array_merge($dc['fields'], $arrFields);