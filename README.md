# IILQ

This website is built using:

- [Hugo](https://gohugo.io/) as an SSG.
- [Netlify CMS](https://www.netlifycms.org/) as a CMS.
- [Netlify](https://www.netlify.com/) for hosting.

## Setup

1) Clone this repo

2) Install dependencies using ```npm install```.

3) Start the Hugo server using ```hugo server```.

## Assets

- CSS and JS is compiled and minified directly on change using Prepros. If you want to move this to the Gulp pipeline, feel free to do it. You can see all the paths for compilation in ```themes/prepros-6.config```.

- Images are optimized and generated in different sizes by the Gulp pipeline. You can use ```gulp image-resize``` to do so.

## Deployment

This website is deployed on every push to the master branch, thanks to the Netlify CD. If you want to simulate a deployment on Netlify on local, you can use the ```gulp prod``` command, which is the one used on Netlify.

## CMS

The config for Netlify CMS is in ```static/admin/config.yml```. Currently, the only things that can be changed are articles (update, delete, create). If the website would become bilingual, the ```translationKey``` is the field used to match an article in FR and EN (or whatever language).

## Git Workflow

Please submit a PR to this repo to make your change.