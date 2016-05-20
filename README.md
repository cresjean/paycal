# README #

This is the codebase for MYOB coding test

### Prerequisite
* [You need to have Docker and docker-compose on your machine](https://docs.docker.com/mac/)
* You need to have port 80 free

### How do I get this set up? ###
* Git clone this project to your local machine
* Cd into the project and run docker-compose up -d
```
#!bash
cd myob-test
docker-compose up -d
```

* The App is running on your docker-machine IP(if on OSX) or your machine IP(Linux dist), to find out docker-machine IP
```
docker-machine ip default
```

### Assumptions
1. The input CSV must be the format of first name, last name, annual salary, super rate (%), payment start date, and it must not have header in the first row, for example:
```
David, Rudd,60050,9,01 March to 31 March
Jack, Ma,120000,10,01 March to 31 March
```

### Test
A sample https://s3-ap-southeast-2.amazonaws.com/myob-coding/pay.csv can be downloaded for test.
An EC2 is also serving the app at http://ec2-52-64-101-46.ap-southeast-2.compute.amazonaws.com
