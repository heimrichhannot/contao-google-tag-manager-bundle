# Contao Google Tag Manager Bundle

![](https://img.shields.io/packagist/v/heimrichhannot/contao-google-tag-manager-bundle.svg)
![](https://img.shields.io/packagist/dt/heimrichhannot/contao-google-tag-manager-bundle.svg)
[![](https://img.shields.io/travis/heimrichhannot/contao-google-tag-manager-bundle/master.svg)](https://travis-ci.org/heimrichhannot/contao-google-tag-manager-bundle/)
[![](https://img.shields.io/coveralls/heimrichhannot/contao-google-tag-manager-bundle/master.svg)](https://coveralls.io/github/heimrichhannot/contao-google-tag-manager-bundle)

## Setup

1. Install with composer or contao manager

        composer require heimrichhannot/contao-google-tag-manager-bundle

1. Update your database

1. Adjust your fe_page template
    * Add `<?= $this->googleTagManagerHead ?>` to your head section
    * Add `<?= $this->googleTagManagerBody ?>` to before the body closing tag

## Advanced usage

### add data layer variables to a page

`System::getContainer()->get('huh.google_tag_manager.data_layer')->setContent(['key' => 'value']);`

### add an a tag with data layer event handler

`System::getContainer()->get('huh.google_tag_manager.tag_manager')->getLink(class, link, linkText, ['event': 'button1-click'])`

This will output: `<a href="link" class="class" onclick="dataLayer.push({'event': 'button1-click'});">linkText</a>`