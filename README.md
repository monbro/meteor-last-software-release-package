meteor-breadcrumb-plugin
========================

This package will provide a easy way to add a breadcrumb with enough flexibility to your project.

# Try the [demo](http://meteor-breadcrumb-plugin-basic-example.meteor.com) which can be found on [github](https://github.com/monbro/meteor-breadcrumb-plugin/tree/master/examples/basic)

# Dependencies

* Meteor >1.0
* copleykj:livestamp

# Compatibility

* works out of the box with bootstrap3
* use the pre existing template or use your own

# Installation

Use `meteor add monbro:iron-router-breadcrumb` to add the package to your meteor app

# Usage

* You need to add two parameters to your iron routes which are `parent` and `title`

## Example for e.g. 'meteor.html'

```
<head>
  <title>basic</title>
</head>

<body>
  {{>home}}
</body>

<template name="home">
  <h1>Demo Page Headline<br><small>Last software release was {{deployDate}} by <a class="btn btn-default btn-xs" target="_blank" href="http://twitter.com/monbro"><i class="fa fa-twitter"></i> @monbro</a></small></h1>

  <p>
    Welcome to this example of <a href="">test</a>!
  </p>
</template>
```

## Example access of the breadcrumb in Javascript

```
if (Meteor.is_client) {
  console.log(DeployDate.deployDate()); // will print the last deploy date in the console
}
```