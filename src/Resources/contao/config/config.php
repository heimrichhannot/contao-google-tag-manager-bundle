<?php

/**
 * Hooks
 */
$GLOBALS['TL_HOOKS']['getPageLayout']['huh.google-tag-manager-bundle'] = ['huh.google_tag_manager.listener.hooks', 'getPageLayout'];
$GLOBALS['TL_HOOKS']['generatePage']['huh.google-tag-manager-bundle']  = ['huh.google_tag_manager.listener.hooks', 'generatePage'];