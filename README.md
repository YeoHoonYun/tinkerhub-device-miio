# tinkerhub-device-miio

Support for Mi Home devices in [Tinkerhub](https://github.com/tinkerhub/tinkerhub).
This module supports most of the Mi Home devices such as the Mi Air Purifier,
Mi Robot Vacuum and Mi Smart Socket. These devices are commonly
part of what Xiaomi calls the Mi Ecosystem which is branded as MiJia.

* **Latest version**: 0.1.0
* **Status**: Stable

## Installation and use

When running [tinkerhubd](https://github.com/tinkerhub/tinkerhub-daemon) install
via:

```
$ tinkerhubd install device-miio
```

Using NPM:

```
$ npm install tinkerhub-device-miio
```

## Supported devices

* Air Purifiers (1, 2 and Pro)
* Mi Humidifier
* Mi Smart Socket Plug and Power Strips
* Mi Robot Vacuum (V1 and V2)
* Mi Smart Home Gateway (Aqara) and accessories - switches, sensors, etc
* Philips Light Bulb and Eyecare Lamp
* Yeelights (White Bulb, Color Bulb, Desk Lamp and Strip)

## Authentication

Some Mi Home devices can always be connected to, but some require
authentication. Authentication is performed via tokens and the `miio` command.
See [Device management](https://github.com/aholstenson/miio/blob/master/docs/management.md)
in the [miio](https://github.com/aholstenson/miio) for information about how
to manage tokens.
