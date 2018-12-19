# Runbeck

Tool to automate job execution.

<img src="https://projects.task.gda.pl/uploads/-/system/project/avatar/135/rundeck_logo_white.png" width="150" height="150" title="Rundeck logo">

### Configuration

Edit ```cypress.json```, inserting:

* Rundeck username as the value of ```USERNAME``` and

* Rundeck password as the value of ```PASSWORD```.

Save the file.

### Jobs supported and examples

* theme_publish 

```shell
$ apikey=qdb-vtex version=v1.0.139 npm run theme
```

* stg-01-launch-apikey
```shell
$ apikey=autoline disk_size=20 npm run launch-staging
```
