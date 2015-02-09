meteor-last-software-release-package
====================================

This package will provide a easy way to show the last deployment date to meteor.js.

# Try the [demo](http://meteor-last-software-release-package.meteor.com) which can be found on [github](https://github.com/monbro/meteor-last-software-release-package/tree/master/examples/basic)

# Dependencies

* Meteor >1.0
* copleykj:livestamp

# Installation

Use `meteor add monbro:last-software-release-date` to add the package to your meteor app

# Usage

* just include the statement at the right place wherever you want in your html, nothing else required to do

## Example for e.g. 'meteor.html'

```
<head>
  <title>basic</title>
</head>

<body>
  {{>home}}
</body>

<template name="home">
  <h1>Demo Page Headline<br><small>Last software release was {{>deployDate}} by <a class="btn btn-default btn-xs" target="_blank" href="http://twitter.com/monbro"><i class="fa fa-twitter"></i> @monbro</a></small></h1>

  <p>
    Welcome to this example of <a href="https://github.com/monbro/meteor-last-software-release-package" target="_blank">test</a>!
  </p>
</template>
```

## Example access in Javascript

```
if (Meteor.isClient) {

    // the last deploy date is automatically set into this session variable
    console.log(Session.get('deployDate')); // will print the last deploy date in the console

    // this is optional and not required
    DeployDate.refresh(); // will refresh the deploy date by fetching it from the server
}
```