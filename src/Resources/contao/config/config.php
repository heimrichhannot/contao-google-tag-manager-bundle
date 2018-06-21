<?php

/**
 * Hooks
 */
$GLOBALS['TL_HOOKS']['generatePage']['huh.google-tag-manager-bundle']      = ['huh.google_tag_manager.listener.hooks', 'generatePage'];
$GLOBALS['TL_HOOKS']['replaceInsertTags']['huh.google-tag-manager-bundle'] = ['huh.google_tag_manager.listener.insert_tags', 'onReplaceInsertTags'];
