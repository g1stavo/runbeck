# Runbeck

Tool to automate job execution.

<img src="https://projects.task.gda.pl/uploads/-/system/project/avatar/135/rundeck_logo_white.png" width="150" height="150" title="Rundeck logo">

### Configuration

Edit ```cypress.json```, inserting your Rundeck username in ```USERNAME``` and Rundeck password in, of course, ```PASSWORD```. Save the file.

### Jobs supported

* theme_publish 

```shell
$ apikey=x version=x npm run theme
```

* stg-01-launch-apikey
```shell
$ apikey=x disk_size=x npm run launch-staging
```
