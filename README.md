# Contao Google Tag Manager Bundle

![](https://img.shields.io/packagist/v/heimrichhannot/contao-google-tag-manager-bundle.svg)
![](https://img.shields.io/packagist/dt/heimrichhannot/contao-google-tag-manager-bundle.svg)
[![](https://img.shields.io/travis/heimrichhannot/contao-google-tag-manager-bundle/master.svg)](https://travis-ci.org/heimrichhannot/contao-google-tag-manager-bundle/)
[![](https://img.shields.io/coveralls/heimrichhannot/contao-google-tag-manager-bundle/master.svg)](https://coveralls.io/github/heimrichhannot/contao-google-tag-manager-bundle)

## Implementation

### To implement Google Tag Manager on your website

1. Set your google tag manager container id under the contao backend settings.

2. Copy the following code snippet and paste it as close to the opening `<head>` tag as possible on every page of your website.
`<?= $this->googleTagManagerHead ?>`

3. Copy the following code snippet and paste it as close to the opening `<body>` tag as possible on every page of your website.
`<?= $this->googleTagManagerBody ?>`

### add data layer variables to a page

`System::getContainer()->get('huh.google_tag_manager.data_layer')->setContent(['key' => 'value']);`

### add an a tag with data layer event handler

`System::getContainer()->get('huh.google_tag_manager.tag_manager')->getLink(class, link, linkText, ['event': 'button1-click'])`

This will output: `<a href="link" class="class" onclick="dataLayer.push({'event': 'button1-click'});">linkText</a>`