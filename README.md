# barcode-api

[![](https://images.microbadger.com/badges/version/joneug/barcode-api.svg)](https://hub.docker.com/r/joneug/barcode-api) [![](https://images.microbadger.com/badges/image/joneug/barcode-api.svg)](https://microbadger.com/images/joneug/barcode-api)

This repository contains a Node.js application providing a barcode API using the library [bwip-js](https://github.com/metafloor/bwip-js).

## Image Variants

The application is built regularly using automated builds on Docker Hub. The image tag specifies the bwip-js version.

## Run

Start the application:

```sh
$ docker run --rm -it -p 8080:8080 joneug/barcode-api:2.0.6
```

Access the API using your browser. Specify the barcode type using the parameter `bcid` and the text to encode using the parameter `text`. More information on supported barcode types can be found [in the Wiki](https://github.com/metafloor/bwip-js/wiki) of bwip-js.

```
http://localhost:8080/?bcid=code128&text=1234567890
```
