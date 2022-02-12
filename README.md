WebdriverIO Selenoid and senenoid ui Service

## Benefits of Selenoidnui-services

View the actual desktop and browser for all running tests
Unlock the session and interact with the browser being controlled as if it was local
View all session logs for increased debugging

## Installation

Before starting make sure you have Docker installed

The easiest way is to keep wdio-selenoidnui-service as a devDependency in your package.json.
```
{
    "devDependencies": {
        "wdio-selenoidnui-service": "^1.0.0"
    }
}
```

You can simple do it by:
```
npm install wdio-selenoidnui-service --save-dev
```
or

yarn add wdio-selenoidnui-service --dev

Instructions on how to install WebdriverIO can be found here.

## Configuration

### Service configuration

In order to use the service you need to add selenoid to your service array and change the default wdio path prop to match selenoid
```
export.config = {
    services: [
        ['selenoidnui']
    ],
};
```

Capabilities configuration

After adding the service, you will need to add the selenoid:options prop to your browser capabilities. Open wdio.conf and adjust the capabilities array to include the following:
```
export.config = {
    capabilities: [
        {
            browserName: 'chrome',
            'selenoid:options': {
                enableVnc: true,
            },
        },
    ],
};
```

## Where to check

### For selenoid 
http://localhost:4444/#/

## For senoidui
http://localhost:8080/#/

![image](https://user-images.githubusercontent.com/99498502/153711208-aeee99df-1eb3-4a48-ad21-20d212a6e0c8.png)


More information about Selenoidnui-services can be found here

## Options

The following options can be added to the service options. They are all optional

### skipAutoPullImage

On startup, skip pulling the version of selenoid-ui required if it's not already available locally

Type: Boolean

Default: false

### selenoidContainerName

The name of the selenoid service container name to connect to

Type: String

Default: wdio_selenoid

### selenoidUiContainerName

The name this service should give to the created Selenoid-UI container

Type: String

Default: wdio_selenoidui

### selenoidUiVersion

If you want to always use a specific version of Selenoid-service, you can fix the version here. If unset, this service will use the image tagged with latest-release

Type: String

Default: latest-release

### port

Port which the Selenoid-service container should use to accept incoming connections

Type: Number

Default: 8080

### selenoidPort

The port of the running Selenoid instance for Selenoid-UI to connect to

Type: Number

Default: 4444

## Warning

The following options are experimental and can cause unexpected problems. Use with caution

### dockerArgs

Any additional arguments you want to pass to docker run when starting the container. docker run options

Type: String[]

Default: null

selenoidUiArgs

Any additional arguments you want to pass to selenoid-ui when starting the container. docs

Type: String[]

Default: null

### Example Options
```
export.config = {
    path: 'wd/hub'
    services: [
        [
            'selenoidnui', { 
                skipAutoPullImage: 'false,
                selenoidContainerName: 'wdio_selenoid',
                selenoidUiContainerName: 'wdio_selenoidui',
                selenoidUiVersion: 'latest-release',
                port: 8080,
                selenoidPort: 4444
            },
        ],
    ],
};
```

## Troubleshooting

Service cannot connect to Selenoid

Ensure you have added wdio-selenoidnui-service to packages.json

I cannot access the VNC session from the UI

Ensure you have added the required selenoid:options to your browser capabilities to enableVNC
