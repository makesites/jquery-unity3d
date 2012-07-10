# $.unity3d

One-liner to embed / interact with unity files using jQuery 

## Usage 

Target on the container you want the unity3d file embedded and calling the plugin the traditional way: 
```
$(target).unity3d(); 
```
the unity3d() method accepts the following options:

* **width** - the width of the embedded file (default: 600)
* **height** - the height of the embedded file (default: 450)
* **file** - the location of the embedded file (default: "WebPlayer.unity3d")
* **params** - an object containing extra parameters for the embed code. Currently only "disableContextMenu" is supported...

if no options are passed the default ones will be used

## API 

In addition, there are a set number of methods to interact with the unity3d file: 

* **$.unity3d.get(id)** : Returns the unity3d object with the specified id


